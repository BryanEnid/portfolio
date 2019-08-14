<template>
  <div id="Landing" class="container" :class="{ blur: blur }">
    <!-- background -->
    <div v-show="!screenSize" id="sketch-holder3" class="i3" style="z-index: -1;"></div>
    <div v-show="!screenSize" id="sketch-holder2" class="i2" style="z-index: -1;"></div>
    <div id="sketch-holder" style="z-index: -1;"></div>

    <div class="leftandright">
      <div class="profilePicture">
        <img class="roundedBryanImage" src="../assets/roundedProfile.png" />
        <img class="bryanImage" src="../assets/Bryan.png" />
      </div>

      <div id="about-me">
        <div class="box">
          <h1>
            <VueTyper
              :text="['Full Stack Dev.', 'Front End Dev.', 'Back End Dev.']"
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
              Lorem, ipsum dolor sit ame consectetur adipisicing elit.
              Accusamus temporibus doloribus molestiae, laborum quae molestias
              cum. Ipsum labore nemo ullam excepturi praesentium tempore numquam
              illum exercitationem, quam perferendis dicta eum.
            </p>
            <div class="buttons">
              <AwesomeButton
                text="Skills"
                border-color="#03a9f4"
                :transparentBackground="true"
                @wasClicked="scrollIntoView"
                :screenSize="screenSize"
              ></AwesomeButton>
              <AwesomeButton
                text="Projects"
                border-color="#f57f17"
                :transparentBackground="true"
                @wasClicked="scrollIntoView"
                :screenSize="screenSize"
              ></AwesomeButton>
              <AwesomeButton
                :transparentBackground="true"
                text="Achievements"
                border-color="#1faa00"
                @wasClicked="scrollIntoView"
                :screenSize="screenSize"
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

export default {
  props: {
    blur: Boolean,
    screenSize: Boolean
  },
  components: {
    VueTyper,
    AwesomeButton
  },
  methods: {
    scrollIntoView(name) {
      let container = document.getElementById(name);
      setTimeout(() => {
        container.scrollIntoView({ behavior: "smooth", alignToTop: false });
      }, 300);
    }
  },
  watch: {
    screenSize(isMobile) {
      let section = document.getElementById("about-me").style;
      if (isMobile) {
        section.animation = "initial";
        section.opacity = "1";
      } else if (!isMobile) {
        section.animation = "appearText 1s 2.5s forwards";
        section.opacity = "0";
      }
    }
  }
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
    width: 100%;
    height: 100vh;
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
    width: 100%;
    height: 100%;
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
