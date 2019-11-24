<template>
  <div class="container" id="Achievements" :class="{ blur: blur }">

    <h1>Achievements</h1>

    <achievement-post
      loc="Georgia State University - HackGSU Fall 2019"
      hostLink="https://bryanenid.github.io/doorflash/"
      githubLink=""
      devpostLink="https://devpost.com/software/foodisah"
      imgURL="../assets/ach1.jpg"
    ></achievement-post>

    <achievement-post
      loc="Georgia State University - PantherHack"
      hostLink=""
      githubLink=""
      devpostLink="https://devpost.com/software/inform-me"
      imgURL="../assets/ach1.jpg"
    ></achievement-post>

  </div>
</template>

<script>
import achievementPost from "../components/AchievementPost.vue";

export default {
  props: {
    screenSize: Boolean,
    blur: Boolean
  },
  components: {
    achievementPost
  }
};
</script>

<style lang="less">
@tablet: ~"(max-width: 991px)";
@phone: ~"(max-width: 767px)";

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
  margin: 70px auto;
  background: white;
  padding: 41px 0 82px 0;
  border-radius: 10px;

  max-width: 1200px;

  ::-webkit-scrollbar {
    width: 5px;
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

  textarea {
    scrollbar-color: #888 white;
    scrollbar-width: thin;
  }

  .userPicture {
    padding: 20px 10px 20px 70px;
    background: #fafafa;
    border-top: 1px solid #e6e6e6;

    h2 {
      font-size: 14px;
      margin-bottom: 4px;
    }

    p {
      font-size: 13px;
      margin-top: 4px;
    }
  }

  .heartIcon {
    list-style: none;
    display: inline;
    svg {
      stroke: #d75a4a;
      stroke-width: 4px;
      font-size: 25px;

      > * {
        fill: white;
        transition: fill 0.1s ease-in-out;
      }
    }
  }

  .desktop-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "ui instainsta";
    .instaPictureAndHeartContainer {
      grid-area: instainsta;
      position: relative;
      #instagramPicture {
        object-fit: cover;
        object-position: 100% 50%;
        width: 100%;
        height: 100%;
      }
      .instaPictureHeart {
        pointer-events: none;
        list-style: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        svg {
          font-size: 200px;

          > * {
            fill: rgba(255, 255, 255, 0.9);
            transition: fill 0.1s ease-in-out;
          }
        }
      }
    }
    .ui {
      grid-area: ui;
      padding: 5px 10px;

      ul * {
        vertical-align: middle;
        display: inline;
      }

      #counter {
        margin-left: 10px;
      }

      > * {
        margin: 30px;
      }

      .demoLinks {
        text-align: center;
        .btn {
          display: inline-block;
          padding: 10px 20px;
          margin: 10px;
        }
        .btn:last-child {
          padding: 13px 20px;
        }
      }
    }
  }

  .liked {
    svg {
      -webkit-animation-name: liked; /* Safari 4.0 - 8.0 */
      -webkit-animation-duration: 0.2s; /* Safari 4.0 - 8.0 */
      animation-name: liked;
      animation-duration: 0.2s;

      > * {
        fill: #d75a4a;
      }
    }
  }

  .unliked {
    svg {
      -webkit-animation-name: unliked; /* Safari 4.0 - 8.0 */
      -webkit-animation-duration: 0.2s; /* Safari 4.0 - 8.0 */
      animation-name: unliked;
      animation-duration: 0.2s;

      > * {
        fill: white;
      }
    }
  }

  @-webkit-keyframes liked {
    0% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes liked {
    from {
      transform: scale(1.3);
    }
    to {
      transform: scale(1);
    }
  }
  @-webkit-keyframes unliked {
    0% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes unliked {
    from {
      transform: scale(1.3);
    }
    to {
      transform: scale(1);
    }
  }

  .likedBigHeart {
    svg {
      -webkit-animation-name: likedBigHeart; /* Safari 4.0 - 8.0 */
      -webkit-animation-duration: 0.2s; /* Safari 4.0 - 8.0 */
      animation-name: likedBigHeart;
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
    }
  }

  @-webkit-keyframes likedBigHeart {
    0% {
      transform: scale(1.4);
      opacity: 0.9;
    }
    5% {
      transform: scale(1.6);
      opacity: 0.9;
    }
    60% {
      transform: scale(1.4);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes likedBigHeart {
    0% {
      transform: scale(1.4);
      opacity: 0.9;
    }
    5% {
      transform: scale(1.6);
      opacity: 0.9;
    }
    60% {
      transform: scale(1.4);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  .userPicture:before {
    background-size: 50px 50px;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    transform: translate(calc(-100% - 10px), -6px;);
    content: "";
    background-image: url("../assets/instProfile.jpg");

    object-fit: cover;
    object-position: 50% 50%;
  }

  h1 {
    text-align: center;
    margin: 0 0 40px 0;
    color: #333;
  }
}

@media @phone {
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
    margin-top: 70px;
    background: white;
    padding: 41px 0 0 0;
    border-radius: 10px;

    ::-webkit-scrollbar {
      width: 5px;
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

    textarea {
      scrollbar-color: #888 white;
      scrollbar-width: thin;
    }

    .userPicture {
      padding: 20px 10px 20px 70px;
      background: #fafafa;
      border-top: 1px solid #e6e6e6;

      h2 {
        font-size: 14px;
        margin-bottom: 4px;
      }

      p {
        font-size: 13px;
        margin-top: 4px;
      }
    }

    .heartIcon {
      list-style: none;
      display: inline;
      svg {
        stroke: #d75a4a;
        stroke-width: 4px;
        font-size: 25px;

        > * {
          fill: white;
          transition: fill 0.1s ease-in-out;
        }
      }
    }

    .desktop-wrapper {
      display: initial;
      .instaPictureAndHeartContainer {
        position: relative;
        #instagramPicture {
          object-fit: cover;
          object-position: 50% 50%;
          width: 100%;
        }
        .instaPictureHeart {
          pointer-events: none;
          list-style: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          svg {
            font-size: 37vw;

            > * {
              fill: rgba(255, 255, 255, 0.9);
              transition: fill 0.1s ease-in-out;
            }
          }
        }
      }
      .ui {
        padding: 5px 10px;

        ul * {
          vertical-align: middle;
          display: inline;
        }

        #counter {
          margin-left: 10px;
        }

        > * {
          margin: 10px;
        }
        color: #666;
      }
    }

    .liked {
      svg {
        -webkit-animation-name: liked; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 0.2s; /* Safari 4.0 - 8.0 */
        animation-name: liked;
        animation-duration: 0.2s;

        > * {
          fill: #d75a4a;
        }
      }
    }

    .unliked {
      svg {
        -webkit-animation-name: unliked; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 0.2s; /* Safari 4.0 - 8.0 */
        animation-name: unliked;
        animation-duration: 0.2s;

        > * {
          fill: white;
        }
      }
    }

    @-webkit-keyframes liked {
      0% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes liked {
      from {
        transform: scale(1.3);
      }
      to {
        transform: scale(1);
      }
    }
    @-webkit-keyframes unliked {
      0% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes unliked {
      from {
        transform: scale(1.3);
      }
      to {
        transform: scale(1);
      }
    }

    .likedBigHeart {
      svg {
        -webkit-animation-name: likedBigHeart; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 0.2s; /* Safari 4.0 - 8.0 */
        animation-name: likedBigHeart;
        animation-duration: 1.2s;
        animation-fill-mode: forwards;
      }
    }

    @-webkit-keyframes likedBigHeart {
      0% {
        transform: scale(1.4);
        opacity: 0.9;
      }
      5% {
        transform: scale(1.6);
        opacity: 0.9;
      }
      60% {
        transform: scale(1.4);
        opacity: 0.9;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }

    @keyframes likedBigHeart {
      0% {
        transform: scale(1.4);
        opacity: 0.9;
      }
      5% {
        transform: scale(1.6);
        opacity: 0.9;
      }
      60% {
        transform: scale(1.4);
        opacity: 0.9;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }

    .userPicture:before {
      background-size: 50px 50px;
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      transform: translate(calc(-100% - 10px), -6px;);
      content: "";
      background-image: url("https://instagram.fatl1-2.fna.fbcdn.net/vp/89d294b248148224d7f62b2a770bcf30/5DCE830F/t51.2885-15/sh0.08/e35/s640x640/12797659_1133362700028483_791283141_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net");

      object-fit: cover;
      object-position: 50% 50%;
    }

    h1 {
      text-align: center;
      margin: 0 0 40px 0;
      color: #333;
    }
  }
}
</style>
