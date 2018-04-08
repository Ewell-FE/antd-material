# antd-material 简介
1.一款基于 material-ui  v1.0 的ui基础组件工程

2.这既是一款可用于实际项目的构建,也是一个组件开发自动化的工程
## 为何有此项目
其他优质组件库例如：[antd](https://github.com/ant-design/ant-design) 有强大易用的组件，但是自定义组件样式是它的弱点，除了样式覆盖以外，覆盖less变量的做法必须是预支持[查看](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)的才可以,并且修改过后必须重新编译进去才可以生效。基于蚂蚁源码2次开发又需要完全遵循蚂蚁的规范从Typescript写起，本来只是样式修改，以及个别组件的易用性，却使得此事门槛变得很高，完全自定义风格变得很难很难！

[material-ui v1.0](https://github.com/mui-org/material-ui) 的出现成功解决了蚂蚁组件库的不足，它使用jss的方式来进行样式管理，完全释放了样式自由，无需重新编译修改皮肤对象即可看到效果。但是它没有强大易用的组件库，只是提供了基础的组件功能。

这时候antd-material 诞生了！
旨在解决既有一套漂亮易用的组件库，又不削减其高自定义化的优势，且降低2次开发门槛只用我们熟悉的es以及react代码
## jss的优势

1.无需考虑样式加载先后顺序的影响

因为所有样式都引用的皮肤对象上面的属性，所以不存在先后顺序一说

2.可以区块性的定制皮肤

这个用传统less还是很麻烦做到的，样式之间相互影(一般需要用ID来划分区块)，公共样式部分再抽离的做法。而jss则只需要引入对应的皮肤对象，然后随意修改覆盖对象里面的值即可

3.皮肤覆盖顺序不同

传统样式都是个别样式引用/覆盖全局样式的方式来进行书写,material-ui则不同，个别样式引用全局样式，全局样式又覆盖个别样式。很绕，但material的styles模块确实是在全局模块定义了overrides属性来覆盖个别样式的。这种做法尤其是引入遵循jss规范的第三方模块的时候最为好用，我们只需查看dom元素对应的class名，就能做到任意覆盖样式，非常方便！
## 基于以下技术之上

这既是一款可用于实际项目的构建，也是一款基于material-ui的组件2次开发工程包括以下技术栈

1. [create-react-app](https://github.com/facebook/create-react-app)
5. [material-ui v1.x](https://github.com/mui-org/material-ui)
2. [react-router v4.x](https://github.com/ReactTraining/react-router)
3. [react-router-redux v5.0.0-alpha](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
4. [redux](https://github.com/reactjs/redux)
5. [redux-saga](https://github.com/redux-saga/redux-saga)

```
.
├── config                    # 配置 包括gulpfile 、webpack以及垫片的配置
├── mock                      # 模拟接口
├── public                    # 静态资源（全局）
├── scripts                   # 脚本 包括项目启动 Mock服务启动 打包编译等
├── src                       # Application source code
│   ├── assets                # 项目用到的图片资源
│   ├── classes               # 定义全局公用的jss 样式对象
│   ├── components            # 组件库
│   ├─── General
│   │   ├───Button            # ➜ 阿磊 ✓ complete！
│   │   ├───Icon              # ➜ 阿磊 ✓ complete！
│   ├─── Layout
│   │   ├───Grid              # ➜ 阿磊 ✓
│   │   ├───Layout            # ➜ 胡昌哲 ✓
│   ├─── Navigation
│   │   ├───Affix             # ➜ 朱宇 ✓
│   │   ├───Breadcrumb        # ➜ 朱宇 ✓
│   │   ├───Dropdown          # ➜ 朱宇 ✓
│   │   ├───Menu              # ➜ 朱宇 ✓
│   │   ├───Pagination        # ➜ 何家佳 ✓ complete！
│   │   ├───Steps             # ➜ 朱宇 ✓
│   ├─── Data Entry
│   │   ├───AutoComplete      # ➜ 郭丽丽 ✓
│   │   ├───Cascader          # ➜ 阿磊
│   │   ├───Checkbox          # ➜ 胡昌哲 ✓
│   │   ├───DatePicker        # ➜ 阿磊 ✓
│   │   ├───Form              # ➜ 阿磊 ✓
│   │   ├───Input             # ➜ 阿磊 ✓
│   │   ├───InputNumber       # ➜ 杨单丹 ✓
│   │   ├───Mention           # ➜ 阿磊
│   │   ├───Rate              # ➜ 曾辉艳 ✓
│   │   ├───Radio             # ➜ 曾辉艳 ✓
│   │   ├───Select            # ➜ 杨单丹 ✓
│   │   ├───Slider            # ➜ 阿磊
│   │   ├───Switch            # ➜ 曾辉艳 ✓
│   │   ├───TreeSelect        # ➜ 阿磊
│   │   ├───TimePicker        # ➜ 阿磊 ✓
│   │   ├───Transfer          # ➜ 杨林林 ✓
│   │   ├───Upload            # ➜ 阿磊
│   ├─── Data Display
│   │   ├───Avatar            # ➜ 郭丽丽 ✓
│   │   ├───Badge             # ➜ 郭丽丽 ✓
│   │   ├───Calendar          # ➜ 阿磊
│   │   ├───Card              # ➜ 胡昌哲 ✓
│   │   ├───Carousel          # ➜ 曾辉艳 ✓
│   │   ├───Collapse          # ➜ 何家佳 ✓
│   │   ├───List              # ➜ 林铭偲 ✓
│   │   ├───Popover           # ➜ 林铭偲 ✓
│   │   ├───Tooltip           # ➜ 何家佳 ✓
│   │   ├───Table             # ➜ 胡昌哲 ✓
│   │   ├───Tabs              # ➜ 杨单丹 ✓
│   │   ├───Tag               # ➜ 杨单丹 ✓
│   │   ├───Timeline          # ➜ 杨林林 ✓
│   │   ├───Tree              # ➜ 阿磊
│   ├─── Feedback
│   │   ├───Alert             # ➜ 林铭偲 ✓
│   │   ├───Modal             # ➜ 何家佳 ✓
│   │   ├───Message           # ➜ 阿磊 ✓ complete！
│   │   ├───Notification      # ➜ 郭丽丽 ✓
│   │   ├───Progress          # ➜ 胡昌哲 ✓
│   │   ├───Popconfirm        # ➜ 何家佳 ✓
│   │   ├───Spin              # ➜ 阿磊 ✓
│   ├──── Other
│   │   ├───Anchor            # ➜ 林铭偲 ✓
│   │   ├───BackTop           # ➜ 杨林林 ✓
│   │   ├───Divider           # ➜ 杨林林 ✓
│   │   ├───LocaleProvider    # ➜ 阿磊
│   ├── examples              # 对应组件库的demo
│   ├── lib                   # 第三方工具类/库
│   ├── routers               # Global Reusable Container Components
│   ├── store                 # Redux-specific pieces
│   │   ├── createStore.js    # Create and instrument redux store
│   │   └── reducers.js       # Reducer registry and injection
│   │   └── sagas.js          # sagas   registry and injection
│   ├── util                  # 自己定义工具类/库
│   ├── base.less             # 项目全局的基础公共样式
└── package                   # 包信息
```

## 审核方式

```sh
git clone git@github.com:Ewell-FE/material-design.git
# 开始 review
git checkout -b <new_branch>
# change
##
git add .
git commit -m "[review] review message"
git push origin <new_branch>
```

点击 <https://github.com/Ewell-FE/material-design/compare> 创建 Pull Request。