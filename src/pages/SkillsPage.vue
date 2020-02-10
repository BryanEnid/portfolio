<template>
  <div id="Skills" class="container" :class="{ blur: blur }">
    <h1>Skills</h1>

    <div class="moreSkills">
      <ul>
        <template v-for="techs of technologies1">
          <icon :name="techs[0]" :color="techs[1]" size="initial" :showName="true" :key="techs"></icon>
        </template>
      </ul>
    </div>
    <div class="moreSkills">
      <ul>
        <template v-for="techs of technologies2">
          <icon :name="techs[0]" :color="techs[1]" size="initial" :showName="true" :key="techs"></icon>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import icon from "../components/AppIcons.vue";

export default {
  components: {
    icon
  },
  data() {
    return {
      technologies1: [
        // Js
        ["Javascript", ""],
        ["Typescript", "#1a5cce"],
        ["React.js", "#61dafb"],
        ["Vue.js", ""],

        ["JQuery", ""],

        // html
        ["HTML", ""],
        ["CSS", ""],
        ["SASS", ""],
        ["LESS", ""],
        ["Bootstrap", ""],
        ["p5.js", ""]
      ],
      technologies2: [
        // Back End
        ["Node.js", ""],
        ["Java", ""],
        ["Python", ""],

        // DB
        ["MongoDB", "#2ba03e"],
        ["Firebase", ""],
        ["PostgreSQL", ""],

        // Extras
        ["Docker", ""],
        ["NGINX", "#2ba03e"],
        ["Flutter", "black"],
        ["Linux", ""],
        ["Web Scraping", ""]
      ]
    };
  },
  props: {
    blur: Boolean,
    screenSize: Boolean
  }
};
</script>

<style lang="less" >
@tablet: ~"(max-width: 991px)";
@phone: ~"(max-width: 767px)";

#Skills {
  background: white;
  border-radius: 10px;
  padding: 10px 0;
  max-width: 1200px;
  display: block;
  margin: 0 auto 40px auto;

  h1 {
    color: #333;
    text-align: center;
    position: relative;
    top: 21px;
  }

  .featureProject {
    // padding: initial;
    margin: 0 0 60px 0;
    display: block;
  }

  .moreSkills:hover {
    ::-webkit-scrollbar {
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 7px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .moreSkills {
    text-align: center;
    margin: 10px 0;

    ::-webkit-scrollbar {
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: white;
      border-radius: 7px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: white;
    }

    > ul {
      list-style: none;
      overflow: auto;

      max-width: 1100px;
      margin: 0 auto;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;

      scrollbar-color: #888 white;
      scrollbar-width: thin;

      white-space: nowrap;

      > li {
        scroll-snap-align: start;
        display: inline-block;
        margin: 0 10px;
        // width: 80%;
        width: 80px;
        height: 100px;
        padding: 20px 0;
        position: relative;
        cursor: default;
      }

      p {
        white-space: initial;
      }
    }
  }
}

@media @phone {
  #Skills {
    .moreSkills:hover {
      ::-webkit-scrollbar {
        height: 0px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: white;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 0px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: white;
      }
    }
    .moreSkills {
      text-align: center;

      ::-webkit-scrollbar {
        height: 0px;
      }

      > ul {
        list-style: none;
        // overflow: auto;
        //only safari v5
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;

        scrollbar-color: #888 white;
        scrollbar-width: thin;

        > li {
          display: inline-block;
          margin: 0 10px;
          padding: 20px 0;
          position: relative;
        }
      }
    }
  }
}
</style>
