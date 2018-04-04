import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Table 表格
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>展示行列数据。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当有大量结构化的数据需要展现时；</p>
                <p style={{margin:'12px 0 30px 0'}}>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时</p>
            </div>
        )
    }
}