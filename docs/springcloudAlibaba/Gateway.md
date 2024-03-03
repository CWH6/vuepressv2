---
title: Gateway
password: 2c6b5ac39acd59005bbd7fa05c433513
date: 2020/05/27
---



### 🪸Gateway 服务网关

**Spring Cloud Gateway** 是 Spring Cloud 提供的全新的服务网关，它基于 Spring 5、Project Reactor 和 Spring Boot 2 技术栈开发，用于处理所有进入应用程序的请求流量。它提供了一种非常灵活、强大且具有响应式编程特性的方式来路由请求、过滤请求以及处理请求。



### 🧊Spring Cloud Gateway 的主要特点包括：

**基于 WebFlux**：

Spring Cloud Gateway 是基于 Spring WebFlux 框架构建的，使用了 Reactor 这个响应式编程的库，因此可以处理高并发的请求。

**动态路由**：

可以通过配置文件、代码或者服务注册中心等方式定义路由规则，实现动态的请求路由，从而根据请求的条件将请求转发到不同的服务或者路径。

**过滤器**

支持多种内置的过滤器，比如添加请求头、添加响应头、请求转发、重定向、限流、权限控制等，同时也支持自定义过滤器来满足特定的业务需求。

**负载均衡**：

集成了 Spring Cloud Ribbon 和 Spring Cloud LoadBalancer，可以实现对请求的负载均衡，将请求分发到多个实例上

**断路器**：

可以集成断路器来实现对服务的熔断和降级处理，提高系统的稳定性和可靠性。

**服务发现**：

支持集成服务注册中心（如 Eureka、Consul 等），可以动态地从注册中心获取服务列表，并实现服务的动态路由。

**集成性**：

可以与 Spring Cloud 微服务框架无缝集成，与 Spring Boot 应用程序紧密结合，简化了微服务架构中的网关层的开发和部署。



### 📦使用 Spring Cloud Gateway 的基本步骤：

**引入 Spring Cloud Gateway 依赖**：

在你的项目中引入 Spring Cloud Gateway 的依赖，比如使用 Maven：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
```

**编写路由配置**：

在配置文件中编写 Spring Cloud Gateway 的路由配置，可以使用 YAML 或者 Properties 格式。例如，下面是一个简单的 YAML 配置：

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: my_route
          uri: http://example.com
          predicates:
            - Path=/myPath/**
```

这个配置定义了一个名为 `my_route` 的路由规则，将 `/myPath/**` 的请求转发到 `http://example.com`。

**自定义过滤器**：

如果需要，可以编写自定义的过滤器来处理请求。例如，创建一个实现 `GlobalFilter` 接口的过滤器：

```java
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

public class MyCustomFilter implements GlobalFilter, Ordered {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        // 自定义过滤器逻辑
        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        return 0;
    }
}
```

**启动应用程序**

现在可以启动 Spring Boot 应用程序，Spring Cloud Gateway 将会加载配置并开始监听来自客户端的请求。

**访问网关**：

可以通过配置的路由规则访问 Spring Cloud Gateway，请求会被路由到相应的目标服务上。例如，如果配置了路由规则将 `/myPath/**` 转发到 `http://example.com`，那么访问 `http://localhost:8080/myPath/` 将会被转发到 `http://example.com/myPath/`。



总的来说，Spring Cloud Gateway 是一个强大、灵活且具有响应式编程特性的服务网关，可以帮助开发者实现路由、过滤、负载均衡、断路器等功能，实现微服务架构中的请求处理和路由控制。它的配置简单直观，集成了 Spring Cloud 的优秀特性，是构建现代化、高效的微服务系统的重要
