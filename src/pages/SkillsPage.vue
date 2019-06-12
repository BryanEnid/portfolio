<template>
  <div id="Skills" class="container">
    <section class="frontEnd">
      <h1>Front End</h1>
      <ul>
        <li>
          <icon name="javascript" class="icon"></icon>Javascript
        </li>
        <ul class="indent">
          <li>ES5, ES6, ES7, ES8</li>
          <li>Paradigms:</li>
          <ul class="indent">
            <li>Object Oriented</li>
            <li>Functional</li>
            <li>Procedural</li>
          </ul>
          <li>Frameworks/Lib:</li>

          <ul class="indent">
            <li>
              <icon name="vue" class="icon"></icon>Vue.js, Vuex
            </li>
            <li>
              <icon name="jquery" class="icon"></icon>JQuery
            </li>
            <li>Anime.js</li>
            <li>
              <icon name="p5" class="icon"></icon>p5.js
            </li>
            <li>Three.js</li>
            <li>and more ...</li>
          </ul>
        </ul>
        <br>
        <br>
        <li>
          <icon name="css" class="icon"></icon>CSS3
        </li>
        <ul class="indent">
          <li>Preprocessors:</li>
          <ul class="indent">
            <li>
              <icon name="less" class="icon"></icon>LESS
            </li>
            <li>
              <icon name="sass" class="icon"></icon>SASS
            </li>
          </ul>
          <li>Frameworks:</li>
          <ul class="indent">
            <li>
              <icon name="bulma" class="icon"></icon>Bulma
            </li>
            <li>
              <icon name="bootstrap" class="icon"></icon>Bootstrap
            </li>
            <li>
              <icon name="vuetify" class="icon"></icon>Vuetify
            </li>
          </ul>
        </ul>
        <br>
        <br>
        <li>
          <icon name="html" class="icon"></icon>HTML5
        </li>
        <ul class="indent">
          <li>WebGL</li>
          <li>Local Storage</li>
          <li>SEO Best Practices</li>
          <li>Data attr.</li>
          <li>REGEX</li>
        </ul>
        <br>
      </ul>
    </section>

    <section class="backEnd">
      <h2>Back End</h2>
      <ul>
        <li>
          <icon name="node" class="icon"></icon>Node.js
        </li>
        <ul class="indent">
          <li>REST:</li>
          <ul class="indent">
            <li>Express.js</li>
            <li>Sails.js</li>
            <li>Feather.js</li>
          </ul>
          <li>Web Sockets</li>
          <ul class="indent">
            <li>Socket.io</li>
          </ul>
          <li>Server Side Rendering</li>
          <ul class="indent">
            <li>Nuxt.js</li>
          </ul>
        </ul>
      </ul>
    </section>

    <section class="database">
      <h2>DataBases</h2>
      <ul>
        <li>NoSQL:</li>
        <ul class="indent">
          <li>MongoDB</li>
          <li>Cassandra</li>
        </ul>
        <li>SQL:</li>
        <ul class="indent">
          <li>
            <icon name="mysql" class="icon"></icon>MySQL
          </li>
          <li>
            <icon name="postgresql" class="icon"></icon>PostgreSQL
          </li>
          <li>SQLite</li>
        </ul>
        <li>DBaas:</li>
        <ul class="indent">
          <li>
            <icon name="googlecloud" class="icon"></icon>Google Cloud
          </li>
          <li>
            <icon name="firebase" class="icon"></icon>Firebase
          </li>
        </ul>
      </ul>
    </section>
  </div>
</template>

<script>
import icon from "../components/AppIcons.vue";

import AwesomeButton from "../components/LandingPageButton.vue";

export default {
  components: {
    icon,
    AwesomeButton
  }
};
</script>

<style lang="less" scoped>
.icon {
  float: left;
  font-size: 11px;
  margin-top: 1px;
  height: 15px;
  width: 18px;
}

.container {
  color: #747474;
  background: #ededed;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 100px;
  // justify-items: center;
  // align-items: center;
}

.container::before {
  content: "Skills";
  font-size: 50px;
  size: 131.31px;
  position: absolute;
  left: 50%;
  margin-left: -65.65px;
  margin-top: 23px;
}

section {
  border-radius: 6px;
  padding: 40px 0 0 50px;
  background: white;
}
.frontEnd {
  grid-row: span 2 / auto;
  margin: 100px 0 90px 100px;
}

.backEnd {
  margin: 100px 100px 0 0;
}
.database {
  margin: 0 100px 90px 0;
}

ul {
  margin: 20px;
  list-style: none;
}

.indent {
  padding: 0px;
  margin: 10px 0 10px 50px;
  li {
    margin: 0px;
  }
}

@tablet-down: ~"(max-width: 767px)";

@media screen and (max-width: 1100px) {
  .container {
    height: initial;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: initial;
    grid-gap: 10px;
    // justify-items: center;
    // align-items: center;
  }

  .frontEnd {
    grid-row: span 2 / auto;
    margin: 100px 0 100px 30px;
  }

  .backEnd {
    margin: 100px 30px 0 0;
  }
  .database {
    margin: 0 30px 100px 0;
  }

  .indent {
    padding: 0px;
    margin: 10px 0 10px 50px;
    li {
      margin: 0px;
    }
  }
}

@media screen and (max-height: 950px) and (min-width: 1100px) and (max-width: 1700px) {
  .container {
    height: initial;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: initial;
    grid-gap: 100px;
    // justify-items: center;
    // align-items: center;
  }

  .frontEnd {
    grid-row: span 2 / auto;
    margin: 100px 0 100px 100px;
  }

  .backEnd {
    margin: 100px 100px 0 0;
  }
  .database {
    margin: 0 100px 100px 0;
  }

  .indent {
    padding: 0px;
    margin: 10px 0 10px 50px;
    li {
      margin: 0px;
    }
  }
}

@media (max-height: 950px) and (min-width: 1100px) {
  .container {
    height: initial;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: initial;
    grid-gap: 100px;
    // justify-items: center;
    // align-items: center;
  }

  .frontEnd {
    grid-row: span 2 / auto;
    margin: 100px 0 100px 100px;
  }

  .backEnd {
    margin: 100px 100px 0 0;
  }
  .database {
    margin: 0 100px 100px 0;
  }

  .indent {
    padding: 0px;
    margin: 10px 0 10px 50px;
    li {
      margin: 0px;
    }
  }
}

@media screen and (max-width: 767px) {
  .container {
    height: initial;
    grid-template-columns: 1fr;
    grid-auto-rows: initial;
    grid-gap: 10px;
    // justify-items: center;
    // align-items: center;
  }

  section {
    padding-bottom: 30px;
  }

  .frontEnd {
    grid-row: span 2 / auto;
    margin: 100px 10vw 0 10vw;
  }

  .backEnd {
    margin: 0 10vw;
  }
  .database {
    margin: 0 10vw 100px 10vw;
  }

  ul {
    margin: initial;
    list-style: none;
  }

  .indent {
    padding: 0px;
    margin: 5px 0 5px 25px;
    li {
      margin: 0px;
    }
  }
}
</style>
