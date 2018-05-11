import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Spin 加载中
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>用于页面和区块的加载中状态。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p>
            </div>
        )
    }
}