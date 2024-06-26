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
            {text:'Vue实例',link:'vue_instance'},
            {text:'生命周期',link:'lifecycle'},
            {text:'模板语法',link:'template_syntax'},
            {text:'计算属性和侦听器',link:'computed_properties_and_watchers'},
            {text:'Class与Seyle绑定',link:'class_and_style_binding'},
            {text:'条件渲染',link:'conditional_rendering'},
            {text:'列表渲染',link:'list_rendering'},
            {text:'事件处理',link:'event_handling'},
            {text:'表单绑定',link:'form_binding'},
          ],
        },
        {
          text: "组件",
          children: [
            {text:'组件注册',link:'component_registration'},
            {text:'Prop',link:'prop'},
            {text:'自定义事件',link:'custom_events'},
            {text:'动态组件&异步组件',link:'dynamic_components_and_ async_components'},
            {text:'处理边界情况',link:'handling_edge_cases'},
          ],
        },
        {
          text: "规模化",
          children: [
            {text:'路由',link:'routing'},
            {text:'Vuex',link:'vuex'},
            {text:'安全',link:'safe'},
          ],
        },
        {
          text: "工具",
          children: [
            {text:'VueCLI',link:'VueCLI'},
            {text:'VueRouter',link:'VueRouter'},
          ],
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
      "/blogs/ops/":[
        {
          text: "linux",
          children: [
            {text:'基本命令',link:'linux_base.md'},
          ],
        },
        {
          text: "nginx",
          children: [
            {text:'安装',link:'nginx_install.md'},
            {text:'配置',link:'nginx_set.md'},
            {text:'部署',link:'nginx_ops.md'},
          ],
        },
        {
          text: "docker",
          children: [
            {text:'基本',link:'docker_base.md'},
            {text:'安装',link:'docker_install.md'},
            {text:'使用',link:'docker_use.md'},
            {text:'tomcat',link:'docker_tomcat.md'},
            {text:'nginx',link:'docker_nginx.md'},
            {text:'redis',link:'docker_redis.md'},
            {text:'mysql',link:'docker_mysql.md'},
            {text:'es',link:'docker_es.md'},
            {text:'mq',link:'docker_mq.md'},
            {text:'springboot',link:'docker_springboot.md'},
            {text:'vue',link:'docker_vue.md'},
            {text:'nginx镜像部署vue',link:'docker_nginx_vue.md'},
            {text:'docker compose',link:'docker_compose.md'},
          ],
        },
        {
          text: "k8s",
          children: [
            {text:'基本&安装',link:'k8s_base.md'},
            {text:'可视化控制台',link:'k8s_kubeSphere.md'},
          ],
        },
        {
          text: "云服务",
          children: [
            {text:'测试指南',link:'ecs_test.md'},
            {text:'云校部署单体&流水线',link:'ecs_springboot_line.md'},
          ],
        },
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
            {text:'二叉树',link:'marriageAndBearing'},
            {text:'哈希表',link:'marriageAndBearing'},
            {text:'栈',link:'marriageAndBearing'},
            {text:'队列',link:'marriageAndBearing'},
            {text:'排序',link:'marriageAndBearing'},
            {text:'滚动数组',link:'work'},
            {text:'滑动窗口',link:'work'},
          ],
        },
        {
          text: "进阶",
          children: [
            {text:'图',link:'socialSecurity'},
            {text:'堆',link:'socialSecurity'},
            {text:'二叉搜索树',link:'housingFund'},
            {text:'矩阵',link:'sport'},
            {text:'二分查找',link:'marriageAndBearing'},
            {text:'递归',link:'marriageAndBearing'},
            {text:'深度优先搜索',link:'help'},
            {text:'广度优先搜索',link:'help'},
            {text:'回溯',link:'work'},
            {text:'并查集',link:'army'},
          ],
        },
        {
          text: "高阶",
          children: [
            {text:'贪心',link:'army'},
            {text:'分治',link:'army'},
            {text:'矩阵快速幂',link:'army'},
            {text:'单调栈',link:'army'},
            {text:'前缀和',link:'army'},
            {text:'动态规划',link:'army'},
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
      "/blogs/bpm/":[
        {
          text: "activity",
          children: [
            {text:'基本',link:'activity_base'},
            {text:'使用',link:'activity_use'},
          ],
        },
        {
          text: "flowable",
          children: [
            {text:'基本',link:'flowable_base'},
            {text:'使用',link:'flowable_use'},
          ],
        },
      ],
      "/blogs/ai/":[
        {
          text: "chatgpt",
          children: [
            {text:'基本',link:'chatgpt_base'},
            {text:'使用',link:'chatgpt_use'},
            {text:'绕开过滤',link:'chatgpt_unlock'},
          ],
        },
        {
          text: "midjourney",
          children: [
            {text:'基本',link:'midjourney_base'},
            {text:'使用',link:'midjourney_use'},
          ],
        },
        {
          text: "huggingFace",
          children: [
            {text:'基本',link:'huggingFace_base'},
            {text:'使用',link:'huggingFace_use'},
          ],
        },
      ],
      "/blogs/web3/blockchain/":[
        {
          text: "区块链",
          children: [
            {text:'基本',link:'blockchain_base'},
          ],
        },
        {
          text: "其他",
          children: [
            {text:'以太坊钱包',link:'chatgpt_base'},
            {text:'资料',link:'chatgpt_use'},
  
          ],
        },
      ],
      "/blogs/web3/solidity/":[
        {
          text: "基础",
          children: [
            {text:'语言&运行',link:'solidity_base'},
            {text:'合约部署',link:'solidity_base'},
            {text:'FunMe合约',link:'solidity_base'},
            {text:'基本',link:'solidity_base'},
            {text:'导入导出',link:'solidity_base'},
          ],
        },
        {
          text: "高级",
          children: [
            {text:'暂无',link:'chatgpt_base'},
          ],
        },
      ],
      "/blogs/finance/invest_market/":[
        {
          text: "投资",
          children: [
            {text:'基本',link:'solidity_base'},
            {text:'股票投资',link:'solidity_base'},
            {text:'债券投资',link:'solidity_base'},
            {text:'房地产投资',link:'solidity_base'},
            {text:'创业投资',link:'solidity_base'},
            {text:'商品投资',link:'solidity_base'},
          ],
        },
        {
          text: "资本市场",
          children: [
            {text:'股票市场',link:'solidity_base'},
            {text:'债券市场',link:'solidity_base'},
          ],
        },
      ],
      "/blogs/eight_part/":[
        {
          text: "java",
          children: [
            {text:'基本',link:'java'},
          ],
        },
        {
          text: "springboot",
          children: [
            {text:'基本',link:'springboot'},
          ],
        },
      ],

      "/blogs/nosql/":[
        {
          text: "redis",
          children: [
            {text:'数据结构与命令',link:'java'},
            {text:'AOF和PDB持久化',link:'java'},
            {text:'redis工具介绍',link:'java'},
            {text:'springboot整合jedis',link:'java'},
            {text:'springboot整合redisTemplate',link:'java'},
            {text:'缓存预热',link:'java'},
            {text:'缓存雪崩',link:'java'},
            {text:'缓存击穿',link:'java'},
            {text:'缓存穿透',link:'java'},
            {text:'多级缓存',link:'java'},
            {text:'性能指标监控',link:'java'},
            {text:'布隆过滤器',link:'java'},
            {text:'Redis分布式锁',link:'java'},
            {text:'性能指标监控',link:'java'},
            {text:'集群&主从&哨兵',link:'java'},
            {text:'集群',link:'java'},
            {text:'大佬设计',link:'java'},
          ],
        },
        {
          text: "mongodb",
          children: [
            {text:'安装',link:'mongodb_install'},
            {text:'操作',link:'mongodb_opera'},
            {text:'springboot整合mongodb',link:'springboot'},
            {text:'基本',link:'springboot'},
          ],
        },
      ]
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
          { text: "nosql", link: "/blogs/nosql/redis.md" },
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
          { text: "投资与资本市场", link: "/blogs/finance/invest_market/invest_base.md" },
          { text: "金融规划与理财", link: "/blogs/finance/invest_market/invest_base.md" },
          { text: "公司金融", link: "/blogs/后端/2023" },
          { text: "金融科技", link: "/blogs/后端/2023" },
        ],
        icon:'ConnectionTwoWay'
      },
      {
        text: "web3",
        children: [
          { text: "区块链", link: "/blogs/web3/blockchain/blockchain_base.md" },
          { text: "Solidity", link: "/blogs/web3/solidity/solidity_base.md" },
          { text: "空投", link: "/blogs/web3/airdrop.md" },
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
          { text: "流程", link: "/blogs/bpm/activity_base.md" },
          { text: "接口", link: "/blogs/interface/index.md" },
          { text: "部署", link: "/blogs/ops/linux.md" },
          { text: "美化", link: "/blogs/blog/vupress_beautify.md" },
          { text: "安全", link: "/blogs/blog/vupress_beautify.md" },
          { text: "测试", link: "/blogs/blog/vupress_beautify.md" },
          { text: "八股", link: "/blogs/eight_part/springboot.md" },
        ],
        icon:'WarningOther'
      },
      {
        text: "ai",
        children: [
          { text: "模型", link: "/blogs/ai/huggingFace_use.md" },
          { text: "资源", link: "/blogs/ai_source/index.md" },
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
