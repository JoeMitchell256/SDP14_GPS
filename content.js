var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var n, pulsefunction, xMin, xMax, FourierWidth, FourierColor, SquareWidth, SquareColor;

function getInputValue(){

  pulsefunction = document.getElementById("pulse").value;
  n = document.getElementById("n").value;
  xMin = document.getElementById("xMin").value;
  xMax = document.getElementById("xMax").value;
  FourierWidth = document.getElementById("FourierWidth").value;
  FourierColor = document.getElementById("FourierColor").value;
  SquareWidth = document.getElementById("SquareWidth").value;
  SquareColor = document.getElementById("SquareColor").value;

  ctx.font = "12px serif";
  
  ctx.fillText("Pulse Function: " + pulsefunction,20,20);
  ctx.fillText("Pulse Function: " + pulsefunction,20,40);
  ctx.fillText("Pulse Function: " + pulsefunction,20,60);
  ctx.fillText("Pulse Function: " + pulsefunction,20,80);
  ctx.fillText("Pulse Function: " + pulsefunction,20,100);
  ctx.fillText("Pulse Function: " + pulsefunction,20,120);
  ctx.fillText("Pulse Function: " + pulsefunction,20,140);
  ctx.fillText("Pulse Function: " + pulsefunction,20,160);
  
}
