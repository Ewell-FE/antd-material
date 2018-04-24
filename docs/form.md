## 如何新增表单元素

1.默认表单支持4种排版，但是具体实现却依托于具体表单元素的排版样式，所以具体样式需要在包装器中实现。

2.包装后的组件具有4种排版，并成为redux-form的组件

### 例如：1. [input](https://github.com/Ewell-FE/antd-material/blob/master/src/components/Form/input.js)的包装
1.最外层className依赖form定义的4种排版类型，然后实现当前排版内部元素的布局

2.包装后的组件一定是支持redux-form的，所以一些redux-form需要注意的问题需要规避。

3.包装的组件一定是一个可以单独使用的组件。form包装只是为了简化我们的操作，并不是为了打破表单组件的使用方式