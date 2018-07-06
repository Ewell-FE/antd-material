import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display1" gutterBottom>
                     <a href="http://react-component.github.io/select/" target="_blank"> API</a>
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>表格</p>
            </div>
        )
    }
}