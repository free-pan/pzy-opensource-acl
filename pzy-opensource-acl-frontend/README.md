# pzy-opensource-acl-frontend

权限控制框架前端

## 项目地址

[github地址](https://github.com/free-pan/umi-project-init)

[gitee地址](https://gitee.com/free_pan/umi-project-init.git)

## 主依赖版本

react: 16.12.0

umi: 3.2.16

antd: 4.6.1

umi-request: 1.3.5

@umijs/hooks: 1.9.3

@ant-design/pro-layout: ^6.4.11

## 开始

安装依赖

```bash
yarn install
```

运行

```bash
yarn start
```

## 目录说明

### public

静态资源目录, 打包时, 会将该文件夹中的内容直接复制到打包文件夹的根目录下. web访问时也直接是`/`目录`

### src/layouts

布局文件夹

### src/components

公共组件文件夹

### src/models

dva模型文件夹

### src/pages

具体界面的文件夹

### src/services

service服务文件夹, 用于封装与web api的交互

### src/utils

其它帮助类/方法文件夹

## 配置文件说明

### .eslintrc.json

eslint配置文件

### .prettierrc, .prettierignore

prettier插件配置文件

### jsconfig.json

vscode配置文件, 目的是让vscode识别webpack中定义的别名

### typings.d.ts

typescript配置文件

### webstorm.config.js

webstorm配置文件, 让webstorm能够识别`import ...`时使用的别名

### global.less

全局样式文件
