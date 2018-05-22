import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Notification 消息通知框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>全局展示通知提醒信息</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 10px 0'}}>在系统四个角显示通知提醒信息。经常用于以下情况：</p>
                <ul style={{margin:'0 0 30px 0'}}>
                    <li style={{listStyleType: 'circle'}}>较为复杂的通知内容</li>
                    <li style={{listStyleType: 'circle'}}>带有交互的通知，给出用户下一步的行动点</li>
                    <li style={{listStyleType: 'circle'}}>系统主动推送</li>
                </ul>
            </div>
        )
    }
}