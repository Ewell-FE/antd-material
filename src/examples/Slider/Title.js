import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Slider滑动输入条
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>滑动型输入器，展示当前值和可选范围。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</p>
            </div>
        )
    }
}