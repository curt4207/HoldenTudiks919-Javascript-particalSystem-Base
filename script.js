// Note: Setup

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height =window.innerHeight;
ctx.fillStyle = "purple";

console.log(ctx)

// ctx.fillStyle = "green";
// ctx.fillRect(50, 50 , 50, 50);

// Note: define what the particles look like
class Particle {
    constructor(effect) {
        this.effect = effect;
        this.radius = 10;
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
    }
    draw(context) {
        context.fillStyle = 'hsl(' + this.x * .5 + ', 100%, 50%)';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
}

// Note: Effect class is the brain and will store all the custom settings and helper methods
class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.particles = [];
        this.numberOfParticles = 500;
        this.createParticles();
    }
    // Note: create helper method that will run one time
    createParticles() {
        for(let i = 0; i < this.numberOfParticles; i++){
            this.particles.push(new Particle(this))
        }
    }
    handleAllParticles(context) {
        this.particles.forEach(particle => {
            particle.draw(context);
        })
    }
}

const effect = new Effect(canvas);
// console.log(effect)

effect.handleAllParticles(ctx);
function animation() {

}