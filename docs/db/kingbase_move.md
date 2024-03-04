---
title: 数据库迁移
date: 2024/02/09
---

##  数据迁移

> 此处将 达梦数据库数据 迁移到 目标数据库

启动人大金仓自带的迁移工具，进入 `D:\soft\dev_soft\Kingbase\ES\V8\KESRealPro\V008R006C008B0014\ClientTools\guitools\KDts\KDTS-WEB\bin`,  window 双击 `startup.bat` , linux 双击`startup.sh`

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304213949696.png)



 访问地址 `http://localhost:54523` , 默认有密码

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304214106815.png)



创建`源数据库`，这里是`达梦数据库`

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304224405124.png)



创建`目标数据库`，这里是 `人大金仓`

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304224442100.png)



在迁移的时候，会将 `达梦数据库模式` 迁移到 `人大金仓模式` 中，我们需要在 `人大金仓` 中 创建对应的模式 

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304224531164.png)



创建`迁移任务`，配置`源数据库` , 配置`目标数据库` ， 点击传输

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304224614414.png)



默认下一步

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304224653889.png)



参数也是默认

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304224759781.png)



检查`迁移结果`， 这边是失败，可能有部分 `触发器`  没有同步过去 

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304224833670.png)



点击详情后

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304224854589.png)



详情信息可以通过导出的excel查看 如下几个方面同步信息

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304225358312.png)



检查导入结果，查看人大金仓对应数据的模式，点击表

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304225639447.png)



springboot 配置 金仓

```yaml
spring:
  application:
    #应用名称
    name: wjjk-common
  datasource:
    name: tdbs
    # 金仓本地
    url: jdbc:kingbase8://localhost:54321/kingbase
	username: wjjk
    password: gdytdWjjk
    dbType: kingbase
    type: com.alibaba.druid.pool.DruidDataSource
    driver-class-name: com.kingbase8.Driver
```

