import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Pagination 分页
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>采用分页的形式分隔长列表，每次只加载一个页面。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 10px 0'}}>当加载/渲染所有数据将花费很多时间时；</p>
                <p style={{margin:'0 0 30px 0'}}>可切换页码浏览数据。</p>
            </div>
        )
    }
}