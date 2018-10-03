'use strict';

function Character(canvas) {
  var self = this;

  self.ctx = canvas.getContext('2d');

  self.x = 300;
  self.y = 100;
  self.height = 98;
  self.width = 82;
  self.acc = 0.1;
  self.vel = 30;
  self.impulse = 0;

  self.img = document.createElement('img');
  self.img.src = "./images/my_totoro_vector_by_dead_on_demand-d7449mc.png";
}

Character.prototype.render = function () {
  var self = this;
  /*self.ctx.fillStyle = "black";
  self.ctx.fillRect(self.x, self.y, self.height, self.width);*/
  self.ctx.drawImage(self.img,self.x,self.y, self.width,self.height);
}



Character.prototype.update = function () {
  var self = this;

  self.y += (self.vel * self.acc + self.impulse);

  if(self.y<150){
    self.setImpulse(3);
  }/* else if (self.y > 250){
    self.setImpulse(0);
    self.vel=0
  }*/

}

Character.prototype.setImpulse = function (imp) {
  var self = this;

  self.impulse = imp;

}


Character.prototype.checkCollision = function (obstacle) {
  var self = this;
  
  var crashRight = self.x + self.width > obstacle.x;
  var crashBottom = self.y + self.height > obstacle.y;
  var crashTop = self.y < obstacle.y + obstacle.height;
  var crashLeft = self.x < obstacle.x + obstacle.width;

  if (crashRight && crashBottom && crashLeft & crashTop) {
    return true;
  }else {
    return false;
  }
}

Character.prototype.checkYLimits = function (limits) {
  var self = this;

  self.y >270;
}

