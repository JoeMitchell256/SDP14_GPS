var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var longitude = 0, latitude = 0;


/**
Function clearCanvas - clear the content on the canvas
*/

function clearCanvas(){
  ctx.clearRect(0,0,1000,500);//Clear the canvas of content
  ctx.beginPath();//Clear all text / characters from the canvas
}

/**
Function drawBounds - clearly state the bounds for the longitude and latitude.
  This will help the audience visualize the position of the gps signal.
  Later the intent is to incorporate mapping and zooming capability (This will take several hours!)
*/

function drawBounds(){
  ctx.fillStyle="red"
  ctx.font="italic bold 35pt Tahoma"
  ctx.fillText("Lat:90",50,50);
  ctx.stroke();
}


/**
Function - getInputValue retrieves the gps positions from a state file!
  Say the state file is called state.txt. We wish to read line by line of the state file
  so that we can place the proper markers on the canvas of the map...
*/

function getInputValue(){
  this.clearCanvas();//Invoke the clear canvas function
  this.drawBounds();//Invoke the draw bounds function to clearly state the boundaries of the longitude/latitude values
}
