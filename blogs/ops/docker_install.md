---
title: 安装docker
date: 2022/11/09
categories:
 - docker
---

> centos系统安装docker
>
> 其他系统参考文档， https://docs.docker.com/engine/install/centos/

## 1、移除以前docker相关包

```shell
 sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

或者

```shell
yum remove docker*
```

## 2、配置yum源

```shell
#安装一些工具
sudo yum install -y yum-utils

#配置docker的源地址，linux根据这个地址下载docker相关的东西
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

## 3、安装docker

```shell
# ce-社区版本  ee-企业版（要付费） docker-ce-cli（操作docker的命令行工具） 
sudo yum install docker-ce docker-ce-cli containerd.io 
```

## 4、启动

```shell
# enable now 既要开机启动也要现在启动
sudo systemctl enable docker --now

#本次启动docker
sudo systemctl docker start
```

## 5、配置镜像加速

每个阿里云号都有: https://cr.console.aliyun.com/cn-shanghai/instances/mirrors

找到如下的位置：

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240307002431933.png)

配置镜像加速

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://dhzmmbbb.mirror.aliyuncs.com"],
    "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 6、查看docker详细信息

```shell
docker info
```

## 7、查看docker版本

```shell
docker -v
```

