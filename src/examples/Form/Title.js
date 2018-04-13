import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Form表单
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。</p>
                <Typography variant="display1" gutterBottom>
                    表单
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>
                    我们为 form 提供了以下三种排列方式：
                </p>
                <ul>
                    <li> 水平排列：标签和表单控件水平排列；（默认）</li>

                    <li>垂直排列：标签和表单控件上下垂直排列；</li>

                    <li>行内排列：表单项水平行内排列。</li>
                </ul>

            </div>
        )
    }
}