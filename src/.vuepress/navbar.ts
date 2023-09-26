import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/build/",
  {
    text: "技能点",
    icon: "lightbulb",
    prefix: "/jinengdian/",
    children: [
      {
        text: "前期必做",
        icon: "lightbulb",
        prefix: "bar/",
        children: [
          "baz",
          "baz1"
        ],
      },
      {
        text: "后期收集",
        icon: "lightbulb",
        prefix: "foo/",
        children: [
          "ray", 
          "ray1"
        ],
      },
    ],
  },
  // {text: "V2 文档",icon: "book",link: "https://theme-hope.vuejs.press/zh/",},
  {text: "常见问题", icon: "info", link: "/question.md"},
  {text: "致谢", icon: "advance", link: "/thanks.md"},
  {text: "QQ频道交流", icon: "slides", link: "https://pd.qq.com/s/kl9dor"},
  {text: "爱发电", icon: "note", link: "https://afdian.net/a/cherishmoon"},
]);
