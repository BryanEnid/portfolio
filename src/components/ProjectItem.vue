<template>
  <div class="featureProject" :style="this.changeStyleColumnAlignmentWhenMobile()">
    <img class="cropped inner-mobile-picture" :src="this.$props.image_name" :style="this.mobilePicture()" />
    <img v-if="this.$props.image_type == 'mobile' && !this.$props.screen_size" class="cropped" src="../assets/iphone_xr_frame.png" />

    <div class="techs">
      <h2 style="text-align: center">{{ this.$props.name }}</h2>
      <h3>Technologies used</h3>
      <template v-for="(technology, index) in this.$props.technologies">
        <AwesomeButton
          :key="index"
          :text="technology.name"
          :border-color="technology.colors[0]"
          :text-color="technology.colors[1]"
        ></AwesomeButton>
      </template>
    </div>

    <p class="description">
      {{ this.$props.description }}
    </p>

    <div class="demoLinks">
      <AwesomeButton
        v-if="this.$props.demo_url"
        text="Demo"
        border-color="#20232a"
        text-color="#61dafb"
        iconName="react"
        linkto="/doorflash/"
      ></AwesomeButton>
      <AwesomeButton
        v-if="this.$props.github_link"
        text="Github"
        border-color="black"
        text-color="white"
        iconName="github"
        :linkto="this.$props.github_link"
      ></AwesomeButton>
    </div>
  </div>
</template>

<script>
import AwesomeButton from "../components/LandingPageButton";

export default {
  components: {
    AwesomeButton,
  },
  props: {
    name: String,
    technologies: Array,
    description: String,
    image_name: String,
    demo_url: String,
    github_link: String,
    image_type: String,
    screen_size: Boolean,
  },
  methods: {
    changeStyleColumnAlignmentWhenMobile() {
      if (this.$props.image_type == "mobile")
        return `
          grid-template-columns: 1fr 1fr;
          padding: 45px 0 0 0;
          grid-template-rows: auto auto 1fr;
      `;
    },
    mobilePicture() {
      if (this.$props.image_type == "mobile" && this.$props.screen_size)
        return `
          border-radius: 37px;
          border: 10px solid grey;
      `;
    },
  },
};
</script>

<style lang="less">
@phone: ~"(max-width: 767px)";

.featureProject {
  margin: 0 70px 100px 70px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas: "cropped techs" "cropped description" "cropped demoLinks";
  grid-gap: 40px;

  .cropped {
    display: block;
    grid-area: cropped;
    object-fit: contain;
    object-position: 50% 50%;
    margin: 0 auto;

    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .inner-mobile-picture {
    width: 87%;
    height: 95%;
    margin: auto auto;
  }

  .techs {
    .btn {
      padding: 5px;
      margin: 5px;
    }
    grid-area: techs;
  }

  .description {
    line-height: 30px;
    grid-area: description;
  }

  .demoLinks {
    .btn {
      padding: 10px 20px;
      margin: 5px;
    }
  }
}

@media @phone {
  .featureProject {
    padding: initial;
    margin: 0 0 60px 0;
    grid-auto-columns: 1fr;
    display: block;

    .cropped {
      width: 50%;
      height: 50%;
    }
  }
}
</style>
