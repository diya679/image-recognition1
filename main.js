//https://teachablemachine.withgoogle.com/models/KWs2VI8G1/
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide()
classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/KWs2VI8G1/',modelLoaded);
}

function modelLoaded(){
    console.log('Model Loaded!')
}

function draw(){
    image(video,0,0,640,480);
    clasifier.classify(video,gotResult);
}
function gotResults(error,results){
    if (error){
        console.error(error);

    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[1].confidence.toFixed(3);
        
    }}