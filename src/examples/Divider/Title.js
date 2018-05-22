import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Divider 分割线
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>区隔内容的分割线。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>对不同章节的文本段落进行分割。</p>
                <p style={{margin:'12px 0 30px 0'}}>对行内文字/链接进行分割，例如表格的操作列。</p>
            </div>
        )
    }
}