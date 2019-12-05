<template>
  <div>
    <header class="instagram">
      <div class="userPicture">
        <h2>bryanenid</h2>
        <p>{{ loc }}</p>
      </div>
    </header>

    <div class="desktop-wrapper">
      <div class="instaPictureAndHeartContainer">
        <icon
          name="heart"
          class="instaPictureHeart"
          :class="{likedBigHeart: like}"
          color="#D75A4A"
          v-show="like"
        ></icon>
        <img
          class="instagramPicture"
          :src="require(`../assets/${imgUrl}`)"
          @dblclick="like = !like"
        />
      </div>

      <div class="ui">
        <ul>
          <icon
            name="heart"
            :class="{liked: like, unliked: !like}"
            class="heartIcon instagramUIHeart"
            color="#D75A4A"
            @click.native="like = !like"
          ></icon>
          <li id="counter">0 Likes</li>
        </ul>
        <div class="description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero cumque iusto sapiente architecto soluta harum, aliquam ab perferendis dolorum nemo reiciendis minima reprehenderit. Ab soluta obcaecati vero odio ullam ex.
            <br />
            <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam at quo, earum magnam enim odit soluta perspiciatis temporibus, laborum, vero id nulla iusto fugiat obcaecati voluptas corporis incidunt explicabo aliquid?
          </p>
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

        <div class="demoLinks">
          <h2>Check the app</h2>
          <br />
          <AwesomeButton
            v-if="hostLink"
            text="Demo"
            border-color="#f0db4f"
            text-color="black"
            iconName="javascript"
            style="font-weight: 800"
            :linkto="hostLink"
          ></AwesomeButton>
          <AwesomeButton
            v-if="githubLink"
            text="Github"
            border-color="black"
            text-color="white"
            iconName="github"
            :linkto="githubLink"
          ></AwesomeButton>
          <AwesomeButton
            v-if="devpostLink"
            text="DEVPOST"
            border-color="#003e54"
            text-color="white"
            :linkto="devpostLink"
          ></AwesomeButton>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import icon from "../components/AppIcons.vue";
import { setTimeout } from "timers";
import AwesomeButton from "../components/LandingPageButton.vue";

export default {
  props: {
    screenSize: Boolean,
    blur: Boolean,
    loc: String,
    hostLink: String,
    githubLink: String,
    devpostLink: String,
    imgUrl: String
  },
  data() {
    return { like: false, default: true };
  },
  components: {
    icon,
    AwesomeButton
  }
};
</script>
