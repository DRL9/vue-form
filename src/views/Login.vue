<template>
  <div class="page-login">
    <div class="form-wrap">
      <the-login-form @submit="onSubmit" :loading.sync="loginLoading" />
    </div>
  </div>
</template>

<script>
import TheLoginForm from "@/components/TheLoginForm";
export default {
  components: {
    TheLoginForm
  },
  data() {
    return {
      loginLoading: false
    };
  },
  methods: {
    async onSubmit(formData) {
      let result = await this.$store.dispatch("login", formData);
      if (result.success) {
        this.$message({
          type: "success",
          message: "登录成功"
        });
        const toPath = this.$route.query.redirect || "/dashboard";
        this.$router.replace({
          path: toPath
        });
      } else {
        this.$message({
          type: "warning",
          message: result.message
        });
      }
      this.loginLoading = false;
    }
  }
};
</script>

<style scoped>
.page-login {
  display: flex;
  height: 100vh;
  background-color: #eee;
}
.form-wrap {
  margin: auto;
  padding: 2em;
  background-color: #fff;
  border-radius: 10px;
}
</style>
