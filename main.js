music="";
music2="";
function preload(){
    music=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(560,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,560,500);
}