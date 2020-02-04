import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//{ path: "", redirect: { name: "IndexPage" } },
export const routes = [{ path: "/", redirect: { name: "IndexPage" } }];

// 自动添加路由
const map = new Map();
const dirReg = /^\.\/([a-z]+)$/; // 匹配目录
const req = require.context("../view", true, /\.vue$/);
req.keys().forEach(fileUrl => {
  0;
  // 找到文件目录
  if (fileUrl.includes("Page")) {
    const name =
      fileUrl.name || fileUrl.replace(/^\.\/(.*\/)?/, "").replace(/\.vue$/, "");
    !map.has(name) ? map.set(name, fileUrl) : null;
  }
});

[...map.keys()].forEach(key => {
  routes.push({
    path: `/${key}`,
    name: key,
    meta: {
      members: true
    },
    component: req(map.get(key)).default
  });
});

const router = new VueRouter({
  //   mode: "history",
  //   base: process.env.BASE_URL,
  routes
});

export default router;
