# Runner

## Description
Brief description of the project

This is a simple runner game. The player has to make the character dodge the (objects) that come to him/her by jumping with the spacebar. In case of touching one of the (objects), the game is over and the score is the number of seconds the game has lasted. 

## MVP (DOM - CANVAS)
MVP definition, deliverables.

CANVAS - Since there are no levels, the MVP will have three basic screens: the splash screen, the game screen with basic geometric shapes, where the player avoid them by jumping and a game over screen with the final score would appear.

## Backlog

- SVG Pictures (background, character, objects)
- Music
- Double jump by tapping the spacebar twice
- Build objects with different size (height / width)
- Increase the objects' velocity

## Data structure
Classes and methods definition.

main.js

- buildDom()
- buildGame()
- destroySplash()
- buildGame()
- destroyGame()
- buildGameOver()
- destroyGameOver()

game.js

-

character.js

- function createCharacter(){
  x-position ("fixed")
  y-position
  size
}
- Character.prototype.update
- Character.prototype.render
- Character.prototype.position


objectsToAvoid.js

- function createObjectToAvoid(){
  x-position 
  y-position ("fixed")
  size
  speed
  direction
}

- objectsToAvoid.prototype.update
- objectsToAvoid.prototype.render
- objectsToAvoid.prototype.position
- objectsToAvoid.prototype.direction
- 

 
## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen

buildSplash()

- gameScreen
- gameoverScreen


## Task
Task definition in order of priority

- Create html file
- Create css file
- Create js files
- Main - buildDom
- Main - buildSplash
- Main - addEventListener
- Main - destroySplash
- Game - buildDom
- Main - GameOver
- Main - destroy Game
- Main - GameOver RESTART
- Main - removeGameOver
- Game - addEventListener
- Player - create
- Player - x and y directions while running 
- Player - x and y directions when jumping
- ObjectsToAvoid - create 
- ObjectsToAvoid - x and y directions
- Game - build collision between ObjectsToAvoid and Player
- Game - seconds counter




## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
