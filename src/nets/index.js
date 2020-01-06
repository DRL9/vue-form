import axios from "axios";
import store from "../store";

// 默认配置
axios.defaults.baseURL = "http://localhost:8082";
axios.defaults.timeout = 5000;

// 拦截器
axios.interceptors.request.use(
  function(config) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: store.state.authorization
      }
    };
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    if (res.data.code == 200) {
      res.data.success = true;
    }
    return res.data;
  },
  err => {
    return Promise.resolve({
      success: false,
      message: err.message
    });
  }
);

export async function login(formData) {
  return axios.post("/login", formData);
}

export async function getUserInfo() {
  return axios.post("/userinfo");
}
