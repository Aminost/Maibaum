const canvas = document.querySelector('canvas');
const generateButton = document.querySelector('.generate-tree-button');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let curve;

function myText(){
    ctx.font="20px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText("Deine Augen funkeln wie zwei Sterne,", 50, 300);
    ctx.fillText("Dir ein Bussi geben, würde ich gerne.", 50 , 350);
    ctx.fillText("Du bist ein wunderbares Mädchen,", 50 ,400);
    ctx.fillText("ich wünsche mir, dass wir ein Brautpaar werden.",50,450 );
    ctx.fillText(" I mag di fei arg :)",1200,500 );
}

///////////////////////////////////////////////////////////

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {

    ctx.beginPath();
    ctx.save()
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    // ctx.shadowBlur = 5;
    // ctx.shadowColor = 'black';
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    //ctx.lineTo(0, -len)

    if (angle > 0) {
        ctx.bezierCurveTo(20, -len / 2, 20, -len / 2, 0, -len);
    } else {
        ctx.bezierCurveTo(20, -len / 2, -20, -len / 2, 0, -len);
    }

    ctx.stroke();

    if (len < 5) {
        ctx.beginPath();
        ctx.arc(0, -len, 10, 0, Math.PI / 2)
        ctx.fill();
        ctx.restore();
        return;
    }
    curve = (Math.random() * 10) + 10;
    drawTree(0, -len, len * 0.75, angle + curve, branchWidth * 0.6);
    drawTree(0, -len, len * 0.75, angle - curve, branchWidth * 0.6);

    ctx.restore()
}

drawTree(canvas.width / 2, canvas.height - 80, 120, 0, 25, 'gray', 'green')
myText()
////////////////////////////////////////////////

function  generateRandomTree(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let centerPointX= canvas.width/2;
    let len = Math.floor((Math.random()*20)+100);
    let angle= 0;
    let branchWidth = (Math.random()*70)+1;
    let color1 = 'rgb('+ Math.random()* 255 + ',' + Math.random()* 255 + ','
    + Math.random()* 255 + ')';
    let color2 = 'rgb('+ Math.random()* 255 + ',' + Math.random()* 255 + ','
        + Math.random()* 255 + ')';
    generateButton.style.background = color1;
    drawTree(centerPointX, canvas.height-80,len, angle, branchWidth,color1,color2)
    myText()
}

///////////////////////////////////////////////////////////
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 90 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '💗';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
generateButton.addEventListener('click',generateRandomTree)

////////////////////////////////////////////////////////
function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
        classIndex = document.getElementsByClassName("circTxt")[classIndex];

    var deg = 180 / txt.length,
        origin = -85;

    txt.forEach((ea) => {
        ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
        classIndex.innerHTML += ea;
        origin += deg;
    });
}

circularText("From Amine to Habibti Meike  ", 200, 0);



