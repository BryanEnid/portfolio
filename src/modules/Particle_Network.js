import LagHandler from "./LagHandler.js"
import Particle from "./Particles.js"

let lag = new LagHandler();

export default class ParticleNetwork {
    constructor({ mouseDetection, DOM_CANVAS_NAME, blur }) {
        let canvas = document.getElementById(DOM_CANVAS_NAME);
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")
        this.DOM_CANVAS_NAME = DOM_CANVAS_NAME
        this.clickDetection = false;
        this.particlesList = [];
        this.defaultParticles = 50;
        this.maximunParticles = 200;
        this.maximunParticlesSetup = this.maximunParticles
        this.maximunParticlesSetupMinimunRange = Math.floor(this.maximunParticles / 3);
        this.intervalVelocity = 0.3;
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.mousePosition = {
            x: 0,
            y: 0
        }
        this.blur = blur || false
        this.lastCalledTime;
        this.fps;
        this.fpsThreshold = 58;
        this.delta;
        this.mouseDetection = mouseDetection
        this.LIBRARY_FUNCTIONS = {
            clear: () => {
                this.ctx.clearRect(0, 0, this.width, this.height)
            },
            random: (param1, param2) => {
                if (param1 && param2) {
                    return (Math.random() < 0.5 ? param1 * Math.random() : param2 * Math.random());
                }
                return Math.random()
            }
        }
    }

    // Main function (Initializer)
    start() {
        let scale = window.devicePixelRatio
        this.canvas.style.width = '100vw'
        this.canvas.style.height = '99.2vh'
        this.canvas.width = window.innerWidth * scale;
        this.canvas.height = (window.innerHeight * scale);
        this.ctx.scale(scale, scale)

        if (this.mouseDetection) {
            this.canvas.addEventListener("mousemove", ({ layerX, layerY }) => {
                this.mousePosition = { x: layerX, y: layerY }
                this.mouseDetection = true
            })
            this.canvas.addEventListener("mouseout", (e) => {
                this.mouseDetection = false
            })
            this.canvas.addEventListener("click", () => {
                this.clickDetection = true;
            })
        }
        window.addEventListener("resize", () => {
            this.width = window.innerWidth
            this.height = window.innerHeight

            this.canvas.style.width = '100vw'
            this.canvas.style.height = '99.2vh'
            this.canvas.width = window.innerWidth * scale;
            this.canvas.height = (window.innerHeight * scale);
            this.ctx.scale(scale, scale)

            // this.particlesList.splice(0, this.particlesList.length)
        })

        this.setup(this.LIBRARY_FUNCTIONS);
        this.draw(this.LIBRARY_FUNCTIONS);
    }

    // Game functions
    // Here goes the pre setup of the game 
    setup({ random }) {
        if (this.width < 700) {
            this.maximunParticles = this.maximunParticlesSetupMinimunRange;
        } else if (this.width > 700) {
            this.maximunParticles = this.maximunParticlesSetup;
        }

        while (this.particlesList.length < this.defaultParticles) {
            let particle = new Particle(
                random() * this.width,
                random() * this.height,
                random(-1, 1) * this.intervalVelocity,
                random(-1, 1) * this.intervalVelocity,
                this.ctx, this.blur
            )
            particle.setup()
            this.particlesList.push(particle);
        }

    }

    // Here goes the functions that render each frame
    draw({ clear, random }) {
        clear();

        if (this.fps <= this.fpsThreshold && this.fps != 0) {
            lag.register()
        } else if (this.fps > this.fpsThreshold) {
            lag.reset()
        }

        if (lag.memory > 10 && this.maximunParticles != 0) {
            this.maximunParticles = Math.floor(this.maximunParticles * 0.9);
            lag.reset()
        } else if (lag.memory == 0) {
            this.maximunParticles = this.maximunParticlesSetup;
        }

        this.particlesList.map(particle => {
            particle.show();
            particle.move();

            if (particle.isTouchingBorder()) {
                particle.reappearOnOtherSide(particle);
            }

            if (this.mouseDetection) {
                if (
                    particle.intersects(this.mousePosition) &&
                    this.mouseIsNotOutside(this.mousePosition)
                ) {
                    particle.tracelineTo(this.mousePosition);
                }
            }

            if (this.clickDetection) {
                let directionX = random(-1, 1);
                let directionY = random(-1, 1);
                this.particlesList.push(
                    new Particle(this.mousePosition.x, this.mousePosition.y, directionX, directionY, this.ctx, this.blur)
                );
                this.clickDetection = false
            }


            for (let otherParticle of this.particlesList) {
                if (particle.intersects(otherParticle)) {
                    particle.tracelineTo(otherParticle);
                }
            }
        });

        if (this.particlesList.length > this.maximunParticles) {
            let extra = this.particlesList.slice(this.maximunParticles, this.particlesList.length).length;
            this.particlesList.splice(0, extra);
        }



        window.requestAnimationFrame(() => {
            if (!this.lastCalledTime) {
                this.lastCalledTime = performance.now();
                this.fps = 0;
            }
            this.delta = (performance.now() - this.lastCalledTime) / 1000;
            this.lastCalledTime = performance.now();
            this.fps = 1 / this.delta;
            return this.draw(this.LIBRARY_FUNCTIONS)
        })
    }

    mouseIsNotOutside(mousePosition) {
        if (
            mousePosition.x != 0 &&
            mousePosition.y != 0 &&
            mousePosition.x != this.width - 1 &&
            mousePosition.y != this.height - 1
        ) {
            return true;
        }
    }
}




// let game = new Game(config);
// game.start();