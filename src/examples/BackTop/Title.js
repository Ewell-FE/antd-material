import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    BackTop回到顶部
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>返回页面顶部的操作按钮。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当页面内容区域比较长时。</p>
                <p style={{margin:'12px 0 30px 0'}}>当用户需要频繁返回顶部查看相关内容时。</p>
            </div>
        )
    }
}