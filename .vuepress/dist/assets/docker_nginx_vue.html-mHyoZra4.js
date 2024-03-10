import{_ as t,r as c,o as l,c as p,a as s,b as n,d as e,e as i}from"./app-pI-r5Vp9.js";const o={},r=i(`<h2 id="nginx镜像部署vue" tabindex="-1"><a class="header-anchor" href="#nginx镜像部署vue" aria-hidden="true">#</a> Nginx镜像部署Vue</h2><p>上面的方式打包的镜像已经 GB 级别，而采用Nginx镜像 MB 级别</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306220549678.png" alt=""></p><p>使用 Nginx 镜像部署 Vue 应用是常见的做法，优点如下：</p><p><strong>静态资源服务器</strong></p><p>Vue 应用是一个静态资源，Nginx 是一个高性能的 Web 服务器，能够有效地提供静态资源服务。</p><p><strong>反向代理和路由</strong></p><p>Nginx 可以作为反向代理，处理客户端请求并将它们路由到 Vue 应用中的正确页面。它还可以帮助处理前端路由和 SPA（单页应用）中的页面刷新问题。</p><p><strong>负载均衡</strong></p><p>如果你有多个前端实例，Nginx 可以用作负载均衡器，在这种情况下，它能够平衡流量并确保每个实例都得到适当的请求。</p><p><strong>安全性和性能优化</strong></p><p>Nginx 具有强大的安全功能和灵活的配置选项，可以用于加密通信、缓存静态资源、压缩内容等，有助于提高应用程序的性能和安全性。</p><h3 id="_1、vue项目打包" tabindex="-1"><a class="header-anchor" href="#_1、vue项目打包" aria-hidden="true">#</a> 1、Vue项目打包</h3><p>进入Vue项目内，运行 npm run build , 生成一个 dist 目录，其中包含最终的静态文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个项目打包后的静态文件夹为：dist-production</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306220504362.png" alt=""></p><p>将文件夹上传到服务器 /usr/etc/dist-production</p><h3 id="_2、nignx配置" tabindex="-1"><a class="header-anchor" href="#_2、nignx配置" aria-hidden="true">#</a> 2、Nignx配置</h3><p>nginx.conf 配置需要挂载到容器，先获取一份容器的nginx.conf</p><p>按照下面步骤获取容器内部nginx.conf, 将其复制到 /usr/etc/nginx.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx

<span class="token comment"># 启动容器，无需挂载数据卷（只是个测试容器）</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80  nginx:latest

<span class="token comment"># docker cp 容器id:容器内配置文件  服务器上的文件（此处没有，会帮忙创建）</span>
<span class="token function">docker</span> <span class="token function">cp</span> 946f17cc7ed4:/etc/nginx/nginx.conf /usr/etc/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d={href:"https://www.yuque.com/huihuahuadechuanshanjia/mazefa/eumgga2orrgssmgb",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>events <span class="token punctuation">{</span>
  worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
  include       /etc/nginx/mime.types<span class="token punctuation">;</span>
  default_type  application/octet-stream<span class="token punctuation">;</span>

  log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

  access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

  sendfile        on<span class="token punctuation">;</span>
  <span class="token comment">#tcp_nopush     on;</span>

  keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

  <span class="token comment">#gzip  on;</span>

  include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>

    server <span class="token punctuation">{</span>
    <span class="token comment"># 监听端口</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name example.com<span class="token punctuation">;</span>

    <span class="token comment"># 服务器上vue静态文件夹路径</span>
    root /usr/etc/dist-production<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
    try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、启动nignx容器" tabindex="-1"><a class="header-anchor" href="#_3、启动nignx容器" aria-hidden="true">#</a> 3、启动Nignx容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -p 将服务器9091映射到容器80</span>
<span class="token comment"># -d 容器后台运行</span>
<span class="token comment"># -name 容器名称 nginx-test</span>
<span class="token comment"># 服务器上静态资源挂载到nginx内部 -v /usr/etc/dist-production:/usr/share/nginx/html</span>
<span class="token comment"># 服务器上配置文件挂载到nginx内部 -v /usr/etc/nginx.conf:/etc/nginx/nginx.conf</span>
<span class="token comment"># 镜像名称 nginx:latest</span>
<span class="token comment"># \\ 换行显示</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9091</span>:80 <span class="token parameter variable">--name</span> nginx-test <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/etc/dist-production:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/etc/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306220637181.png" alt=""></p><h3 id="_4、测试" tabindex="-1"><a class="header-anchor" href="#_4、测试" aria-hidden="true">#</a> 4、测试</h3><p>window 系统访问 虚拟机ip:9091</p><p>http://192.168.227.10:9091/#/index</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240306220705694.png" alt=""></p>`,9),v={href:"https://blog.csdn.net/qq_45031509/article/details/128043584",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const a=c("ExternalLinkIcon");return l(),p("div",null,[r,s("p",null,[n("编辑服务器上的nginx.conf文件，"),s("a",d,[n("nginx配置详情"),e(a)])]),u,s("p",null,[n("参考"),s("a",v,[n("博客"),e(a)]),n("，该博客上的nginx目录划分更加明确")])])}const k=t(o,[["render",m],["__file","docker_nginx_vue.html.vue"]]);export{k as default};
