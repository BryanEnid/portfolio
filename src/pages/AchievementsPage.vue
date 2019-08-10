<template>
  <div class="container" id="Achievements" :class="{ blur: blur }">
    <div v-if="screenSize">
      <h1>Achievements</h1>
      <header class="instagram">
        <!-- <img
          class="logo"
          src="https://instagram.fatl1-2.fna.fbcdn.net/vp/89d294b248148224d7f62b2a770bcf30/5DCE830F/t51.2885-15/sh0.08/e35/s640x640/12797659_1133362700028483_791283141_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net"
        />-->
        <div class="logo">
          <h2>bryanenid</h2>
          <p>Georgia State University</p>
        </div>
      </header>
      <img
        src="https://instagram.fatl1-2.fna.fbcdn.net/vp/20fc91e077287bd55fa969a76f9c212e/5DCBFF8A/t51.2885-15/sh0.08/e35/s640x640/53539954_420380995391655_1470166937302915658_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net"
      />
      <div class="ui">
        <ul>
          <icon name="heart" class="icon"></icon>
        </ul>
        <div class="description">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero cumque iusto sapiente architecto soluta harum, aliquam ab perferendis dolorum nemo reiciendis minima reprehenderit. Ab soluta obcaecati vero odio ullam ex.</p>
        </div>
        <form>
          <textarea
            name="comment"
            id="comment"
            placeholder="Add a comment..."
            aria-label="Add a comment..."
            wrap="hard"
            autocomplete="off"
            autocorrect="off"
          ></textarea>
        </form>
      </div>
    </div>

    <!-- --------------------------------------------------------- -->
    <!--                    ⇑    IF MOBILE    ⇑                    -->
    <!-- --------------------------------------------------------- -->

    <!--                                                           -->

    <!-- --------------------------------------------------------- -->
    <!--                    ⇓    IF DESKTOP   ⇓                    -->
    <!-- --------------------------------------------------------- -->

    <div v-else></div>
  </div>
</template>

<script>
import icon from "../components/AppIcons.vue";

export default {
  props: {
    screenSize: Boolean,
    blur: Boolean
  },
  components: {
    icon
  }
};
</script>

<style lang="less">
@media screen and (max-width: 1100px) {
  #comment {
    border: none;
    width: 100%;
    height: 100px;
    resize: none;
  }
  #comment:focus {
    outline: none;
  }

  #Achievements {
    // height: calc(100vh - 61px);
    background: white;
    padding: 101px 0 0 0;
    margin-top: -40px;

    .logo {
      padding: 20px 10px 20px 70px;
      background: #fafafa;
      border-top: 1px solid #e6e6e6;
    }

    .icon {
      list-style: none;
      svg {
        fill: red;
        font-size: 20px;
      }
    }

    .logo:before {
      background-size: 50px 50px;
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      transform: translateX(calc(-100% - 10px));
      content: "";
      background-image: url("https://instagram.fatl1-2.fna.fbcdn.net/vp/89d294b248148224d7f62b2a770bcf30/5DCE830F/t51.2885-15/sh0.08/e35/s640x640/12797659_1133362700028483_791283141_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net");
    }

    img {
      object-fit: cover;
      object-position: 50% 50%;
      width: 100%;
    }

    h1 {
      text-align: center;
      margin: 0 0 40px 0;
    }

    .ui {
      padding: 5px 10px;
      > * {
        margin: 10px;
      }
    }
  }
}
</style>
