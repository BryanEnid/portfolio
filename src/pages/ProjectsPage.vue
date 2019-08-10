<template>
  <div class="container" id="Projects" :class="{ blur: blur }">
    <h1>Projects</h1>
    <div v-if="screenSize">
      <img class="cropped" src="../assets/project1.png" />

      <div class="techs">
        <AwesomeButton text="Node.js" border-color="#333333" text-color="#8cc64c"></AwesomeButton>
        <AwesomeButton text="Express" border-color="black" text-color="white"></AwesomeButton>
        <AwesomeButton text="MongoDB" border-color="#413020" text-color="#76b662"></AwesomeButton>
        <AwesomeButton text="React.js" border-color="#20232a" text-color="#61dafb"></AwesomeButton>
        <AwesomeButton text="Puppeter.js" border-color="#01d8a2" text-color="white"></AwesomeButton>
        <AwesomeButton text="TypeScript" border-color="#294e80" text-color="white"></AwesomeButton>
      </div>

      <p class="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quas alias similique hic, nihil quos deleniti! Quasi veritatis
        dignissimos doloremque blanditiis! Velit dignissimos vero, omnis repellat
        cum ab voluptates totam quas.
      </p>

      <AwesomeButton text="Demo" border-color="grey" text-color="white"></AwesomeButton>
      <AwesomeButton text="Github" border-color="grey" text-color="white"></AwesomeButton>
    </div>

    <!-- --------------------------------------------------------- -->
    <!--                    ⇑    IF MOBILE    ⇑                    -->
    <!-- --------------------------------------------------------- -->

    <!--                                                           -->

    <!-- --------------------------------------------------------- -->
    <!--                    ⇓    IF DESKTOP   ⇓                    -->
    <!-- --------------------------------------------------------- -->

    <div v-else>
      <div>
        <h1>Project 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quas alias similique hic, nihil quos deleniti! Quasi veritatis
          dignissimos doloremque blanditiis! Velit dignissimos vero, omnis repellat
          cum ab voluptates totam quas.
        </p>

        <div class="techs">
          <AwesomeButton text="Node.js" border-color="green" text-color="white"></AwesomeButton>
          <AwesomeButton text="React.js" border-color="Blue" text-color="white"></AwesomeButton>
          <AwesomeButton text="MongoDB" border-color="green" text-color="white"></AwesomeButton>
          <AwesomeButton text="Puppeter.js" border-color="grey" text-color="white"></AwesomeButton>
          <AwesomeButton text="TypeScript" border-color="blue" text-color="white"></AwesomeButton>
          <AwesomeButton text="Express" border-color="black" text-color="white"></AwesomeButton>
        </div>
      </div>
      <div>
        <img src="#" alt="#" />
        <AwesomeButton text="Demo" border-color="grey" text-color="white"></AwesomeButton>
        <AwesomeButton text="Github" border-color="grey" text-color="white"></AwesomeButton>
      </div>
    </div>

    <div class="moreProjects">
      <h2>More Projects / Experiments</h2>
      <ul>
        <li>
          <a href="#">
            <img class="cropped" src="../assets/project2.jpg" alt="#" />
          </a>
        </li>
        <li>
          <a href="#">
            <img class="cropped" src="../assets/project3.jpg" alt="#" />
          </a>
        </li>
        <li>
          <a href="#">
            <img class="cropped" src="../assets/project4.png" alt="#" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AwesomeButton from "../components/LandingPageButton.vue";

export default {
  components: {
    AwesomeButton
  },
  props: {
    blur: Boolean,
    screenSize: Boolean
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
@wide-screen-down: ~"(max-width: 1199px)";
@desktop-down: ~"(max-width: 991px)";
@tablet-down: ~"(max-width: 767px)";
@phone-down: ~"(max-width: 480px)";
@small-phone-down: ~"(max-width: 320px)";

@media @tablet-down {
  #Projects {
    background: white;
    border-top: 1px solid white;

    h1 {
      text-align: center;
      margin: 40px 0;
    }

    .cropped {
      object-fit: cover;
      object-position: 50% 50%;

      width: 100%;
      height: 300px;

      display: block;
      margin: 0 auto 20px auto;
    }

    .techs {
      margin: 30px 0 0 0;
    }

    .btn {
      padding: 5px;
      margin: 5px;
    }

    .description {
      margin: 20px 15px;
      line-height: 30px;
    }

    .moreProjects {
      margin-top: 100px;
      text-align: center;
      ul {
        list-style: none;
        overflow: auto;
        //only safari v5
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;

        li {
          display: inline-block;
          margin: 10px 10px;
        }

        img {
          object-fit: cover;
          object-position: 50% 50%;
          border: 1px solid black;
          width: 100%;
          height: 250px;
        }
      }
    }
  }
}
</style>
