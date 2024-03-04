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
    docsDir: "/docs",
    lastUpdatedText: "",
    // 加密整个网站
    // password: '2c6b5ac39acd59005bbd7fa05c433513',
    head: [
      ['link', { rel: 'icon', href: '/jojohead.png' }]
    ],
    // series 为原 sidebar
    series: {
      "/blogs/front/vue2":[
        {
          text: "基础语法",
          children: [
            {text:'响应式数据绑定',link:'vuex'},
            {text:'指令系统',link:'b'},
            {text:'生命周期',link:'lifeCycle'},
          ],
        },
        {
          text: "进阶版本",
          children: ["home", "theme"],
        },
        {
          text: "项目实践",
          children: ["home", "theme"],
        },
      ],
      "/blogs/front/vue3":[
        {
          text: "基础语法",
          children: [
            {text:'响应式数据绑定',link:'vuex'},
            {text:'指令系统',link:'b'},
            {text:'生命周期',link:'lifeCycle'},
          ],
        },
        {
          text: "进阶版本",
          children: ["home", "theme"],
        },
        {
          text: "项目实践",
          children: ["home", "theme"],
        },
      ],
      "/docs/theme-reco/": [
        {
          text: "进阶",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
      "/docs/springcloudAlibaba/": [
        {
          text: "组件",
          children: ["Nacos", "Ribbon","Feign","Sentinel","Seata","Gateway","SkyWalking"],
        },
        {
          text: "进阶",
          children: [
            {text:'从0到1',link:'base'},
            {text:'分析RuoYi-Cloud',link:'ruoYiCloud'},
          ],
        },
      ],
      "/blogs/self_todo_list/":[
        {
          text: "年份", link:'index.md',
          children: [
            {text:'2023',link:'2023'},
            {text:'2024',link:'2024'},
            {text:'2025',link:'2025'},
          ],
        }
      ],
      "/blogs/interface/":[
        {
          text: "接口",
          children: [
            {text:'pay',link:'pay'},
            {text:'twitter',link:'twitter'},
            {text:'other',link:'2025'},
          ],
        }
      ],
      "/blogs/thread/":[
        {
          text: "基础",
          children: [
            {text:'多线程',link:'thread'},
            {text:'线程池',link:'threadPool'},
          ],
        },
        {
          text: "进阶",
          children: [
            {text:'多线程',link:'thread'},
            {text:'线程池',link:'threadPool'},
          ],
        }
      ],
      "/blogs/policy/":[
        {
          text: "基本",
          children: [
            {text:'社会保障',link:'socialSecurity'},
            {text:'住房公积金',link:'housingFund'},
            {text:'教育',link:'education'},
            {text:'婚育政策',link:'marriageAndBearing'},
            {text:'就业',link:'work'},
            {text:'社会救助',link:'help'},
            {text:'文化体育',link:'sport'}
          ],
        },
        {
          text: "其他",
          children: [
            {text:'参军',link:'army'},
            // {text:'线程池',link:'threadPool'},
          ],
        }
      ],

      "/blogs/algorithm/":[
        {
          text: "基本",
          children: [
            {text:'字符串',link:'socialSecurity'},
            {text:'数组',link:'housingFund'},
            {text:'矩阵',link:'sport'},
            {text:'位运算',link:'education'},
            {text:'链表',link:'marriageAndBearing'},
          ],
        },
        {
          text: "进阶",
          children: [
            {text:'树',link:'work'},
            {text:'图',link:'help'},
            {text:'动态规划',link:'army'},
            // {text:'线程池',link:'threadPool'},
          ],
        }
      ],
      "/docs/db/":[
        {
          text: "mysql",
          children: [
            {text:'安装',link:'mysql_install'},
            {text:'卸载',link:'mysql_uninstall'},
            {text:'使用',link:'mysql_use'},
            {text:'集群',link:'mysql_colony'},
          ],
        },
        {
          text: "达梦",
          children: [
            {text:'安装',link:'dm_install'},
            {text:'卸载',link:'dm_uninstall'},
            {text:'使用',link:'dm_use'},
            // {text:'线程池',link:'threadPool'},
          ],
        },
        {
          text: "人大金仓",
          children: [
            {text:'介绍',link:'kingbase_install'},
            {text:'安装',link:'kingbase_install'},
            {text:'卸载',link:'kingbase_uninstall'},
            {text:'迁移',link:'kingbase_move'},
            {text:'语法',link:'kingbase_use'},
            // {text:'线程池',link:'threadPool'},
          ],
        },
        {
          text: "瀚高",
          children: [
            {text:'安装',link:'hg_install'},
            {text:'卸载',link:'hg_uninstall'},
            {text:'使用',link:'hg_use'},
            // {text:'线程池',link:'threadPool'},
          ],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" ,icon:'Compass'},
      {
        text: "前端",
        children: [
          { text: "Vue2", link: "/blogs/front/vue2/vuex.md" },
          { text: "Vue3", link: "/blogs/front/vue3/vuex.md" },
          { text: "ElementUI", link: "/blogs/front/vue3/vuex.md" },
        ],
        icon:'Screen'
      },
      {
        text: "后端",
        children: [
          { text: "springboot", link: "/docs/theme-reco/theme" },
          { text: "springcloud", link: "/blogs/后端/2023" },
          { text: "springcloudAlibaba", link: "/docs/springcloudAlibaba/Nacos.html" },
          { text: "spring", link: "/blogs/后端/2023" },
          { text: "cache", link: "/blogs/后端/2023" },
          { text: "mq", link: "/blogs/后端/2023" },
          { text: "db", link: "/docs/db/mysql_install.md" },
          { text: "日志", link: "/blogs/后端/2023" },
          { text: "搜索引擎", link: "/blogs/后端/2023" },
          { text: "任务调度", link: "/blogs/后端/2023" },
          { text: "其他工具", link: "/blogs/后端/2023" },
          { text: "持久层框架", link: "/blogs/后端/2023" },
        ],
        icon:'BareMetalServer'
      },
      {
        text: "金融",
        children: [
          { text: "投资与资本市场", link: "/blogs/后端/2023" },
          { text: "金融规划与理财", link: "/docs/theme-reco/theme" },
          { text: "公司金融", link: "/blogs/后端/2023" },
          { text: "金融科技", link: "/blogs/后端/2023" },
        ],
        icon:'ConnectionTwoWay'
      },
      {
        text: "web3",
        children: [
          { text: "区块链", link: "/docs/theme-reco/theme" },
          { text: "Solidity", link: "/blogs/后端/2023" },
          { text: "空投", link: "/blogs/后端/2023" },
        ],
        icon:'Webhook'
      },
      {
        text: "算法", link: "/blogs/algorithm/index.md",icon:'CalculationAlt'
      },
      {
        text: "其他",
        children: [
          { text: "线程", link: "/blogs/thread/thread.md" },
          { text: "流程", link: "/blogs/后端/2023" },
          { text: "接口", link: "/blogs/interface/index.md" },
          { text: "部署", link: "/blogs/thread/thread.md" },
          { text: "美化", link: "/blogs/blog/vupress_beautify.md" },
        ],
        icon:'WarningOther'
      },
      {
        text: "ai",
        children: [
          { text: "模型", link: "/docs/theme-reco/theme" },
          { text: "资源", link: "/blogs/后端/2023" },
        ],
        icon:'EdgeDevice'
      },
      { text: "标签", link: "/tags/tag1/1/", icon:'Tag'},
      {
        text: "项目",
        children: [
          { text: "优秀开源项目", link: "/blogs/project/small.md" },
          { text: "个人小项目", link: "/blogs/project/big.md" },
        ],
        icon:'ContainerRegistry'
      },
      {
        text: "生活",
        children: [
          { text: "吃吃吃", link: "/blogs/food/index.md" },
          { text: "宅家看番捏", link: "/blogs/anime/index.md" },
          { text: "政策福利", link: "/blogs/policy/" },
          { text: "抽象人生", link: "/blogs/life/index.md" },
          { text: "有趣灵魂", link: "/blogs/soul/index.md" },
        ],
        icon:'SailboatCoastal'
      },
      {
        text: "个人",
        children: [
          { text: "个人", link: "/blogs/self/api.md" },
          { text: "清单", link: "/blogs/self_todo_list/" },
        ]
        ,
        icon:'Monster'
      },
      {
        text: "羁绊",
        children: [
          { text: "盆友嘞", link: "/blogs/friend/index.md" },
          { text: "人生观", link: "/blogs/other/guide" },
        ],
        icon:'UserMultiple'
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
