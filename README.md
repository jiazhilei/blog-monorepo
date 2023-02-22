安装在根目录的依赖是整个项目都可以直接使用的

> pnpm install

如果要安装依赖到根目录，使用 -w 参数，比如：

> pnpm add axios -w

如果要在指定api应用中安装依赖，使用 --filter 参数，比如：

> pnpm --filter api add axios

> --filter 也可以指定在具体应用下执行脚本命令，比如：

启动 admin应用
> pnpm --filter admindev