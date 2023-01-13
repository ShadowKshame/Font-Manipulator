function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
    fill('#FF0000');
    stroke('blue');
    document.getElementById("font-size").innerHTML = "font size of the text is-"+difference+ " px";
    textSize(difference);
     text("Mauro", 100,100);
}

function modelLoaded()
{
    console.log('PoseNet Is Initalized!');
}

difference = 0;
rightWristX = 0;
leftWristX = 0;
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + "rightWrist = "+ rightWristX + "difference =" + difference);

    }
}