var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var n, pulsefunction, xMin, xMax, FourierWidth, FourierColor, SquareWidth, SquareColor;
var xpos = 0;

//The following variables are strictly set to define the canvas graph robustly
var ycenter = 250;
var ytop = 50;
var yend = 450;

var xstart = 100;
var xend = 1300;
//The above variables are for testing purposes for the moment as I draw the x-axis

/**
Function clearCanvas - clear the content on the canvas
*/

function clearCanvas(){
  ctx.clearRect(0,0,1420,500);
  ctx.beginPath();
}


/**
Function drawYaxis - draw the y axis for the graph of the function
  All y axis content should reside in this seperate function
*/

function drawYaxis(){
  ctx.moveTo(xpos,ytop);
  ctx.lineTo(xpos,yend);
  
  ctx.stroke();
}


/**
Function findXpos - find the proper position for the y-axis given the x limits
*/

function findXpos(min,max){
  var xpos = xstart;
  var min = parseFloat(xMin);
  var max = parseFloat(xMax);
  
  if(min > 0 && max > 0){
    xpos = xstart;
  }else if(min < 0 && max < 0){
    xpos = xend;
  }else{
    xpos = xstart;
  }
  return xpos;
}



/**
Function - drawXaxis will draw all content related to the x axis creation for the graph
*/

function drawXaxis(){
  //Setup the canvas drawing parameters (These are extremely important!)
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
  ctx.font = "30px serif";
  
  ctx.fillText("n: " + n, 1000, 20); //Display value of n at the top right corner of page
  
  xpos = this.findXpos(xMin,xMax);
  
  ctx.fillText("xpos: " + xpos, 30, 20);
  
  ctx.stroke();//This will draw all content on the context to the canvas
}



/**
Function - getInputValue retrieves the input from the text boxes at the bottom of the website
  These variables will no doubt need to be reformated later on and that will be mentioned in
  a seperate comment
*/

function getInputValue(){

  pulsefunction = document.getElementById("pulse").value;
  n = document.getElementById("n").value;
  xMin = document.getElementById("xMin").value;
  xMax = document.getElementById("xMax").value;
  FourierWidth = document.getElementById("FourierWidth").value;
  FourierColor = document.getElementById("FourierColor").value;
  SquareWidth = document.getElementById("SquareWidth").value;
  SquareColor = document.getElementById("SquareColor").value;

  this.clearCanvas();
  this.drawXaxis();
  this.drawYaxis();
}



