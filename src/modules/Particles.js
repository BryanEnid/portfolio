export default class Particle {
    constructor(cursorX, cursorY, dirX, dirY, ctx, blur) {
        this.x = cursorX;
        this.y = cursorY;
        this.dirX = dirX;
        this.dirY = dirY;
        this.ctx = ctx
        this.screen = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
        this.blur = blur
    }

    setup() {
        window.addEventListener("resize", () => {
            this.screen = {
                width: window.innerWidth,
                height: window.innerHeight,
            }
        })
    }

    move() {
        this.x = this.x + this.dirX;
        this.y = this.y + this.dirY;
    }

    show() {
        // Convert to canvas API
        // p.push();
        this.ctx.fillRect(this.x - 1, this.y - 1, this.blur ? 1 : 2, this.blur ? 1 : 2)
        this.ctx.fillStyle = "white";
        if (this.blur) this.ctx.globalAlpha = 0.2
        // p.ellipse(this.x, this.y, 5, 5);
        // p.pop();
    }

    reappearOnOtherSide(actualPosition) {
        actualPosition.x > this.screen.width ? (this.x = 0) : null;
        actualPosition.x < 0 ? (this.x = this.screen.width) : null;
        actualPosition.y > this.screen.height ? (this.y = 0) : null;
        actualPosition.y < 0 ? (this.y = this.screen.height) : null;
    }

    calculateDistance(x1, y1, x2, y2) {
        let vector1 = x2 - x1
        let vector2 = y2 - y1
        return Math.sqrt(vector1 * vector1 + vector2 * vector2)
    }

    intersects(otherParticle) {

        let distance = this.calculateDistance(this.x, this.y, otherParticle.x, otherParticle.y);
        if (distance < 150 && distance != 0) {
            return true;
        }
        return false
    }

    tracelineTo(otherParticle) {
        let distance = this.calculateDistance(this.x, this.y, otherParticle.x, otherParticle.y)

        // Convert this code to canvas API
        // p.push();
        this.ctx.beginPath();
        // ctx.stroke(`rgba(255, 255, 255, ${1500 / (distance * distance)})`);
        this.ctx.moveTo(this.x, this.y)
        this.ctx.lineTo(otherParticle.x, otherParticle.y);
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${(700 / (distance * distance)).toFixed(2)})`
        this.ctx.stroke();
        // p.pop();
    }

    isTouchingBorder() {
        if (
            this.x > this.screen.width ||
            this.x < 0 ||
            this.y > this.screen.height ||
            this.y < 0
        ) {
            return true;
        } else {
            return false;
        }
    }
}