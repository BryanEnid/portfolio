<template>
  <div class="container" id="Skills">
    <section>
      <h1>Front End</h1>
      <ul>
        <li>Javascript</li>
        <ul class="indent">
          <li>ES5, ES6, ES7, ES8</li>
          <li>Paradigms:</li>
          <ul class="indent">
            <li>Object Oriented</li>
            <li>Functional</li>
            <li>Procedural</li>
          </ul>
          <li>Frameworks and Libraries:</li>

          <ul class="indent">
            <li>Vue.js, Vuex</li>
            <li>JQuery</li>
            <li>Anime.js</li>
            <li>p5.js</li>
            <li>Anime.js</li>
            <li>Three.js</li>
          </ul>
        </ul>
        <li>CSS</li>
        <ul class="indent">
          <li>Preprocessors:</li>
          <ul class="indent">
            <li>LESS</li>
            <li>SASS</li>
          </ul>
          <li>Frameworks:</li>
          <ul class="indent">
            <li>Bulma</li>
            <li>Bootstrap / vue-bootstrap</li>
            <li>Vuetify</li>
          </ul>
        </ul>
        <li>HTML5</li>
        <ul class="indent">
          <li>WebGL</li>
          <li>Local Storage</li>
          <li>SEO HTML-Tags and best practices</li>
          <li>Data attr., REGEX, etc...</li>
        </ul>
      </ul>
    </section>

    <section class="backend">
      <div>
        <h2>Back End</h2>
        <ul>
          <li>Node.js</li>
          <ul class="indent">
            <li>REST:</li>
            <ul class="indent">
              <li>Express.js</li>
              <li>Sails.js</li>
              <li>Feather.js</li>
            </ul>
            <li>Web Sockets:</li>
            <ul class="indent">
              <li>Socket.io</li>
            </ul>
            <li>Front End Server Side Rendering</li>
            <ul class="indent">
              <li>Nuxt.js</li>
            </ul>
          </ul>
        </ul>
      </div>

      <div>
        <h2>DataBases</h2>
        <ul>
          <li>NoSQL:</li>
          <ul class="indent">
            <li>MongoDB</li>
            <li>Cassandra</li>
          </ul>
          <li>SQL:</li>
          <ul class="indent">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
          </ul>
          <li>DBaas:</li>
          <ul class="indent">
            <li>Google Cloud</li>
            <li>Firebase</li>
          </ul>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  color: white;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  justify-items: center;
  align-items: center;
}

section {
  display: grid;
  border: 1px solid white;
  border-radius: 6px;
  height: 600px;

  > div {
    border: 1px solid white;
    display: grid;
  }
}

ul {
  margin: 20px;
}
.indent {
  padding: 0px;
  margin: 0 0 0 20px;
  li {
    margin: 0px;
  }
}
</style>
