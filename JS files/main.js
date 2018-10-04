'use strict';

function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var mainContainerElement = document.querySelector('#main-container');

  // -- Splash
  var splashElement = null;

  var handleSplashSpace = function (e) {
    e.preventDefault()
    if(e.keyCode == 32){
      destroySplash();
      buildGame();
    }
  }

  function buildSplash() {
    splashElement = buildDom(`
      <main class="splash container">
        <h1 class="splash__title">Flappy Totoro</h1>
        <img class="totoro-game" src="./images/totoro2.gif" alt="Mini Totoro">
        <h2>Press Spacebar to begin</h2>
      </main>
    `)
    mainContainerElement.appendChild(splashElement);
    document.body.addEventListener('keyup',handleSplashSpace)
    
  }

  function destroySplash() {
    document.body.removeEventListener('keyup', handleSplashSpace);
    splashElement.remove();
  }

  // -- Game
  var game = null;
  var handleGameOver = function () {
    destroyGame();
    buildGameover(game.counter);
  };

  function buildGame() {
    game = new Game(mainContainerElement);
    game.onOver(handleGameOver);
}


  function destroyGame() {
    game.destroy();
  }

  // -- Gameover
  var gameoverElement = null;
  var gameoverButton = null;

  var handleGameoverClick = function () {
    destroyGameover();
    buildSplash();
  }

  function buildGameover(score) {
    gameoverElement = buildDom(`
      <main class="gameover container">
        <h1>Game over</h1>
        <p>Your score <span class="score"></span></p>
        <img class="small-totoro" src="./images/minitororo.gif" alt="Mini Totoros">
        <button>Restart</button>
      </main>
    `);
    mainContainerElement.appendChild(gameoverElement);

    gameoverButton = document.querySelector('button');
    gameoverButton.addEventListener('click', handleGameoverClick);

    var scoreElement = document.querySelector('.score');
    scoreElement.innerText = score;
  }

  function destroyGameover() {
    gameoverButton.removeEventListener('click', handleGameoverClick);
    gameoverElement.remove();
  }


  buildSplash();
}

document.addEventListener('DOMContentLoaded', main);