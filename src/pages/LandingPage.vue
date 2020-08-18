<template>
  <div id="Landing" class="container" :class="{ blur: blur }">
    <!-- background -->
    <canvas v-for="name of canvas" :key="name.id" :id="name"></canvas>

    <div class="leftandright">
      <div class="profilePicture">
        <img class="roundedBryanImage" src="../assets/roundedProfile.jpg" />
        <img class="bryanImage" src="../assets/Bryan.png" />
      </div>

      <div id="about-me">
        <div class="box">
          <div>
            <div class="typer"></div>
            <div class="buttons">
              <AwesomeButton
                text="Skills"
                border-color="#03a9f4"
                :transparentBackground="true"
                @wasClicked="scrollIntoView"
                :screenSize="screenSize"
                linkto="#"
              ></AwesomeButton>
              <AwesomeButton
                text="Projects"
                border-color="#f57f17"
                :transparentBackground="true"
                @wasClicked="scrollIntoView"
                :screenSize="screenSize"
                linkto="#"
              ></AwesomeButton>
              <AwesomeButton
                :transparentBackground="true"
                text="Achievements"
                border-color="#1faa00"
                @wasClicked="scrollIntoView"
                :screenSize="screenSize"
                linkto="#"
              ></AwesomeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import typer from "typer-js";
// change to TYPER.js
import AwesomeButton from "../components/LandingPageButton.vue";
import ParticleNetwork from "../modules/Particle_Network.js";

export default {
  props: {
    blur: Boolean,
    screenSize: Boolean,
  },
  data() {
    return {
      canvas: ["sketch-holder", "sketch-holder2", "sketch-holder3"],
    };
  },
  components: {
    VueTyper,
    AwesomeButton,
  },
  mounted() {
    for (name of this.canvas) {
      if (name == this.canvas[0]) {
        let config = {
          DOM_CANVAS_NAME: name,
          mouseDetection: true,
        };
        let particle_network = new ParticleNetwork(config);
        particle_network.start();
      } else {
        let config = {
          DOM_CANVAS_NAME: name,
          mouseDetection: false,
          blur: true,
        };
        let particle_network = new ParticleNetwork(config);
        particle_network.start();
      }
    }

    typer(".typer")
      .line("Hello! My name is Bryan E. Tejada", { element: "p", speed: 90 })
      .pause(1000)
      .line("I'm a Front End Developer.", { element: "p", speed: 50 })
      .pause(1300)
      .continue(["      well ..."])
      .pause(500)
      .back(34, 2)
      .continue("Back End Developer.")
      .pause(1200)
      .continue(["      um ..."])
      .pause(1200)
      .back(31, 2)
      .continue("Full Stack Developer")
      .pause(1000)
      .continue(" ?")
      .pause(2000)
      .back(2)
      .pause(1000)
      .continue(".")
      .pause(1000)
      .continue(["  anyway ..."])
      .pause(500)
      .back(10, 10)
      .line(["Please, check out my skills, projects, and achievements!"], {
        element: "p",
      })
      .line(
        ["Also, please download my resume. It's in the menu at the upper right corner, and thank you for having a look at my portfolio."],
        { element: "p" }
      );
  },
  methods: {
    scrollIntoView(name) {
      let container = document.getElementById(name);
      setTimeout(() => {
        container.scrollIntoView({ behavior: "smooth", alignToTop: false });
      }, 300);
    },
  },
  watch: {
    screenSize(isMobile) {
      let section = document.getElementById("about-me").style;
      if (isMobile) {
        for (let canvasName of this.canvas) {
          if (canvasName != this.canvas[0]) {
            let canvas = document.getElementById(canvasName);
            canvas.style.display = "none";
          }
        }
        section.animation = "initial";
        section.opacity = "1";
      } else if (!isMobile) {
        for (let canvasName of this.canvas) {
          if (canvasName != this.canvas[0]) {
            let canvas = document.getElementById(canvasName);
            canvas.style.display = "block";
          }
        }
        section.animation = "appearText 1s 2.5s forwards";
        section.opacity = "0";
      }
    },
  },
};
</script>

<style lang="less">
#Landing {
  width: 100%;
  height: 100vh;
  margin: 0 auto 0 auto;
  max-width: 1400px;
  #sketch-holder,
  #sketch-holder2,
  #sketch-holder3 {
    position: absolute;
    top: 0;
    left: 0;
  }

  #sketch-holder2,
  #sketch-holder3 {
    z-index: -1;
  }

  .leftandright {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
    align-items: center;

    .profilePicture {
      z-index: 0;
      height: 80vh;
      align-self: end;
      margin: 0 auto;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none;

      .bryanImage {
        height: 80vh;
        transform: translateX(80%);
        opacity: 0;
        animation: appearImage 2s 0.5s forwards;
      }
      .roundedBryanImage {
        border-radius: 50%;
        display: none;
      }
    }

    #about-me {
      position: block;
      color: white;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr;
      opacity: 0;
      animation: appearText 1s 2.5s forwards;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none;
      // <Typed.js>
      .custom.char.typed {
        color: #01d8a2;
      }
      .custom.caret {
        background: #01d8a2;
      }
      // </Typed.js>

      h1,
      h3,
      p {
        margin: 20px;
      }

      .box {
        margin-right: 70px;

        h1 {
          font-size: 3em;
        }

        h3,
        p {
          font-size: 1.3em;
        }
      }
    }
  }
}

//screen sizes
@tablet: ~"(max-width: 991px)";
@phone: ~"(max-width: 767px)";

@media @phone {
  #Landing {
    min-height: 400px;
    max-height: 700px;
  }

  .leftandright {
    grid-template-columns: 1fr !important;
    grid-template-rows: 3fr 5fr;

    .profilePicture {
      height: initial !important;
      .roundedBryanImage {
        height: 25vh;
        min-height: 100px;
        max-height: 200px;
        margin-top: 25px;
        display: block !important;
      }
      .bryanImage {
        display: none;
      }
    }

    #about-me {
      width: 100%;
      align-self: start !important;

      .buttons {
        display: grid;
        grid-template-columns: auto auto auto;
        margin: 20px;
        .btn {
          padding: 5px 10px;
          text-align: center;
        }
      }

      .box {
        width: 100%;

        p {
          line-height: 25px;
          font-size: 1.1em !important;
        }
        h1 {
          font-size: 2em !important;
        }
      }
    }
  }
}

//Animations
//.bryanImage
@keyframes appearImage {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  90% {
    transform: translateX(80%);
    opacity: 1;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
//#about-me
@keyframes appearText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
//circleonclick
@keyframes grow {
  0% {
    transform: scale(0);
    opacity: 1;
  }

  50% {
    transform: scale(90);
    opacity: 1;
  }
  100% {
    transform: scale(100);
    opacity: 0;
  }
}
</style>
