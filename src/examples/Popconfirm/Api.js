import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display1" gutterBottom>
                    注意
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>请确保 Popconfirm 的子元素能接受 onMouseEnter、onMouseLeave、onFocus、onClick 事件。</p>
            </div>
        )
    }
}