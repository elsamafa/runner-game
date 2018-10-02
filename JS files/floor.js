'use strict'

function Floor (canvas) {
  var self = this;

  self.x = 0;
  self.y = 330;
  self.width = 300;
  self.height = 720; 
  self.ctx = canvas.getContext('2d');
}

Floor.prototype.render = function () {
  var self = this;

  self.ctx.fillStyle = "green";
  self.ctx.fillRect(self.x, self.y, self.height, self.width);

} 

