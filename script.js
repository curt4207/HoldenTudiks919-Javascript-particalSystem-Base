// Note: Setup

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height =window.innerHeight;

console.log(ctx)

// ctx.fillStyle = "green";
// ctx.fillRect(50, 50 , 50, 50);

// Note: define what the particles look like
class Particle {
    constructor(effect) {
        this.effect = effect;
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.radius = 15;
    }
    draw(context) {
        context.fillStyle = "purple"
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
}

// Note: Effect class is the brain and will store all the custom settings and helper methods
class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.particles = [];
        this.numberOfParticles = 20;
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