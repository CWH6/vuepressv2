---
title: 多线程
date: 2024/02/09
categories:
 - 菜单
---

###  🚤为什么使用多线程

多线程是指程序中包含多个执行流，即在一个程序中可以同时运行多个不同的线程来执行
不同的任务,提高任务处理的效率

### 🐣优点

提高多核CPU的利用率: 

一般来说一台主机上的会有多个CPU核心，我们可以创建多个线程，理论
上讲操作系统可以将多个线程分配给不同的CPU去执行，每个CPU执行一个线程，这样就提高了
CPU的使用效率，如果使用单线程就只能有一个CPU核心被使用。

### 😭缺点

线程需要占用内存,线程越多占用内存越多

### 🔷使用场景

迅雷多线程下载,数据库连接池,分批发送短信等


### 📦创建线程

#### 继承继承Thread类：

创建一个类并继承自Thread类，然后重写run()方法，在run()方法中定义线程执行的任务。最后创建该类的实例并调用start()方法来启动线程。

``` java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running...");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread myThread = new MyThread();
        myThread.start();
    }
}
```

#### 实现Runnable接口：

创建一个类实现Runnable接口，然后实现run()方法，在run()方法中定义线程执行的任务。然后创建Thread类的实例，将Runnable实例作为参数传递给Thread的构造函数，最后调用start()方法来启动线程。

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread running...");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread myThread = new Thread(new MyRunnable());
        myThread.start();
    }
}
```

#### 使用匿名内部类：

可以使用匿名内部类来直接创建Runnable接口的实例，并将其传递给Thread类的构造函数。
```java
public class Main {
    public static void main(String[] args) {
        Thread myThread = new Thread(new Runnable() {
            public void run() {
                System.out.println("Thread running...");
            }
        });
        myThread.start();
    }
}
```

#### 使用Lambda表达式：

在Java 8及以上版本中，可以使用Lambda表达式简化匿名内部类的写法。

```java
public class Main {
    public static void main(String[] args) {
        Thread myThread = new Thread(() -> {
            System.out.println("Thread running...");
        });
        myThread.start();
    }
}
```
