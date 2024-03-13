import{_ as n,o as s,c as a,e}from"./app-pVQ1Hrls.js";const p={},t=e(`<h3 id="🚤为什么需要线程池" tabindex="-1"><a class="header-anchor" href="#🚤为什么需要线程池" aria-hidden="true">#</a> 🚤为什么需要线程池</h3><p>在处理大量任务，频繁地创建和销毁线程会浪费时间和效率,尤其是浪费内存。</p><p>线程池能做到让线程重复利用，让他们继续执行其他任务而不是立即销毁</p><p>线程池通过预先创建一定数量的线程，让这些线程处理来自任务队列中的任务，而不是频繁创建和销毁线程</p><h3 id="🐣优点" tabindex="-1"><a class="header-anchor" href="#🐣优点" aria-hidden="true">#</a> 🐣优点</h3><p>线程池可以<code>减少创建和销毁线程的次数</code>,<code>提高应用程序的性能</code>,线程池中的工作线程可以重复利用,减少线程的创建和销毁开销</p><p>根据系统的承受能力调整线程池中工作线程的数量,<code>防止过多的内存消耗导致服务器崩溃</code>。<code>提高应用程序的可靠性和稳定性</code></p><h3 id="😭缺点" tabindex="-1"><a class="header-anchor" href="#😭缺点" aria-hidden="true">#</a> 😭缺点</h3><p>用线程池构建的应用程序容易遭受<code>同步错误和死锁等并发风险</code>,此外，线程池还容易遭受特定的风险。 如与池有关的死锁、资源不足和线程泄漏。</p><p>处理：在使用线程池中,特别注意线程安全和资源管理等问题。</p><h3 id="🔷使用场景" tabindex="-1"><a class="header-anchor" href="#🔷使用场景" aria-hidden="true">#</a> 🔷使用场景</h3><p><strong>Web服务器</strong>：</p><p>处理来自客户端的HTTP请求。每个请求都可以分配给线程池中的一个线程来处理，以提高服务器的吞吐量和性能。</p><p><strong>数据库连接池</strong>：</p><p>管理数据库连接以及执行数据库查询。通过使用线程池，可以重用现有的数据库连接，并在需要时为新请求分配连接，以减少连接创建和销毁的开销。</p><p><strong>电商网站的库存管理</strong>：</p><p>定期检查库存并更新数据库。通过使用线程池，可以将这些任务异步执行，而不会阻塞主线程，从而提高系统的响应性和性能。</p><p><strong>网络爬虫</strong>：</p><p>从网站上抓取数据。爬取过程中，可能需要并发地抓取多个页面，并使用线程池来管理并发任务的执行</p><p><strong>消息队列的消费者</strong>：</p><p>从消息队列中消费消息并执行相应的业务逻辑。通过使用线程池，可以并发地处理多个消息，并根据系统负载动态调整线程数量</p><p><strong>文件上传和下载服务</strong>：</p><p>处理用户上传的文件，并提供下载服务。通过使用线程池，可以异步地处理文件上传和下载任务，提高系统的并发处理能力</p><p><strong>大数据处理</strong>：</p><p>处理大规模数据集合的计算任务。通过使用线程池，可以并行地处理数据，加速数据处理过程。</p><h3 id="📦创建方式" tabindex="-1"><a class="header-anchor" href="#📦创建方式" aria-hidden="true">#</a> 📦创建方式</h3><p>在Java中，创建线程池通常使用 java.util.concurrent 包中的 ExecutorService 接口及其实现类。常见的线程池创建方式包括：</p><p><strong>newFixedThreadPool(int nThreads)</strong></p><p>创建固定大小的线程池，线程数量固定且不会改变。如果所有线程都处于活动状态，后续任务将会在队列中等待。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ExecutorService</span> fixedThreadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>newCachedThreadPool()</strong></p><p>创建一个根据需要创建新线程的线程池，但在有可用线程时将重用之前构造的线程。当所有线程都处于活动状态，会创建一个新线程来处理新的任务。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ExecutorService</span> cachedThreadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>newSingleThreadExecutor()</strong></p><p>创建一个单线程的线程池，只有一个工作线程在执行任务，保证所有任务按顺序执行</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ExecutorService</span> singleThreadExecutor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>newScheduledThreadPool(int corePoolSize)</strong></p><p>创建一个固定大小的线程池，支持定时及周期性任务执行。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ExecutorService</span> scheduledThreadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newScheduledThreadPool</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>newWorkStealingPool(int parallelism)</strong></p><p>创建一个工作窃取线程池，每个线程都维护自己的任务队列，空闲时从其他线程队列中窃取任务执行。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ExecutorService</span> workStealingPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newWorkStealingPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="🧠栗子" tabindex="-1"><a class="header-anchor" href="#🧠栗子" aria-hidden="true">#</a> 🧠栗子</h3><blockquote><p>使用 newFixedThreadPool(int nThreads) 方法创建了一个固定大小为5的线程池,并提交了10个任务给线程池执行。由于线程池的大小为5，因此最多同时有5个任务在并发执行。每个任务都会打印其任务编号和执行线程的名称，并模拟执行1秒钟的任务。执行完毕后，关闭线程池。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ExecutorService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Executors</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建固定大小为5的线程池</span>
        <span class="token class-name">ExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 提交10个任务给线程池执行</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            executor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Task</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 关闭线程池</span>
        executor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Task</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> taskId<span class="token punctuation">;</span>
        
        <span class="token keyword">public</span> <span class="token class-name">Task</span><span class="token punctuation">(</span><span class="token keyword">int</span> taskId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>taskId <span class="token operator">=</span> taskId<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Task &quot;</span> <span class="token operator">+</span> taskId <span class="token operator">+</span> <span class="token string">&quot; is running on thread: &quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 模拟任务执行</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Task &quot;</span> <span class="token operator">+</span> taskId <span class="token operator">+</span> <span class="token string">&quot; is complete.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","threadPool.html.vue"]]);export{r as default};