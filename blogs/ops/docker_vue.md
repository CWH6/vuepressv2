---
title:  docker部署Vue
date: 2022/11/09
categories:
 - docker
---

## Vue 简单部署

### 1、创建Dockerfile

此处在虚拟机（centos系统，配置好网络）部署 [可视化项目](https://gitee.com/daidaibg/IofTV-Screen#https://gitee.com/link?target=https%3A%2F%2Fwww.daidaibg.com%2Fbigscreen) 

在 Vue 项目的根目录下创建名为 Dockerfile 的文件，并没有后缀。文件内容如下

```vue
# 使用 Node 14 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 将项目文件拷贝到容器中
COPY . .

# 安装项目依赖
RUN npm install

# 构建项目
RUN npm run build

# 暴露容器端口
EXPOSE 8080

# 容器启动命令
CMD ["npm", "start"]
```



> 解释
>
> Dockerfile 主要内容为构建vue项目镜像的环境
>
> /app 是在 Docker 镜像内部的工作目录，你可以在镜像构建过程中设置工作目录为 /app，这不是服务器上的目录，而是镜像内部的路径。当镜像启动时，这个路径会被用作容器内部应用程序的工作目录。



### 2、构建镜像

使用 Docker 的 build 命令构建镜像。确保你在包含 Dockerfile 的目录中运行此命令。

```shell
docker build -t vue-app .
```

### 3、运行容器

构建完成后，使用 docker run 命令运行镜像并创建容器

```shell
docker run -p 8080:8080 vue-app
```

容器运行后信息如下：

<img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306221241198.png" style="zoom: 80%;margin-left:300px" />

### 4、测试访问

window系统ping 一下虚拟机内网ip, 测试ip之间是否能进行通信

```shell
ping 虚拟机内网地址
```

如下说明主机之间网络互通

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306221347076.png)



window系统 浏览器访问内网ip:8080

http://192.168.227.10:8080/#/index

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306221437531.png)





