centuries = "";
believer = "";
left_wrist_x = "";
left_wrist_y = "";
right_wrist_x = "";
right_wrist_y = "";

function preload(){
    centuries = loadSound("iron man - centuries.mp3");
    believer = loadSound("believer.mp3");
}

function setup(){
    canvas = createCanvas(500,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,500,300);
}

function modelLoaded(){
    console.log("PoseNet Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("right wrist x = " + right_wrist_x + ", y = " + right_wrist_y);
        console.log("left wrist x = " + left_wrist_x + ", y = " + left_wrist_y);
    }
}