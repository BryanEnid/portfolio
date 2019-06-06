// class Particle {
//     constructor(cursorX, cursorY, dirX, dirY) {
//         this.x = cursorX;
//         this.y = cursorY;
//         this.dirX = dirX 
//         this.dirY = dirY 
//     }

//     move() {
//         this.x = this.x + this.dirX
//         this.y = this.y + this.dirY
//     }

//     show() {
//         push()
//         noStroke()
//         fill(255)
//         ellipse(this.x, this.y, 5, 5)
//         pop()
//     }

//     reappearOnOtherSide(actualPosition) {
//         actualPosition.x > windowWidth ? this.x = 0 : null
//         actualPosition.x < 0 ? this.x = windowWidth : null
//         actualPosition.y > windowHeight ? this.y = 0 : null
//         actualPosition.y < 0 ? this.y = windowHeight : null
//     }

//     intersects(otherParticle){
//         let distance = int(dist(this.x, this.y, otherParticle.x, otherParticle.y))
//         if (distance < 200 && distance != 0) {
//             return true
//         }
//     }
 
//     traceline(otherParticle) {
//         let distance = int(dist(this.x, this.y, otherParticle.x, otherParticle.y))
        
//         push();
//         stroke(`rgba(255, 255, 255, ${1500/(distance*distance)})`)
//         line(this.x, this.y, otherParticle.x, otherParticle.y)
//         pop();
        
//     }

//     isTouchingBorder() {
//         if (this.x > windowWidth || this.x < 0 || this.y > windowHeight || this.y < 0) {
//             return true
//         } else {
//             return false
//         }
//     }
// }