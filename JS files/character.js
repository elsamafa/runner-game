'use strict';

function Character(canvas) {
  var self = this;

  self.x = 100;
  self.y = 100;
  self.size = 60;
  self.ctx = canvas.getContext('2d')
}

Character.prototype.render = function () {
  var self = this;
  self.ctx = canvas.getContext('2d');
  self.ctx.fillStyle = "black";
  self.ctx.fillRect(self.x, self.y, self.size, self.size);
  
}