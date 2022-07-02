canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = document.getElementById("input1").value;
size = document.getElementById("input2").value;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_click);
function my_click(e){
    color = document.getElementById("input1").value;
    size = document.getElementById("input2").value;
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    circle(mouseX, mouseY);
}

function circle(mouseX, mouseY){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mouseX, mouseY, size, 0, 2*Math.PI);
    ctx.stroke();
}

function clearctx(){
    ctx.clearRect(0, 0, 800, 600);
}