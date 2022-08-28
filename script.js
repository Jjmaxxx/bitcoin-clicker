 //classes
class Player{
  constructor(balance,name){
    this.balance = balance;
    this.name = name;
  }
  displayBalance(){
    //push+pop isolates object so effects only affect things inside push and pop(p5 only)
    push();
    fill(255);
    textStyle(BOLD);
    textSize(30);
    text(this.balance - 1000000,18,35);
    pop();
  }  
  increaseMoney(inc){
    this.balance += inc;
  }
  getInput(){
    if(keyIsDown(32)){
      this.increaseMoney(10000);
    }
  }
}

class Button{
  constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
  }
  //temp onclick function
  onButtClick(){
    if(mouseIsPressed && (mouseX > this.x - this.size/2 && mouseX < this.x + this.size/2) && (mouseY > this.y - this.size/2 && mouseY < this.y + this.size/2 )){
      let plus = new plusOne(this.x + random(-25,25),this.y,"+" + buttonMoney);
      plusOnes.push(plus);
      player.increaseMoney(buttonMoney);
      mouseIsPressed = false;
    }
  }
    
    

  update(){
    fill(255);
    image(bitcoin,this.x ,this.y ,this.size,this.size)
  }
}

class mouseObject{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vX = random(-2,2);
    this.vY = random(-2,2);
    clickObjects.push(this);
  }
  update(){
    if(time%2000 > 0 && time%2000 < 23){
      player.balance += buttonMoney;
      var plus = new plusOne(this.x + random(-5,5) * 5,this.y, "+" + buttonMoney);
      plusOnes.push(plus);
    }
    fill(255);
    if(this.x >= windowWidth || this.x <= 0){
      this.vX *= -1;
    }
    if(this.y >= windowHeight || this.y <= 0){
      this.vY *= -1;
    }
    this.x += this.vX;
    this.y += this.vY;
    image(mouseIcon,this.x,this.y,20,20)
   }

  
}
class plusOne {
  constructor(x,y,digit){
    this.x = x;
    this.y = y;
    this.digit = digit;
    this.speed = random(.8,5);
  }
  update(){
    text(this.digit,this.x,this.y);
    this.y -= this.speed;
  }
}
class bitcoinFarm {
  constructor(x,y){
    this.x = x;
    this.y = y;
    clickObjects.push(this);
  }
  update(){
    image(bitcoinFarmSprite,this.x,this.y,50,50)
    if(time%1800 > 0 && time%1800 < 23){
      player.balance += buttonMoney * 2;
      var plus = new plusOne(this.x + random(-5,5) * 5,this.y, "+" + buttonMoney * 2);
      plusOnes.push(plus);
    }
  }
}

class WindowsXP {
  constructor(x,y){
    this.x = x;
    this.y = y;
    clickObjects.push(this);
  }
  update(){
    image(windowsXPIcon,this.x,this.y,50,50)
    if(time%1800 > 0 && time%1800 < 23){
      player.balance += buttonMoney * 3;
      var plus = new plusOne(this.x + random(-5,5) * 5,this.y, "+" + buttonMoney * 3);
      plusOnes.push(plus);
    }
  }
}

class Elon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    clickObjects.push(this);
  }
  update(){
    image(muskIcon,this.x,this.y,50,50)
    if(time%500 > 0 && time%500 < 23){
      player.balance += buttonMoney * 4;
      var plus = new plusOne(this.x + random(-5,5) * 5,this.y, "+" + buttonMoney * 4);
      plusOnes.push(plus);
    }
  }
}
class BillGates{
  constructor(x,y){
    this.x = x;
    this.y = y;
    clickObjects.push(this);
  }
  update(){
    image(gatesIcon,this.x,this.y,50,50)
    if(time%300 > 0 && time%300 < 23){
      player.balance += buttonMoney * 5;
      var plus = new plusOne(this.x + random(-5,5) * 5,this.y, "+" + buttonMoney * 5);
      plusOnes.push(plus);
    }
  }
}
class Apple{
  constructor(x,y){
    this.x = x;
    this.y = y;
    clickObjects.push(this);
  }
  update(){
    image(appleIcon,this.x,this.y,50,50)
    if(time%100 > 0 && time%100 < 23){
      player.balance += buttonMoney * 7;
      var plus = new plusOne(this.x + random(-5,5) * 5,this.y, "+" + buttonMoney * 7);
      plusOnes.push(plus);
    }
  }
}

class floatingMoney {
  constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.vX = random(-3,3);
    this.vY = random(-3,3);
    clickObjects.push(this);
  }
  update(){
    image(moneyIcon,this.x,this.y,50,50);
//how do delete after they leave screen
    this.x += this.vX;
    this.y += this.vY;
    if(mouseIsPressed && (mouseX > this.x - this.size/2 && mouseX < this.x + this.size/2) && (mouseY > this.y - this.size/2 && mouseY < this.y + this.size/2 )){
      player.increaseMoney(50);
      mouseIsPressed = false;
      var plus = new plusOne(this.x + random(-5,5) * 5,this.y, "+50");
      plusOnes.push(plus);
    }
  }
}
class UIBar {

}
class UISquare {
  constructor(x,y,w,h,cost,image,adds,objID){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cost = cost;
    this.image = image;
    this.adds = adds;
    this.objID = objID
  }
    listenForClick(){
    if(dist(mouseX,mouseY,this.x,this.y)< this.w && mouseIsPressed){
      switch(this.objID){
        case 0:
          createMouseObject();
          break;

        case 1:
          createBitcoinFarm();
          break;

        case 2:
          createWindowsXP();
          break;

        case 3:
          createMusk();
          break;
        
        case 4:
          createGates();
          break;

        case 5:
          createApples();
          break;          
      }
    }

  }
   renderSquare(){
     push();
     fill(255);
     rect(this.x,this.y,this.w,this.h);
     textSize(11);
     fill(0);
     text("-" + this.cost,this.x-this.w/2 + 2,this.y+this.h/2 - 3);
     image(this.image,this.x,this.y,this.w/2,this.h/2);
     //text("+" + this.adds,this.x+this.w/2 - 13,this.y-this.h/2 + 10);
     pop();
   }
  update(){
    this.listenForClick();
    this.renderSquare();
  }
}
//end of classes




var player,testButton;
let mouse1;
let mouseUIBox,farmUIBox;
let clickObjects = [];
let plusOnes = [];
let uiBoxes = [];
let buttonMoney;
let mouseCost;
function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  buttonMoney = 1;
  mouseCost = 50;
  //create objects
  player = new Player(0,"Steve Blobs")
  testButton = new Button(windowWidth/2,windowHeight/2,100);
  mouseUIBox = new UISquare(100,windowHeight - 50,50,50,50,mouseIcon,buttonMoney,0);
  farmUIBox = new UISquare(150,windowHeight - 50,50,50,200,bitcoinFarmSprite,5,1);
  xpUIBox = new UISquare(200, windowHeight - 50,50,50,500,windowsXPIcon,10,2);
  muskBox = new UISquare(250, windowHeight - 50, 50,50,2000,muskIcon,3,3);
  gatesBox = new UISquare(300, windowHeight - 50, 50,50,3500,gatesIcon,3,4);
  applesBox = new UISquare(350, windowHeight - 50, 50,50,30000,appleIcon,3,5);
  uiBoxes.push(farmUIBox);
  uiBoxes.push(mouseUIBox);
  uiBoxes.push(xpUIBox);
  uiBoxes.push(muskBox);
  uiBoxes.push(gatesBox);
  uiBoxes.push(applesBox);  


  // mouse1 = new mouseObject(250,300);
  // clickObjects.push(mouse1);
  x = 4;
}
function updateUIBoxes(){
  for(let i=0; i<uiBoxes.length; i++){
    uiBoxes[i].update();
  }
}
let bitcoin;
let mouseIcon;
let bitcoinFarmSprite;
let moneyIcon;
let windowsXPIcon;
let win;
let muskIcon;
let gatesIcon;
let appleIcon;
function preload(){
  bitcoin = loadImage("bitcoin.png");
  mouseIcon = loadImage("mouse_icon.png");
  bitcoinFarmSprite = loadImage("Gtx_1080.png");
  moneyIcon = loadImage("money.png");
  windowsXPIcon = loadImage("windowsXP.png");
  win = loadImage("win.png");
  muskIcon = loadImage("Musk.png");
  gatesIcon = loadImage("billgates.png");
  appleIcon = loadImage("apple.png");
}
function updateGameObjects(){
  for(let i=0; i<clickObjects.length; i++){
    clickObjects[i].update();
  }
}
//this caused error 500 when called figure it out
function updatePlus(){
  for(let i=0; i<plusOnes.length; i++){
    if(plusOnes[i].y < 0 ){
      plusOnes[i].pop;
    }
    else{
    plusOnes[i].update();      
    }
  }  
}
let mouseCounter = 0;
let numberOfMouse = 0;
function createMouseObject(){
  if(player.balance >= mouseCost){
    new mouseObject(windowWidth/2,windowHeight/2);
    player.balance -= mouseCost;
    mouseCounter += 1;
    mouseCost += 10;
    numberOfMouse += 1;
    if(mouseCounter >= 20){
      buttonMoney++;
      mouseCounter = 0;
    }

  }
}
let numberOfFarms = 0;
function createBitcoinFarm(){
  if(player.balance >= 200){
    new bitcoinFarm(random(windowWidth),random(windowHeight));
    numberOfFarms += 1; 
    player.balance -= 200;
  }
}
let numberOfComputers = 0;
function createWindowsXP(){
  if(player.balance >= 500){
    new WindowsXP(random(windowWidth),random(windowHeight)) 
    player.balance -= 500;
    numberOfComputers += 1;
  }
}
let numberOfElon = 0;
function createMusk(){
  if(player.balance >= 2000){
    new Elon(random(windowWidth),random(windowHeight)) 
    player.balance -= 2000;
    numberOfElon += 1;
  }
}
let numberOfGates = 0;
function createGates(){
  if(player.balance >= 3500){
    new BillGates(random(windowWidth),random(windowHeight)) 
    player.balance -= 3500;
    numberOfGates += 1;
  }
}
let numberOfApples = 0;
function createApples(){
  if(player.balance >= 30000){
    new Apple(random(windowWidth),random(windowHeight))
    player.balance -= 30000;
    numberOfApples += 1;
  }
}
function createMoneyIcon(){
  if(time%30000 > 0 && time%30000 < 23){
     new floatingMoney(windowWidth/2,windowHeight/2,50)
    }
}
function getUserInput(){
  key = keyIsDown(49);
  if(key){
    createMouseObject();
    key = false;
  }
  key = keyIsDown(50);
  if(key){
    createBitcoinFarm();
    key = false;
  }
  key = keyIsDown(51);
  if(key){
    createWindowsXP();
    key = false;
  }
  key = keyIsDown(52);
  if(key){
    createMusk();
    key = false;
  }
  key = keyIsDown(53);
  if(key){
    createGates();
    key = false;
  }  
  key = keyIsDown(54);
  if(key){
    createApples();
    key = false;
  }    
}

let time;
function draw(){
  background(100); 
  time = Math.floor(millis());
  if(time <= 15000){
  text("Every 20 Mice and your total income will increase!", windowWidth/3,windowHeight/15);
  text("Each mouse created will cost 10 more for the next created", windowWidth/3,windowHeight/8.5);
  push();
  textSize(13);
  textStyle(BOLD);
   text("Have Fun Getting Out Of $1,000,000 Debt!", windowWidth/2  - 240,windowHeight/2.8);
  pop();
  }
  else{
  push();
  fill(100);
  pop();
  }

  if(player.balance < 1000000){
    //gameplay loop
    text(time,0,0);
    createMoneyIcon();
    player.getInput();
    testButton.onButtClick();
    updateGameObjects();
    getUserInput();
    for(let i=0; i<plusOnes.length; i++){
    if(plusOnes[i].y < 0 ){
      plusOnes[i].pop;
    }
    else{
    plusOnes[i].update();      
    }
  }
    // mouse1.update();
    testButton.update();
    player.displayBalance();
    text(numberOfMouse + " Mice",20,50);
    text(numberOfFarms + " Farms",20,65);
    text(numberOfComputers + " Windows XP",20,80);
    text(numberOfElon + " Elon Musks",20,95);
    text(numberOfGates + " Bill Gates",20,110);
    text(numberOfApples + " Apple Companies",20,125);    
    updateUIBoxes();
  }
  else{
    image(win,windowWidth/2,windowHeight/2,windowWidth,windowHeight)

  }
  
}


