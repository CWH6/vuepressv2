---
title: theme
date: 2020/05/27
---



## 流程部署

```java
/**
* 测试流程部署
*/
@Test
public void testDeployment() {
    // 1、创建 ProcessEngine
    ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();

    // 2、获取 RepositoryService
    RepositoryService repositoryService = processEngine.getRepositoryService();

    // 3、使用 service 进行流程的部署
    Deployment deployment = repositoryService.createDeployment()
            .name("出差申请流程")
            .addClasspathResource("bpmn/evection.bpmn") // 添加 BPMN 文件
            .addClasspathResource("bpmn/evection.png")  // 添加流程图 PNG 文件
            .deploy();

    // 4、输出部署信息
    System.out.println("流程部署ID: " + deployment.getId()); //
    System.out.println("流程部署名称: " + deployment.getName()); //出差申请流程
}
```



## 启动流程实例

```java
    @Test
    public void testStartProcess() {
        // 1. 创建ProcessEngine
        ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();

        // 2. 获取RuntimeService
        RuntimeService runtimeService = processEngine.getRuntimeService();

        // 3. 根据流程定义的key启动流程实例
        ProcessInstance instance = runtimeService.startProcessInstanceByKey("myEvection");

        // 4. 输出信息
        System.out.println("流程定义ID: " + instance.getProcessDefinitionId());// myEvection: 1:4
        System.out.println("流程实例ID: " + instance.getId()); // 2501 
        System.out.println("当前活动的ID: " + instance.getActivityId()); // null
    }
```



## 查看执行任务

```java
    @Test
    public void testFindPersonalTaskList() {
        // 1. 获取流程引擎
        ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();

        // 2. 获取TaskService
        TaskService taskService = processEngine.getTaskService();

        // 3. 根据流程Key和任务的负责人查询任务
        List<Task> taskList = taskService.createTaskQuery()
                .processDefinitionKey("myEvection") // 要查询的流程定义Key
                .taskAssignee("zhangsan") // 要查询的负责人
                .list();

        // 4. 输出任务信息
        for (Task task : taskList) {
            System.out.println("流程实例id=" + task.getProcessInstanceId());
            System.out.println("任务Id=" + task.getId());
            System.out.println("任务负责人=" + task.getAssignee());
            System.out.println("任务名称=" + task.getName());
        }
    }
```



## 发起申请

```java
    @Test
    public void completeTask() {
        // 获取流程引擎
        ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();

        // 获取TaskService
        TaskService taskService = processEngine.getTaskService();

        // 根据任务id完成任务
        String taskId = "2505"; // 请替换为您要完成的任务ID
        taskService.complete(taskId);
    }
```



## 上级审批

```java
@Test
public void completeTask() {
    // 获取引擎
    ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();

    // 获取操作任务的服务 TaskService
    TaskService taskService = processEngine.getTaskService();

    // 完成任务，参数：任务id，完成zhangsan的任务
    taskService.complete("2505");

    // 获取jerry-myEvection对应的任务
    Task task = taskService.createTaskQuery()
            .processDefinitionKey("myEvection")
            .taskAssignee("jerry")  //经理名字   后续修改这个完成其他人多的审批任务
            .singleResult();

    System.out.println("流程实例id=" + task.getProcessInstanceId());
    System.out.println("任务Id=" + task.getId());
    System.out.println("任务负责人=" + task.getAssignee());
    System.out.println("任务名称=" + task.getName());

    // 完成jerry的任务
    taskService.complete(task.getId());
}
```