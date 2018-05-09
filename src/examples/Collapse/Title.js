import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Collapse 折叠面板
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>可以折叠/展开的内容区域。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>对复杂区域进行分组和隐藏，保持页面的整洁。</p>
                <p style={{margin:'12px 0 30px 0'}}>手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。</p>
            </div>
        )
    }
}