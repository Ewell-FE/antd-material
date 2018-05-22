import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Avatar 头像
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>用来代表用户或事物，支持图片、图标或字符展示。</p>
            </div>
        )
    }
}