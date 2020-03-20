(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Start-usage-md"],{

/***/ "./site/apps/Start/usage.md":
/*!**********************************!*\
  !*** ./site/apps/Start/usage.md ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<h2 id=\\\"install\\\">Install</h2>\\n<pre><code class=\\\"language-bash\\\"><span class=\\\"token function\\\">npm</span> i earth-ui</code></pre>\\n<h2 id=\\\"basic-usage\\\">Basic Usage</h2>\\n<pre><code class=\\\"language-jsx\\\"><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> Button <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'earth-ui'</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token string\\\">'earth-ui/dist/earth-ui.min.css'</span><span class=\\\"token punctuation\\\">;</span>\\n\\nReactDOM<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">render</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token class-name\\\">Button</span></span><span class=\\\"token punctuation\\\">></span></span>Name<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token class-name\\\">Button</span></span><span class=\\\"token punctuation\\\">></span></span><span class=\\\"token punctuation\\\">,</span> mountNode<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></code></pre>\\n<blockquote>\\n<p>Note: earth-ui supports ES6 tree shaking by default.</p>\\n</blockquote>\\n<h2 id=\\\"use-in-create-react-app\\\">Use in create-react-app</h2>\\n<p><a href=\\\"https://github.com/facebookincubator/create-react-app\\\">create-react-app</a> is an out of the box starter of react application and we will try to use the <code>earth-ui</code> library in projects created by <code>create-reaction-app</code> as following:</p>\\n<p>First, you need to install the <code>create-reaction-app</code> cli, see more at <a href=\\\"https://github.com/facebookincubator/create-react-app\\\">Installation Instruction</a>.</p>\\n<p>Then, install <code>earth-ui</code> by <code>npm</code> or <code>yarn</code>.</p>\\n<pre><code class=\\\"language-bash\\\"><span class=\\\"token function\\\">npm</span> i earth-ui</code></pre>\\n<p>Modify <code>src/App.js</code> and import the Button from <code>earth-ui</code>.</p>\\n<pre><code class=\\\"language-jsx\\\"><span class=\\\"token keyword\\\">import</span> React<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span> Component <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'react'</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> Button <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'earth-ui'</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token string\\\">'./App.css'</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">App</span> <span class=\\\"token keyword\\\">extends</span> <span class=\\\"token class-name\\\">Component</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function\\\">render</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">return</span> <span class=\\\"token punctuation\\\">(</span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">className</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>App<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">></span></span>\\n          <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token class-name\\\">Button</span></span> <span class=\\\"token attr-name\\\">icon</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>add<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">></span></span><span class=\\\"token constant\\\">ADD</span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token class-name\\\">Button</span></span><span class=\\\"token punctuation\\\">></span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">></span></span>\\n    <span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">default</span> App<span class=\\\"token punctuation\\\">;</span></code></pre>\\n<p>Modify <code>src/App.css</code> and import <code>earth-ui/dist/earth-ui.min.css</code> at the top.</p>\\n<pre><code class=\\\"language-css\\\"><span class=\\\"token atrule\\\"><span class=\\\"token rule\\\">@import</span> <span class=\\\"token string\\\">'~earth-ui/dist/earth-ui.min.css'</span><span class=\\\"token punctuation\\\">;</span></span>\\n\\n<span class=\\\"token selector\\\">.App</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">text-align</span><span class=\\\"token punctuation\\\">:</span> center<span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n...</code></pre>\\n<p>As for now, you could see the Button on the page and you can also add other components to the application. More details, please refer to <a href=\\\"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md\\\">User Guide</a>.</p>\\n<h2 id=\\\"global-configuration\\\">Global Configuration</h2>\\n<p>Use <code>defaultProps</code> prop to override or extend the configuration of component globally, as the following example:</p>\\n<pre><code class=\\\"language-jsx\\\">Tooltip<span class=\\\"token punctuation\\\">.</span>defaultProps <span class=\\\"token operator\\\">=</span> Object<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">assign</span><span class=\\\"token punctuation\\\">(</span>Tooltip<span class=\\\"token punctuation\\\">.</span>defaultProps <span class=\\\"token operator\\\">||</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span>\\n  triggerMode<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'click'</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span></code></pre>\\n<blockquote>\\n<p>After the global configuration has been set, these apis become stateful which means the final results are affected by the configuration, so try to configure them all at once and point out them to other developers.</p>\\n</blockquote>\\n\";\n\n//# sourceURL=webpack:///./site/apps/Start/usage.md?");

/***/ })

}]);