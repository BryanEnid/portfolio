<template>
  <div id="Skills" class="container" :class="{ blur: blur }">
    <h1>Skills</h1>

    <div class="moreSkills">
      <ul>
        <template v-for="techs of technologies">
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
      technologies: [
        ["React.js", "#61dafb"],
        ["Vue.js", ""],
        ["Node.js", ""],
        ["HTML", ""],
        ["CSS", ""],
        ["Javascript", ""],
        ["Firebase", ""],
        ["JQuery", ""],
        ["PostgreSQL", ""]
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

  .moreSkills {
    text-align: center;
    margin: 10px 0;

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
        width: 80px;
        height: 100px;
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
    }
  }
}

@media @phone {
  #Skills {
    background: white;
    // border-radius: 10px;
    display: block;
    margin: 123px auto 40px auto;

    .moreSkills {
      text-align: center;

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
          padding: 20px 0;
          position: relative;
        }
      }
    }
  }
}
</style>
