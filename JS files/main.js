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
    if(e.keyCode == 32){
      destroySplash();
      buildGame();
    }
  }

  function buildSplash() {
    splashElement = buildDom(`
      <main class="splash container">
        <h1 class="splash__title">Runner Game</h1>
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
  var gameButton=null;
  var handleGameOver = function () {
    destroyGame();
    buildGameover();
  };

  function buildGame() {
    game = buildDom(`
    <main class="splash container">
      <h1 class="splash__title">Game Is On</h1>
      <button>End game</button>
    </main>
  `);
  mainContainerElement.appendChild(game);

  gameButton = document.querySelector('button');
  gameButton.addEventListener('click', handleGameOver);
}


  function destroyGame() {
    gameButton.removeEventListener('click', handleGameOver);
    game.remove();
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
        <p>Your score: <span class="score"></span></p>
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