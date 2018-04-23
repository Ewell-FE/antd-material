import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    InputNumber数字输入框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>通过鼠标或键盘，输入范围内的数值。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>
                    当需要获取标准数值时。
                </p>
            </div>
        )
    }
}