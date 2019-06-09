<template>
  <div class="btn" :style="style" @click="circleEffect">{{text}}</div>
</template>

<script>
export default {
  props: {
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
    }
  },
  computed: {
    style() {
      return `
      border-color: ${this.$props.borderColor};
      color: ${this.$props.textColor};
      `;
    }
  },
  methods: {
    circleEffect({ x, y, target }) {
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

      let borderColor = getComputedStyle(target).borderColor;
      let elemPosition = target.getBoundingClientRect();
      let left = parseFloat(x - elemPosition.x);
      let top = parseFloat(y - elemPosition.y);
      div.setAttribute(
        "style",
        `left: ${left}px;
        top: ${top}px; 
        background: ${borderColor}; 
        z-index: -1;
        border-radius: 50%;
        width: 4px;
        height: 4px;
        position: absolute;
        animation: grow 3s forwards;`
      );
      target.appendChild(div);

      setTimeout(() => {
        let idDOM = document.getElementById(`${randomID}`);
        target.removeChild(idDOM);
      }, 2700);

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
  padding: 10px 20px;
  margin: 0 10px;
  overflow: hidden;
  position: relative;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  transition: background 0.4s;
}
</style>