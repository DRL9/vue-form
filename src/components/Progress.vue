<template>
  <div class="progress-wrap" ref="progress">
    <el-progress
      :percentage="value"
      :text-inside="true"
      :stroke-width="16"
    ></el-progress>
    <span
      class="progress-slider"
      ref="slider"
      :style="{ left: value + '%' }"
      @drag="preventDefault"
      @dragstart="preventDefault"
      @mousedown="onMouseDown"
      @mouseup="onEnd"
      @mouseout="onEnd"
      @mousemove="onMouseMove"
    ></span>
  </div>
</template>

<script>
export default {
  props: ["value"],
  mounted() {
    this.width = this.$refs.progress.getBoundingClientRect().width;
  },
  methods: {
    preventDefault(e) {
      e.preventDefault();
    },
    onMouseDown(e) {
      this.startX = e.clientX;
    },
    onEnd() {
      this.startX = null;
    },
    onMouseMove(e) {
      if (this.startX) {
        let delta = ((e.clientX - this.startX) * 100) / this.width;
        let newProgress = this.value + delta;
        newProgress = Math.max(newProgress, 0);
        newProgress = Math.min(newProgress, 100);
        this.$emit("input", newProgress);
        this.startX = e.clientX;
      }
    }
  }
};
</script>

<style scoped>
.progress-wrap {
  position: relative;
}
.progress-slider {
  position: absolute;
  transform: translate(-100%, -5px);
  top: 0;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #409eff;
  cursor: pointer;
}
.progress-wrap >>> .el-progress-bar__inner {
  transition: none;
}
.progress-wrap >>> .el-progress-bar__innerText {
  display: none;
}
</style>
