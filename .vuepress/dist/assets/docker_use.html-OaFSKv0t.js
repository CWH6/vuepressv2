import{_ as n,o as a,c as s,e}from"./app-pI-r5Vp9.js";const i={},c=e(`<h1 id="docker操作" tabindex="-1"><a class="header-anchor" href="#docker操作" aria-hidden="true">#</a> docker操作</h1><h3 id="_1、镜像操作" tabindex="-1"><a class="header-anchor" href="#_1、镜像操作" aria-hidden="true">#</a> 1、镜像操作</h3><h4 id="_1、拉取镜像" tabindex="-1"><a class="header-anchor" href="#_1、拉取镜像" aria-hidden="true">#</a> 1、拉取镜像</h4><p>nginx镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx <span class="token comment">#下载最新版本 </span>

<span class="token comment"># 镜像名:版本名（标签）</span>
<span class="token function">docker</span> pull nginx:1.20.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载最新</span>
<span class="token function">docker</span> pull redis 
<span class="token comment"># 下载指定版本</span>
<span class="token function">docker</span> pull redis:6.2.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、查看镜像" tabindex="-1"><a class="header-anchor" href="#_2、查看镜像" aria-hidden="true">#</a> 2、查看镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有镜像</span>
<span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、删除镜像" tabindex="-1"><a class="header-anchor" href="#_3、删除镜像" aria-hidden="true">#</a> 3、删除镜像</h4><ul><li>根据版本删除</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># rmi ，rm:删除， i:镜像</span>
<span class="token comment"># 存在多个版本默认删除最新版本 == docker rmi redis:latest</span>
<span class="token function">docker</span> rmi redis   

<span class="token comment"># 指定版本删除</span>
<span class="token function">docker</span> rmi redis:6.2.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根据镜像id删除</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi 0802342342323 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、容器操作" tabindex="-1"><a class="header-anchor" href="#_2、容器操作" aria-hidden="true">#</a> 2、容器操作</h3><p>根据镜像，实例化容器，镜像就类似于JAVA的类，容器就类似于JAVA的类的对象</p><h4 id="_1、启动容器" tabindex="-1"><a class="header-anchor" href="#_1、启动容器" aria-hidden="true">#</a> 1、启动容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker run [OPTIONS] IMAGE [COMMAND] [ARG...]</span>

<span class="token comment"># docker run 设置项 镜像名 镜像启动运行的命令（镜像里面默认有的，一般不会写）</span>

如：
<span class="token comment"># nginx= nginx:latest 镜像可以写完整</span>
<span class="token comment"># --name=mynginx  设置项中给容器命名</span>
<span class="token comment"># -d:后台运行，退出运行容器页面容器也在跑</span>
<span class="token comment"># --restart=always：开机自启动，可以reboot重启linux测试</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span><span class="token operator">=</span>mynginx <span class="token parameter variable">-d</span> -- <span class="token assign-left variable">restart</span><span class="token operator">=</span>always nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、重启容器" tabindex="-1"><a class="header-anchor" href="#_2、重启容器" aria-hidden="true">#</a> 2、重启容器</h4><p>将停止的容器重新启动</p><ul><li>根据容器id再次启动容器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>根据容器名字再次启动容器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start 容器名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、查看容器" tabindex="-1"><a class="header-anchor" href="#_3、查看容器" aria-hidden="true">#</a> 3、查看容器</h4><ul><li>查看运行中的容器（容器：运行中的镜像）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看所有容器（运行或者被停止的）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、停止容器" tabindex="-1"><a class="header-anchor" href="#_4、停止容器" aria-hidden="true">#</a> 4、停止容器</h4><p>将运行中的容器停止</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#0d0 是容器id,可以不写完整，模糊匹配</span>
<span class="token function">docker</span> stop 0d0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、删除容器" tabindex="-1"><a class="header-anchor" href="#_5、删除容器" aria-hidden="true">#</a> 5、删除容器</h4><ul><li>根据容器id删除容器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -f 强制删除正在运行中的容器</span>
<span class="token comment"># 96234234323e 容器id</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 96234234323e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根据容器名字删除容器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -f 强制删除正在运行中的容器</span>
<span class="token comment"># mynginx 容器名字</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> mynginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、更新容器" tabindex="-1"><a class="header-anchor" href="#_6、更新容器" aria-hidden="true">#</a> 6、<strong>更新容器</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改容器为开机自启</span>
<span class="token function">docker</span> update 容器id/容器名字 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、容器端口映射" tabindex="-1"><a class="header-anchor" href="#_7、容器端口映射" aria-hidden="true">#</a> 7、容器端口映射</h4><p>访问服务器：192.168.227.8:88 ----&gt;访问到niginx容器里面 80端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -p 88:80  当前主机的88端口映射到nginx容器里面的80端口</span>
<span class="token comment"># -d --restart=always 总是后台运行</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span><span class="token operator">=</span>mynginx <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">88</span>:80 nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>容器信息</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1699448413143-3668769a-ad7f-4568-bf2f-835d22b0757d.png" alt="img">访问服务器ip+88端口</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1699448647922-5c575787-7b4b-4cfe-8beb-210f0f70dd04.png" alt="img"></p><p>映射图</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1699448707659-866c9ee2-8598-4e33-ab6b-f69f86918093.png" alt="img"></p><h4 id="_8、主机-容器-拷贝-配置文件" tabindex="-1"><a class="header-anchor" href="#_8、主机-容器-拷贝-配置文件" aria-hidden="true">#</a> 8、主机/容器 拷贝 配置文件</h4><p>1、拷贝容器的配置到主机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cp 复制容器中指定位置的配置文件内容到主机 </span>
<span class="token function">docker</span> <span class="token function">cp</span> 容器id:/etc/nginx/nginx.conf  /data/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、拷贝主机的配置文件到容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cp 复制主机配置到容器中 </span>
<span class="token function">docker</span> <span class="token function">cp</span> /data/conf/nginx.conf 容器id:/etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、查看容器日志" tabindex="-1"><a class="header-anchor" href="#_9、查看容器日志" aria-hidden="true">#</a> 9、查看容器日志</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看某个日志的配置文件</span>
<span class="token function">docker</span> logs 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、容器内部操作" tabindex="-1"><a class="header-anchor" href="#_3、容器内部操作" aria-hidden="true">#</a> 3、容器内部操作</h3><h4 id="_1、进入容器内部" tabindex="-1"><a class="header-anchor" href="#_1、进入容器内部" aria-hidden="true">#</a> 1、进入容器内部</h4><p>容器内部类似一个小linux</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入容器内容系统，修改容器内容，进去后就是为容器root root@容器id</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器id /bin/bash

<span class="token comment"># 或者：</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器id /bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、退出容器" tabindex="-1"><a class="header-anchor" href="#_2、退出容器" aria-hidden="true">#</a> 2、退出容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>exits
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、进入容器并修改内容" tabindex="-1"><a class="header-anchor" href="#_3、进入容器并修改内容" aria-hidden="true">#</a> 3、进入容器并修改内容</h4><p>如修改nginx容器的index.html页面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入容器里面</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 023421312z /bin/bash

<span class="token comment"># 修改nginx的index.html</span>
root@023421312z:/<span class="token comment">#   cd /usr/share/nginx/html/</span>
root@023421312z:/<span class="token comment">#  echo &quot;&lt;h1&gt;Welcom to mynginx&lt;/h1&gt;&quot; &gt; index.html</span>
root@023421312z:/<span class="token comment">#  cat index.html </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问效果：</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1699449201291-98c16cae-0cae-41b3-9fd3-7a5bb452f384.png" alt="img"></p><h4 id="_4、容器-数据卷-挂载-外部修改" tabindex="-1"><a class="header-anchor" href="#_4、容器-数据卷-挂载-外部修改" aria-hidden="true">#</a> 4、容器-数据卷/挂载- 外部修改</h4><p>将主机某个目录映射 容器内部的某个目录</p><p>容器运行时，配置挂载路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -v 挂载，将主机/data/html 跟容器的/usr/share/nginx目录进行挂载</span>
<span class="token comment"># ro :只读</span>
<span class="token comment"># rw :读写</span>
<span class="token comment"># chw2336/cwhnginx:v1.0 容器：版本</span>
<span class="token comment"># 主机上的文件夹不存在则帮创建</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span><span class="token operator">=</span>mynginx  <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">88</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/html:/usr/share/nginx/html:ro chw2336/cwhnginx:v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将主机的文件修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/html/
<span class="token comment">#使用标准流写入文件并创建文件, 覆盖</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;数据卷修改&quot;</span> <span class="token operator">&gt;</span> index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器访问nginx容器页面 （上面修改成功后，nginx页面内容改变）</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1699452461634-b04a1a57-9d76-4c1d-9c7c-3c6d0a24dd04.png" alt="img"></p><h4 id="_5、挂载配置文件" tabindex="-1"><a class="header-anchor" href="#_5、挂载配置文件" aria-hidden="true">#</a> 5、挂载配置文件</h4><p>挂载后，关于主机文件覆盖容器内部配置文件的问题</p><ul><li>主机空数据卷 ----挂载----&gt; 容器非空目录 ：容器目录被复制到主机数据卷</li><li>主机非空数据卷----挂载-----&gt; 容器目录：主机非空主机卷覆盖</li></ul><p>问题例子：</p><p>启动一个nginx容器，假如此时主机还没这个 nginx.conf 文件，你配置了nginx容器启动后把nginx.con文件挂载到主机上。 但挂载之后，发现主机上出现的不是nginx.conf文件，而是一个nginx.conf的目录， 且报错“ Check if the specified host path exists and is the expected type”。</p><p>将nginx配置文件映射主机上，在容器启动时修改配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建好主机挂载文件夹</span>
<span class="token builtin class-name">cd</span> /data/
<span class="token function">mkdir</span> conf
<span class="token builtin class-name">cd</span> conf

<span class="token comment"># 随便启动一个容器（只是想获取容器的配置文件）</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span><span class="token operator">=</span>mynginx
<span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">88</span>:80 <span class="token punctuation">\\</span>
chw2336/cwhnginx:v1.0

<span class="token comment"># cp 复制容器中指定位置的配置文件内容到主机 </span>
<span class="token function">docker</span> <span class="token function">cp</span> 容器id:/etc/nginx/nginx.conf  /data/conf/nginx.conf
<span class="token comment"># cp 复制主机配置到容器中 </span>
<span class="token comment">#docker cp /data/conf/nginx.conf 容器id:/etc/nginx/nginx.conf</span>

<span class="token comment"># 修改服务器上获取的配置文件: /data/conf/nginx.conf</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token comment"># 删除上面的容器</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment"># 主机文件夹的映射没有会帮创建</span>
<span class="token comment"># 主机文件必须存在 nginx.conf，参考下面docker容器cp命令</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span><span class="token operator">=</span>mynginx  <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">88</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/html:/usr/share/nginx/html:ro <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
chw2336/cwhnginx:v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、其他操作" tabindex="-1"><a class="header-anchor" href="#_4、其他操作" aria-hidden="true">#</a> 4、其他操作</h3><h4 id="_1、提交改变" tabindex="-1"><a class="header-anchor" href="#_1、提交改变" aria-hidden="true">#</a> 1、提交改变</h4><p>将自己修改的镜像提交成新的镜像存在本机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment">#语法</span>
 <span class="token function">docker</span> commit <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>
 
 <span class="token comment">#提交后会在镜像存在本机</span>
 <span class="token comment"># -a &quot;作者名&quot;</span>
 <span class="token comment"># -m &quot;提交描述&quot;</span>
 <span class="token comment"># CONTAINER 容器id  be1acf71ceb5</span>
 <span class="token comment">#REPOSITORY[:TAG] 提交的镜像名：版本 cwhnginx:v1.0</span>
 <span class="token function">docker</span> commit <span class="token parameter variable">-a</span> <span class="token string">&quot;作者名&quot;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;nginx首页变化&quot;</span> be1acf71ceb5  cwhnginx:v1.0
 
 <span class="token comment">#查看镜像(发现有刚刚提交的镜像)</span>
 <span class="token function">docker</span> images
 
 <span class="token comment">#运行</span>
 <span class="token function">docker</span> run  <span class="token parameter variable">-d</span>  <span class="token parameter variable">-p</span> <span class="token number">88</span>:80 mynginx:v1.0 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、镜像保存" tabindex="-1"><a class="header-anchor" href="#_2、镜像保存" aria-hidden="true">#</a> 2、镜像保存</h4><p>将镜像保存一个实体文件如tar, 方便系统间传输</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#语法</span>
<span class="token function">docker</span> save <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>IMAGE<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment">#-o  写出文件为 cwhnginx.tar</span>
dcoker save <span class="token parameter variable">-o</span> cwhnginx.tar cwhnginx:v1.0

<span class="token comment">#linux将文件传输到目标主机,第一次要输入目标主机密码</span>
<span class="token comment"># /root/ 文件传输位置为该目录下</span>
<span class="token function">scp</span> abc.tar root@192.168.227.6:/root/

<span class="token comment"># 目标主机将压缩包加载为镜像</span>
<span class="token comment">#-i 读文件tar</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> chwnginx.tar

<span class="token comment">#目标主机运行</span>
<span class="token function">docker</span> run  <span class="token parameter variable">-d</span>  <span class="token parameter variable">-p</span> <span class="token number">88</span>:80 cwhnginx:v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、推送远程仓库" tabindex="-1"><a class="header-anchor" href="#_3、推送远程仓库" aria-hidden="true">#</a> 3、推送远程仓库</h4><p>推送镜像到docker hub;应用市场</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#语法</span>
<span class="token function">docker</span> tag local-image:tagname new-repo:tagname
<span class="token function">docker</span> push new-repo:tagname

<span class="token comment">#设置标签(版本)</span>
<span class="token comment"># local-image:tagname,即本地镜像 cwhnginx:v1.0</span>
<span class="token comment"># new-repo:tagname  仓库位置：版本</span>
<span class="token function">docker</span> tag cwhnginx:v1.0 chw2336/cwhnginx:v1.0

<span class="token comment">#第一次登陆，需要输入dockerhub账号密码</span>
<span class="token function">docker</span> login

<span class="token comment">#退出（推送完成镜像后退出，这样子安全一点）</span>
<span class="token function">docker</span> <span class="token builtin class-name">logout</span>

<span class="token comment">#推送到远程仓库</span>
<span class="token function">docker</span> push chw2336/cwhnginx:v1.0


<span class="token comment">#别的主机下载我们推送的镜像</span>
<span class="token function">docker</span> pull chw2336/cwhnginx:v1.0

<span class="token comment">#运行</span>
<span class="token function">docker</span> run  <span class="token parameter variable">-d</span>  <span class="token parameter variable">-p</span> <span class="token number">88</span>:80 chw2336/cwhnginx:v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>前提：</strong></p><ul><li>注册账号 ：https://hub.docker.com/</li><li>创建仓库：https://hub.docker.com/repository/docker/chw2336/cwhnginx/general</li></ul><p>创建仓库</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1700657832510-c522d09d-ab1c-4640-8ed8-2951232bb572.png" alt="img"></p><p>将镜像推送到仓库后</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1700657926393-307f0994-36cb-43c7-886b-63f3572b9e45.png" alt="img"></p><h4 id="_4、容器日志及其他操作" tabindex="-1"><a class="header-anchor" href="#_4、容器日志及其他操作" aria-hidden="true">#</a> 4、容器日志及其他操作</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看某个日志的配置文件</span>
<span class="token function">docker</span> logs 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如访问某个nginx容器的地址: 正常访问</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1700658156123-b8dc2749-0985-49d4-b44a-37771c4b057c.png" alt="img"></p><p>错误访问：访问不存在的资源</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1700658191254-57ba1a3e-17bf-49f5-a037-121be570fcf7.png" alt="img"></p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1700658231972-6de305f7-db92-42a8-9eff-e3efa93cd849.png" alt="img"></p><p>当我们在访问的路径中，放个文件就会在访问时下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#进入主机映射到容器的页面</span>
<span class="token builtin class-name">cd</span> /data/html
<span class="token comment"># hh为访问路径 ，1111为下载内容</span>
<span class="token builtin class-name">echo</span> <span class="token number">11111</span> <span class="token operator">&gt;</span> hh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2023/png/32726505/1700658321471-131b360a-ca60-4db3-9a99-e86b225348ae.png" alt="img"></p>`,106),l=[c];function d(r,t){return a(),s("div",null,l)}const o=n(i,[["render",d],["__file","docker_use.html.vue"]]);export{o as default};
