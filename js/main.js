var ctx;
var world = { width: 640, height: 480, planets: [] };
var game;

window.onload = function() {
  console.log('started');

  game = new Game();
  initSteering();

  ctx = document.getElementById('myCanvas').getContext('2d');

  render();
};

function Game() {

  this.ships = {};

  this.ships.A = new Ship('A');
  this.ships.A.position.x = 100;
  this.ships.A.position.y = 100;
}

Game.prototype.updateShip = function(id) {
  var ship = this.ships[id] = this.ships[id] || new Ship(id);
  ship.position.x = data.position.x;
  ship.position.y = data.position.y;
  ship.velocity.x = data.velocity.x;
  ship.velocity.y = data.velocity.y;
  ship.angle = data.angle;
  /*if (data.clientId !== this.peerId) {
    // update non-client controls
    ship.throttle = data.throttle;
    ship.turn = data.turn;
  }*/

};
