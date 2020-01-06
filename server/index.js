const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(express.json({}));

const authRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    isMenu: false
  },
  {
    path: "/dashboard/menu1",
    name: "menu11",
    isMenu: true
  },
  {
    path: "/dashboard/menu2",
    name: "menu2",
    isMenu: true
  }
];

const userInfo = {
  username: "ddc",
  authRoutes
};

app.use(cors());
app.use((req, res, next) => {
  // 授权验证处理， 暂时没时间写
  next();
});

app.post("/login", (req, res) => {
  if (req.body.username !== userInfo.username) {
    return res.status(401).end();
  }
  res.send({
    code: 200,
    data: {
      authorization: jwt.sign(
        {
          username: req.username
        },
        "app secret"
      ),
      ...userInfo
    }
  });
});

app.use("/userinfo", (req, res) => {
  res.send({
    code: 200,
    data: {
      ...userInfo
    }
  });
});

app.listen(8082);
