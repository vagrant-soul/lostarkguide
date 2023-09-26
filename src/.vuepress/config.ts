import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "命运方舟-LostArk记事本",
  description: "关于命运方舟的个人记录",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
