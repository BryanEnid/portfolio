<template>
  <nav>
    <ul id="ulNavigation" :class="{ ulActive: isUlVisible }">
      <a href="https://github.com/BryanEnid" target="_blank">
        <icon name="github" />
      </a>
      <a href="https://www.linkedin.com/in/bryanenid/" target="_blank">
        <icon name="linkedin" />
      </a>
      <a href="#">
        <li>Download Resume</li>
      </a>
      <!-- <a href="#more">
        <li>• • •</li>
      </a>-->
    </ul>

    <div id="burger" @click="isUlVisible = !isUlVisible">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
</template>

<script>
import icon from "../components/AppIcons.vue";

export default {
  name: "NavigatorBar",
  components: {
    icon
  },
  props: {
    screenSize: Boolean,
    status: Boolean
  },
  data() {
    return {
      isUlVisible: false,
      ulNavigation: null,
      windowSize: 1300,
      windowWasResized: false
    };
  },
  methods: {},
  mounted() {
    //Get DOMs
    this.ulNavigation = document.querySelector("#ulNavigation");
    window.addEventListener("resize", () => {
      this.isUlVisible = false;
    });
  },
  watch: {
    //Send a message to parent component to blur siblings through props.
    isUlVisible(isVisible) {
      this.$emit("navUpdate", isVisible);
    },
    status() {
      this.isUlVisible = this.$props.status;
    }
  }
};
</script>

<style lang="less" scopped>
//Theme

nav {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: black;
  border: solid black 1px;
  color: white;
  padding: 0;
  font-size: 1.1em;
  opacity: 0.9;

  ul {
    list-style: none;
    padding: 10px;
    float: right;
    margin-right: 10vw;
    width: 20em;
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    align-items: center;
    text-align: center;

    a:visited,
    a {
      color: white;
      text-decoration: none;

      svg {
        width: 30%;
      }
    }
  }

  #burger {
    display: none;
    float: right;
    margin: 15px;
    cursor: pointer;

    > div {
      width: 25px;
      height: 3px;
      background: white;
      margin: 5px;
      border-radius: 3px;
    }
  }

  //screen sizes
  @tablet: ~"(max-width: 991px)";
  @mobile: ~"(max-width: 767px)";

  @media @mobile {
    position: fixed;

    //Assign with Javascript
    .ulActive {
      display: grid;
      transform: translateX(-100%);
    }

    ul {
      //reseting
      list-style: none;
      float: initial;

      //changes
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto-fill, 1fr);
      height: 100%;
      width: 60%;
      background: black;
      position: fixed;
      top: 0;
      right: -60%; //toggle to -3px
      margin: 0;
      padding: 0;
      z-index: -1;
      transform: translateX(0%);

      transition: 0.5s ease-in-out;
      transition-property: transform;
      will-change: transform;

      a {
        height: 100%;
        li {
          padding-top: 50vh / 4;
        }
      }
      a:first-child {
        height: calc(~"100% - 61px");
        margin-top: 60px;
      }
    }

    #burger {
      display: block;
      background: black;
      height: 100%;
    }
  }
}
</style>
