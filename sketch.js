
function preload() {
    //load the images here
    
    lungTestImg=loadImage("LungTestImage.png")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    //create tom and jerry sprites here
   

    lungTest=createSprite(300,300);
    lungTest.addImage(lungTestImg)




}

function draw() {

    background("pink");
   
    
console.log(getFrameRate())
if(mousePressedOver(lungTestImg)){
text("game start",displayWidth/2,displayHeight/2)
}

    drawSprites();
}


