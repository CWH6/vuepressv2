import{_ as a,o as e,c as s,e as n}from"./app-HIYjnaWu.js";const i={},c=n(`<h2 id="midjourney" tabindex="-1"><a class="header-anchor" href="#midjourney" aria-hidden="true">#</a> Midjourney</h2><p>Midjourney 是最近出现的众多 AI 图像生成器之一。与Dall-E 2或它的一些其他竞争对手不同，Midjourney 为您的要求提供了更梦幻般的艺术风格。</p><p>它可能会吸引那些在科幻文学或艺术作品中工作的人，他们需要更多的感觉。其他 AI 生成器更倾向于照片，而 Midjourney 更像是一种绘画工具。</p><p>正如该品牌的网站所述，它旨在“探索新的思想媒介并扩展人类的想象力”。</p><h3 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h3><p>科学上网+获取midejourney账号</p><h3 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤" aria-hidden="true">#</a> 配置步骤</h3><h4 id="登陆" tabindex="-1"><a class="header-anchor" href="#登陆" aria-hidden="true">#</a> 登陆</h4><p>网页版地址：<code>www.discord.com/app</code>，登录您获取到的账号，复制粘贴账号、密码，点击登录后输入一次性的验证码。</p><h4 id="新建内置服务器" tabindex="-1"><a class="header-anchor" href="#新建内置服务器" aria-hidden="true">#</a> 新建内置服务器</h4><p>由于我这里购买的是共享账号，共享账号需要在自己的服务器使用，出图不会错乱，能方便管理自己的作品，页面左侧找到服务器列表栏，点加号创建新服务器，然后根据图片一步步操作：<strong>（注：一个人请不要建多个服务器）</strong></p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/1.jpg" alt=""></p><p>然后我们就到了他的常规频道了，可以点击创建一个新的频道</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20230702104043792.png" alt=""></p><h4 id="添加midjourney机器人" tabindex="-1"><a class="header-anchor" href="#添加midjourney机器人" aria-hidden="true">#</a> 添加midjourney机器人：</h4><p>刚新建的服务器还不能作图，需要把midjourney机器人邀请到服务器，才能发送作图命令！</p><p>在自己新建的服务器页面中间找到添加您的首个APP按钮，之后根据图片一步步操作：</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/2.png" alt=""></p><p>1.添加您的首个APP</p><p>2.弹出的窗口点击“来看看吧</p><p>3.搜索midjourney 回车确认</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/3.png" alt=""></p><p>3.搜索midjourney 回车确认</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/6.png" alt=""></p><p>4.搜索结果第一个 midjourney bot 点击进入</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/7.png" alt=""></p><p>5.点击添加至服务器</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/8.png" alt=""></p><ol start="6"><li>继续 然后授权</li></ol><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/9.png" alt=""></p><blockquote><p><strong>至此，创建服务器和添加机器人的操作大功告成！可以开始愉快的生成图片了~</strong></p></blockquote><h3 id="生成图片命令" tabindex="-1"><a class="header-anchor" href="#生成图片命令" aria-hidden="true">#</a> 生成图片命令</h3><p>midjourney几乎所有的操作都是在对话框里完成的，包括生成图片和各种系统指令，然后服务器处理图片，返回结果，手机版也是一样的</p><h4 id="imagine-prompt" tabindex="-1"><a class="header-anchor" href="#imagine-prompt" aria-hidden="true">#</a> /imagine prompt:</h4><p>基本生成指令</p><p><strong>词生图</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#语法 /imagine prompt 图片描述</span>
/imagine prompt a dog <span class="token keyword">in</span> water
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>发出生成指令后，midjourney返回4分图，图片对应的顺序如图，下面有一排按钮，U是某一张图放大，可以保存或更改细节，V是在某一张图的基础上再生成一张细节不一样的4分图</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20230702112646261.png" alt=""></p><p><strong>图生图</strong></p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20230702110333387.png" alt=""></p><p>将上传成功的图片拖拽到输入框（会变成图片链接），后面我们再添加描述</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#语法 /imagine prompt 图片链接 描述</span>
/imagine prompt https://s.mj.run/ngQmXbXRAOY cool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20230702110546676.png" alt=""></p><p>根据基本图生成可爱男动漫形象</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/imagine prompt https://s.mj.run/ngQmXbXRAOY Generate anime based on images with cute male characters
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20230702110800122.png" alt=""></p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20230702110848787.png" alt=""></p><p>大图可以点Make Variations返回一张细节不同的4分图（这里就不操作），也可以直接保存，网页版直接保存方式为左键点击图片，然后右键保存</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/image-20230702111213318.png" alt=""></p><h4 id="blend" tabindex="-1"><a class="header-anchor" href="#blend" aria-hidden="true">#</a> /blend</h4><p>根据上传的多张参考图，生成一张图</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/10.png" alt=""></p><h4 id="describe" tabindex="-1"><a class="header-anchor" href="#describe" aria-hidden="true">#</a> /describe</h4><p>根据上传的参考图片，生成多个相关的关键词，图生词</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/11.png" alt=""></p><h4 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> /settings</h4><p>默认设置，控制面板</p><p><img src="https://cwh6-bucket.oss-cn-shanghai.aliyuncs.com/bk/12.png" alt=""></p>`,59),t=[c];function p(h,r){return e(),s("div",null,t)}const o=a(i,[["render",p],["__file","midjourney_use.html.vue"]]);export{o as default};
