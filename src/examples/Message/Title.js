import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Message全局提示
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>按钮用于开始一个即时操作。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>
                    可提供成功、警告和错误等反馈信息。<br/>
                    顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
                </p>
            </div>
        )
    }
}