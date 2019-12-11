<template>
  <div class="btn" :style="style" @click="circleEffect">
    <icon v-if="this.$props.iconName" :name="getIconName" :color="getIconColor"></icon>
    {{ text }}
  </div>
</template>

<script>
import icon from "../components/AppIcons.vue";

export default {
  props: {
    linkto: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: true
    },
    borderColor: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: false
    },
    transparentBackground: {
      type: Boolean,
      required: false
    },
    screenSize: {
      type: Boolean,
      required: false
    },
    iconName: {
      type: String,
      required: false
    }
  },
  components: {
    icon
  },
  computed: {
    style() {
      let background = "";
      let cursor = "default";
      if (!this.$props.transparentBackground) {
        background = this.$props.borderColor;
      }
      if (this.$props.linkto) {
        cursor = "pointer";
      }
      return `
      background-color: ${background};
      border-color: ${this.$props.borderColor};
      color: ${this.$props.textColor};
      z-index: 1;
      cursor: ${cursor}; 
      `;
    },
    getIconName() {
      return `${this.$props.iconName}`;
    },
    getIconColor() {
      return `${this.$props.textColor}`;
    }
  },
  methods: {
    circleEffect({ x, y, currentTarget }) {
      if (this.$props.screenSize) {
        currentTarget.style.background = `${this.$props.borderColor}`;
        setTimeout(() => {
          currentTarget.style.background = "initial";
        }, 1000);
      } else if (!this.$props.screenSize) {
        let div = document.createElement("div");
        div.className = "circleonclick";

        let randomID = "";
        let characters = "abcdefghijklmnopqrstuvwxyz";
        let charactersLength = characters.length;

        for (let i = 0; i < 20; i++) {
          randomID += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        div.id = randomID;

        let borderColor =
          getComputedStyle(currentTarget).borderColor ||
          getComputedStyle(currentTarget)["-moz-border-end-color"] ||
          getComputedStyle(currentTarget).borderBottomColor;

        let elemPosition = currentTarget.getBoundingClientRect();
        let left = parseFloat(x - (elemPosition.x || elemPosition.left));
        let top = parseFloat(y - (elemPosition.y || elemPosition.top));

        // Styles
        let style = div.style;
        style.left = `${left}px`;
        style.top = `${top}px`;
        style.background = `${borderColor}`;
        style.zIndex = `-1`;
        style.borderRadius = `50%`;
        style.width = `4px`;
        style.height = `4px`;
        style.position = `absolute`;
        style.animation = `grow 3s forwards`;
        style.filter = `brightness(130%)`;

        currentTarget.appendChild(div);

        setTimeout(() => {
          let idDOM = document.getElementById(`${randomID}`);
          currentTarget.removeChild(idDOM);
        }, 2700);

        setTimeout(() => {
          if (this.$props.linkto && this.$props.linkto != "#") window.open(this.$props.linkto);
        }, 500);
      }

      this.$emit("wasClicked", this.$props.text);
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  border: solid 1px;
  border-radius: 3px;
  display: inline-block;
  padding: 5px 20px;
  margin: 0 10px;
  overflow: hidden;
  position: relative;

  > * {
    display: inline;
    vertical-align: sub;
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  transition: background 0.4s;
}
</style>
