
let sketch1 = (p) => {
    let defaultParticles = 25;
    let particlesList = [];
    let maximunParticles = 30;
    let randomnes = [-0.3, 0.3] // [Minimun Random Speed, Maximun Random Speed] [Two numbers with the same simbol will determine the direction]s

    p.setup = function () {
        if (p.windowWidth < 700) {
            maximunParticles = 10
        } else if (p.windowWidth > 700) {
            maximunParticles = 30
        }
        p.createCanvas(p.windowWidth, p.windowHeight);

        while (particlesList.length < defaultParticles) {
            particlesList.push(new Particle(p.random(0, p.windowWidth), p.random(0, p.windowHeight), p.random(...randomnes), p.random(...randomnes)))
        }
    }

    p.draw = function () {
        p.background(045)

        let mousePosition = {
            x: p.mouseX,
            y: p.mouseY
        }

        particlesList.map(particle => {
            particle.show()
            particle.move()

            if (particle.isTouchingBorder()) {
                particle.reappearOnOtherSide(particle)
            }

            if (particle.intersects(mousePosition) && mouseIsNotOutside(mousePosition)) {
                particle.traceline(mousePosition)
                p.noStroke()
                p.fill('rgba(255, 255, 255, 0.1)')
                p.ellipse(mousePosition.x - 1, mousePosition.y - 1, 3, 3)
            }

            for (otherParticle of particlesList) {
                if (particle.intersects(otherParticle)) {
                    particle.traceline(otherParticle)
                }
            }

        })

        if (particlesList.length > maximunParticles) {
            let extra = particlesList.slice(maximunParticles, particlesList.length).length
            particlesList.splice(0, extra);
        }
    }

    // Built In p5.js Events Functions
    p.mouseClicked = function ({ x, y }) {
        let directionX = p.random(-1, 1)
        let directionY = p.random(-1, 1)
        particlesList.push(new Particle(x, y, directionX, directionY))
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        if (p.windowWidth < 700) {
            maximunParticles = 10;
        } else if (p.windowWidth > 700) {
            maximunParticles = 35;
        }
    }


    // My Functions
    function mouseIsNotOutside(mousePosition) {
        if (mousePosition.x != 0 && mousePosition.y != 0 && mousePosition.x != p.windowWidth - 1 && mousePosition.y != p.windowHeight - 1) {
            return true
        }
    }

    class Particle {
        constructor(cursorX, cursorY, dirX, dirY) {
            this.x = cursorX;
            this.y = cursorY;
            this.dirX = dirX 
            this.dirY = dirY 
        }
    
        move() {
            this.x = this.x + this.dirX
            this.y = this.y + this.dirY
        }
    
        show() {
            p.push()
            p.noStroke()
            p.fill(255)
            p.ellipse(this.x, this.y, 5, 5)
            p.pop()
        }
    
        reappearOnOtherSide(actualPosition) {
            actualPosition.x > p.windowWidth ? this.x = 0 : null
            actualPosition.x < 0 ? this.x = p.windowWidth : null
            actualPosition.y > p.windowHeight ? this.y = 0 : null
            actualPosition.y < 0 ? this.y = p.windowHeight : null
        }
    
        intersects(otherParticle){
            let distance = p.int(p.dist(this.x, this.y, otherParticle.x, otherParticle.y))
            if (distance < 200 && distance != 0) {
                return true
            }
        }
     
        traceline(otherParticle) {
            let distance = p.int(p.dist(this.x, this.y, otherParticle.x, otherParticle.y))
            
            p.push();
            p.stroke(`rgba(255, 255, 255, ${1500/(distance*distance)})`)
            p.line(this.x, this.y, otherParticle.x, otherParticle.y)
            p.pop();
            
        }
    
        isTouchingBorder() {
            if (this.x > p.windowWidth || this.x < 0 || this.y > p.windowHeight || this.y < 0) {
                return true
            } else {
                return false
            }
        }
    }
}

let sketch2 = (p) => {
    let defaultParticles = 25;
    let particlesList = [];
    let maximunParticles = 30;
    let randomnes = [-0.3, 0.3] // [Minimun Random Speed, Maximun Random Speed] [Two numbers with the same simbol will determine the direction]s

    p.setup = function () {
        if (p.windowWidth < 700) {
            maximunParticles = 10
        } else if (p.windowWidth > 700) {
            maximunParticles = 30
        }
        p.createCanvas(p.windowWidth, p.windowHeight);

        while (particlesList.length < defaultParticles) {
            particlesList.push(new Particle(p.random(0, p.windowWidth), p.random(0, p.windowHeight), p.random(...randomnes), p.random(...randomnes)))
        }
    }

    p.draw = function () {
        p.background(045)

        let mousePosition = {
            x: p.mouseX,
            y: p.mouseY
        }

        particlesList.map(particle => {
            particle.show()
            particle.move()

            if (particle.isTouchingBorder()) {
                particle.reappearOnOtherSide(particle)
            }

            if (particle.intersects(mousePosition) && mouseIsNotOutside(mousePosition)) {
                particle.traceline(mousePosition)
                p.noStroke()
                p.fill('rgba(255, 255, 255, 0.1)')
                p.ellipse(mousePosition.x - 1, mousePosition.y - 1, 3, 3)
            }

            for (otherParticle of particlesList) {
                if (particle.intersects(otherParticle)) {
                    particle.traceline(otherParticle)
                }
            }

        })

        if (particlesList.length > maximunParticles) {
            let extra = particlesList.slice(maximunParticles, particlesList.length).length
            particlesList.splice(0, extra);
        }
    }

    // Built In p5.js Events Functions
    p.mouseClicked = function ({ x, y }) {
        let directionX = p.random(-1, 1)
        let directionY = p.random(-1, 1)
        particlesList.push(new Particle(x, y, directionX, directionY))
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        if (p.windowWidth < 700) {
            maximunParticles = 10;
        } else if (p.windowWidth > 700) {
            maximunParticles = 35;
        }
    }


    // My Functions
    function mouseIsNotOutside(mousePosition) {
        if (mousePosition.x != 0 && mousePosition.y != 0 && mousePosition.x != p.windowWidth - 1 && mousePosition.y != p.windowHeight - 1) {
            return true
        }
    }

    class Particle {
        constructor(cursorX, cursorY, dirX, dirY) {
            this.x = cursorX;
            this.y = cursorY;
            this.dirX = dirX 
            this.dirY = dirY 
        }
    
        move() {
            this.x = this.x + this.dirX
            this.y = this.y + this.dirY
        }
    
        show() {
            p.push()
            p.noStroke()
            p.fill(255)
            p.ellipse(this.x, this.y, 5, 5)
            p.pop()
        }
    
        reappearOnOtherSide(actualPosition) {
            actualPosition.x > p.windowWidth ? this.x = 0 : null
            actualPosition.x < 0 ? this.x = p.windowWidth : null
            actualPosition.y > p.windowHeight ? this.y = 0 : null
            actualPosition.y < 0 ? this.y = p.windowHeight : null
        }
    
        intersects(otherParticle){
            let distance = p.int(p.dist(this.x, this.y, otherParticle.x, otherParticle.y))
            if (distance < 200 && distance != 0) {
                return true
            }
        }
     
        traceline(otherParticle) {
            let distance = p.int(p.dist(this.x, this.y, otherParticle.x, otherParticle.y))
            
            p.push();
            p.stroke(`rgba(255, 255, 255, ${1500/(distance*distance)})`)
            p.line(this.x, this.y, otherParticle.x, otherParticle.y)
            p.pop();
            
        }
    
        isTouchingBorder() {
            if (this.x > p.windowWidth || this.x < 0 || this.y > p.windowHeight || this.y < 0) {
                return true
            } else {
                return false
            }
        }
    }
}

let sketch3 = (p) => {
    let defaultParticles = 25;
    let particlesList = [];
    let maximunParticles = 30;
    let randomnes = [-0.3, 0.3] // [Minimun Random Speed, Maximun Random Speed] [Two numbers with the same simbol will determine the direction]s

    p.setup = function () {
        if (p.windowWidth < 700) {
            maximunParticles = 10
        } else if (p.windowWidth > 700) {
            maximunParticles = 30
        }
        p.createCanvas(p.windowWidth, p.windowHeight);

        while (particlesList.length < defaultParticles) {
            particlesList.push(new Particle(p.random(0, p.windowWidth), p.random(0, p.windowHeight), p.random(...randomnes), p.random(...randomnes)))
        }
    }

    p.draw = function () {
        p.background(045)

        let mousePosition = {
            x: p.mouseX,
            y: p.mouseY
        }

        particlesList.map(particle => {
            particle.show()
            particle.move()

            if (particle.isTouchingBorder()) {
                particle.reappearOnOtherSide(particle)
            }

            if (particle.intersects(mousePosition) && mouseIsNotOutside(mousePosition)) {
                particle.traceline(mousePosition)
                p.noStroke()
                p.fill('rgba(255, 255, 255, 0.1)')
                p.ellipse(mousePosition.x - 1, mousePosition.y - 1, 3, 3)
            }

            for (otherParticle of particlesList) {
                if (particle.intersects(otherParticle)) {
                    particle.traceline(otherParticle)
                }
            }

        })

        if (particlesList.length > maximunParticles) {
            let extra = particlesList.slice(maximunParticles, particlesList.length).length
            particlesList.splice(0, extra);
        }
    }

    // Built In p5.js Events Functions
    p.mouseClicked = function ({ x, y }) {
        let directionX = p.random(-1, 1)
        let directionY = p.random(-1, 1)
        particlesList.push(new Particle(x, y, directionX, directionY))
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        if (p.windowWidth < 700) {
            maximunParticles = 10;
        } else if (p.windowWidth > 700) {
            maximunParticles = 35;
        }
    }


    // My Functions
    function mouseIsNotOutside(mousePosition) {
        if (mousePosition.x != 0 && mousePosition.y != 0 && mousePosition.x != p.windowWidth - 1 && mousePosition.y != p.windowHeight - 1) {
            return true
        }
    }

    class Particle {
        constructor(cursorX, cursorY, dirX, dirY) {
            this.x = cursorX;
            this.y = cursorY;
            this.dirX = dirX 
            this.dirY = dirY 
        }
    
        move() {
            this.x = this.x + this.dirX
            this.y = this.y + this.dirY
        }
    
        show() {
            p.push()
            p.noStroke()
            p.fill(255)
            p.ellipse(this.x, this.y, 5, 5)
            p.pop()
        }
    
        reappearOnOtherSide(actualPosition) {
            actualPosition.x > p.windowWidth ? this.x = 0 : null
            actualPosition.x < 0 ? this.x = p.windowWidth : null
            actualPosition.y > p.windowHeight ? this.y = 0 : null
            actualPosition.y < 0 ? this.y = p.windowHeight : null
        }
    
        intersects(otherParticle){
            let distance = p.int(p.dist(this.x, this.y, otherParticle.x, otherParticle.y))
            if (distance < 200 && distance != 0) {
                return true
            }
        }
     
        traceline(otherParticle) {
            let distance = p.int(p.dist(this.x, this.y, otherParticle.x, otherParticle.y))
            
            p.push();
            p.stroke(`rgba(255, 255, 255, ${1500/(distance*distance)})`)
            p.line(this.x, this.y, otherParticle.x, otherParticle.y)
            p.pop();
            
        }
    
        isTouchingBorder() {
            if (this.x > p.windowWidth || this.x < 0 || this.y > p.windowHeight || this.y < 0) {
                return true
            } else {
                return false
            }
        }
    }
}


new p5(sketch1, 'sketch-holder')
new p5(sketch2, 'sketch-holder2')
new p5(sketch3, 'sketch-holder3')
