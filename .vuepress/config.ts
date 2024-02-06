import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "cwh个人博客",
  description: "一个普通人，喜欢思考编程",
  base:'/vuepressv2/',
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/jojohead.png",
    author: "cwh",
    authorAvatar: "/jojohead.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    head: [
      ['link', { rel: 'icon', href: '/jojohead.png' }]
    ],
    // series 为原 sidebar
    series: {

      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        children: [
          { text: "后端", link: "/docs/theme-reco/theme" },
          { text: "前端", link: "/blogs/后端/2023" },
        ],
      },
      {
        text: "后端",
        children: [
          { text: "springboot", link: "/docs/theme-reco/theme" },
          { text: "springcloud", link: "/blogs/后端/2023" },
          { text: "spring", link: "/blogs/后端/2023" },
          { text: "redis", link: "/blogs/后端/2023" },
          { text: "redis", link: "/blogs/后端/2023" },
        ],
      },
      {
        text: "金融",
        children: [
          { text: "后端", link: "/docs/theme-reco/theme" },
          { text: "前端", link: "/blogs/后端/2023" },
        ],
      },
      {
        text: "web3",
        children: [
          { text: "后端", link: "/docs/theme-reco/theme" },
          { text: "前端", link: "/blogs/后端/2023" },
        ],
      },
      {
        text: "算法",
        children: [
          { text: "后端", link: "/docs/theme-reco/theme" },
          { text: "前端", link: "/blogs/后端/2023" },
        ],
      },
      {
        text: "面经",
        children: [
          { text: "后端", link: "/docs/theme-reco/theme" },
          { text: "前端", link: "/blogs/后端/2023" },
        ],
      },
      {
        text: "ai",
        children: [
          { text: "后端", link: "/docs/theme-reco/theme" },
          { text: "前端", link: "/blogs/后端/2023" },
        ],
      },
      { text: "标签", link: "/tags/tag1/1/" },
      {
        text: "项目",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
      {
        text: "生活",
        children: [
          { text: "吃吃吃", link: "/docs/theme-reco/theme" },
          { text: "宅家看番捏", link: "/blogs/other/guide" },
          { text: "抽象人生", link: "/blogs/other/guide" },
        ],
      },
      {
        text: "个人", link: "/blogs/self/api.md"
      },
      {
        text: "羁绊",
        children: [
          { text: "介绍捏", link: "/docs/theme-reco/theme" },
          { text: "人生观", link: "/blogs/other/guide" },
        ],
      },
    ],
    bulletin: {
      // body: [
      //   {
      //     type: "text",
      //     content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      //   {
      //     type: "title",
      //     content: "QQ 群",
      //   },
      //   {
      //     type: "text",
      //     content: `
      //     <ul>
      //       <li>QQ群1：1037296104</li>
      //       <li>QQ群2：1061561395</li>
      //       <li>QQ群3：962687802</li>
      //     </ul>`,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      //   {
      //     type: "title",
      //     content: "GitHub",
      //   },
      //   {
      //     type: "text",
      //     content: `
      //     <ul>
      //       <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
      //       <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
      //     </ul>`,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      //   {
      //     type: "buttongroup",
      //     children: [
      //       {
      //         text: "打赏",
      //         link: "/docs/others/donate.html",
      //       },
      //     ],
      //   },
      // ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
