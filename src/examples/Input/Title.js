import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Input 输入框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>
                    需要用户输入表单域内容时。

                    提供组合型输入框，带搜索的输入框，还可以进行大小选择。
                </p>
            </div>
        )
    }
}