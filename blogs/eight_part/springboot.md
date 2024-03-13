---
title: 基本
date: 2020/05/27
---

### 1、什么是SpringBoot

**通过SpringBoot,可以轻松地创建独立的，基于生产级别的Spring的应用程序**，您可以“运行”它们。大
多数Spring Boot应用程序需要最少的Spring配置。



### 2、SpringBoot的特征

- 创建独立的Spring应用程序

- 内置Tomcat，Jetty或Undertow（无需部署WAR文件）

- 提供固化的“starter”依赖项，以**简化构建配置**

- 让 Spring 框架**和其他第三方库的配置过程变得自动化和简化**

- 提供可用于生产的功能，例如**指标，运行状况检查和外部化配置**
- 不需要XML配置



### 3、如何快速构建一个SpringBoot项目？

- 通过Web界面使用。http://start.spring.io

- 通过Spring Tool Suite使用。
- 通过IntelliJ IDEA使用。
- 使用Spring Boot CLI使用。



### 4、SpringBoot启动类注解?它是由哪些注解组成？

**@SpringBootApplication**， 有如下注解组成：

- @SpringBootConfiguration:组合了 @Configuration 注解，实现配置文件的功能。

- @EnableAutoConfiguration: 打开自动配置的功能，也可以关闭某个自动配置的选项

- @SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })

- @ComponentScan:Spring组件扫描



### 5、什么是yaml

yaml/yml 是一个可读性高，用来表达数据序列化的格式, YAML参考了其他多种语言，

包括：C语言、Python、Perl。更具有结构性。



### 6、SpringBoot支持配置文件的格式

1、properties

```properties
java.xiaokaxiu.name = xiaoka
```

2、yml

```yaml
java:
  xiaokkaxiu:
     name:xiaoka
```



### 7、SpringBoot启动方式？

1. main方法
2. 命令行 java -jar 的方式
3. mvn/gradle



### 8. SpringBoot需要独立的容器运行？

不需要，内置了 Tomcat/Jetty。



### 9、 SpringBoot配置途径？

Spring Boot 提供了多种配置途径，它们按照优先级排序如下：

1、**命令行参数**：

```bash
# 可以在启动应用程序时使用命令行参数传递配置，例如：
java -jar your-application.jar --spring.profiles.active=dev
```

2 、**java:comp/env里的JNDI属性**

如果应用程序运行在 J2EE 容器中，并且使用了 JNDI 属性，可以从这里获取配置信息。

3、**JVM 系统属性**：

```bash
# 可以在启动 JVM 时通过 `-D` 参数设置系统属性，例如：
java -Djava.xiaokaxiu.name=xiaoka -jar your-application.jar
```

4、**操作系统环境变量**：

从操作系统的环境变量中获取配置信息。

5、**随机生成的带 `random.\*` 前缀的属性**：

```bash
# Spring Boot 可以生成随机值作为配置属性，可以在其他属性中引用，例如 ${random.long}。
```

6、**应用程序以外的 `application.properties` 或 `application.yml` 文件**

可以在外部的配置文件中设置应用程序的配置，例如 `/config` 目录下的 `application.properties`。

7、**打包在应用程序内的 `application.properties` 或 `application.yml` 文件**：

如果应用程序被打包成 JAR 或 WAR 文件，可以在内部的 `META-INF` 目录下的 `application.properties` 中设置配置信息。

8、**通过 `@PropertySource` 标注的属性源**：

可以使用 `@PropertySource` 注解指定额外的属性文件，例如：

```java
@PropertySource("classpath:custom.properties")
```

9、**默认属性**

Spring Boot 提供了一些默认的属性，用于配置应用程序的默认行为。如果没有在上述地方设置相应的属性，则会使用这些默认属性。

这个列表按照优先级排序，也就是说，任何在高优先级属性源里设置的属性都会覆盖低优先级的相
同属性。



### 10、 application.properties和application.yml文件可放位置?优先级?

1、**外置，在相对于应用程序运行目录的/config子目录里**。

这意味着你可以将 `application.properties` 或 `application.yml` 文件放置在应用程序运行目录的 `/config` 子目录中。例如，如果你的应用程序在 `/app` 目录下运行，则配置文件应该放置在 `/app/config` 目录中。

2、**外置，在应用程序运行的目录里**。

如果不使用 `/config` 子目录，你也可以将配置文件直接放置在应用程序运行的目录中，例如 `/app` 目录下。

3、**内置，在config包内**

将配置文件放置在应用程序的源代码中的 `config` 包内。这意味着你的配置文件会作为源代码的一部分，打包进最终的应用程序。

4、**内置，在Classpath根目录**

将配置文件放置在应用程序的 Classpath（类路径）根目录下。这些配置文件将与编译后的代码一起打包到最终的应用程序中。

上面的优先级顺序 从高到低

因此，如果在 `/config` 子目录和应用程序运行目录下都有相同的配置文件，则优先使用 `/config` 子目录下的配置文件。如果 `/config` 子目录下没有找到配置文件，则使用应用程序运行目录下的配置文件，依此类推。



我们可以自己指定文件的位置来加载配置文件

```bash
# Spring Boot 应用程序去加载指定位置的配置文件 /home/application.yml
# --spring.config.location 参数可以让你通过命令行的方式指定 Spring Boot 应用程序加载的配置文件的位置和名称
java -jar xiaoka.jar --spring.config.location=/home/application.yml
```



### 11、SpringBoot自动配置原理?

Spring Boot的自动配置原理是通过 `@EnableAutoConfiguration` 注解来实现的。这个注解会引入 `AutoConfigurationImportSelector` 类，它的作用是扫描所有存在于 `META-INF/spring.factories` 文件中的 jar 包。



在 `spring.factories` 文件中，通过 `org.springframework.boot.autoconfigure.EnableAutoConfiguration` 键来指定需要自动配置的类。Spring Boot 在启动时会扫描这些类，并根据需要自动配置应用程序所需的各种组件和功能。



### 12、 SpringBoot热部署方式

- spring-boot-devtools
- Spring Loaded
- Jrebel

- 模版热部署



### 13、「bootstrap.yml」 和「application.yml」?

bootstrap.yml 优先于application.yml



### 14、SpringBoot如何修改端口号?

yml:

```yaml
server :
  port : 8888
```

properties:

```pro
server.port=8888
```

命令1：

```java
java -jar xiaoka.jar ——— server.port=8888
```

命令2:

```java
java - Dserver.port=8888 -jar xiaoka.jar
```



### 15、开启SpringBoot特性的几种方式

1. 继承spring-boot-starter-parent项目

2. 导入spring-boot-dependencies项目依赖



### 16. SpringBoot如何兼容Spring项目?

在启动类加:

@ImportResource(locations = {"classpath:spring.xml"})



### 17、 SpringBoot配置监控

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

使用方式

| HTTP 方法 | 路径                  | 描述                       | 需要认证 |
| --------- | --------------------- | -------------------------- | -------- |
| GET       | /actuator/autoconfig  | 查看自动配置的使用情况     | 是       |
| GET       | /actuator/configprops | 查看配置属性，包括默认配置 | 是       |
| GET       | /actuator/beans       | 查看 bean 及其关系列表     | 是       |
| GET       | /actuator/dump        | 打印线程栈                 | 是       |
| GET       | /actuator/env         | 查看所有环境变量           | 是       |
| GET       | /actuator/env/{name}  | 查看具体变量值             | 是       |
| GET       | /actuator/health      | 查看应用健康指标           | 否       |

> [参考](https://www.jianshu.com/p/d57dc9f2e0d9)



### 18. actuator获得Bean装配报告信息访问哪个端点？

/beans 端点



### 19、actuator关闭应用程序访问哪个端点

/shutdown

该端点默认是关闭的，如果开启，需要如下设置

```yaml
endpoints:
  shutdown:
    enabled: true
```



### 20、actuator查看发布应用信息访问哪个端点?

/info



### 21、针对请求访问的几个组合注解？

@PatchMapping   根据部分属性更新

@PostMapping， 创建，根据部分属性更新

@GetMapping  

@PutMapping   更新已有的资源的全部属性

@DeleteMapping



### 22、SpringBoot 中的starter

可以理解成对依赖的一种合成，starter会把一个或一套功能相关依赖都包含进来，避免了自己去依赖费事，还有各种包的冲突问题。大大的提升了开发效率。 并且相关配置会有一个默认值，如果我们自己去配置，就会覆盖默认值



### 23、 SpringBoot集成Mybatis?

mybatis-spring-boot-starter



### 24、 什么是SpringProfiles?

一般来说我们从开发到生产，经过开发(dev)、测试（test）、上线(prod)。不同的时刻我们会用不同的 配置。Spring Profiles 允许用户根据配置文件（dev，test，prod 等）来注册 bean。它们可以让我们 自己选择什么时候用什么配置。



### 25、不同的环境的配置文件?

可以是 application-{profile}.properties/yml ，但默认是启动主配置文件application.properties,一般 来说我们的不同环境配置如下。

- `application.properties`：主配置文件

- `application-dev.properties`：开发环境配置文件 

- `application-test.properties`：测试环境配置文件 

- `application.prop-properties`：生产环境配置文件



### 26. 如何激活某个环境的配置？

比如我们激活开发环境。

yml：

```yaml
spring:
  profiles:
    active: dev
```

properties:

```properties
spring.profiles.active=dev
```

命令行

```bash
java -jar xiaoka-v1.0.jar ———spring.profiles.active=dev
```



### 27、编写测试用例的注解？

@SpringBootTest

```java
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootTest
public class MySpringBootTest {

    @Autowired
    private MyService myService;

    @Test
    public void testSomething() {
        // 进行测试
    }
}
```

### 28、SpringBoot异常处理相关注解?

**@ControllerAdvice** : 定义全局的异常处理器

**@ExceptionHandler**: 用于在特定的 Controller 类或者全局异常处理器中处理特定类型的异常



**@ControllerAdvice**：

`@ControllerAdvice` 注解用于定义全局的异常处理器，可以捕获整个应用程序中的异常，而不是局限于单个 Controller。

**@ExceptionHandler**：

`@ExceptionHandler` 注解用于在 `@Controller` 类或者 `@ControllerAdvice` 类中定义特定类型的异常处理方法。

```java
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ModelAndView handleException(Exception ex) {
        ModelAndView modelAndView = new ModelAndView("error");
        modelAndView.addObject("message", "An error occurred: " + ex.getMessage());
        return modelAndView;
    }
}
```

上面的例子展示了一个简单的异常处理方法，当应用程序抛出 Exception 类型的异常时，会调用 `handleException` 方法，返回一个带有错误信息的 ModelAndView 对象



**在特定的 Controller 中使用 @ExceptionHandler**：

你也可以在具体的 `@Controller` 类中使用 `@ExceptionHandler` 来处理该 Controller 中的异常。

```java
import org.springframework.web.bind.annotation.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MyController {

    @GetMapping("/mycontroller")
    public String myMethod() {
        // 此处可能会抛出异常
    }

    @ExceptionHandler(Exception.class)
    public ModelAndView handleException(Exception ex) {
        ModelAndView modelAndView = new ModelAndView("error");
        modelAndView.addObject("message", "An error occurred: " + ex.getMessage());
        return modelAndView;
    }
}

```

在上面的例子中，`handleException` 方法将处理 `MyController` 中抛出的 Exception 类型的异常。一般不会这样写

在 Spring MVC 应用程序中集中管理异常处理，减少重复代码，并将异常处理与业务逻辑分离开来



### 29. SpringBoot 1.x 和 2.x区别?

1. SpringBoot 2基于Spring5和JDK8，Spring 1x用的是低版本。

2. 配置变更，参数名等。

3. SpringBoot2相关的插件最低版本很多都比原来高

4. 2.x配置中的中文可以直接读取，不用转码

5. Actuator的变化

6. CacheManager 的变化



### 30. SpringBoot读取配置相关注解有？

- @PropertySource

- @Value

- @Environment
- @ConfigurationProperties



**@PropertySource**

`@PropertySource` 注解用于指定一个或多个属性源文件，从中加载属性值到 Spring 的环境中。它通常与 `@Configuration` 类一起使用，以将外部属性文件中的属性加载到 Spring 应用程序的环境中。

以下是使用 `@PropertySource` 注解的基本用法示例：

**在 `@Configuration` 类中使用 `@PropertySource`**：

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:application.properties")
public class AppConfig {
    // 配置类的其他内容
}
```

在这个示例中，我们创建了一个名为 `AppConfig` 的配置类，并使用 `@PropertySource` 注解指定了一个名为 `application.properties` 的属性源文件。这意味着 Spring 将从 classpath 中的 `application.properties` 文件中加载属性值。



**@Value**

`@Value` 注解用于从 Spring 的环境中获取属性值，并注入到 Java 类中的字段、方法参数或构造函数参数中。它可以注入简单的属性值，也可以注入复杂的表达式和 SpEL 表达式。

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MyComponent {

    @Value("${myapp.name}")
    private String appName;

    @Value("${myapp.version}")
    private String appVersion;

    // 可以使用这些属性值进行其他操作
}
```



**@Environment**

`@Environment` 注解是 Spring Boot 中的一个注解，用于注入 Spring 的环境变量。它提供了一种方便的方式来获取应用程序的配置信息、系统属性、命令行参数等，并在 Spring Bean 中使用。



**在字段中注入环境变量**：

```java
import org.springframework.core.env.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MyComponent {

    @Autowired
    private Environment environment;

    public void someMethod() {
        String appName = environment.getProperty("myapp.name");
        String appVersion = environment.getProperty("myapp.version");
        // 使用环境变量进行其他操作
    }
}
```



**@ConfigurationProperties**

`@ConfigurationProperties` 是 Spring Boot 中用来绑定配置属性的注解。通过这个注解，你可以将外部的配置文件或者环境变量映射到一个 Java Bean 中，方便地在应用程序中使用这些配置。



**定义配置类**：

首先，你需要定义一个 Java 类作为配置类，并使用 `@ConfigurationProperties` 注解：

```java
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("myapp")
public class MyAppProperties {

    private String name;
    private String version;

    // 省略 getter 和 setter 方法

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}
```

