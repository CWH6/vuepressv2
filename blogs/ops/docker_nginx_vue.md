---
title: Nginx镜像部署Vue 
date: 2022/11/09
categories:
 - docker
---

## Nginx镜像部署Vue 

上面的方式打包的镜像已经 GB 级别，而采用Nginx镜像 MB 级别

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306220549678.png)

使用 Nginx 镜像部署 Vue 应用是常见的做法，优点如下：

**静态资源服务器**

Vue 应用是一个静态资源，Nginx 是一个高性能的 Web 服务器，能够有效地提供静态资源服务。

**反向代理和路由**

Nginx 可以作为反向代理，处理客户端请求并将它们路由到 Vue 应用中的正确页面。它还可以帮助处理前端路由和 SPA（单页应用）中的页面刷新问题。

**负载均衡**

如果你有多个前端实例，Nginx 可以用作负载均衡器，在这种情况下，它能够平衡流量并确保每个实例都得到适当的请求。

**安全性和性能优化**

Nginx 具有强大的安全功能和灵活的配置选项，可以用于加密通信、缓存静态资源、压缩内容等，有助于提高应用程序的性能和安全性。

### 1、Vue项目打包

进入Vue项目内，运行 npm run build , 生成一个 dist 目录，其中包含最终的静态文件

```shell
npm run build
```

这个项目打包后的静态文件夹为：dist-production

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306220504362.png)

将文件夹上传到服务器 /usr/etc/dist-production

### 2、Nignx配置

nginx.conf 配置需要挂载到容器，先获取一份容器的nginx.conf

按照下面步骤获取容器内部nginx.conf, 将其复制到 /usr/etc/nginx.conf

```shell
docker pull nginx

# 启动容器，无需挂载数据卷（只是个测试容器）
docker run -d -p 80:80  nginx:latest

# docker cp 容器id:容器内配置文件  服务器上的文件（此处没有，会帮忙创建）
docker cp 946f17cc7ed4:/etc/nginx/nginx.conf /usr/etc/nginx.conf
```

编辑服务器上的nginx.conf文件，[nginx配置详情](https://www.yuque.com/huihuahuadechuanshanjia/mazefa/eumgga2orrgssmgb)

```shell
events {
  worker_connections  1024;
}

http {
  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;

  log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    '$status $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"';

  access_log  /var/log/nginx/access.log  main;

  sendfile        on;
  #tcp_nopush     on;

  keepalive_timeout  65;

  #gzip  on;

  include /etc/nginx/conf.d/*.conf;

    server {
    # 监听端口
    listen 80;
    server_name example.com;

    # 服务器上vue静态文件夹路径
    root /usr/etc/dist-production;
    index index.html;

    location / {
    try_files $uri $uri/ /index.html;
}
}
}
```

### 3、启动Nignx容器

```shell
# -p 将服务器9091映射到容器80
# -d 容器后台运行
# -name 容器名称 nginx-test
# 服务器上静态资源挂载到nginx内部 -v /usr/etc/dist-production:/usr/share/nginx/html
# 服务器上配置文件挂载到nginx内部 -v /usr/etc/nginx.conf:/etc/nginx/nginx.conf
# 镜像名称 nginx:latest
# \ 换行显示
docker run -d -p 9091:80 --name nginx-test \
-v /usr/etc/dist-production:/usr/share/nginx/html \
-v /usr/etc/nginx.conf:/etc/nginx/nginx.conf \
nginx:latest
```

如下

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306220637181.png)

### 4、测试

window 系统访问 虚拟机ip:9091

http://192.168.227.10:9091/#/index

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306220705694.png)

参考[博客](https://blog.csdn.net/qq_45031509/article/details/128043584)，该博客上的nginx目录划分更加明确