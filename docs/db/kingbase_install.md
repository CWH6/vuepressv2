---
title: 人大金仓V8.0
date: 2024/02/09
---

## 人大金仓V8.0 安装

### win系统安装 

#### 软硬件条件

 因为windows版本的kingbaseesv8要求cpu是x86-64的体系结构并且支持微软windows的通用x86-64操作系统，当然要注意内存空间



#### 首先下载kingbaseesv8和授权文件

**下载kingbaseesv8**

 到[人大金仓官网](https://www.kingbase.com.cn/rjcxxz/index.htm)下载windows版的KingbaseES_V008R006C007B0012_Win64_install.iso镜像文件

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304094820862.png)

**下载授权文件**

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304100236013.png)

#### 安装kingbasev8

**解压kingbasev8 的安装包**

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304095133824.png)

> 注意：下面都图为v9，安装流程一样
> 目前官网没有v9的证书，使用v9版本使用v8的证书会报 Connection to localhost:54321 refused.Connection refused:

点击KINGBASE进行安装，要以管理员的身份运行，之后选择你喜欢的语言确定

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304100824551.png" style="zoom: 67%;" />





<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304100943517.png" style="zoom: 50%;" />





<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304101017221.png" style="zoom:50%;" />



 选择安装集，有三种安装集：完全安装、客户端安装、定制安装。完全安装：包括数据库服务器、接口、数据库开发管理工具、[数据库迁移](https://so.csdn.net/so/search?q=数据库迁移&spm=1001.2101.3001.7020)工具、数据库部署工具。根据需求选择安装集，这里我选的是完全安装

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304101104928.png" style="zoom:50%;" />



<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304101255605.png" style="zoom:50%;" />



 选择刚刚下载的授权文件license_26559_0.dat

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304101533358.png" style="zoom:50%;" />



选择安装路径默认C盘，点击选择可更换路径，后面的数据目录也会默认安装在现在的路径下

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304101833298.png" style="zoom:50%;" />



需要大小为5GB

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304101920412.png" style="zoom:50%;" />



等待安装

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304102006672.png" style="zoom:50%;" />



选择存储数据的文件夹

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304102459468.png" style="zoom:50%;" />



初始化数据库参数

```xml
端口号：54321
username: wjjk
password: gdytdWjjk
默认数据库名字：kingbase
dbType: kingbase
```

往下拉，勾选兼容mysql数据库，大小写忽略

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304102741679.png" style="zoom:50%;" />



#### 图形界面

 安装成功后在开始按钮下的应用即可找到以下文件 

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304103851123.png" style="zoom:50%;" />





<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304154307773.png" style="zoom: 50%;" />



右击新建数据库连接

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304154341473.png" style="zoom:67%;" />





<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304154448542.png" style="zoom:50%;" />



<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240304154547007.png" style="zoom:50%;" />

补充，上述资源保存位置： `E:\ytd\人大金仓安装包\` 

>  [参考博客](https://blog.csdn.net/weixin_63812931/article/details/129465025)
>
>  [参考文档](https://help.kingbase.com.cn/v8/install-updata/install-windows/index.html)