import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    AutoComplete 自动完成
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>输入框自动完成功能。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 40px 0'}}>需要自动完成时。</p>
            </div>
        )
    }
}