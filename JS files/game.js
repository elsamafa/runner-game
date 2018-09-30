'use strict';

function Game(parent){
  var self = this;

  self.character = null;

  self.parentElement = parent;
  self.gameElement = null;
  
  self._init();
  self._startLoop();
}

Game.prototype._init = function () {
  var self = this;

  self.gameElement = buildDom(`
    <main class = "game container">
      <header class="game__header">
        <div class="score">
          <span class="label">Score:</span>
        </div>
      </header>
      <div class="game__canvas">
        <canvas class="canvas"></canvas>
      </div>
    </main>
  `)
  self.parentElement.appendChild(self.gameElement);

  self.canvasParentElement = document.querySelector('.game__canvas');
  self.canvasElement = document.querySelector('.canvas');

  self.scoreElement = self.gameElement.querySelector('.score .label');
  

  self.width = self.canvasParentElement.clientWidth;
  self.height = self.canvasParentElement.clientHeight;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);

  self.ctx = self.canvasElement.getContext('2d');

  self.buildScore();
}

//Timer
Game.prototype.buildScore = function (){
  var self = this;

  self.counter = 0;
  var intervalID = setInterval(function () {
    self.counter++;
    return console.log(self.counter); 
 
  }, 1000);
  intervalID;
}

//Loop
Game.prototype._startLoop = function () {
  var self = this;

  self.character = new Character(self.canvasElement);
  self.obstacle = new Obstacles(self.canvasElement);
  function loop() {
    self._renderAll();
  }

  requestAnimationFrame(loop);
}

Game.prototype._renderAll = function ()  {
  var self = this;

  self.character.render();
  self.obstacle.render();
}