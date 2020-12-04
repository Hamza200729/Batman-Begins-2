const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var maxDrops = 100;
var drops;
var umbrellaObj , umbrellaImg;
var drop;
var bolt1 , bolt2 , bolt3 , bolt4;
var drops = [];
var rand;

function preload(){
    umbrellaImg = loadAnimation("Walking Frame/walking_8.png" , "Walking Frame/walking_7.png" , "Walking Frame/walking_6.png" , "Walking Frame/walking_5.png" , "Walking Frame/walking_4.png" , "Walking Frame/walking_3.png" , "Walking Frame/walking_2.png" , "Walking Frame/walking_1.png")
    bolt1 = loadImage("thunderbolt/1.png ");
    bolt2 = loadImage("thunderbolt/2.png");
    bolt3 = loadImage("thunderbolt/3.png");
    bolt4 = loadImage("thunderbolt/4.png");

}

function setup(){
    createCanvas(400,600);
    
    umbrellaObj = createSprite(200,480 , 20 , 20);
    umbrellaObj.addAnimation( "umbrellaObj" , umbrellaImg);
    umbrellaObj.scale = 0.35;

    drop = new Drops(200 ,200 , 30);


    
}

function draw(){

    background(0);

    // for(var i = 0; i<maxDrops; i++){
    //   drops.push(new Drops(random(0,400) , random(0,400) , 30));
    // }

    // if (this.rain.position.y > height){
    //     Matter.Body.setPosition(this.rain , {x:random(0,400) , y:random(0,600)})
    // }
    
    if (frameCount % 170 === 0){

    var bolt = createSprite(200,105);
    bolt.scale = 0.3;
    
    var rand = Math.round(random(1,2));
    switch(rand){
        case 1: bolt.addImage(bolt1);
                break;
        case 2: bolt.addImage(bolt2);
                break;
        case 3: bolt.addImage(bolt3);
                break;
        case 4: bolt.addImage(bolt4);
                break;
        default: break;
    }
    

    bolt.lifetime = 40;

}

   
    drawSprites();
}   

