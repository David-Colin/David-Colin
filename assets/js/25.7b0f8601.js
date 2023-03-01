(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{490:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v(" Linux系统命令比较繁杂，虽然容易上手，但在使用时容易遗忘具体参数的含义，很是让人苦恼，因此本篇文章收集一些常用的Limux命令，以备日后使用过程中进行查阅和复习。\n")]),s._v(" "),a("h1",{attrs:{id:"一、常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、常用命令"}},[s._v("#")]),s._v(" 一、常用命令")]),s._v(" "),a("h2",{attrs:{id:"_1-cpu-内存-硬盘-系统等信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-cpu-内存-硬盘-系统等信息"}},[s._v("#")]),s._v(" 1 cpu,内存,硬盘,系统等信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#逻辑CPU个数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"processor"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#逻辑cpu个数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"physical id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cpu全部信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cpu型号信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -f2 -d: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -c\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#内存信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/meminfo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#硬盘信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一种")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以g单位")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -m    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以M单位")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#系统内核信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#机器型号")]),s._v("\ndmidecode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Product Name"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"_2-文件搜索命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件搜索命令"}},[s._v("#")]),s._v(" 2 文件搜索命令")]),s._v(" "),a("p",[a("strong",[s._v("根据文件或目录名称搜索： find 【搜索目录】【-name 或者-iname】【搜索字符】：-name 和-iname 的区别一个区分大小写，一个不区分大小写")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#精准搜索，名字必须为 init 才能搜索的到")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /etc -name init\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#精准搜索，名字必须为 init或者有字母大写也能搜索的到")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /etc -iname init\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#模糊搜索，以 init 结尾的文件或目录名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /etc -name *init\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#模糊搜索，？ 表示单个字符，即搜索到 init___")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /etc -name init???\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("根据文件大小进行搜索："),a("code",[s._v("find [搜索范围] [-size] [n]")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在根目录下查找大于 100M 的文件,这里 +n 表示大于，-n 表示小于，n 表示等于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -size +204800　　\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("根据文件类型进行搜索："),a("code",[s._v("find [搜索范围] [-type]")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找/home目录下文件类型是目录的文件，-type 根据文件类型查找：f表示文件，d表示目录，l表示软链接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /home -type l　　\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("根据组合命令进行搜索")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里有两个参数：①、-a  表示两个条件同时满足（and）②、-o  表示两个条件满足任意一个即可（or）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#范例：查找/etc目录下大于80MB同时小于100MB的文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /etc -size +163840 -a -size -204800　\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_3-进程命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-进程命令"}},[s._v("#")]),s._v(" 3 进程命令")]),s._v(" "),a("p",[a("strong",[s._v("ps 命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找nginx应用的进程信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#两者的输出结果差别不大，但展示风格不同。aux是BSD风格，-ef是System V风格。这是次要的区别，一个影响使用的区别是aux会截断command列，而-ef不会")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看进程应用启动路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /proc/pid\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cwd符号链接的是进程运行目录；exe符号连接就是执行程序的绝对路径；cmdline就是程序运行时输入的命令行命令；environ记录了进程运行时的环境变量；fd目录下是进程打开或使用的文件的符号连接。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#杀掉进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" pid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_4-查看指定端口进程占用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看指定端口进程占用"}},[s._v("#")]),s._v(" 4 查看指定端口进程占用")]),s._v(" "),a("p",[a("strong",[s._v("netstat 命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tunlp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果命令不存在，请安装：")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("losf 命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("losf -i:8080\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果命令不存在，请安装：")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" losf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_5-文件上传和下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-文件上传和下载"}},[s._v("#")]),s._v(" 5 文件上传和下载")]),s._v(" "),a("p",[a("strong",[s._v("步骤一：root 权限下，安装 lrzsz 软件")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Centos系统")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lrzsz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("步骤二：上传文件。进度需要上传文件目录，使用 rz 命令，把文件从 windows 系统上传到 linux 系统中")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("文件上传目录"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\nrz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("步骤三：下载文件。使用 sz 命令，把文件从 linux 系统下载到 windows 系统中")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("文件目录"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\nsz "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_6-端口命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-端口命令"}},[s._v("#")]),s._v(" 6 端口命令")]),s._v(" "),a("p",[a("strong",[s._v("1 开放端口")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久开放5672端口")]),s._v("\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),s._v("/tcp --permanent\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭5672端口")]),s._v("\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --remove-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),s._v("/tcp --permanent\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置立即生效")]),s._v("\nfirewall-cmd --reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("2 查看防火墙所有开放的端口")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("firewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --list-ports\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("3 查看防火墙所有开放的端口")]),s._v("\n如果要开放的端口太多，嫌麻烦，可以关闭防火墙，安全性自行评估")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl stop firewalld.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("4 查看防火墙状态")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl status firewalld.service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或")]),s._v("\nfirewall-cmd --state\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("5 查看监听的端口")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lnpt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("PS:centos7 默认没有 netstat 命令，需要安装 net-tools 工具，yum install -y net-tools\n"),a("strong",[s._v("6 端口进程占用命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lnpt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("7 查看进程的详细信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6832")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("8 中止进程")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6832")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7-docker容器运行日志命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-docker容器运行日志命令"}},[s._v("#")]),s._v(" 7 Docker容器运行日志命令")]),s._v(" "),a("p",[s._v("通过docker logs命令可以查看容器的日志："),a("code",[s._v("docker logs -f -t --tail 100 datacenter")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 语法格式")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" CONTAINER\n  Options:\n        --details        显示更多的信息\n    -f, --follow         跟踪实时日志\n        --since string   显示自某个timestamp之后的日志，或相对时间，如42m（即42分钟）\n        --tail string    从日志末尾显示多少行日志， 默认是all\n    -t, --timestamps     显示时间戳\n        --until string   显示自某个timestamp之前的日志，或相对时间，如42m（即42分钟）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("举例说明：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看指定时间后的日志，只显示最后100行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -f -t --since"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-08"')]),s._v(" --tail"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" CONTAINER_ID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看最近30分钟的日志:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs --since 30m CONTAINER_ID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看某时间之后的日志：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -t --since"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-08T13:23:37"')]),s._v(" CONTAINER_ID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看某时间段日志：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -t --since"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-08T13:23:37"')]),s._v(" --until "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-09T12:23:37"')]),s._v(" CONTAINER_ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_8文件大小查看命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8文件大小查看命令"}},[s._v("#")]),s._v(" 8文件大小查看命令")]),s._v(" "),a("p",[s._v("1、查看当前文件夹及文件夹下大小，h:以K,M,G为单位显示，max-depth标识目录的深度")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -ah --max-depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、查看当前文件夹总大小")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、查看指定文件夹总大小")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh ./data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4、显示目录或所有文件所占空间")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5、文件从大到小排序")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh  * "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -rh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("6、参数说明")]),s._v(" "),a("ul",[a("li",[s._v("-a或-all 显示目录中个别文件的大小。")]),s._v(" "),a("li",[s._v("-b或-bytes 显示目录或文件大小时，以byte为单位。")]),s._v(" "),a("li",[s._v("-c或--total 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。")]),s._v(" "),a("li",[s._v("-D或--dereference-args 显示指定符号连接的源文件大小。")]),s._v(" "),a("li",[s._v("-h或--human-readable 以K，M，G为单位，提高信息的可读性。")]),s._v(" "),a("li",[s._v("-H或--si 与-h参数相同，但是K，M，G是以1000为换算单位。")]),s._v(" "),a("li",[s._v("-k或--kilobytes 以1024 bytes为单位。")]),s._v(" "),a("li",[s._v("-l或--count-links 重复计算硬件连接的文件。")]),s._v(" "),a("li",[s._v("-L<符号连接>或--dereference<符号连接> 显示选项中所指定符号连接的源文件大小。")]),s._v(" "),a("li",[s._v("-m或--megabytes 以1MB为单位。")]),s._v(" "),a("li",[s._v("-s或--summarize 仅显示总计。")]),s._v(" "),a("li",[s._v("-S或--separate-dirs 显示个别目录的大小时，并不含其子目录的大小。")]),s._v(" "),a("li",[s._v("-x或--one-file-xystem 以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。")]),s._v(" "),a("li",[s._v("-X<文件>或--exclude-from=<文件> 在<文件>指定目录或文件。")]),s._v(" "),a("li",[s._v("--exclude=<目录或文件> 略过指定的目录或文件。")]),s._v(" "),a("li",[s._v("--max-depth=<目录层数> 超过指定层数的目录后，予以忽略。")])]),s._v(" "),a("Reward")],1)}),[],!1,null,null,null);a.default=e.exports}}]);