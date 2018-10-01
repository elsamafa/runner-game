'use strict'

function Floor (canvas) {
  var self = this;

  self.x = 0;
  self.y = 270;
  self.width = 600;
  self.height = 300; 
  self.ctx = canvas.getContext('2d');
}

Floor.prototype.render = function () {
  var self = this;

  self.ctx.fillStyle = "green";
  self.ctx.fillRect(self.x, self.y, self.height, self.width);

} 

