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
  ctx.fillText("N: " + n,20,40);
  ctx.fillText("xMin: " + xMin,20,60);
  ctx.fillText("xMax: " + xMax,20,80);
  ctx.fillText("FourierWidth: " + FourierWidth,20,100);
  ctx.fillText("FourierColor: " + FourierColor,20,120);
  ctx.fillText("SquareColor: " + SquareColor,20,140);
  ctx.fillText("SquareWidth: " + SquareWidth,20,160);
  
}
