import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    LocaleProvider国际化
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>为组件内建文案提供统一的国际化支持。</p>
            </div>
        )
    }
}