---
title: 线程池
date: 2024/02/09
categories:
 - 菜单
---

### 🚤为什么需要线程池
在处理大量任务，频繁地创建和销毁线程会浪费时间和效率,尤其是浪费内存。

线程池能做到让线程重复利用，让他们继续执行其他任务而不是立即销毁

线程池通过预先创建一定数量的线程，让这些线程处理来自任务队列中的任务，而不是频繁创建和销毁线程

### 🐣优点

线程池可以`减少创建和销毁线程的次数`,`提高应用程序的性能`,线程池中的工作线程可以重复利用,减少线程的创建和销毁开销

根据系统的承受能力调整线程池中工作线程的数量,`防止过多的内存消耗导致服务器崩溃`。`提高应用程序的可靠性和稳定性`

### 😭缺点
用线程池构建的应用程序容易遭受`同步错误和死锁等并发风险`,此外，线程池还容易遭受特定的风险。
如与池有关的死锁、资源不足和线程泄漏。

处理：在使用线程池中,特别注意线程安全和资源管理等问题。

### 🔷使用场景

**Web服务器**：

处理来自客户端的HTTP请求。每个请求都可以分配给线程池中的一个线程来处理，以提高服务器的吞吐量和性能。

**数据库连接池**：

管理数据库连接以及执行数据库查询。通过使用线程池，可以重用现有的数据库连接，并在需要时为新请求分配连接，以减少连接创建和销毁的开销。

**电商网站的库存管理**：

定期检查库存并更新数据库。通过使用线程池，可以将这些任务异步执行，而不会阻塞主线程，从而提高系统的响应性和性能。

**网络爬虫**：

从网站上抓取数据。爬取过程中，可能需要并发地抓取多个页面，并使用线程池来管理并发任务的执行

**消息队列的消费者**： 

从消息队列中消费消息并执行相应的业务逻辑。通过使用线程池，可以并发地处理多个消息，并根据系统负载动态调整线程数量

**文件上传和下载服务**： 

处理用户上传的文件，并提供下载服务。通过使用线程池，可以异步地处理文件上传和下载任务，提高系统的并发处理能力

**大数据处理**：

处理大规模数据集合的计算任务。通过使用线程池，可以并行地处理数据，加速数据处理过程。


### 📦创建方式

在Java中，创建线程池通常使用 java.util.concurrent 包中的 ExecutorService 接口及其实现类。常见的线程池创建方式包括：

**newFixedThreadPool(int nThreads)**

创建固定大小的线程池，线程数量固定且不会改变。如果所有线程都处于活动状态，后续任务将会在队列中等待。

```java
ExecutorService fixedThreadPool = Executors.newFixedThreadPool(5);
```

**newCachedThreadPool()**

创建一个根据需要创建新线程的线程池，但在有可用线程时将重用之前构造的线程。当所有线程都处于活动状态，会创建一个新线程来处理新的任务。


``` java
ExecutorService cachedThreadPool = Executors.newCachedThreadPool();
```

 **newSingleThreadExecutor()**

创建一个单线程的线程池，只有一个工作线程在执行任务，保证所有任务按顺序执行

```java
ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();
```

**newScheduledThreadPool(int corePoolSize)**

创建一个固定大小的线程池，支持定时及周期性任务执行。

```java
ExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(5);
```

**newWorkStealingPool(int parallelism)**

创建一个工作窃取线程池，每个线程都维护自己的任务队列，空闲时从其他线程队列中窃取任务执行。

```java
ExecutorService workStealingPool = Executors.newWorkStealingPool();
```


### 🧠栗子

> 使用 newFixedThreadPool(int nThreads) 方法创建了一个固定大小为5的线程池,并提交了10个任务给线程池执行。由于线程池的大小为5，因此最多同时有5个任务在并发执行。每个任务都会打印其任务编号和执行线程的名称，并模拟执行1秒钟的任务。执行完毕后，关闭线程池。

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        // 创建固定大小为5的线程池
        ExecutorService executor = Executors.newFixedThreadPool(5);
        
        // 提交10个任务给线程池执行
        for (int i = 0; i < 10; i++) {
            executor.execute(new Task(i));
        }
        
        // 关闭线程池
        executor.shutdown();
    }
    
    static class Task implements Runnable {
        private final int taskId;
        
        public Task(int taskId) {
            this.taskId = taskId;
        }
        
        @Override
        public void run() {
            System.out.println("Task " + taskId + " is running on thread: " + Thread.currentThread().getName());
            try {
                Thread.sleep(1000); // 模拟任务执行
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("Task " + taskId + " is complete.");
        }
    }
}

```