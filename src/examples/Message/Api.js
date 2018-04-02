import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display1" gutterBottom>
                    API
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>
                    组件提供了一些静态方法，使用方式和参数如下：
                </p>
                <ol>
                    <li> message.success(content, [duration], onClose)</li>
                    <li> message.error(content, [duration], onClose)</li>
                    <li> message.info(content, [duration], onClose)</li>
                    <li> message.warning(content, [duration], onClose)</li>
                    <li> message.warn(content, [duration], onClose) // alias of warning</li>
                </ol>
            </div>
        )
    }
}