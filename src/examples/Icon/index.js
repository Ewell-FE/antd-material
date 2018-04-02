import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'




export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                <Api />
            </div>
        )
    }
}