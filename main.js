status = "";

function preload(){

}

function setup(){
canvas = createCanvas(350,350);
canvas.position(535,300);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,350,350)
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object(s)"
    input = document.getElementById("box").value
}

function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
    video.loop()
    video.speed(1);
    video.volume(0);
}