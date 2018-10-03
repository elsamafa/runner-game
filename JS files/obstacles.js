'use strict'

function Obstacles(canvas, y) {
  var self = this;

  self.x = 0;
  self.y = y;
  self.height = 48;
  self.width = 125;
  self.vel = 5;
  self.ctx = canvas.getContext('2d');

  self.img = document.createElement('img');
  self.img.src = "./images/catbus2.gif";

}

Obstacles.prototype.render = function () {
  var self = this;
  //self.ctx.fillStyle = "black";
  //self.ctx.fillRect(self.x, self.y, self.height, self.width);
  self.ctx.drawImage(self.img,self.x,self.y, self.width,self.height);

  
}

Obstacles.prototype.update = function () {
  var self = this;

  self.x += self.vel;
 
}

/*Obstacles.prototype.isDeath = function () {
  var self = this;

  return (self.x + self.size) < 0;
}*/