---
title: docker基础
date: 2022/11/09
categories:
 - docker
---

# docker操作

### 1、镜像操作

#### 1、拉取镜像

nginx镜像

```shell
docker pull nginx #下载最新版本 

# 镜像名:版本名（标签）
docker pull nginx:1.20.1
```

redis镜像

```shell
# 下载最新
docker pull redis 
# 下载指定版本
docker pull redis:6.2.4
```

#### 2、查看镜像

```shell
# 查看所有镜像
docker images
```



#### 3、删除镜像

- 根据版本删除

```shell
# rmi ，rm:删除， i:镜像
# 存在多个版本默认删除最新版本 == docker rmi redis:latest
docker rmi redis   

# 指定版本删除
docker rmi redis:6.2.4
```

- 根据镜像id删除

```shell
docker rmi 0802342342323 
```

### 2、容器操作

根据镜像，实例化容器，镜像就类似于JAVA的类，容器就类似于JAVA的类的对象

#### 1、启动容器

```shell
# docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

# docker run 设置项 镜像名 镜像启动运行的命令（镜像里面默认有的，一般不会写）

如：
# nginx= nginx:latest 镜像可以写完整
# --name=mynginx  设置项中给容器命名
# -d:后台运行，退出运行容器页面容器也在跑
# --restart=always：开机自启动，可以reboot重启linux测试
docker run --name=mynginx -d -- restart=always nginx 
```

#### 2、重启容器

将停止的容器重新启动



- 根据容器id再次启动容器

```shell
docker start 容器id
```

- 根据容器名字再次启动容器

```shell
docker start 容器名字
```

#### 3、查看容器

- 查看运行中的容器（容器：运行中的镜像）

```shell
docker ps
```

- 查看所有容器（运行或者被停止的）

```shell
docker ps -a
```

#### 4、停止容器

将运行中的容器停止

```shell
#0d0 是容器id,可以不写完整，模糊匹配
docker stop 0d0
```

#### 5、删除容器

- 根据容器id删除容器

```shell
# -f 强制删除正在运行中的容器
# 96234234323e 容器id
docker rm -f 96234234323e
```

- 根据容器名字删除容器

```shell
# -f 强制删除正在运行中的容器
# mynginx 容器名字
docker rm -f mynginx
```

#### 6、**更新容器**

```shell
# 修改容器为开机自启
docker update 容器id/容器名字 --restart=always
```

#### 7、容器端口映射

访问服务器：192.168.227.8:88 ---->访问到niginx容器里面 80端口

```shell
# -p 88:80  当前主机的88端口映射到nginx容器里面的80端口
# -d --restart=always 总是后台运行
docker run --name=mynginx -d --restart=always -p 88:80 nginx 
```

容器信息

![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1699448413143-3668769a-ad7f-4568-bf2f-835d22b0757d.png)访问服务器ip+88端口

![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1699448647922-5c575787-7b4b-4cfe-8beb-210f0f70dd04.png)

映射图

![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1699448707659-866c9ee2-8598-4e33-ab6b-f69f86918093.png)



#### 8、主机/容器 拷贝 配置文件

1、拷贝容器的配置到主机

```shell
# cp 复制容器中指定位置的配置文件内容到主机 
docker cp 容器id:/etc/nginx/nginx.conf  /data/conf/nginx.conf
```



2、拷贝主机的配置文件到容器

```shell
# cp 复制主机配置到容器中 
docker cp /data/conf/nginx.conf 容器id:/etc/nginx/nginx.conf
```



#### 9、查看容器日志

```shell
#查看某个日志的配置文件
docker logs 容器id
```



### 3、容器内部操作

#### 1、进入容器内部

容器内部类似一个小linux

```shell
# 进入容器内容系统，修改容器内容，进去后就是为容器root root@容器id
docker exec -it 容器id /bin/bash

# 或者：
docker exec -it 容器id /bin/sh
```

#### 2、退出容器

```shell
exits
```

#### 3、进入容器并修改内容

如修改nginx容器的index.html页面

```shell
# 进入容器里面
docker exec -it 023421312z /bin/bash

# 修改nginx的index.html
root@023421312z:/#   cd /usr/share/nginx/html/
root@023421312z:/#  echo "<h1>Welcom to mynginx</h1>" > index.html
root@023421312z:/#  cat index.html 
```

访问效果：

![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1699449201291-98c16cae-0cae-41b3-9fd3-7a5bb452f384.png)

#### 4、容器-数据卷/挂载- 外部修改

将主机某个目录映射 容器内部的某个目录

容器运行时，配置挂载路径

```shell
# -v 挂载，将主机/data/html 跟容器的/usr/share/nginx目录进行挂载
# ro :只读
# rw :读写
# chw2336/cwhnginx:v1.0 容器：版本
# 主机上的文件夹不存在则帮创建
docker run --name=mynginx  \
-d --restart=always \
-p 88:80 \
-v /data/html:/usr/share/nginx/html:ro chw2336/cwhnginx:v1.0
```

将主机的文件修改

```shell
cd /data/html/
#使用标准流写入文件并创建文件, 覆盖
echo "数据卷修改" > index.html
```

浏览器访问nginx容器页面 （上面修改成功后，nginx页面内容改变）

![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1699452461634-b04a1a57-9d76-4c1d-9c7c-3c6d0a24dd04.png)

#### 5、挂载配置文件

挂载后，关于主机文件覆盖容器内部配置文件的问题

- 主机空数据卷 ----挂载----> 容器非空目录 ：容器目录被复制到主机数据卷
- 主机非空数据卷----挂载-----> 容器目录：主机非空主机卷覆盖



问题例子：

启动一个nginx容器，假如此时主机还没这个 nginx.conf 文件，你配置了nginx容器启动后把nginx.con文件挂载到主机上。 但挂载之后，发现主机上出现的不是nginx.conf文件，而是一个nginx.conf的目录， 且报错“ Check if the specified host path exists and is the expected type”。

将nginx配置文件映射主机上，在容器启动时修改配置

```shell
# 创建好主机挂载文件夹
cd /data/
mkdir conf
cd conf

# 随便启动一个容器（只是想获取容器的配置文件）
docker run --name=mynginx
-d --restart=always \
-p 88:80 \
chw2336/cwhnginx:v1.0

# cp 复制容器中指定位置的配置文件内容到主机 
docker cp 容器id:/etc/nginx/nginx.conf  /data/conf/nginx.conf
# cp 复制主机配置到容器中 
#docker cp /data/conf/nginx.conf 容器id:/etc/nginx/nginx.conf

# 修改服务器上获取的配置文件: /data/conf/nginx.conf
....
# 删除上面的容器
....

# 主机文件夹的映射没有会帮创建
# 主机文件必须存在 nginx.conf，参考下面docker容器cp命令
docker run --name=mynginx  \
-d --restart=always \
-p 88:80 \
-v /data/html:/usr/share/nginx/html:ro \
-v /data/conf/nginx.conf:/etc/nginx/nginx.conf \
chw2336/cwhnginx:v1.0
```



### 4、其他操作

#### 1、提交改变

将自己修改的镜像提交成新的镜像存在本机

```shell
 #语法
 docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
 
 #提交后会在镜像存在本机
 # -a "作者名"
 # -m "提交描述"
 # CONTAINER 容器id  be1acf71ceb5
 #REPOSITORY[:TAG] 提交的镜像名：版本 cwhnginx:v1.0
 docker commit -a "作者名" -m "nginx首页变化" be1acf71ceb5  cwhnginx:v1.0
 
 #查看镜像(发现有刚刚提交的镜像)
 docker images
 
 #运行
 docker run  -d  -p 88:80 mynginx:v1.0 
```

#### 2、镜像保存

将镜像保存一个实体文件如tar, 方便系统间传输

```shell
#语法
docker save [OPTIONS] IMAGE [IMAGE...]

#-o  写出文件为 cwhnginx.tar
dcoker save -o cwhnginx.tar cwhnginx:v1.0

#linux将文件传输到目标主机,第一次要输入目标主机密码
# /root/ 文件传输位置为该目录下
scp abc.tar root@192.168.227.6:/root/

# 目标主机将压缩包加载为镜像
#-i 读文件tar
docker load -i chwnginx.tar

#目标主机运行
docker run  -d  -p 88:80 cwhnginx:v1.0
```

#### 3、推送远程仓库

推送镜像到docker hub;应用市场

```shell
#语法
docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname

#设置标签(版本)
# local-image:tagname,即本地镜像 cwhnginx:v1.0
# new-repo:tagname  仓库位置：版本
docker tag cwhnginx:v1.0 chw2336/cwhnginx:v1.0

#第一次登陆，需要输入dockerhub账号密码
docker login

#退出（推送完成镜像后退出，这样子安全一点）
docker logout

#推送到远程仓库
docker push chw2336/cwhnginx:v1.0


#别的主机下载我们推送的镜像
docker pull chw2336/cwhnginx:v1.0

#运行
docker run  -d  -p 88:80 chw2336/cwhnginx:v1.0
```



**前提：**

- 注册账号 ：https://hub.docker.com/
- 创建仓库：https://hub.docker.com/repository/docker/chw2336/cwhnginx/general



创建仓库

![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1700657832510-c522d09d-ab1c-4640-8ed8-2951232bb572.png)

将镜像推送到仓库后

![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1700657926393-307f0994-36cb-43c7-886b-63f3572b9e45.png)

#### 4、容器日志及其他操作

```shell
#查看某个日志的配置文件
docker logs 容器id
```



如访问某个nginx容器的地址: 正常访问

![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1700658156123-b8dc2749-0985-49d4-b44a-37771c4b057c.png)



错误访问：访问不存在的资源

![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1700658191254-57ba1a3e-17bf-49f5-a037-121be570fcf7.png)



![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1700658231972-6de305f7-db92-42a8-9eff-e3efa93cd849.png)

当我们在访问的路径中，放个文件就会在访问时下载

```shell
#进入主机映射到容器的页面
cd /data/html
# hh为访问路径 ，1111为下载内容
echo 11111 > hh
```



![img](https://cdn.nlark.com/yuque/0/2023/png/32726505/1700658321471-131b360a-ca60-4db3-9a99-e86b225348ae.png)