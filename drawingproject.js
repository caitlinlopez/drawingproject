var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "white";
canvas.fillRect(425, 20, 450, 580);

canvas.fillStyle = "#CCCCFF";
canvas.fillRect(435, 35, 430, 550);

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(585,580);
canvas.lineTo(435,580);
canvas.lineTo(435,60);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.ellipse(779, 425, 85, 75, 165 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.ellipse(650, 400, 65, 85, 170 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

canvas.fillStyle = "green";
canvas.fillRect(435, 425, 430, 160);

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.ellipse(600, 150, 22, 80, 555559 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.ellipse(600, 150, 38, 50, 555560 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

function button() {
  canvas.fillStyle = "white";
  canvas.fillRect(425, 20, 450, 580);

  canvas.fillStyle = "black";
  canvas.fillRect(435, 35, 430, 550);

  canvas.beginPath();
  canvas.fillStyle = "green";
  canvas.moveTo(585,580);
  canvas.lineTo(435,580);
  canvas.lineTo(435,60);
  canvas.fill();

  canvas.beginPath();
  canvas.fillStyle = "green";
  canvas.ellipse(779, 425, 85, 75, 165 * Math.PI/180, 0, 2 * Math.PI);
  canvas.fill();

  canvas.beginPath();
  canvas.fillStyle = "green";
  canvas.ellipse(650, 400, 65, 85, 170 * Math.PI/180, 0, 2 * Math.PI);
  canvas.fill();

  canvas.fillStyle = "green";
  canvas.fillRect(435, 425, 430, 160);

  canvas.beginPath();
  canvas.fillStyle = "gray";
  canvas.ellipse(600, 150, 22, 80, 555559 * Math.PI/180, 0, 2 * Math.PI);
  canvas.fill();

  canvas.beginPath();
  canvas.fillStyle = "gray";
  canvas.ellipse(600, 150, 38, 50, 555560 * Math.PI/180, 0, 2 * Math.PI);
  canvas.fill();
}
