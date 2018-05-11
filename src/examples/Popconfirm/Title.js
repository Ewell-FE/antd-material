import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Popconfirm 气泡确认框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>点击/鼠标移入元素，弹出气泡式的卡片浮层。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。</p>
                <p style={{margin:'12px 0 30px 0'}}>和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量。</p>
            </div>
        )
    }
}