<template>
  <div id="app">
    <NavigatorBar v-on:navUpdate="blurEverything"/>
    <LandingPage :blur="blurState"/>
    <SkillsPage :blur="blurState"/>
  </div>
</template>

<script>
import NavigatorBar from "./components/AppNavigatorBar.vue";
import LandingPage from "./pages/LandingPage.vue";
import SkillsPage from "./pages/SkillsPage.vue";

export default {
  name: "app",
  components: {
    NavigatorBar,
    LandingPage,
    SkillsPage
  },
  data() {
    return {
      blurState: false
    };
  },
  methods: {
    blurEverything(navStatus) {
      this.blurState = navStatus;
    }
  }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Comfortaa";
</style>
<style lang="less">
html {
  background: #222;
}

#app {
  margin: 0;
  padding: 0;
  font-family: "Comfortaa", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
