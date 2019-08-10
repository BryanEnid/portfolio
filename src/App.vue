<template>
  <div id="app">
    <NavigatorBar v-on:navUpdate="blurEverything" :screenSize="isMobile"></NavigatorBar>
    <LandingPage :blur="blurState" :screenSize="isMobile"></LandingPage>
    <SkillsPage :blur="blurState" :screenSize="isMobile"></SkillsPage>
    <ProjectsPage :blur="blurState" :screenSize="isMobile"></ProjectsPage>
    <AchievementsPage :blur="blurState" :screenSize="isMobile"></AchievementsPage>
  </div>
</template>

<script>
import NavigatorBar from "./components/AppNavigatorBar.vue";
import LandingPage from "./pages/LandingPage.vue";
import SkillsPage from "./pages/SkillsPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import AchievementsPage from "./pages/AchievementsPage.vue";

export default {
  name: "app",
  components: {
    NavigatorBar,
    LandingPage,
    SkillsPage,
    ProjectsPage,
    AchievementsPage
  },
  data() {
    return {
      blurState: false,
      isMobile: false
    };
  },
  methods: {
    blurEverything(navStatus) {
      this.blurState = navStatus;
    }
  },
  mounted() {
    this.isMobile = window.matchMedia("(max-width: 767px)").matches;
    window.addEventListener("resize", () => {
      this.isMobile = window.matchMedia("(max-width: 767px)").matches;
    });
  }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Comfortaa";
</style>
<style lang="less">
html {
  background: #252525;
}

.blur {
  filter: blur(1px);
  transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.container {
  transition: filter 0.5s ease-in-out;
}

#app {
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// apply fonts
* {
  font-family: "Comfortaa", cursive;
}
</style>
