(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{496:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v(" pm2 是一个进程管理工具,可以用它来管理你的 node 进程，并查看 node 进程的状态，当然也支持性能监控，进程守护，负载均衡等功能。")]),s._v(" "),n("Boxx"),s._v(" "),n("h2",{attrs:{id:"一、pm2-官网信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、pm2-官网信息"}},[s._v("#")]),s._v(" 一、pm2 官网信息")]),s._v(" "),n("p",[s._v("1、pm2 官网地址："),n("a",{attrs:{href:"https://pm2.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pm2.keymetrics.io/"),n("OutboundLink")],1),n("br"),s._v("\n2、pm2 官方文档："),n("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pm2.keymetrics.io/docs/usage/quick-start/"),n("OutboundLink")],1),n("br"),s._v("\n3、pm2 github 地址："),n("a",{attrs:{href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Unitech/pm2"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"二、pm2-安装步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、pm2-安装步骤"}},[s._v("#")]),s._v(" 二、pm2 安装步骤")]),s._v(" "),n("p",[s._v("1、pm2 安装需要依赖"),n("code",[s._v("Node")]),s._v("环境，并且"),n("code",[s._v("Node")]),s._v("版本需要高于 12，如果为安装"),n("code",[s._v("Node")]),s._v(",请参考："),n("RouterLink",{attrs:{to:"/node/"}},[s._v("Node 环境安装方式")]),n("br"),s._v("\n2、pm2 安装命令")],1),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局安装pm2")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -g\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("3、开始启动一个应用")]),s._v(" "),n("p",[s._v("配置 pm2 应用实例配置文件"),n("code",[s._v("ecosystem.config.js")]),s._v(",如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pm2实例配置：ecosystem.config.js")]),s._v("\nmodule.exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  apps: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例名称")]),s._v("\n      name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NuxtRmbRate'")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#部署模式，单机：'fork',集群：'cluster'")]),s._v("\n      exec_mode: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fork'")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例数目")]),s._v("\n      instances: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#需要执行的脚本文件，对于普通的nuxt项目(没有server)，一般采用nuxt start命令，用pm2执行时需要修改成./node-modules/nuxt/dist/bin/nuxt.js,否则报错")]),s._v("\n      script: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'server/index.js'")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#应用程序所在的目录")]),s._v("\n      cwd: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 传递给脚本的参数，例如nuxt start命令，参数为start")]),s._v("\n      args: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 完整日志路径")]),s._v("\n      output: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log/output.log'")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误日志路径")]),s._v("\n      error: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log/error.log'")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问日志路径")]),s._v("\n      log: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log/access.log'")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志格式")]),s._v("\n      log_type: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json'")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并日志")]),s._v("\n      merge_logs: true,\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志日期格式")]),s._v("\n      log_date_format: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YYYY-MM-DD HH:mm:ss'")]),s._v(",\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最小运行时间，这里设置的是60s即如果应用程序在* 60s内退出，pm2会认为程序异常退出，此时触发重启* max_restarts设置数量，应用运行少于时间被认为是异常启动")]),s._v("\n      min_uptime: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'60s'")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置应用程序异常退出重启的次数，默认15次（从0开始计数）,最大异常重启次数，即小于min_uptime运行时间重启次数；")]),s._v("\n      max_restarts: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用/禁用应用程序崩溃或退出时自动重启，默认为true, 发生异常的情况下自动重启")]),s._v("\n      autorestart: true,\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 异常重启情况下，延时重启时间")]),s._v("\n      restart_delay: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生产环境配置")]),s._v("\n      env_prod: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境参数，当前指定为生产环境 process.env.NODE_ENV")]),s._v("\n        NODE_ENV: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("p",[s._v("其他配置项如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("name 应用进程名称；\n\nscript 启动脚本路径；\n\ncwd 应用启动的路径，关于 script 与 cwd 的区别举例说明：在/home/polo/目录下运行/data/release/node/index.js，此处 script 为/data/release/node/index.js，cwd 为/home/polo/；\n\nargs 传递给脚本的参数；\n\ninterpreter 指定的脚本解释器；\n\ninterpreter_args 传递给解释器的参数；\n\ninstances 应用启动实例个数，仅在 cluster 模式有效，默认为 fork；\n\nexec_mode 应用启动模式，支持 fork 和 cluster 模式；\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" 监听重启，启用情况下，文件夹或子文件夹下变化应用自动重启；\n\nignore_watch 忽略监听的文件夹，支持正则表达式；\n\nmax_memory_restart 最大内存限制数，超出自动重启；\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" 环境变量，object 类型，如"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NODE_ENV"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"production"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ID"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"42"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("；\n\nlog_date_format 指定日志日期格式，如 YYYY-MM-DD HH:mm:ss；\n\nerror_file 记录标准错误流，"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.pm2/logs/XXXerr.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，代码错误可在此文件查找；\n\nout_file 记录标准输出流，"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.pm2/logs/XXXout.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，如应用打印大量的标准输出，会导致 pm2 日志过大；\n\nmin_uptime 应用运行少于时间被认为是异常启动；\n\nmax_restarts 最大异常重启次数，即小于 min_uptime 运行时间重启次数；\n\nautorestart 默认为 true, 发生异常的情况下自动重启；\n\ncron_restart "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" 时间格式重启应用，目前只支持 cluster 模式；\n\nforce 默认 false，如果 true，可以重复启动一个脚本。pm2 不建议这么做；\n\nrestart_delay 异常重启情况下，延时重启时间；\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("p",[n("strong",[s._v("注意：")]),s._v(" 设置环境变量时需要以"),n("code",[s._v("env_")]),s._v("开头，详细参考："),n("a",{attrs:{href:"https:#pm2.keymetrics.io/docs/usage/environment/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https:#pm2.keymetrics.io/docs/usage/environment/"),n("OutboundLink")],1),s._v("。例如设置了环境变量"),n("code",[s._v("env_production")]),s._v("，采用 pm2 启动时如下："),n("code",[s._v("pm2 start ecosystem.config.js --env production")])]),s._v(" "),n("p",[s._v("启动项目实例")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("pm2 start ecosystem.config.js\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"三、pm2-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、pm2-常用命令"}},[s._v("#")]),s._v(" 三、pm2 常用命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有进程状态")]),s._v("\npm2 list\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监视所有进程")]),s._v("\npm2 monit\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有进程日志")]),s._v("\npm2 logs\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示id=0的进程日志")]),s._v("\npm2 logs "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止所有进程")]),s._v("\npm2 stop all\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启所有进程")]),s._v("\npm2 restart all\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0秒停机重载进程 (用于 NETWORKED 进程)")]),s._v("\npm2 reload all\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止指定的进程")]),s._v("\npm2 stop "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启指定的进程")]),s._v("\npm2 restart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 产生 init 脚本 保持进程活着")]),s._v("\npm2 startup\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行健壮的 computer API endpoint ([http://localhost:9615](http://localhost:9615/))")]),s._v("\npm2 web\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死指定的进程")]),s._v("\npm2 delete "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死全部进程")]),s._v("\npm2 delete all\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程详细信息")]),s._v("\npm2 describe "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("Reward")],1)}),[],!1,null,null,null);n.default=e.exports}}]);