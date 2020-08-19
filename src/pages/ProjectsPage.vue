<template>
  <div class="container" id="Projects" :class="{ blur: blur }">
    <h1>Projects Section</h1>

    <hr />

    <template v-for="(item, index) in projects">
      <ProjectItem
        :screen_size="screenSize"
        :name="item.name"
        :description="item.description"
        :technologies="item.technologies"
        :key="index"
        :image_name="item.image_url[0]"
        :image_type="item.app_type"
        :github_link="item.github_link"
      />
    </template>

    <!-- <div class="moreProjects" v-if="projects.length != 0">
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="#">
            <img class="cropped" src="../assets/project1.png" alt="#" />

            <ul class="subtechs">
              <Icon name="react" color="#61dafb" style="background: #20232a;"></Icon>
              <Icon name="vue" style="background: white; border: 1px solid #41b883;"></Icon>
              <Icon name="node" color="#61dafb" style="background: #333333;"></Icon>
              <Icon name="javascript" style="background: #f0db4f;"></Icon>
            </ul>
          </a>
        </li>
      </ul>
    </div> -->

    <p style="text-align:center; margin:40px 0 0 0">
      If you wan to check moure please check out my github:
      <a href="https://github.com/BryanEnid/">https://github.com/BryanEnid/</a>
    </p>

    <!-- remember convert this to a component because they are going to be multiples -->
    <!-- <div class="moreProjects" v-if="experiments.length != 0">
      <h2>Experiments</h2>
      <ul>
        
        <li>
          <a href="#">
            <img class="cropped" src="../assets/project1.png" alt="#" />

            <ul class="subtechs">
              <Icon name="react" color="#61dafb" style="background: #20232a;"></Icon>
              <Icon name="vue" style="background: white; border: 1px solid #41b883;"></Icon>
              <Icon name="node" color="#61dafb" style="background: #333333;"></Icon>
              <Icon name="javascript" style="background: #f0db4f;"></Icon>
            </ul>
          </a>
        </li>
      </ul>
    </div>-->
  </div>
</template>

<script>
import Icon from "../components/AppIcons";
import AwesomeButton from "../components/LandingPageButton";
import ProjectItem from "../components/ProjectItem";
import env from "../../env.json";

export default {
  components: {
    Icon,
    AwesomeButton,
    ProjectItem,
  },
  props: {
    blur: Boolean,
    screenSize: Boolean,
  },
  data() {
    return {
      projects: [],
      experiments: [{}],
    };
  },
  beforeCreate() {
    (async () => {
      try {
        const res = await fetch("https://api.github.com/users/BryanEnid/repos", {
          headers: {
            Authorization: `token ${env.API_KEY}`,
          },
        });
        const repos = await res.json();
        const demos = repos.filter((el) => {
          if (el.description !== null) {
            return el.description.indexOf("(*)") != -1;
          }
          return false;
        });

        demos.map((el) => {
          fetch(`https://raw.githubusercontent.com/BryanEnid/${el.name}/master/_preview/config.json`)
            .then((res) => res.json())
            .then((config_file) => {
              const image_names = config_file.image_names.map(
                (img_name) => `https://raw.githubusercontent.com/BryanEnid/${el.name}/master/_preview/${img_name}`
              );

              this.projects.push({
                ...config_file,
                github_link: el.html_url,
                stars: el.stargacers_count,
                description: el.description.replace("(*)", ""),
                image_url: image_names,
              });
            });
        });
      } catch (e) {
        console.log(e.message);
      }
    })();
  },
  mounted() {},
};
</script>

<style lang="less">
@tablet: ~"(max-width: 991px)";
@phone: ~"(max-width: 767px)";

#Projects {
  background: white;
  border-radius: 10px;
  padding: 10px 0 60px 0;
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

      > li a::before {
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

        > li a::before {
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
