# Vue Component Template

## 介绍
本库是基于 iView 来开发业务组件、生态组件的模板，本库适用于开发一个组件，而非多个组件。

## 准备工作

### 修改 `src/config.js` 配置
1. `filename` 是编译后的文件名，比如 iview-demo.css、iview-demo.min.js
2. `componentName` 是默认的组件标签名，比如 <i-demo>
3. `library` 是包名

### 修改 `package.json` 配置
1. 修改库名 `name`
2. 修改入口 `main` 的最终引用文件名，与 src/config.js 中一致
3. 修改版本号（可选，npm 发布用）
4. 修改 git 地址（可选）

## 开发
1. 组件在 `src/component/index.vue` 中编写（打包入口）
2. 其它依赖的 `.vue` 文件也可以在 `src/component` 目录中创建，或自定义其它路径
3. 样式在 `src/style/index.less` 中使用 less 开发，默认已经导入了 iView 的 less 变量表（如不用可移除）

## 实时预览
1. 运行 `npm run dev` 可开启实时预览
2. 预览文件在 `examples/routers/index.vue` 中开发
3. 预览环境默认使用了 Vue.js 2.6.6 版本 和 iView 3.2.2 版本，可在 index.html 中修改

## 编译
1. 运行 `npm run build` 可打包，这个命令包含两个命令：`npm run build:style` 和 `npm run build:prod`，分别是 CSS 和组件
2. 编译后的文件在 `dist` 目录

## 发布
1. [x] 可直接复制 dist 目录到业务中使用
2. [ ] 等待私有 npm 搭建