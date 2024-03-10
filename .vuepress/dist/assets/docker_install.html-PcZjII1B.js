import{_ as n,o as s,c as e,e as a}from"./app-pI-r5Vp9.js";const i={},c=a(`<blockquote><p>centos系统安装docker</p><p>其他系统参考文档， https://docs.docker.com/engine/install/centos/</p></blockquote><h2 id="_1、移除以前docker相关包" tabindex="-1"><a class="header-anchor" href="#_1、移除以前docker相关包" aria-hidden="true">#</a> 1、移除以前docker相关包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove docker*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2、配置yum源" tabindex="-1"><a class="header-anchor" href="#_2、配置yum源" aria-hidden="true">#</a> 2、配置yum源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装一些工具</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils

<span class="token comment">#配置docker的源地址，linux根据这个地址下载docker相关的东西</span>
<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、安装docker" tabindex="-1"><a class="header-anchor" href="#_3、安装docker" aria-hidden="true">#</a> 3、安装docker</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ce-社区版本  ee-企业版（要付费） docker-ce-cli（操作docker的命令行工具） </span>
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、启动" tabindex="-1"><a class="header-anchor" href="#_4、启动" aria-hidden="true">#</a> 4、启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># enable now 既要开机启动也要现在启动</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token parameter variable">--now</span>

<span class="token comment">#本次启动docker</span>
<span class="token function">sudo</span> systemctl <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、配置镜像加速" tabindex="-1"><a class="header-anchor" href="#_5、配置镜像加速" aria-hidden="true">#</a> 5、配置镜像加速</h2><p>每个阿里云号都有: https://cr.console.aliyun.com/cn-shanghai/instances/mirrors</p><p>找到如下的位置：</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20240307002431933.png" alt=""></p><p>配置镜像加速</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://dhzmmbbb.mirror.aliyuncs.com&quot;],
    &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
  &quot;log-driver&quot;: &quot;json-file&quot;,
  &quot;log-opts&quot;: {
    &quot;max-size&quot;: &quot;100m&quot;
  },
  &quot;storage-driver&quot;: &quot;overlay2&quot;
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、查看docker详细信息" tabindex="-1"><a class="header-anchor" href="#_6、查看docker详细信息" aria-hidden="true">#</a> 6、查看docker详细信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7、查看docker版本" tabindex="-1"><a class="header-anchor" href="#_7、查看docker版本" aria-hidden="true">#</a> 7、查看docker版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),d=[c];function o(l,t){return s(),e("div",null,d)}const u=n(i,[["render",o],["__file","docker_install.html.vue"]]);export{u as default};
