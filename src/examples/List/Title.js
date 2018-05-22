import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    List列表
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>通用列表。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。</p>
            </div>
        )
    }
}