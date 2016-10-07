var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "white";
canvas.fillRect(425, 20, 450, 580);

canvas.fillStyle = "#CCCCFF";
canvas.fillRect(435, 35, 430, 550);

canvas.fillStyle = "#CCCCFF";
canvas.fillRect(435, 35, 430, 550);

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(585,580);
canvas.lineTo(435,580);
canvas.lineTo(435,60);
canvas.fill();

canvas.fillStyle = "green";
canvas.fillRect(435, 425, 430, 160);

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.arc(600, 150, 50, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
