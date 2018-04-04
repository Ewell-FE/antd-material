import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Switch 开关
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>开关选择器。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>需要表示开关状态/两种状态之间的切换时；</p>
                <p style={{margin:'12px 0 30px 0'}}>和 checkbox的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</p>
            </div>
        )
    }
}