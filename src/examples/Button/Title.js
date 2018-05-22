import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Button 按钮
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>按钮用于开始一个即时操作。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
            </div>
        )
    }
}