---
title: SkyWalking
date: 2020/05/27
---



### 🪸SkyWalking 链路追踪

**Apache SkyWalking** 是一个开源的分布式系统性能监控工具，主要用于追踪、诊断和监控分布式系统的性能和运行状态。它提供了全面的链路追踪功能，可以跟踪分布式系统中的每个请求，并提供详细的性能指标和调用链信息，帮助开发者快速定位和解决性能问题。



### 🧊SkyWalking 的主要特点和功能包括：

**分布式链路追踪**：

SkyWalking 支持对分布式系统中的请求进行端到端的链路追踪，从客户端到服务端的每一层调用都会被记录和追踪。

**性能指标监控**：

可以监控系统的关键性能指标，比如请求响应时间、吞吐量、错误率等，帮助开发者了解系统的运行状态。

**服务拓扑图**：

提供实时的服务拓扑图，展示了系统中各个服务之间的调用关系和依赖关系，帮助开发者理清系统架构。

**分布式跟踪报告**：

生成详细的分布式跟踪报告，展示了每个请求的调用链路、耗时、调用次数等信息，帮助开发者定位性能瓶颈。

**自动化依赖检测**：

自动检测和识别系统中的各种依赖关系，包括数据库、消息队列、RPC 调用等，使得监控配置更加简单和方便。

**多语言支持**：

支持多种常用编程语言和框架，比如 Java、Python、Node.js、Go 等，可以适应不同技术栈的应用系统

**灵活的插件机制**：

提供丰富的插件和扩展机制，可以根据需要自定义监控和追踪策略，满足不同场景下的监控需求。



### 📦使用 SkyWalking 的基本步骤：

**部署 SkyWalking 服务端**

首先需要部署 SkyWalking 的服务端，可以选择使用 Docker 镜像部署，也可以下载安装包手动部署。具体部署步骤可以参考 SkyWalking 的官方文档。

**配置应用程序**：

在需要监控的应用程序中引入 SkyWalking 的客户端依赖，例如使用 Maven：

```xml
<dependency>
    <groupId>org.apache.skywalking</groupId>
    <artifactId>apm-toolkit-trace</artifactId>
    <version>${skywalking.version}</version>
</dependency>
```

然后根据具体的应用框架，进行配置，比如在 Spring Boot 应用中，需要添加 SkyWalking 的配置信息到 `application.properties` 或 `application.yaml` 文件中：

```yaml
skywalking:
  agent:
    service_name: your-service-name
    collector:
      grpc:
        server_address: your-skywalking-collector:11800
```

这里的 `your-service-name` 是你的应用程序的名称，`your-skywalking-collector:11800` 是 SkyWalking Collector 的地址和端口。



**启动应用程序**：

启动应用程序后，SkyWalking 将会自动收集和监控应用程序的性能数据，并发送到 SkyWalking 服务端进行处理和展示。



**访问 SkyWalking 控制台**：

打开浏览器，访问 SkyWalking 的 Web 控制台地址（默认为 `http://your-skywalking-server:8080`），可以查看实时的性能监控数据、服务拓扑图、链路追踪信息等。



**查看性能指标**：

在 SkyWalking 控制台中，可以查看各个服务的响应时间、调用次数、错误率等性能指标，帮助开发者了解系统的运行情况。



总的来说，SkyWalking 是一个强大的分布式系统性能监控工具，提供了全面的链路追踪、性能指标监控、服务拓扑图等功能，帮助开发者快速定位和解决分布式系统中的性能问题，提高系统的稳定性和可靠性。



> [参考1](https://blog.csdn.net/m0_73467713/article/details/131073840)
