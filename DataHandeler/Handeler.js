var GatherData = "Start";

function setup() { 
  createCanvas(1200, 700);
} 

function draw() { 
  background(0);
  gatherdata();
  loopwinu();
}
function gatherdata() {
  if (GatherData == "Start") {
    LOADDATA();
  }
  if (GatherData == "Done") {
    ScreenScheck();
    SideMenuUpdate();
  }
}
function LOADDATA() {
  setTimeout(function() { GatherData = "Done"; },500);
}
