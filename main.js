status = "";
objects = [];

function preload(){

}

function setup(){
canvas = createCanvas(350,350);
canvas.position(535,300);
video = createCapture(VIDEO);
video.hide();
}


function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object(s)"
    input = document.getElementById("box").value
}

function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
}

function draw(){
    image(video,0,0,350,350);
    if(status != ""){
        objectDetector.detect(video,gotResults);
        for(i = 0; i < objects.length;i++){
          
            document.getElementById("status").innerHTML = "Status : Detected Object(s)"; 

            if(input == objects[i].label){

                document.getElementById("objects-found").innerHTML = "The object(s) is found";

                r = random(255);
                b = random(255);
                g = random(255);
                
                percent = floor(objects[i].confidence * 100);
                noFill();
                stroke(r,b,g);
                text(objects[i].label + " " + percent + "%",objects[i].x + 15,objects[i].y + 15);
                rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
                
            }
        }
    }
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;

    }    
    }
