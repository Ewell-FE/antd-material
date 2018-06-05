import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    TimePicker 时间选择框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。</p>
            </div>
        )
    }
}