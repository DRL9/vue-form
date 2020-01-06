<template>
  <div>
    <el-input v-model="value" type="text" ref="input" />
    <br />
    <br />
    <el-button @click="click">click me</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "we"
    };
  },
  methods: {
    click() {
      console.log("1", this.value);
      this.value = "another";
      console.log("2", this.value);
      console.log("3", this.$refs.input.value);
      this.$nextTick(() => {
        console.log("4", this.$refs.input.value);
      });
    }
  }
};
</script>
