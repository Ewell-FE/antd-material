import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Popover气泡卡片
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>点击/鼠标移入元素，弹出气泡式的卡片浮层。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</p>
                <p style={{margin:'12px 0 30px 0'}}>和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p>
            </div>
        )
    }
}