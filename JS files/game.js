'use strict';

function Game(parent){
  var self = this;

  self.parentElement = parent;
  self.gameElement = null;
  self.onGameOverCallback = null;
  self.isGameOver = false;
  
  self._init();
  self._startLoop();
}

Game.prototype._init = function () {
  var self = this;

  self.gameElement = buildDom(`
    <main class = "game container">
      <header class="game__header">
        <div class="score">
          <span class="label"></span>
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

  self.counter = 1;
  var intervalID = setInterval(function () {
    self.counter++; 
  }, 500);
  intervalID;
}

//Loop
Game.prototype._startLoop = function () {
  var self = this;

  self.obstacles = [];
  self.character = new Character(self.canvasElement);
  self.audio = new Audio("./images/Cartoon Hop-SoundBible.com-553158131.mp3");
  //self.floor = new Floor(self.canvasElement);


  self.handleSpaceBarUpDown = function (e) {
    if(e.keyCode === 32){
      e.preventDefault();
      self.character.setImpulse(-10); 
      self.audio.play(); 

    } 
  }
  
  self.handleSpaceBarUp = function (evt) {
    if(e.keyCode===32){
      
      self.audio.pause();
      self.audio.currentTime = 0;
    } 
  }


  document.addEventListener('keydown', self.handleSpaceBarUpDown)
  document.addEventListener('keyup', self.handleSpaceBarUp)

  function loop() {
    self._clearAll();
    self._updateAll();
    self._renderAll();
    self._checkAllCollision();
    self._checkLimits();

    if (!self.isGameOver){
      requestAnimationFrame(loop)
    } else {
      self.onGameOverCallback();
    }
  }

  requestAnimationFrame(loop);
}

Game.prototype._spawnObstacle = function ()  {
  var self = this;

  if (Math.random() > 0.99) {
    var randomY = Math.random() * self.height * 0.5;
    self.obstacles.push(new Obstacles(self.canvasElement, randomY));
  }
}

Game.prototype._updateAll = function () {
  var self = this;

  self._spawnObstacle();
  self.obstacles.forEach(function(item) {
    item.update();
  });  
  
  self.character.update();

  self._updateUI();
}

Game.prototype._updateUI = function () {

  var self = this;
  self.scoreElement.innerText = self.counter;

}

Game.prototype._clearAll = function ()  {
  var self = this;

  self.ctx.clearRect(0, 0, self.width, self.height);
}

Game.prototype._renderAll = function ()  {
  var self = this;

  self.character.render();
  self.obstacles.forEach(function(item){
    item.render();
  })
  
 // self.floor.render();
}
Game.prototype._checkAllCollision = function() {
  var self = this;

  self.obstacles.forEach(function(item, idx) {
    if(self.character.checkCollision(item)) {
      self.isGameOver = true;
    }
  });
}

Game.prototype._checkLimits = function(){
  var self = this;

  if (self.character.y > 630){
    self.isGameOver = true;
  }
}

Game.prototype.onOver = function (callback) {
  var self = this;

  self.onGameOverCallback = callback;
}

Game.prototype.destroy = function () {
  var self = this;

  self.gameElement.remove();


}
