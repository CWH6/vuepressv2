---
title: Sentinel
date: 2020/05/27
---



### 🪸Sentinel 熔断限流

**Sentinel** 是阿里巴巴开源的一款流量控制和服务保护的工具，主要用于解决分布式系统中的熔断降级、限流和系统负载保护等问题。在微服务架构中，Sentinel 可以帮助开发者实现对服务调用的熔断和限流，保护系统在高负载下的稳定性和可靠性。



### 🧊Sentinel 提供的功能包括：

**流量控制**：

Sentinel 支持基于 QPS（每秒查询率）、线程数和并发数等指标的流量控制。可以根据业务需求设置不同的流量控制规则，保护系统免受过载的影响。



**熔断降级**：

当服务出现异常或超时时，Sentinel 可以自动地触发熔断，停止对该服务的调用，防止雪崩效应的发生。当熔断触发后，Sentinel 会进入到半开状态，定期尝试恢复服务调用，以检查服务是否已经恢复正常。



**系统负载保护**：

Sentinel 可以根据系统负载情况动态地调整流量控制和熔断降级的策略，保障系统的稳定性和可靠性。



**实时监控和统计**：

Sentinel 提供了实时的监控和统计功能，可以查看服务的流量情况、熔断降级状态、响应时间等指标，并通过 Dashboard 进行可视化展示。



**精细化的流量控制规则**：

Sentinel 支持基于资源、URL、参数等维度的流量控制规则，可以根据具体的业务场景制定精细化的流量控制策略。



**多种适用场景**：

Sentinel 不仅适用于微服务架构中的服务调用，还可以用于 HTTP 接口、数据库访问、消息队列等场景的流量控制和熔断降级。



### Sentinel 的基本使用步骤：

**引入 Sentinel 依赖**：

```xml
<dependency>
    <groupId>com.alibaba.csp</groupId>
    <artifactId>sentinel-core</artifactId>
    <version>1.8.2</version>
</dependency>
```

**配置 Sentinel 控制台地址**：

在 `application.properties` 或 `application.yaml` 中配置 Sentinel 控制台的地址：

```yaml
spring.cloud.sentinel.transport.dashboard=localhost:8080
```

这里的 `localhost:8080` 是 Sentinel 控制台的地址，可以根据实际情况修改。

**定义流量控制规则**：

在业务代码中定义流量控制规则，可以通过 `@SentinelResource` 注解来标记需要进行流量控制的资源，例如：

```java
@RestController
public class MyController {

    @GetMapping("/hello")
    @SentinelResource(value = "hello", blockHandler = "handleBlock")
    public String hello() {
        return "Hello, Sentinel!";
    }

    public String handleBlock(BlockException ex) {
        return "Flow control limit";
    }
}
```

这里使用了 `@SentinelResource` 注解标记了 `hello` 方法，指定了当流量超过限制时的处理方法 `handleBlock`。



**启动 Sentinel 控制台**：

在控制台服务器上启动 Sentinel 控制台，可以通过以下命令启动：

```java
java -jar sentinel-dashboard-1.8.2.jar
```

控制台启动后，可以访问 `http://localhost:8080` 查看控制台界面，并登录查看实时的流量监控和规则配置。



**实时监控和管理**：

在 Sentinel 控制台中，可以实时查看服务的流量情况、熔断降级状态、异常情况等，并根据需要调整流量控制规则。

总的来说，Sentinel 提供了丰富的功能和灵活的配置，可以帮助开发者实现对服务调用的流量控制和熔断降级，保护系统在高负载和异常情况下的稳定性和可靠性。它是一个非常有价值的微服务治理工具，在微服务架构中的应用非常广泛。
