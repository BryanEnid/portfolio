<template>
  <div id="app">
    <NavigatorBar v-on:navUpdate="blurEverything" :screenSize="isMobile" :status="menuStatus"></NavigatorBar>

    <LandingPage :blur="menuStatus" :screenSize="isMobile"></LandingPage>
    <SkillsPage :blur="menuStatus" :screenSize="isMobile"></SkillsPage>
    <ProjectsPage :blur="menuStatus" :screenSize="isMobile"></ProjectsPage>
    <AchievementsPage :blur="menuStatus" :screenSize="isMobile"></AchievementsPage>
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
      menuStatus: false,
      isMobile: false
    };
  },
  methods: {
    blurEverything(menuStatus) {
      this.menuStatus = menuStatus;
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
@mobile: ~"(max-width: 767px)";

html {
  background: #252525;
}

.blur {
  filter: blur(1px);
  transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.btn,
.icon {
  cursor: pointer;
}

.container {
  transition: filter 0.5s ease-in-out;
}

#app {
  margin: 0;
  padding: 0 1px;
  font-size: 0.9em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #252525;
  width: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #01d8a2;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

// apply fonts
* {
  font-family: "Comfortaa", cursive;
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
}

@supports (-ms-accelerator: true) {
}
</style>
