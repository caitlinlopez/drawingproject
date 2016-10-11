var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

//poster

canvas.fillStyle = "white";
canvas.fillRect(425, 15, 450, 580);

canvas.fillStyle = "#CCCCFF";
canvas.fillRect(435, 30, 430, 550);

//trees

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(585,580);
canvas.lineTo(435,580);
canvas.lineTo(435,60);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.ellipse(779, 420, 85, 75, 165 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.ellipse(650, 395, 65, 85, 170 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

canvas.fillStyle = "green";
canvas.fillRect(435, 420, 430, 160);

//ufo

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.ellipse(600, 150, 22, 80, 555559 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.ellipse(600, 150, 38, 50, 555560 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

//mulder's badge

canvas.fillStyle = "#8b5a2b";
canvas.fillRect(70, 235, 280, 160);

canvas.fillStyle = "#8b5a2b";
canvas.fillRect(70, 397, 280, 160);

canvas.fillStyle = "#fefefe";
canvas.fillRect(75, 240, 270, 150);

canvas.fillStyle = "#fefefe";
canvas.fillRect(75, 402, 165, 150);

canvas.beginPath();
canvas.fillStyle = "#e5c100";
canvas.ellipse(295, 480, 45, 65, 0 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

//scully's badge

canvas.fillStyle = "#8b5a2b";
canvas.fillRect(950, 35, 280, 160);

canvas.fillStyle = "#8b5a2b";
canvas.fillRect(950, 197, 280, 160);

canvas.fillStyle = "#fefefe";
canvas.fillRect(955, 40, 270, 150);

canvas.fillStyle = "#fefefe";
canvas.fillRect(955, 202, 165, 150);

canvas.beginPath();
canvas.fillStyle = "#e5c100";
canvas.ellipse(1175, 280, 45, 65, 0 * Math.PI/180, 0, 2 * Math.PI);
canvas.fill();

//flashlights

canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.arc(295, 125, 40, 0, 2*Math.PI);
canvas.fill();

canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.arc(1005, 475, 40, 0, 2*Math.PI);
canvas.fill();

canvas.fillStyle = "gray";
canvas.fillRect(90, 100, 165, 50);

canvas.fillStyle = "gray";
canvas.fillRect(1050, 450, 165, 50);

canvas.fillStyle = "gray";
canvas.beginPath();
canvas.moveTo(210,125);
canvas.lineTo(310,70);
canvas.lineTo(310,180);
canvas.fill();

canvas.fillStyle = "gray";
canvas.beginPath();
canvas.moveTo(1095,475);
canvas.lineTo(995,420);
canvas.lineTo(995,530);
canvas.fill();

//click ufo to change poster color

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
