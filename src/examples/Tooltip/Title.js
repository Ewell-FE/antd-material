import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Tooltip 文字提示
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>简单的文字提示气泡框</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</p>
                <p style={{margin:'12px 0 30px 0'}}>可用来代替系统默认的 title 提示，提供一个按钮/文字/操作的文案解释。</p>
            </div>
        )
    }
}