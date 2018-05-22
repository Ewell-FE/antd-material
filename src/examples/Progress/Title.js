import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Progress进度条
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>展示操作的当前进度。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。
                    当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
                    当需要显示一个操作完成的百分比时。</p>
            </div>
        )
    }
}