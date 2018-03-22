# material-design 简介
1.一款基于 material-ui  v1.0 的ui基础组件工程

2.这既是一款可用于实际项目的构建,也是一个组件开发自动化的工程
# 为何有此项目
其他优质组件库例如：[antd](https://github.com/ant-design/ant-design) 有强大易用的组件，但是自定义组件样式是它的弊端，除了样式覆盖以外，或者只是单单修改几个less变量，基于蚂蚁源码2次开发又需要完全遵循蚂蚁的规范从Typescript写起，本来只是样式修改，以及个别组件的易用性让此事门槛变得很高。完全自定义风格变得很难
这时候[material-ui v1.0](https://github.com/mui-org/material-ui) 出现了，它成功解决了蚂蚁组件库的不足，它使用jss的方式来进行样式管理，完全释放了样式自由。但是它没有强大易用的组件库，只是提供了基础的组件功能。

这时候material-design 诞生了！
旨在解决既有一套漂亮易用的组件库，又不削减其高自定义化的优势，且降低2次开发门槛只用我们熟悉的es6以及react代码
## 基于以下技术之上

这既是一款可用于实际项目的构建，也是一款基于material-ui的组件2次开发工程包括以下技术栈

1. [create-react-app](https://github.com/facebook/create-react-app)
2. [react-router v4.x](https://github.com/ReactTraining/react-router)
3. [react-router-redux v5.0.0-alpha](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
4. [redux](https://github.com/reactjs/redux)
5. [redux-saga](https://github.com/redux-saga/redux-saga)

```
.
├── config                   # 配置 包括gulpfile 、webpack以及垫片的配置
├── mock                     # 模拟接口
├── public                   # 静态资源（全局）
├── scripts                  # 脚本 包括项目启动 Mock服务启动 打包编译等
├── src                      # Application source code
│   ├── assets               # 项目用到的图片资源
│   ├── classes              # 定义全局公用的jss 样式对象
│   ├── components           # 组件库
│   │   ├──Alert             # ➜ 阿磊
│   │   ├──Button            # ➜ 阿磊 ✓
│   │   ├──Form              # ➜ 阿磊
│   │   ├──Input             # ➜ 阿磊
│   │   ├──Layout            # ➜ 阿磊
│   │   ├──Message           # ➜ 阿磊 ✓
│   │   ├──Modal             # ➜ 阿磊
│   │   ├──Select            # ➜ 阿磊
│   │   ├──Spin              # ➜ 阿磊
│   │   ├──Tree              # ➜ 阿磊
│   ├── examples             # 对应组件库的demo
│   ├── lib                  # 第三方工具类/库
│   ├── routers              # Global Reusable Container Components
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   │   └── sagas.js         # sagas   registry and injection
│   ├── util                 # 自己定义工具类/库
│   ├── base.less            # 项目全局的基础公共样式
└── package                  # 包信息
```
