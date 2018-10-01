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
  self.ctx.fillStyle = "black";
  self.ctx.fillRect(self.x, self.y, self.height, self.width);
  
}

Character.prototype.update = function () {
  var self = this;



  self.y += (self.vel * self.acc + self.impulse);

  if (self.impulse > 0 ) {
    self.impulse -= self.acc;
  } else {
    self.impulse = 0;
  }
}

Character.prototype.setImpulse = function (imp) {
  var self = this;

  self.impulse = imp;
}


Character.prototype.checkCollision = function (object) {
  var self = this;

  var crashRight = self.x + self.size > object.x;
  var crashBottom = self.y + self.size > object.y;
  var crashTop = self.y < object.y + object.size;
  var crashLeft = self.x < object.x + object.size;

  if (crashLeft && crashRight && crashTop && crashBottom) {
    return true;
  }

  return false;
}

