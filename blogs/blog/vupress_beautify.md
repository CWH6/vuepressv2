---
title: 美化
date: 2024/02/09
---

## 📦美化

简单介绍关于 vupress 的主题 `vuepress-theme-reco@2.x` 的美化

>  [vuepress-theme-reco@2.x 官方文档](https://vuepress-theme-reco.recoluan.com/docs/guide/introduce.html)



## 📦导航栏图标

> [参考](https://vuepress-theme-reco.recoluan.com/docs/guide/icon.html)
>
> 图标文档：https://www.xicons.org/#/zh-CN

点击 `carbon` 类目 , 选择喜欢的图标， 点击 `复制名称`

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304085322052.png)

进入 `D:\my_code\vuepressv2\.vuepress\config.ts`,   查找 `navbar`, 添加标签元素 `icon` 

```typescript
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
      }
]
```

效果如下：

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304090453355.png)




## 📦密码配置
> [参考文档](https://vuepress-theme-reco.recoluan.com/docs/theme/password.html#%E8%AE%BE%E7%BD%AE%E5%8A%A0%E5%AF%86)

**加密整个网站**

进入 `D:\my_code\vuepressv2\.vuepress\config.ts`, 选择下面其中一种方式，添加password
```ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // 设置单个密码
    password: '14e1b600b1fd579f47433b88e8d85291',
    // 设置多个密码
    password: [
      '14e1b600b1fd579f47433b88e8d85291',
      'f8de1968939dd4ac5992ce962993ac2b'
    ]
  })
})
````

**加密单个页面**

进入某个 `md` 文档里面 ， 在顶部配置加上,  选择下面其中一种方式，添加password
```
---
title: xxx
# 设置单个密码
password: 14e1b600b1fd579f47433b88e8d85291
# 设置多个密码
password: 
 - 14e1b600b1fd579f47433b88e8d85291
 - f8de1968939dd4ac5992ce962993ac2b
---
```