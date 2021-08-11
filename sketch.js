var kid,kidImg;
var bg,bgImg;
var covid,covid2,covid3,covid4,covid5,covid6,obstaclesGroup;
var pandemic,obstaclesGroup;
var invisibleGround;
var mask,maskImg,masksGroup;
var sanitizer,sanitizerImg,sanitizersGroup;

function preload(){
    bgImg = loadAnimation("bg1.png","bg2.jpg");
    kidImg = loadImage("kid.gif");
    covid = loadImage("covid1.png");
    covid3 = loadImage("covid3.png");
    covid4 = loadImage("covid4.png");
    covid5 = loadImage("covid5.png");
    covid6 = loadImage("covid6.png");
    maskImg = loadImage("mask.png");
    sanitizerImg = loadImage("sanitizer.png");
}

function setup(){
    createCanvas(920,663);

    bg = createSprite(670,120,576,360);
    bg.addAnimation(bgImg);
    bg.scale = 3;

    invisibleGround = createSprite(460,600,920,1);
    invisibleGround.visible = false;

    kid = createSprite(90,280,1,1);
    kid.addImage(kidImg);
    kid.scale = 0.2;

    obstaclesGroup = createGroup();
    masksGroup = createGroup();
    sanitizersGroup = createGroup();
}

function draw(){

    if(keyDown("space")&&kid.y>100){
        kid.velocityY = -12;
    }

    kid.velocityY = kid.velocityY + 0.8;

    spawnTrees();
    spawnAnimals();
    spawnButterflies();

    kid.collide(invisibleGround);

    drawSprites();
}

function spawnTrees(){
    if (frameCount % 200 === 0){
      var obstacle = createSprite(1200,310,1,1);
      obstacle.velocityX = -5
      
       //generate random obstacles
       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: obstacle.addImage(covid);
         obstacle.y = 310;
         obstacle.scale = 0.15;
                 break;
        case 2: obstacle.addImage(covid3);
         obstacle.scale = 0.3;
                 break;
        case 3: obstacle.addImage(covid4);
         obstacle.scale = 0.3;
                 break;
        case 4: obstacle.addImage(covid5);
         obstacle.scale = 0.3;
                 break;
        case 5: obstacle.addImage(covid6);
         obstacle.scale = 0.3;
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       
       obstacle.lifetime = 300;
      
      //add each obstacle to the group
       obstaclesGroup.add(obstacle);
    }
   }

   function spawnAnimals(){
    if (frameCount % 160 === 0){
      var mask = createSprite(1200,310,1,1);
      mask.velocityX = Math.round(random(-10,-6));
      mask.addImage(maskImg);
      
       //assign scale and lifetime to the obstacle           
       
       mask.lifetime = 300;
      
      //add each obstacle to the group
       masksGroup.add(mask);
    }
   }

   function spawnButterflies(){
    if (frameCount % 100 === 0){
      var sanitizer = createSprite(1200,random(80,130),1,1);
      sanitizer.velocityX = -5
      sanitizer.addImage(sanitizerImg)
      
       //assign scale and lifetime to the obstacle           
       
       sanitizer.lifetime = 300;
      
      //add each obstacle to the group
       sanitizersGroup.add(sanitizer);
    }
   }