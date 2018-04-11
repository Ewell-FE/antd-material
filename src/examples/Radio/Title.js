import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Radio 单选框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>单选框。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>用于在多个备选项中选中单个状态。</p>
                <p style={{margin:'12px 0 30px 0'}}>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</p>
            </div>
        )
    }
}