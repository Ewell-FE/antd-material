import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Tag标签
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>进行标记和分类的小标签。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>用于标记事物的属性和维度。
                    进行分类。</p>
            </div>
        )
    }
}