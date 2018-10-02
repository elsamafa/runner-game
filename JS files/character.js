'use strict';

function Character(canvas) {
  var self = this;

  self.x = 10;
  self.y = 270;
  self.height = 60;
  self.width =60;
  self.acc = 0.1;
  self.vel = 30;
  self.impulse = 0;

  self.ctx = canvas.getContext('2d')
}

Character.prototype.render = function () {
  var self = this;
  /*self.ctx.fillStyle = "black";
  self.ctx.fillRect(self.x, self.y, self.height, self.width);*/
  self.img = new Image();
  self.img.src = "../images/flying_totoro(3).png";
  self.ctx.drawImage(self.img, 0, 0, 50,38,self.x,self.y,50,38);
}



Character.prototype.update = function () {
  var self = this;

  self.y += (self.vel * self.acc + self.impulse);

  if(self.y<200){
    self.setImpulse(5);
  } else if (self.y > 270){
    self.setImpulse(0);
    self.vel=0
  }

  // console.log(self.impulse)
  // if (self.y===270 && self.impulse===0) {
  //   self.y===270
  // }else if (self.impulse<0 && self.y <= 230){
  //   self.setImpulse(10);
  // }else if (self.impulse){
   
  

  // self.y += (self.vel * self.acc + self.impulse);

  // if (self.impulse > 0 && self.y >270) {
  //   self.impulse -= self.acc;
  // } else {
  //   self.impulse = 0;
  // }
}

Character.prototype.setImpulse = function (imp) {
  var self = this;

  self.impulse = imp;

}


Character.prototype.checkCollision = function (object) {
  var self = this;

  var crashRight = self.x + self.size > object.x;
  var crashBottom = self.y + self.size > object.y;
  var crashTop = self.y < 240;



  return false;
}


