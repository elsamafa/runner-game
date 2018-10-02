'use strict'

function Obstacles(canvas) {
  var self = this;

  self.x = 702;
  self.y = 300;
  self.height = 30;
  self.width = 30;
  self.vel = 5;
  self.ctx = canvas.getContext('2d');

}

Obstacles.prototype.render = function () {
  var self = this;
  self.ctx.fillStyle = "black";
  self.ctx.fillRect(self.x, self.y, self.height, self.width);
  
}

Obstacles.prototype.update = function () {
  var self = this;

  self.x -= self.vel;
 
}

/*Obstacles.prototype.isDeath = function () {
  var self = this;

  return (self.x + self.size) < 0;
}*/