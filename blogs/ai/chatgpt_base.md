---
title: chatgpt基本
date: 2020/05/27
---

### ChatGPT 概述

ChatGPT 是由 OpenAI 开发的基于 GPT（Generative Pre-trained Transformer）技术的聊天型人工智能模型。它可以用于多种对话场景，包括聊天机器人、客服应用、虚拟助手等。用户可以通过调用 API 与 ChatGPT 进行交互，实现自然语言处理和生成对话的功能。

### 版本信息

当前可用的 ChatGPT 版本为 3.5。

### API 对接文档

#### API 端点

- **基本 URL**: `https://api.openai.com/v1/engines/davinci-codex/completions`

#### 授权

为了使用 ChatGPT API，您需要先获得 OpenAI 的 API 密钥。请访问 [OpenAI API](https://platform.openai.com/signup) 注册并获取您的 API 密钥。

#### 请求方式

- **Method**: POST

#### 请求参数

- **model**: `davinci-codex`（ChatGPT 模型版本）
- **prompt**: 包含对 ChatGPT 的问题或输入文本的文本。
- **max_tokens**: 生成文本的最大长度。
- **temperature**: 控制生成文本的创造性，值越高则越随机，范围为 0 到 1。
- **top_p**: 用于采样的 softmax 截断（nucleus sampling）的概率阈值。
- **stop**: 用于指定 ChatGPT 停止生成文本的标记。

#### 示例请求

```
jsonCopy code{
  "model": "davinci-codex",
  "prompt": "Q: What is the purpose of life?",
  "max_tokens": 100,
  "temperature": 0.7,
  "top_p": 1,
  "stop": "\n"
}
```

#### 示例响应

```
jsonCopy code{
  "choices": [
    {
      "text": "A: The purpose of life is a complex philosophical question, and the answer can vary depending on one's beliefs and values. Some people believe that the purpose of life is to seek happiness and fulfillment, while others see it as a journey of personal growth and self-discovery. Ultimately, the purpose of life may be different for each individual, and it is up to each person to find their own meaning and purpose."
    }
  ]
}
```

### 资源链接

- [OpenAI 官方网站](https://openai.com/)
- [ChatGPT API 文档](https://beta.openai.com/docs/)
- [注册 OpenAI API](https://platform.openai.com/signup)