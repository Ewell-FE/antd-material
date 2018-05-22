import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Rate 评分
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>评分组件。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>对评价进行展示。</p>
                <p style={{margin:'12px 0 30px 0'}}>对事物进行快速的评级操作。</p>
            </div>
        )
    }
}