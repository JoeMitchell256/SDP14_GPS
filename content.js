var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var longitude = 0, latitude = 0;


/**
Function clearCanvas - clear the content on the canvas
*/

function clearCanvas(){
  ctx.clearRect(0,0,1000,500);
  ctx.beginPath();
}


/**
Function - getInputValue retrieves the gps positions from a state file!
  Say the state file is called state.txt. We wish to read line by line of the state file
  so that we can place the proper markers on the canvas of the map...
*/

function getInputValue(){
  this.clearCanvas();
  
}
