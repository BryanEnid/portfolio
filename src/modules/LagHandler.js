export default class LagHandler {
    constructor() {
        this.memory = 0;
        this.throttlingSwitch = false
    }

    reset() {
        // if (this.memory < -600) {
        //   console.log(this.memory)
        //   // console.clear()
        //   this.throttlingSwitch = true
        //   console.log("FPS Below threshold, reducing performance")
        //   return 1;
        // }
        // if (this.memory <= 0) {
        //   this.memory--
        // }
        this.memory = 0
    }

    register() {
        this.memory++

        // if (this.memory > 600 && this.throttlingSwitch) {
        //   console.clear()
        //   this.throttlingSwitch = false;
        //   console.log("FPS is stable, resetting to optimal configurations")
        //   return 0;
        // }
    }
}