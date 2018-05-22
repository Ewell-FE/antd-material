import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Anchor锚点
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>用于跳转到页面指定位置。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>
            </div>
        )
    }
}