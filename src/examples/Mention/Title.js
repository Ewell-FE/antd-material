import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display1" gutterBottom>
                    Mention提及
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>提及组件。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>用于在输入中提及某人或某事，常用于发布、聊天或评论功能。</p>
            </div>
        )
    }
}