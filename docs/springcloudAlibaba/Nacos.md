---
title: nacos
date: 2020/05/27
---

This is theme.

### 🌐Nacos 注册中心

Nacos（Dynamic Naming and Configuration Service）是阿里巴巴开源的一款**服务发现和配置管理工具**。它支持几种不同的注册中心模式，包括基于服务注册与发现的服务中心、动态配置服务、动态 DNS 服务等。



### 📦注册中心演变及其设计思想

##### 演变历程

**服务注册与发现**：最初，Nacos作为服务注册与发现中心的实现，旨在解决微服务架构中服务如何自动注册和发现的问题。这个最基础的功能是其核心。

**动态配置服务**：后来，Nacos又增加了动态配置服务的功能。这使得应用程序可以从Nacos中动态地获取配置信息，而无需重启或重新部署应用。

**动态 DNS 服务**：Nacos还可以充当动态 DNS 服务，将服务名称解析到相应的网络地址，这对于基于微服务的动态部署和扩展非常有用。

**多数据中心**：支持多数据中心的注册中心是Nacos的一大特点。不同的数据中心可以通过Nacos进行服务注册与发现，保证了在分布式系统中的高可用性和灵活性。

##### 设计思想

**架构解耦**：Nacos的设计遵循了架构解耦的原则，各个功能模块之间相互独立，降低了模块间的耦合度。这使得Nacos能够更容易地支持不同的应用场景和功能扩展。

**高可用和可靠性**：作为微服务架构中关键的基础设施，Nacos注重高可用和可靠性。它的设计考虑了数据的持久化、集群的搭建和故障转移等方面，以确保整个系统的稳定性。

**可扩展性**：Nacos支持水平扩展，可以根据实际负载情况动态地增加节点。这使得系统能够应对不断增长的服务数量和流量。

**开放性和兼容性**：作为开源项目，Nacos拥抱开放性，支持多种开发语言和生态系统。它提供了丰富的API和插件机制，使得开发者可以根据自己的需求定制和扩展功能。

**实时性和准确性**：Nacos设计上追求实时性和准确性，能够快速响应服务注册、发现和配置变更的请求，保证了整个系统的及时性和正确性。



### 🧠Nacos注册中心架构

Nacos（Dynamic Naming and Configuration Service）作为一款服务发现和配置管理工具，其注册中心架构主要包括以下组件：

1. **服务注册中心（Service Registry）**

   服务注册中心是Nacos的核心组件，用于微服务的注册和发现。

2. **服务发现（Service Discovery）**

   提供动态发现服务，让微服务能够找到其他微服务的位置和相关信息。

3. **配置管理中心（Configuration Management）**

   允许应用程序动态获取配置信息，支持动态配置的管理。

4. **集群管理（Cluster Management）**

   支持构建高可用的集群环境，简化集群的配置和管理。

5. **持久化存储（Persistent Storage）**

   用于存储服务注册信息、配置数据等，保证数据持久性。

6. **监控和告警（Monitoring and Alerting）**

   提供监控注册中心的运行状态和性能指标，并支持告警功能。

7. **扩展性和插件机制（Extensibility and Plugin Mechanism）**

   具有良好的扩展性，支持自定义插件来扩展功能。
   
   

### ▶️Nacos Server部署

> 以下是一个简单的示例，演示如何在本地环境中使用 Docker 快速部署一个单节点的 Nacos Server：

**安装 Docker 和 Docker Compose**

   确保你的系统上已经安装了 Docker 和 Docker Compose。如果没有，可以根据官方文档安装：

   - Docker 安装指南：https://docs.docker.com/get-docker/
   - Docker Compose 安装指南：https://docs.docker.com/compose/install/



**创建 Nacos 配置文件**

   在你的工作目录中创建一个名为 `nacos-config` 的文件夹，并在其中创建一个 `application.properties` 文件，用于配置 Nacos。这里是一个简单的示例配置：

```properties
server.port=8848
spring.datasource.platform=mysql
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://mysql-server:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
spring.datasource.username=nacos
spring.datasource.password=nacos
```

这里假设你的 MySQL 数据库位于 `mysql-server:3306`，数据库名为 `nacos_config`，用户名和密码分别为 `nacos` 和 `nacos`。你可以根据实际情况修改这些配置。



**创建 Docker Compose 文件**

在同一目录下创建一个名为 `docker-compose.yml` 的文件，用于定义 Nacos Server 的 Docker 容器。以下是一个示例：

```yaml
version: '3'
services:
  nacos-server:
    image: nacos/nacos-server:latest
    container_name: nacos-server
    ports:
      - "8848:8848"
    environment:
      - PREFER_HOST_MODE=hostname
      - MODE=standalone
    volumes:
      - ./nacos-config:/home/nacos/standalone-derby/conf
```

这个示例中，我们使用了最新版本的 Nacos Server 镜像，并将容器的 8848 端口映射到宿主机的 8848 端口。此外，我们将 `nacos-config` 文件夹挂载到容器内的 `/home/nacos/standalone-derby/conf` 路径，以提供配置文件。



**启动 Nacos Server**

打开终端，进入到包含 `docker-compose.yml` 文件的目录，然后执行以下命令启动 Nacos Server：

```bash
docker-compose up -d
```

这将会下载 Nacos Server 镜像（如果尚未下载），并启动一个单节点的 Nacos Server 实例。



**访问 Nacos 控制台**

在浏览器中访问 `http://localhost:8848/nacos`，你应该可以看到 Nacos 的登录页面。默认的用户名和密码都是 `nacos`。登录后，你可以开始使用 Nacos 注册中心和配置中心的功能了。

这只是一个简单的示例，演示了如何使用 Docker 快速部署一个单节点的 Nacos Server。在生产环境中，你可能需要根据实际需求配置更多参数，比如数据库连接、集群模式等。

> 详细的部署和配置信息可以参考 Nacos 官方文档：Nacos 部署文档。