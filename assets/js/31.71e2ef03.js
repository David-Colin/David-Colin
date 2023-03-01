(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{501:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v(" Nuxt.js 是一个基于 Vue.js 的通用应用框架，一个用于 Vue.js 开发 SSR 应用的一站式解决方案，对客户端/服务端基础架构进行了抽象，主要关注的是应用的 UI 渲染。NuxtJs 可以实现基于 vuejs 的多页面应用，支持 SSR(服务器端渲染)，简化了 SSR 的开发难度，受到了 React SSR 框架 Next.js 的启发，使用 Webpack 和 Node.js 进行封装的基于 Vue 的 SSR 框架，预设了利用 Vue.js 开发服务端渲染的应用所需要的各种配置，而且还可以直接用命令把我们制作的 vue 项目生成静态 html。作为框架，Nuxt.js 为客户端/服务端这种典型的应用架构模式提供了许多有用的特性，例如异步数据加载、中间件支持、布局支持等。")]),s._v(" "),t("h2",{attrs:{id:"一、nuxt-js-官网地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、nuxt-js-官网地址"}},[s._v("#")]),s._v(" 一、Nuxt.js 官网地址")]),s._v(" "),t("p",[s._v("1 Nuxt.js 2.x 版本中文网站："),t("a",{attrs:{href:"https://www.nuxtjs.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.nuxtjs.cn/"),t("OutboundLink")],1),t("br"),s._v("\n2 Nuxt.js 2.x 版本英文网站："),t("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nuxtjs.org/"),t("OutboundLink")],1),t("br"),s._v("\n3 Nuxt.js 2.x 版本生命周期："),t("a",{attrs:{href:"https://nuxtjs.org/docs/concepts/nuxt-lifecycle/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nuxtjs.org/docs/concepts/nuxt-lifecycle/"),t("OutboundLink")],1),t("br"),s._v("\n4 Nuxt.js 2.x 版本配置文档："),t("a",{attrs:{href:"https://nuxtjs.org/docs/get-started/installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nuxtjs.org/docs/get-started/installation"),t("OutboundLink")],1),t("br"),s._v("\n5 Nuxt.js 3.x 版本英文网站："),t("a",{attrs:{href:"https://v3.nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://v3.nuxtjs.org/"),t("OutboundLink")],1),t("br"),s._v("\n截止目前"),t("code",[s._v("2022年4月6日10:25:01")]),s._v("为止，NuxtJs3.x 已发布了 beta 版本，NuxtJs3.x 还在开发完善中，不推荐在生产环境中使用。建议使用 NuxtJS 2.x 版本，相对比较稳定。")]),s._v(" "),t("h2",{attrs:{id:"二、ssr-服务端渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、ssr-服务端渲染"}},[s._v("#")]),s._v(" 二、SSR(服务端渲染)")]),s._v(" "),t("p",[s._v("SSR，即服务端渲染(Server Side Render)，就是在服务器端将对 Vue 页面进行渲染生成 html 文件，将 html 页面传递给浏览器。\n为什么要使用 SSR?"),t("br"),s._v("\n1、"),t("strong",[s._v("降低 SPA(Single Page Application)首屏渲染的时间：")]),s._v(" SPA 引用是将 bundle.js 从服务器获取，然后在客户端解析并挂载到 dom。而 SSR 直接将 HTML 字符串传递给浏览器。大大加快了首屏加载时间。"),t("br"),s._v("\n2、"),t("strong",[s._v("解决 SPA 不利于 SEO(Search Engine Optimization)的优化：")]),s._v(" SPA 的 HTML 只有一个无实际内容的 HTML 和一个 app.js，SSR 生成的 HTML 是有内容的，这让搜索引擎能索引到页面内容。")]),s._v(" "),t("h2",{attrs:{id:"三、nuxt-js-特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、nuxt-js-特性"}},[s._v("#")]),s._v(" 三、NUXT.JS 特性")]),s._v(" "),t("ul",[t("li",[s._v("基于 Vue.js")]),s._v(" "),t("li",[s._v("SSR 服务端渲染")]),s._v(" "),t("li",[s._v("强大的路由功能，支持异步数据")]),s._v(" "),t("li",[s._v("静态文件服务")]),s._v(" "),t("li",[s._v("ES2015+语法支持")]),s._v(" "),t("li",[s._v("打包和压缩 JS 和 CSS")]),s._v(" "),t("li",[s._v("HTML 头部标签管理")]),s._v(" "),t("li",[s._v("本地开发支持热加载")]),s._v(" "),t("li",[s._v("支持各种样式预处理器：SASS、LESS、Stulus 等等")]),s._v(" "),t("li",[s._v("支持 HTTP/2 推送")]),s._v(" "),t("li",[s._v("支持多页面应用")]),s._v(" "),t("li",[s._v("支持页面自定义布局")]),s._v(" "),t("li",[s._v("组件自动导入")])]),s._v(" "),t("h2",{attrs:{id:"四、开始-nuxt-项目的搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、开始-nuxt-项目的搭建"}},[s._v("#")]),s._v(" 四、开始 Nuxt 项目的搭建")]),s._v(" "),t("p",[s._v("为了快速入门，Nuxt.js 团队创建了脚手架工具 "),t("code",[s._v("create-nuxt-app")]),s._v("。确保安装了 npx(npx 在 NPM 版本 5.2.0 默认安装了)")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ npx create-nuxt-app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("项目名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n或\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" create nuxt-app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("项目名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("详细安装步骤参考官网："),t("a",{attrs:{href:"https://www.nuxtjs.cn/guide/installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.nuxtjs.cn/guide/installation"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"五、nuxt-跨域处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、nuxt-跨域处理"}},[s._v("#")]),s._v(" 五、Nuxt 跨域处理")]),s._v(" "),t("p",[s._v(" 使用过 vue 的同学，肯定知道对于项目中的跨域，vue-cli 对 webpack 中的 proxy 选项进行了一层封装。它暴露出来的是一个叫 proxyTable 的选项，是对 webpack 中的 proxy 和其三方插件 http-proxy-middleware 的一个整合。不幸的 Nuxt 中没有 proxyTable 这么一个配置项来进行跨域的配置。当然幸运的是，在 Nuxt 中你可以直接通过配置 http-proxy-middleware 来处理跨域。更幸运的是 Nuxt 官方提供了两个包来处理 axios 跨域问题。")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.npmjs.com/package/@nuxtjs/axios",target:"_blank",rel:"noopener noreferrer"}},[s._v("@nuxtjs/axios"),t("OutboundLink")],1),s._v("：Secure and easy Axios integration for Nuxt.")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.npmjs.com/package/@nuxtjs/proxy",target:"_blank",rel:"noopener noreferrer"}},[s._v("@nuxtjs/proxy"),t("OutboundLink")],1),s._v("：Proxy support for nuxt server")])]),s._v(" "),t("p",[s._v("安装依赖包：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i @nuxtjs/axios @nuxtjs/proxy -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后在 nuxt.config.js 文件里进行配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Modules: https://go.nuxtjs.dev/config-modules")]),s._v("\nmodules: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@nuxtjs/axios'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@nuxtjs/proxy'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Axios module configuration: https://go.nuxtjs.dev/config-axios")]),s._v("\naxios: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  proxy: true,\n  prefix: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),s._v(",\n  progress: true,\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开发模式下开启debug")]),s._v("\n  debug: process.env.NODE_ENV "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  withCredentials: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://www.npmjs.com/package/@nuxtjs/proxy或https://github.com/nuxt-community/proxy-module")]),s._v("\nproxy: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    target: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://route.showapi.com/'")]),s._v(",\n    changeOrigin: true,\n    pathRewrite: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^/api'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("详细配置参考上述链接地址。")]),s._v(" "),t("h2",{attrs:{id:"六、styleresources-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、styleresources-配置"}},[s._v("#")]),s._v(" 六、styleResources 配置")]),s._v(" "),t("p",[s._v("当您需要在页面中注入一些变量和 mixin 而不必每次都导入它们时，这非常有用。Nuxt.js 使用 https://github.com/nuxt-community/style-resources-module 来实现这种行为。您需要为 css 预处理器指定要包含的 模式 / 路径 ： less, sass, scss 或 stylus。您不能在此处使用路径别名(~ 和 @)，你需要使用相对或绝对路径。")]),s._v(" "),t("p",[s._v("安装依赖包：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i @nuxtjs/style-resources -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("根据需要安装：")]),s._v(" "),t("ul",[t("li",[s._v("SASS: npm i sass-loader node-sass -D")]),s._v(" "),t("li",[s._v("LESS: npm i less-loader less -D")]),s._v(" "),t("li",[s._v("Stylus: npm i stylus-loader stylus -D")])]),s._v(" "),t("p",[s._v("如果使用的 npm,则变为 npm install less-loader less -D\n修改 nuxt.config.js:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("modules: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@nuxtjs/style-resources'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\nstyleResources:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n less:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./assets/common.less'")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("详细配置请参考："),t("a",{attrs:{href:"https://github.com/nuxt-community/style-resources-module",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/nuxt-community/style-resources-module"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"七、伪静态配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、伪静态配置"}},[s._v("#")]),s._v(" 七、伪静态配置")]),s._v(" "),t("p",[s._v("Nuxt 路由虽然按照"),t("code",[s._v("pages")]),s._v("文件目录层级和内置的规则自动生成路由，但生成的路由没有"),t("code",[s._v(".html")]),s._v("后缀，如果需要配置路由伪静态(路由后缀加"),t("code",[s._v(".html")]),s._v("),需要在"),t("code",[s._v("nuxt.config.js")]),s._v("进行如下配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" router: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    extendRoutes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("routes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      routes.forEach"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("item.path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          item.path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" item.path + "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.html'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("详细配置请参考："),t("a",{attrs:{href:"https://www.nuxtjs.cn/api/configuration-router",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.nuxtjs.cn/api/configuration-router"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"八、组件自动导入配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、组件自动导入配置"}},[s._v("#")]),s._v(" 八、组件自动导入配置")]),s._v(" "),t("p",[s._v("Nuxt.js 2.13+ 支持组件自动扫描和自动导入,相关配置参考："),t("a",{attrs:{href:"https://go.nuxtjs.dev/config-components",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://go.nuxtjs.dev/config-components"),t("OutboundLink")],1),s._v(",需要在"),t("code",[s._v("nuxt.config.js")]),s._v("进行配置"),t("code",[s._v("components: true")]),s._v(",默认 false。\n如果"),t("code",[s._v("components")]),s._v("组件存放目录下没有多级组件目录，自动导入的组件名称和组件文件名一致，如果存在多级文件目录，自动导入的组件名默认会加上文件层级目录，为了保证每个组件名称自动导入后组件名称不变，需要组个对目前层级进行前缀配置，配置如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Auto import components: https://go.nuxtjs.dev/config-components")]),s._v("\ncomponents: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~/components'")]),s._v(", prefix: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", extensions: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~/components/Layouts/'")]),s._v(", prefix: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", extensions: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~/components/LinkItem/'")]),s._v(", prefix: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", extensions: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~/components/RateItem/'")]),s._v(", prefix: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", extensions: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("详细配置请参考："),t("a",{attrs:{href:"https://go.nuxtjs.dev/config-components",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://go.nuxtjs.dev/config-components"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"九、nuxt-打包屏蔽掉全局console功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、nuxt-打包屏蔽掉全局console功能"}},[s._v("#")]),s._v(" 九、Nuxt 打包屏蔽掉全局"),t("code",[s._v("console")]),s._v("功能")]),s._v(" "),t("p",[s._v(" 出于安全考虑，线上环境一般不允许浏览器控制台打印任何信息，所以我们打包上线时，就需要屏蔽 console 功能。对于 Nuxt 项目可以通过配置插件的方式，在打包时禁用 console 功能。设置如下：")]),s._v(" "),t("p",[s._v("1、安装依赖包。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("  babel-plugin-transform-remove-console --save-dev\nor\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" babel-plugin-transform-remove-console --save-dev\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("2、在"),t("code",[s._v("nuxt.config.js")]),s._v("进行如下配置："),t("br"),s._v("\n因为需要判断环境 所以需要在头部声明变量使用插件，若不需要可以直接在 build > babel > plugins 中使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#头部对环境判断,当正式环境时添加插件禁用console功能")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process.env.NODE_ENV "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins.push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"transform-remove-console"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果想要有选项的屏蔽console可以使用以下方式")]),s._v("\n  plugins.push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"transform-remove-console"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exclude"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"warn"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build进行配置")]),s._v("\nbuild: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    analyze: true,\n    babel: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在这里使用")]),s._v("\n      plugins:plugins\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("Reward")],1)}),[],!1,null,null,null);t.default=e.exports}}]);