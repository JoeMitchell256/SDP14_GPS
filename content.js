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
Function findPulseInterval - Find the proper interval for the vertical gridlines
*/

function findPulseInterval(){//No need for any parameters
  var xmin = parseInt(xMin);//These should be integer values
  var xmax = parseInt(xMax);//Calibration will be needed later on
  
  var numPI_Intervals = xmax - xmin; //This should be the number of pi intervals
  var xRange = xend - xstart; //This is the total number of pixels along the x-axis
  var onePI_Interval = xRange / numPI_Intervals;
  
  //Now we should have the number of pixels for one PI interval
  
  var pulses = pulsefunction.split(" ");
  var numPulses = pulses.length;
  //ctx.fillText("Number of pulses: " + numPulses, 700, 250); //Should display the proper pulse interval
  var onePulseInterval = onePI_Interval / numPulses;
  
  //Now we should have the proper pulse interval
  
  return onePulseInterval;
}

/*
Function drawYscale - draw the y scale of the graph using the max and min values
*/

function drawYscale(){
  var max = -Infinity;
  var i = 0;
  for(i = 0; i < pulsearray.length; i++){
    if(Math.abs(parseInt(pulsearray[i])) > max){
      max = Math.abs(parseInt(pulsearray[i])); //Determine the maximum y value in either the positive or negative direction
    }
  }
  //ctx.fillText("Max: "+max,20,20);
  // Determine the slope for the line that will be used to plot the y scale
  /*
  var y = 0;
  for(i = -max; i < max+1; i++){
    if(i >= 0){//This shift should be modulated based on the x limits
      ctx.fillText(i, xpos - 30, y);//Further shift the y scale off of the y axis for visibility
    }else{
      ctx.fillText(i, xpos - 50, y);//Further shift the y scale off of the y axis for visibility
    }
  }
  */
  ctx.stroke();
}


/**
Function drawYaxis - draw the y axis for the graph of the function
  All y axis content should reside in this seperate function
*/

function drawYaxis(){
  ctx.moveTo(xpos+0.5,ytop);
  ctx.lineTo(xpos+0.5,yend);
  
  var pulseInterval = this.findPulseInterval();
  
  //ctx.fillText("Pulse Interval: " + pulseInterval, 200, 200); //Should display the proper pulse interval
  
  this.drawYscale();
  
  //Great! Now that we have the pulse interval, we can place all of the vertical gridlines for the graph!
  var i = xpos + pulseInterval + 0.5;//Need to "straddle" the pixels. https://stackoverflow.com/questions/8696631/canvas-drawings-like-lines-are-blurry
  while (i <= xend) {//This should place all of the vertical gridlines
    ctx.moveTo(i,ytop);
    ctx.lineTo(i,yend);
    i += pulseInterval;
  }
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
  
  ctx.moveTo(xstart-50,ycenter);
  ctx.lineTo(xend,ycenter); 
  
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


