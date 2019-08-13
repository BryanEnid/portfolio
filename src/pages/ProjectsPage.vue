<template>
  <div class="container" id="Projects" :class="{ blur: blur }">
    <h1>Projects Section</h1>
    <div class="featureProject">
      <img class="cropped" src="../assets/project1.png" />

      <div class="techs">
        <h2>Latest Experiment</h2>
        <AwesomeButton text="Node.js" border-color="#333333" text-color="#8cc64c"></AwesomeButton>
        <AwesomeButton text="Express" border-color="black" text-color="white"></AwesomeButton>
        <AwesomeButton text="MongoDB" border-color="#413020" text-color="#76b662"></AwesomeButton>
        <AwesomeButton text="React.js" border-color="#20232a" text-color="#61dafb"></AwesomeButton>
        <AwesomeButton text="Puppeter.js" border-color="#01d8a2" text-color="white"></AwesomeButton>
        <AwesomeButton text="TypeScript" border-color="#294e80" text-color="white"></AwesomeButton>
      </div>

      <p
        class="description"
      >This is my latest experiment. Is a copy of DoorDash App. I used the Google Web Scrapping Tool (Puppeter), to get real data from their Website, and then save the data to my project's database using MongoDB. The data is served on a REST API. This process repeats every 24 hours to get the updates of DoorDash.com</p>

      <div class="demoLinks">
        <AwesomeButton text="Demo" border-color="#20232a" text-color="#61dafb" iconName="react"></AwesomeButton>
        <AwesomeButton text="Github" border-color="black" text-color="white" iconName="github"></AwesomeButton>
      </div>
    </div>

    <hr />

    <div class="moreProjects">
      <h2>More Projects / Experiments</h2>
      <ul>
        <li>
          <a href="#">
            <img class="cropped" src="../assets/project2.jpg" alt="#" />

            <ul class="subtechs">
              <Icon name="react" color="#61dafb" style="background: #20232a;"></Icon>
              <Icon name="vue" style="background: white; border: 1px solid #41b883;"></Icon>
              <Icon name="node" color="#61dafb" style="background: #333333;"></Icon>
              <Icon name="javascript" style="background: #f0db4f;"></Icon>
            </ul>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="cropped" src="../assets/project3.jpg" alt="#" />

            <ul class="subtechs">
              <Icon name="react" color="#61dafb" style="background: #20232a;"></Icon>
              <Icon name="vue" style="background: white; border: 1px solid #41b883;"></Icon>
              <Icon name="node" color="#61dafb" style="background: #333333;"></Icon>
              <Icon name="javascript" style="background: #f0db4f;"></Icon>
            </ul>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="cropped" src="../assets/project4.png" alt="#" />

            <ul class="subtechs">
              <Icon name="react" color="#61dafb" style="background: #20232a;"></Icon>
              <Icon name="vue" style="background: white; border: 1px solid #41b883;"></Icon>
              <Icon name="node" color="#61dafb" style="background: #333333;"></Icon>
              <Icon name="javascript" style="background: #f0db4f;"></Icon>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from "../components/AppIcons.vue";
import AwesomeButton from "../components/LandingPageButton.vue";

export default {
  components: {
    Icon,
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
@tablet: ~"(max-width: 991px)";
@phone: ~"(max-width: 767px)";

#Projects {
  background: white;
  border-radius: 10px;
  padding: 10px 0;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    color: #333;
    text-align: center;
    margin: 40px 0;
  }

  h2 {
    margin: 0 0 0 5px;
  }

  .featureProject {
    margin: 0 70px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "cropped techs" "cropped description" "cropped demoLinks";
    grid-gap: 40px;

    .cropped {
      display: block;
      grid-area: cropped;
      object-fit: cover;
      object-position: 50% 50%;
      margin: 0 auto;

      width: 100%;
      height: 100%;
      border-radius: 10px;
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

  hr {
    display: none;
  }

  .moreProjects {
    text-align: center;
    margin: 70px 0;

    ::-webkit-scrollbar {
      width: 10px;
      height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    > ul {
      list-style: none;
      overflow: auto;
      //only safari v5
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;

      scrollbar-color: #888 white;
      scrollbar-width: thin;

      > li {
        display: inline-block;
        margin: 0 10px;
        // width: 80%;
        width: 350px;
        height: 250px;
        padding: 20px 0;
        position: relative;

        .subtechs {
          position: absolute;
          bottom: 0px;
          right: 0;

          > li {
            // margin: 20px;
            list-style: none;
            float: left;
            margin: 3px;
            border-radius: 50%;
            padding: 9px 11px;
            display: inline;
            font-size: 1.1em;
          }
        }
      }

      > li::before {
        content: "Details";
        background: #20232a;
        position: absolute;
        padding: 10px 20px;
        color: white;
        border-radius: 0 0 10px 0;
        border: 1px solid #999;
      }

      img {
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        border: 1px solid #999;
      }
    }
  }
}

@media @phone {
  #Projects {
    background: white;
    border-radius: 10px;
    padding: 10px 0;
    display: block;
    // height: initial important;
    width: initial;
    h1 {
      color: #333;
      text-align: center;
      margin: 40px 0;
    }

    hr {
      display: block;
      width: 70%;
      margin: 0 auto;
    }

    .featureProject {
      padding: initial;
      margin: 0 0 60px 0;
      display: block;
    }

    .cropped {
      grid-area: initial;
      object-fit: cover;
      object-position: 50% 50%;
      border-radius: initial !important;

      width: 100%;
      height: 100%;

      display: block;
      margin: 0 auto 20px auto;
    }

    .techs {
      margin: 30px 0 0 0;
    }

    .demoLinks {
      > * {
        display: block-inline;
      }
      text-align: center;

      .btn {
        padding: 20px 40px !important;
        margin: 10px !important;
      }
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
      text-align: center;
      margin: 70px 0;

      ::-webkit-scrollbar {
        width: 10px;
        height: 5px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: white;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      > ul {
        list-style: none;
        overflow: auto;
        //only safari v5
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;

        scrollbar-color: #888 white;
        scrollbar-width: thin;

        > li {
          display: inline-block;
          margin: 0 10px;
          width: 80%;
          height: 250px;
          padding: 20px 0;
          position: relative;

          .subtechs {
            position: absolute;
            bottom: 0px;
            right: 0;

            > li {
              // margin: 20px;
              list-style: none;
              float: left;
              margin: 3px;
              border-radius: 50%;
              padding: 9px 11px;
              display: block;
              font-size: 1.1em;
            }
          }
        }
        img {
          object-fit: cover;
          object-position: 50% 50%;
          width: 100%;
          height: 100%;
          border-radius: 3px;
          border: 1px solid #999;
        }

        > li::before {
          content: "Details";
          background: #20232a;
          position: absolute;
          top: 20px;
          left: 0;
          padding: 10px 20px;
          color: white;
          border-radius: 0 0 10px 0;
          border: 1px solid #999;
        }

        img {
          object-fit: cover;
          object-position: 50% 50%;
          width: 100%;
          height: 100%;
          border-radius: 3px;
          border: 1px solid #999;
        }
      }
    }
  }
}
</style>
