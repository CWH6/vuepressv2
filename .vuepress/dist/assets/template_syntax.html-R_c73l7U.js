import{_ as o,r as p,o as c,c as l,a,b as n,d as t,e}from"./app-_OZj9BKu.js";const i={},d=a("h2",{id:"概念",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#概念","aria-hidden":"true"},"#"),n(" 概念")],-1),r=a("p",null,"Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。",-1),u=a("p",null,"在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。",-1),h={href:"https://v2.cn.vuejs.org/v2/guide/render-function.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<h2 id="插值" tabindex="-1"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值</h2><p>数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Message: {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Mustache 标签将会被替代为对应数据对象上 <code>msg</code> property 的值。无论何时，绑定的数据对象上 <code>msg</code> property 发生了改变，插值处的内容都会更新。</p><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><p>指令 (Directives) 是带有 <code>v-</code> 前缀的特殊 attribute。指令 attribute 的值预期是<strong>单个 JavaScript 表达式</strong> (<code>v-for</code> 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。回顾我们在介绍中看到的例子：</p><h3 id="v-once" tabindex="-1"><a class="header-anchor" href="#v-once" aria-hidden="true">#</a> v-once</h3>`,7),g={href:"https://v2.cn.vuejs.org/v2/api/#v-once",target:"_blank",rel:"noopener noreferrer"},v=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-once</span><span class="token punctuation">&gt;</span></span>这个将不会改变: {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="v-html" tabindex="-1"><a class="header-anchor" href="#v-html" aria-hidden="true">#</a> v-html</h3>`,2),m={href:"https://v2.cn.vuejs.org/v2/api/#v-html",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"v-html",-1),_=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Using mustaches: {{ rawHtml }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Using v-html directive: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rawHtml<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code>span</code> 的内容将会被替换成为 property 值 <code>rawHtml</code>，直接作为 HTML——会忽略解析 property 值中的数据绑定。注意，你不能使用 <code>v-html</code> 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。</p><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind" aria-hidden="true">#</a> v-bind</h3>`,3),f={href:"https://v2.cn.vuejs.org/v2/api/#v-bind",target:"_blank",rel:"noopener noreferrer"},x=a("code",null,"v-bind",-1),M=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于布尔 attribute (它们只要存在就意味着值为 <code>true</code>)，<code>v-bind</code> 工作起来略有不同，在这个例子中：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isButtonDisabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果 <code>isButtonDisabled</code> 的值是 <code>null</code>、<code>undefined</code> 或 <code>false</code>，则 <code>disabled</code> attribute 甚至不会被包含在渲染出来的 <code>&lt;button&gt;</code> 元素中。</p><h2 id="js表达式" tabindex="-1"><a class="header-anchor" href="#js表达式" aria-hidden="true">#</a> js表达式</h2><h2 id="指令缩写" tabindex="-1"><a class="header-anchor" href="#指令缩写" aria-hidden="true">#</a> 指令缩写</h2>`,6);function H(V,j){const s=p("ExternalLinkIcon");return c(),l("div",null,[d,r,u,a("p",null,[n("如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，"),a("a",h,[n("直接写渲染 (render) 函数"),t(s)]),n("，使用可选的 JSX 语法。")]),k,a("p",null,[n("通过使用 "),a("a",g,[n("v-once 指令"),t(s)]),n("，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：")]),v,a("p",null,[n("双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 "),a("a",m,[b,n(" 指令"),t(s)]),n("：")]),_,a("p",null,[n("Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 "),a("a",f,[x,n(" 指令"),t(s)]),n(" (单向绑定)：")]),M])}const L=o(i,[["render",H],["__file","template_syntax.html.vue"]]);export{L as default};
