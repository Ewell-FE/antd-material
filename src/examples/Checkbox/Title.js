import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Checkbox 多选框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>多选框。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 10px 0'}}>在一组可选项中进行多项选择时；</p>
                <p style={{margin:'0 0 30px 0'}}>单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</p>
            </div>
        )
    }
}