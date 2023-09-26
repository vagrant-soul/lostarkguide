import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "职业技能加点",
      icon: "laptop-code",
      prefix: "build/",
      link: "build/",
      children: "structure",
    },
    {
      text: "技能点收集",
      icon: "book",
      prefix: "jinengdian/",
      children: "structure",
    },
    {
      text: "冒险之书",
      icon: "book",
      prefix: "maoxian/",
      children: "structure",
    },
    "slides",
  ],
});
