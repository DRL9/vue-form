<template>
  <div class="page-menu1">
    <el-row>
      <Progress v-model="progress" />
    </el-row>
    <br />
    <br />
    <el-row>
      <el-button @click="add">+</el-button>
      <el-button @click="minus">-</el-button>
    </el-row>
  </div>
</template>

<script>
import Progress from "@/components/Progress";

export default {
  components: {
    Progress
  },
  data() {
    return {
      progress: 50
    };
  },
  methods: {
    add() {
      this.progress++;
    },
    minus() {
      this.progress--;
    }
  }
};
</script>
