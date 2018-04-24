import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Form表单
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>
                    具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。目前我们支持4中排版，使用redux-form来管理表单进行了简单封装，不影响redux-form原始功能。如果表单元素不能够满足你的需求，请参考 <a href="https://github.com/Ewell-FE/antd-material/tree/master/docs/form.md">如何新增表单元素</a> 你也可以使用你自己喜欢的方式单独使用表单元素，但很遗憾就无法使用我们的表单提供的功能了！
                </p>
                <Typography variant="display1" gutterBottom>
                    表单
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>
                    我们为 form 提供了以下4种排列方式：
                </p>
                <ul>
                    <li> 水平排列：标签和表单控件水平排列；（默认）</li>

                    <li>垂直排列：标签和表单控件上下垂直排列；</li>

                    <li>行内排列：表单项水平行内排列。</li>

                    <li>Grid排列：表单按照grid栅格进行排版</li>

                </ul>

            </div>
        )
    }
}