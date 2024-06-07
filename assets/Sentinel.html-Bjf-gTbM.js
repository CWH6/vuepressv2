import{_ as n,o as s,c as a,e}from"./app-HIYjnaWu.js";const t={},p=e(`<h3 id="🪸sentinel-熔断限流" tabindex="-1"><a class="header-anchor" href="#🪸sentinel-熔断限流" aria-hidden="true">#</a> 🪸Sentinel 熔断限流</h3><p><strong>Sentinel</strong> 是阿里巴巴开源的一款流量控制和服务保护的工具，主要用于解决分布式系统中的熔断降级、限流和系统负载保护等问题。在微服务架构中，Sentinel 可以帮助开发者实现对服务调用的熔断和限流，保护系统在高负载下的稳定性和可靠性。</p><h3 id="🧊sentinel-提供的功能包括" tabindex="-1"><a class="header-anchor" href="#🧊sentinel-提供的功能包括" aria-hidden="true">#</a> 🧊Sentinel 提供的功能包括：</h3><p><strong>流量控制</strong>：</p><p>Sentinel 支持基于 QPS（每秒查询率）、线程数和并发数等指标的流量控制。可以根据业务需求设置不同的流量控制规则，保护系统免受过载的影响。</p><p><strong>熔断降级</strong>：</p><p>当服务出现异常或超时时，Sentinel 可以自动地触发熔断，停止对该服务的调用，防止雪崩效应的发生。当熔断触发后，Sentinel 会进入到半开状态，定期尝试恢复服务调用，以检查服务是否已经恢复正常。</p><p><strong>系统负载保护</strong>：</p><p>Sentinel 可以根据系统负载情况动态地调整流量控制和熔断降级的策略，保障系统的稳定性和可靠性。</p><p><strong>实时监控和统计</strong>：</p><p>Sentinel 提供了实时的监控和统计功能，可以查看服务的流量情况、熔断降级状态、响应时间等指标，并通过 Dashboard 进行可视化展示。</p><p><strong>精细化的流量控制规则</strong>：</p><p>Sentinel 支持基于资源、URL、参数等维度的流量控制规则，可以根据具体的业务场景制定精细化的流量控制策略。</p><p><strong>多种适用场景</strong>：</p><p>Sentinel 不仅适用于微服务架构中的服务调用，还可以用于 HTTP 接口、数据库访问、消息队列等场景的流量控制和熔断降级。</p><h3 id="sentinel-的基本使用步骤" tabindex="-1"><a class="header-anchor" href="#sentinel-的基本使用步骤" aria-hidden="true">#</a> Sentinel 的基本使用步骤：</h3><p><strong>引入 Sentinel 依赖</strong>：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.csp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sentinel-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.8.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置 Sentinel 控制台地址</strong>：</p><p>在 <code>application.properties</code> 或 <code>application.yaml</code> 中配置 Sentinel 控制台的地址：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>spring.cloud.sentinel.transport.dashboard=localhost<span class="token punctuation">:</span><span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的 <code>localhost:8080</code> 是 Sentinel 控制台的地址，可以根据实际情况修改。</p><p><strong>定义流量控制规则</strong>：</p><p>在业务代码中定义流量控制规则，可以通过 <code>@SentinelResource</code> 注解来标记需要进行流量控制的资源，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> blockHandler <span class="token operator">=</span> <span class="token string">&quot;handleBlock&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello, Sentinel!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleBlock</span><span class="token punctuation">(</span><span class="token class-name">BlockException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Flow control limit&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里使用了 <code>@SentinelResource</code> 注解标记了 <code>hello</code> 方法，指定了当流量超过限制时的处理方法 <code>handleBlock</code>。</p><p><strong>启动 Sentinel 控制台</strong>：</p><p>在控制台服务器上启动 Sentinel 控制台，可以通过以下命令启动：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>java <span class="token operator">-</span>jar sentinel<span class="token operator">-</span>dashboard<span class="token operator">-</span><span class="token number">1.8</span><span class="token number">.2</span><span class="token punctuation">.</span>jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>控制台启动后，可以访问 <code>http://localhost:8080</code> 查看控制台界面，并登录查看实时的流量监控和规则配置。</p><p><strong>实时监控和管理</strong>：</p><p>在 Sentinel 控制台中，可以实时查看服务的流量情况、熔断降级状态、异常情况等，并根据需要调整流量控制规则。</p><p>总的来说，Sentinel 提供了丰富的功能和灵活的配置，可以帮助开发者实现对服务调用的流量控制和熔断降级，保护系统在高负载和异常情况下的稳定性和可靠性。它是一个非常有价值的微服务治理工具，在微服务架构中的应用非常广泛。</p>`,33),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","Sentinel.html.vue"]]);export{u as default};
