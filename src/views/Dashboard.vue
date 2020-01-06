<template>
  <div class="page-dashboard">
    <el-menu :default-active="activeIndex" mode="horizontal" router>
      <el-menu-item v-for="item in menus" :index="item.path" :key="item.name">{{
        item.name
      }}</el-menu-item>
    </el-menu>
    <el-container>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      activeIndex: this.$route.path
    };
  },
  computed: {
    ...mapGetters(["menus"])
  }
};
</script>
