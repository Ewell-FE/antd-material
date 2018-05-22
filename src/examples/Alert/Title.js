import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Alert警告提示
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>警告提示，展现需要关注的信息。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当某个页面需要向用户显示警告的信息时。</p>
                <p style={{margin:'12px 0 30px 0'}}>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</p>
            </div>
        )
    }
}