import{_ as n,o as s,c as a,e}from"./app-HIYjnaWu.js";const p={},t=e(`<h3 id="创建一个-vue-实例" tabindex="-1"><a class="header-anchor" href="#创建一个-vue-实例" aria-hidden="true">#</a> 创建一个 Vue 实例</h3><p>每个 Vue 应用都是通过用 <code>Vue</code> 函数创建一个新的 <strong>Vue 实例</strong>开始的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据与方法" tabindex="-1"><a class="header-anchor" href="#数据与方法" aria-hidden="true">#</a> 数据与方法</h3><p>当一个 Vue 实例被创建时，它将 <code>data</code> 对象中的所有的 property 加入到 Vue 的<strong>响应式系统</strong>中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 我们的数据对象</span>
<span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>

<span class="token comment">// 该对象被加入到一个 Vue 实例中</span>
<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> data
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 获得这个实例上的 property</span>
<span class="token comment">// 返回源数据中对应的字段</span>
vm<span class="token punctuation">.</span>a <span class="token operator">==</span> data<span class="token punctuation">.</span>a <span class="token comment">// =&gt; true</span>

<span class="token comment">// 设置 property 也会影响到原始数据</span>
vm<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span>
data<span class="token punctuation">.</span>a <span class="token comment">// =&gt; 2</span>

<span class="token comment">// ……反之亦然</span>
data<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">3</span>
vm<span class="token punctuation">.</span>a <span class="token comment">// =&gt; 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 <code>data</code> 中的 property 才是<strong>响应式</strong>的。也就是说如果你添加一个新的 property，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>vm<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">&#39;hi&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么对 <code>b</code> 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个 property，但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">newTodoText</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">visitCount</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hideCompletedTodos</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里唯一的例外是使用 <code>Object.freeze()</code>，这会阻止修改现有的 property，也意味着响应系统无法再<em>追踪</em>变化。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> obj
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ foo }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 这里的 \`foo\` 不会更新！ --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo = &#39;baz&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Change it<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 <code>$</code>，以便与用户定义的 property 区分开来。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#example&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> data
<span class="token punctuation">}</span><span class="token punctuation">)</span>

vm<span class="token punctuation">.</span>$data <span class="token operator">===</span> data <span class="token comment">// =&gt; true</span>
vm<span class="token punctuation">.</span>$el <span class="token operator">===</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>

<span class="token comment">// $watch 是一个实例方法</span>
vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这个回调将在 \`vm.a\` 改变后调用</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","vue_instance.html.vue"]]);export{u as default};
