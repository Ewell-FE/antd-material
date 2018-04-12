import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import AutoComplete from '@/components/AutoComplete'




export class Demo1md extends Component {
    render() {
        return (
            <AutoComplete />
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      基本
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    
                                </p>
                    <Templete code={`import AutoComplete from '@/components/AutoComplete'

export class Demo1md extends Component {
    render() {
        return (
            <AutoComplete />
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}