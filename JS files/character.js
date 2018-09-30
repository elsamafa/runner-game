'use strict';

function Character(canvas) {
  var self = this;

  self.x = 10;
  self.y = 270;
  self.height = 60;
  self.width =60;
  self.ctx = canvas.getContext('2d')
}

Character.prototype.render = function () {
  var self = this;
  self.ctx.fillStyle = "black";
  self.ctx.fillRect(self.x, self.y, self.height, self.width);
  
}


