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
        <icon name="heart" class="instaPictureHeart" color="#D75A4A" v-show="like"></icon>
        <img id="instagramPicture" :src="require(`../assets/${imgUrl}`)" />
      </div>

      <div class="ui">
        <ul>
          <icon
            name="heart"
            class="heartIcon instagramUIHeart"
            color="#D75A4A"
            @click.native="likeUI"
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
            text="Demo"
            border-color="#f0db4f"
            text-color="black"
            iconName="javascript"
            style="font-weight: 800"
            :linkto="hostLink"
          ></AwesomeButton>
          <AwesomeButton
            text="Github"
            border-color="black"
            text-color="white"
            iconName="github"
            :linkto="githubLink"
          ></AwesomeButton>
          <AwesomeButton
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
    return { like: false };
  },
  components: {
    icon,
    AwesomeButton
  },
  methods: {
    likeUI: function(e) {
      this.like = !this.like;
      let instagramUIHeart = e.path[5].getElementsByClassName(
        "instagramUIHeart"
      )[0];
      let instaPictureHeart = e.path[5].getElementsByClassName(
        "instaPictureHeart"
      )[0];
      instagramUIHeart.classList.toggle("liked", this.like);
      instagramUIHeart.classList.toggle("unliked", !this.like);
      instaPictureHeart.classList.toggle("likedBigHeart", this.like);
    }
  },
  mounted() {
    let instagramPicture = document.getElementById("instagramPicture");

    instagramPicture.addEventListener("dblclick", () => {
      this.like = !this.like;
    });
  }
};
</script>
