import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    DatePicker 日期选择框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>输入或选择日期的控件。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</p>
            </div>
        )
    }
}