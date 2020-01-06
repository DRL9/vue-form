<template>
  <el-form
    label-width="100px"
    label-position="left"
    ref="form"
    :model="formData"
    :rules="formRule"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="formData.pwd" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading"
        >登录</el-button
      >
      <el-button @click="onReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ["loading"],
  data() {
    return {
      formData: {
        username: "",
        pwd: ""
      },
      formRule: {
        username: [
          { required: true, message: "请填写用户名", trigger: "blur" }
        ],
        pwd: [{ required: true, message: "请填写密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(isValid => {
        if (!isValid) {
          return;
        }
        this.$emit("update:loading", true);
        this.$emit("submit", this.formData);
      });
    },
    onReset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
