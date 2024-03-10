import{_ as i,r as s,o as d,c as r,a as e,b as n,d as c,e as l}from"./app-pI-r5Vp9.js";const t={},o=e("h2",{id:"vue-简单部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-简单部署","aria-hidden":"true"},"#"),n(" Vue 简单部署")],-1),u=e("h3",{id:"_1、创建dockerfile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1、创建dockerfile","aria-hidden":"true"},"#"),n(" 1、创建Dockerfile")],-1),p={href:"https://gitee.com/daidaibg/IofTV-Screen#https://gitee.com/link?target=https%3A%2F%2Fwww.daidaibg.com%2Fbigscreen",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>在 Vue 项目的根目录下创建名为 Dockerfile 的文件，并没有后缀。文件内容如下</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code># 使用 Node 14 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 将项目文件拷贝到容器中
COPY . .

# 安装项目依赖
RUN npm install

# 构建项目
RUN npm run build

# 暴露容器端口
EXPOSE 8080

# 容器启动命令
CMD [&quot;npm&quot;, &quot;start&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>解释</p><p>Dockerfile 主要内容为构建vue项目镜像的环境</p><p>/app 是在 Docker 镜像内部的工作目录，你可以在镜像构建过程中设置工作目录为 /app，这不是服务器上的目录，而是镜像内部的路径。当镜像启动时，这个路径会被用作容器内部应用程序的工作目录。</p></blockquote><h3 id="_2、构建镜像" tabindex="-1"><a class="header-anchor" href="#_2、构建镜像" aria-hidden="true">#</a> 2、构建镜像</h3><p>使用 Docker 的 build 命令构建镜像。确保你在包含 Dockerfile 的目录中运行此命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> vue-app <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、运行容器" tabindex="-1"><a class="header-anchor" href="#_3、运行容器" aria-hidden="true">#</a> 3、运行容器</h3><p>构建完成后，使用 docker run 命令运行镜像并创建容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 vue-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>容器运行后信息如下：</p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306221241198.png" style="zoom:80%;margin-left:300px;"><h3 id="_4、测试访问" tabindex="-1"><a class="header-anchor" href="#_4、测试访问" aria-hidden="true">#</a> 4、测试访问</h3><p>window系统ping 一下虚拟机内网ip, 测试ip之间是否能进行通信</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ping</span> 虚拟机内网地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下说明主机之间网络互通</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306221347076.png" alt=""></p><p>window系统 浏览器访问内网ip:8080</p><p>http://192.168.227.10:8080/#/index</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306221437531.png" alt=""></p>`,19);function h(m,b){const a=s("ExternalLinkIcon");return d(),r("div",null,[o,u,e("p",null,[n("此处在虚拟机（centos系统，配置好网络）部署 "),e("a",p,[n("可视化项目"),c(a)])]),v])}const k=i(t,[["render",h],["__file","docker_vue.html.vue"]]);export{k as default};
