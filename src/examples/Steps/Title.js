import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Steps步骤条
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>引导用户按照流程完成任务的导航条。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
            </div>
        )
    }
}