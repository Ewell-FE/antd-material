import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Timeline 时间轴
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>垂直展示的时间流信息。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当有一系列的信息需按时间排列时,可正序和倒序；</p>
                <p style={{margin:'12px 0 30px 0'}}>需要有一条时间轴进行视觉上的串联时</p>
            </div>
        )
    }
}