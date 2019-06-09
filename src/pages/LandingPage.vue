<template>
  <div id="landing-page" :class="{ blur: blur }">
    <!-- background -->
    <div id="sketch-holder3" class="i3"></div>
    <div id="sketch-holder2" class="i2"></div>
    <div id="sketch-holder"></div>

    <div class="leftandright">
      <div class="profilePicture">
        <img class="roundedBryanImage" src="../assets/roundedProfile.png">
        <img class="bryanImage" src="../assets/Bryan.png">
      </div>

      <div id="about-me">
        <div class="box">
          <h1>
            Future -
            <VueTyper
              class="hey"
              :text="[
                'Full Stack Dev.',
                'Software Dev.',
                'Product Manager'
              ]"
              :pre-type-delay="400"
              :type-delay="150"
              :pre-erase-delay="4000"
              erase-style="backspace"
              :erase-delay="70"
            ></VueTyper>
          </h1>
          <div>
            <h3>Bryan E. Tejada</h3>
            <p>
              Hello, my name is Bryan Tejada. I am college student attending
              Georgia State University majoring in Computer Science. Since
              middle school I've been coding. I have feld in love creating fancy
              things, now I want to learn it all!
            </p>
            <div class="buttons">
              <AwesomeButton text="Skills" border-color="#03a9f4" @wasClicked="scrollIntoView"></AwesomeButton>
              <AwesomeButton text="Projects" border-color="#f57f17" @wasClicked="scrollIntoView"></AwesomeButton>
              <AwesomeButton
                text="Achievements"
                border-color="#1faa00"
                @wasClicked="scrollIntoView"
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
import AwesomeButton from "../components/LandingPageButton.vue";
import { setTimeout } from "timers";

export default {
  props: {
    blur: Boolean
  },
  components: {
    VueTyper,
    AwesomeButton
  },
  methods: {
    scrollIntoView(name) {
      let container = document.getElementById(name);
      setTimeout(() => {
        container.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }
};
</script>

<style lang="less">
#landing-page {
  transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
  width: 100%;
  height: 100vh;

  #sketch-holder,
  #sketch-holder2,
  #sketch-holder3 {
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 0.7;
  }
  .i2 {
    filter: blur(2px);
  }
  .i3 {
    filter: blur(3px);
  }

  .leftandright {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    height: 100vh;
    align-items: center;

    .profilePicture {
      z-index: 0;
      height: 80vh;
      align-self: end;
      margin: 0 auto;

      .bryanImage {
        height: 80vh;
        transform: translateX(80%);
        opacity: 0;
        animation: appearImage 2s 0.5s forwards;
      }
      .roundedBryanImage {
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

      // <Typed.js>
      .custom.char.typed {
        color: #009688;
      }
      .custom.caret {
        background: #009688;
      }
      // </Typed.js>

      h1,
      h3,
      p {
        margin: 20px;
      }

      .box {
        margin-right: 70px;
      }
    }
  }
}
.blur {
  filter: blur(1px);
}

//screen sizes
@wide-screen-down: ~"(max-width: 1199px)";
@desktop-down: ~"(max-width: 991px)";
@tablet-down: ~"(max-width: 767px)";
@phone-down: ~"(max-width: 480px)";
@small-phone-down: ~"(max-width: 320px)";

@media @desktop-down {
  .leftandright {
    grid-template-columns: 1fr !important;
    grid-template-rows: 1fr 1fr !important;

    .profilePicture {
      height: 30vh !important;
      align-self: center;
      .roundedBryanImage {
        height: 30vh;
        display: block !important;
      }
      .bryanImage {
        display: none;
      }
    }

    #about-me {
      width: 100vw;
      .buttons {
        display: grid;
        grid-template-columns: auto auto auto;
        margin: 10px;
        .btn {
          padding: 5px 10px !important;
          text-align: center;
        }
      }
      .box {
        width: 100vw;
      }
      h1 {
        font-size: 17px;
      }
      h3 {
        font-size: 14px;
      }
      p {
        font-size: 13px;
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
