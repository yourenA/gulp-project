#gulp
**gulp**是一个构建工具，一个streaming构建工具，一个nodejs写的构建工具， 她能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。
gulp是基于node的stream之上的，在实现上，她借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单。

1. 每个操作都是是独立作业task
2. 作业依赖定义非常简单，决定执行顺序
3. 通过pipe组装tasks，完成业务逻辑处理

使用```gulp```命令开启gulp
然后在浏览器打开 localhost:3001 （brower-sync分支会自动打开窗口）