
var particles = [];

function drawParticles() {
	for (var i=0; i<particles.length; i++) {

		particles[i].x += particles[i].speed * Math.cos(particles[i].angle);
		particles[i].y += particles[i].speed * Math.sin(particles[i].angle);
		ctx.beginPath();
		ctx.lineWidth = particles[i].size;
		ctx.strokeStyle = particles[i].color;
		ctx.moveTo(particles[i].x - particles[i].size/2, particles[i].y - particles[i].size/2);
		ctx.lineTo(particles[i].x + particles[i].size/2, particles[i].y + particles[i].size/2);
		ctx.stroke();

		particles[i].age++;
		if (particles[i].age > 60) {
      // remove particle
			particles.splice(i, 1);
			i--;
		}
	}
}

function addExplosion(ship, position) {
	var num = 4 + Math.ceil(Math.random() * 4);
	for (var i=0; i<num; i++) {
		addParticle(position.x, position.y, ship.color, 4, 1 + Math.random() * 2, Math.random() * Math.PI * 2);
	}

}

function addParticle(x, y, color, size, speed, angle) {

	var num = 4 + Math.ceil(Math.random() * 4);
	for (var i=0; i<num; i++) {
		particles.push({
			x: x,
			y: y,
			color: color,
			age: 0,
			speed: speed,
			size: size,
			angle: angle
		});
	}
}
