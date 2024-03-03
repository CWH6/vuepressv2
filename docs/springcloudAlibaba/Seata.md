---
title: Seata
date: 2020/05/27
---



### 🪸Seata分布式事务

**Seata**（原名 Fescar）是阿里巴巴开源的一款分布式事务解决方案，用于解决分布式环境下的事务一致性问题。它提供了分布式事务的基本功能，包括分布式事务管理、事务状态协调、事务日志存储和事务恢复等功能，帮助开发者简化了在分布式系统中实现分布式事务的复杂性。



### 🧊Seata 主要包含以下三个核心模块：

**Transaction Coordinator（TC）**：

事务协调器，负责全局事务的创建、提交和回滚。当一个分布式事务发起时，TC 协调各个参与者（分支事务）的提交和回滚操作，以保证全局事务的一致性。

**Transaction Manager（TM）**：

事务管理器，负责管理全局事务的生命周期，包括事务的开始、提交和回滚等。在分布式事务发起方，即业务发起方的服务中，需要部署 TM 来管理全局事务。

**Resource Manager（RM）**：

资源管理器，负责管理分支事务的生命周期，包括分支事务的注册、状态汇报、提交和回滚等。在分布式事务的参与方，即涉及到数据库或其他资源操作的服务中，需要部署 RM。

#### Seata 的工作流程如下：

**全局事务发起**：

当业务服务发起一个分布式事务时，TM 将会创建一个全局事务，并生成一个全局事务 ID（Global Transaction ID）。

**全局事务开始**：

TM 发送一个全局事务开始的请求到 TC，TC 接收到请求后创建一个全局事务上下文，并向各个 RM 注册分支事务。

**分支事务注册**：

每个 RM 接收到 TC 的注册请求后，在本地生成一个分支事务，并将分支事务的 ID 和全局事务 ID 返回给 TC。

**业务处理**：

在业务处理过程中，各个 RM 分支事务执行相应的本地事务操作。

**全局事务提交**

当业务处理完成后，TM 发送全局事务提交的请求到 TC，TC 收到请求后，向各个 RM 发送提交事务的指令。

**分支事务提交**：

各个 RM 接收到提交指令后，执行本地事务的提交操作，并向 TC 汇报提交状态。

**全局事务结束**：

当所有分支事务都成功提交后，TC 发送全局事务提交成功的响应给 TM，此时全局事务结束。如果有任何一个分支事务提交失败，TC 将会发送回滚指令给各个 RM，触发全局事务的回滚操作。



### 📦使用 Seata 的基本步骤：

**引入 Seata 依赖**：

首先，在你的项目中引入 Seata 的依赖，比如使用 Maven：

```xml
<dependency>
    <groupId>io.seata</groupId>
    <artifactId>seata-all</artifactId>
    <version>1.4.0</version>
</dependency>
```

**配置 Seata Server**：

在项目中配置 Seata Server 的地址和端口，可以通过 `registry.conf` 和 `file.conf` 进行配置。在 `file.conf` 中配置数据源和事务日志存储路径等信息。



**配置 Seata DataSourceProxy**：

在业务服务的数据源上配置 Seata 的 DataSourceProxy，用于替换原始的数据源。可以使用 `@GlobalTransactional` 注解来标记一个分布式事务的开始点。



**编写业务代码**：

在业务代码中，使用 `@GlobalTransactional` 注解来标记一个分布式事务的开始点，例如：

```java
@Service
public class BusinessService {

    @Autowired
    private BusinessDao businessDao;

    @GlobalTransactional
    public void handleBusiness() {
        // 业务逻辑
        businessDao.insertData1();
        businessDao.insertData2();
    }
}
```

在 `handleBusiness` 方法中，使用了 `@GlobalTransactional` 注解来标记一个分布式事务的开始点，当方法执行时，Seata 将会创建一个全局事务。

**启动 Seata Server**：

在服务器上启动 Seata Server，可以使用以下命令：

```ba
sh seata-server.sh -p 8091 -m file
```

这里的 `-p 8091` 指定了 Seata Server 的端口号，`-m file` 表示使用文件模式进行配置。

**监控和管理**：

可以通过 Seata 提供的控制台界面进行全局事务的监控和管理，查看事务的执行情况、事务状态、异常信息等。

总的来说，Seata 是一个功能强大的分布式事务解决方案，可以帮助开发者在分布式系统中实现事务的一致性和可靠性。通过与 Spring Boot 等框架集成，开发者可以方便地使用 Seata 来管理分布式事务，保证系统在高并发和异常情况下的稳定运行。
