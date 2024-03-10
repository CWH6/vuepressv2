---
title: activity基本
date: 2020/05/27
---



## 概述

activiti是一个工作流引警，activiti可以将**业务系统中复杂的业务流程抽取出来**，使用专门的**建模语言BPMN2.0进行定义**，**业务流程按照预先定义的流程进行执行**，实现了系统的流程由activiti进行管理，减少业务系统由于流程变更进行系统升级改造的工作量，**从而提高系统的健壮性，同时也减少了系统开发维护成本。**



## BPMN2.0基本符号

### 事件

Event：表示流程节点的状态

**开始**：表示一个流程的开始，**中间**：发生的开始和结束事件之间，影响处理的流程，**结束**：表示该过程结束

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240309230004058.png)

### 活动

Activities：活动是工作或任务的一个通用术语。一个活动可以是一个任务，还可以是一个当前流程的子处理流程；其次，你还可以为活动指定不同的类型。

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240309230217189.png)

### 网关

GateWay：用于表示流程的分支与合并，有几种常用网关需要了解

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240309230250986.png)

**排他网关**：只有一条路径会被选择

**并行网关**：每一条路径都会被选择

**包容网关**：可以同时执行多条线路，也可以在网关上设置条件

**事件网关**： 专门为中间捕获事件设置的，允许设置多个输出流指向多个不同的中间捕获事件。当流程执行到事件网关后，流程

处于等待状态，需要等待抛出事件才能将等待状态转换为活动状态

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240309230553384.png)

### 流向

流是连接两个流程节点的连线，常见的流向包含以下几种：

**顺序流**：用一个带实心箭头的实心线表示，用于指定活动执行的顺序

**信息流**：用一条带箭头的虚线表示，用于描述两个独立的业务参与者（业务实体/业务角色）之间发送和接受的消息流动

**关联**：用一根带有线箭头的点线表示，用于将相关的数据、文本和其他人工信息与流对象联系起来。用于展示活动的输入和输出

![](https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240309230803922.png)



## 表结构

| 表分类       | 表名                  | 解释                                               |
| ------------ | --------------------- | -------------------------------------------------- |
| 一般数据     |                       |                                                    |
|              | [ACT_GE_BYTEARRAY]    | 通用的流程定义和流程资源                           |
|              | [ACT_GE_PROPERTY]     | 系统相关属性                                       |
| 流程历史记录 |                       |                                                    |
|              | [ACT_HI_ACTINST]      | 历史的流程实例                                     |
|              | [ACT_HI_ATTACHMENT]   | 历史的流程附件                                     |
|              | [ACT_HI_COMMENT]      | 历史的说明性信息                                   |
|              | [ACT_HI_DETAIL]       | 历史的流程运行中的细节信息                         |
|              | [ACT_HI_IDENTITYLINKJ | 历史的流程运行过程中用户关系                       |
|              | [ACT_HI_PROCINST]     | 历史的流程实例                                     |
|              | [ACT_HI_TASKINST]     | 历史的任务实例                                     |
|              | [ACT_HI_VARINST]      | 历史的流程运行中的变量信息                         |
| 流程定义表   |                       |                                                    |
|              | [ACT_RE_DEPLOYMENT]   | 部署单元信息                                       |
|              | [ACT_RE_MODEL]        | 模型信息                                           |
|              | [ACT_RE_PROCDEF]      | 已部署的流程定义                                   |
| 运行实例表   |                       |                                                    |
|              | [ACT_RU_EVENT_SUBSCR] | 运行时事件                                         |
|              | [ACT_RU_EXECUTION]    | 运行时流程执行实例                                 |
|              | [ACT_RU_IDENTITYLINKJ | 运行时用户关系信息，存储任务节点与参与者的相关信息 |
|              | [ACT_RU_JOB]          | 运行时作业                                         |
|              | [ACT_RU_TASK]         | 运行时任务                                         |
|              | [ACT_RU_VARIABLE]     | 运行时变量表                                       |


## 类关系

| 类                | 作用                                                 |
| ----------------- | ---------------------------------------------------- |
| ProcessEngine     | 调用上面其他服务： RepositoryService,TaskService.... |
| RepositoryService | 操作跟 部署 相关的表，操作 re 表                     |
| RuntimeService    | 操作跟 运行 相关的表，操作 ru 表                     |
| HistoryService    | 操作跟 历史 相关的表，操作 hi 表                     |



> [参考](https://blog.csdn.net/qq_61544409/article/details/129719335)