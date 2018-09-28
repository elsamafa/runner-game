'use strict';

function character(canvas) {
  var self = this;

  self.x = 2;
  self.y = 384;
  self.size = 60;
  self.ctx = canvas.getContext('2d')
}
character(canvas)