
var tempPoint = new Vec(0, 0);

function drawShip(ship) {

	function getRotated(x, y, angle) {
		tempPoint.x = x;
		tempPoint.y = y;
		tempPoint.rotate(angle);
	}

	ctx.fillStyle = ship.color;
	ctx.beginPath();
	getRotated(10, 0, ship.angle);
	ctx.moveTo(ship.position.x + tempPoint.x, ship.position.y + tempPoint.y);
	getRotated(-10, -7, ship.angle);
	ctx.lineTo(ship.position.x + tempPoint.x, ship.position.y + tempPoint.y);
	getRotated(-10, 7, ship.angle);
	ctx.lineTo(ship.position.x + tempPoint.x, ship.position.y + tempPoint.y);
	ctx.closePath();
	ctx.fill();

	if (ship.throttle && ship.frame % 10 === 0) {
		addParticle(ship.position.x, ship.position.y, '#BE2633', 2, 0, 0);
	}

	ship.frame++;

}

function drawWorld() {

  ctx.fillStyle = '#1B2632';
	ctx.fillRect(0, 0, world.width, world.height);

}

function drawShips() {
  for (var key in game.ships) {
    drawShip(game.ships[key]);
  }
}

function render() {

  var myShip = game.ships.A;

  var oldV = myShip.throttle;
  var oldT = myShip.turn;

  myShip.turn = KEY_LEFT ? -1 : (KEY_RIGHT ? 1 : 0);
	myShip.throttle = KEY_UP ? 1 : 0;

  updateAll();

  drawWorld();
  drawParticles();
  drawShips();


  requestAnimationFrame(render);
}
