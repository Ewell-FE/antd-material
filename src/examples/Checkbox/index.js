import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Checkbox from '@/components/Checkbox'




export class Demo1md extends Component {
    onChange(e){
        console.log(e.target.checked)
    }

    render() {
        return (
            <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
        )
    }
}


export class Demo2md extends Component {
    render() {
        return (
            <div>
                <Checkbox disabled>Checkbox</Checkbox>
                <br />
                <Checkbox disabled defaultChecked>Checkbox</Checkbox>
            </div>
            
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
                                     简单的checkbox。
                                </p>
                    <Templete code={`import Checkbox from '@/components/Checkbox'

export class Demo1md extends Component {
    onChange(e){
        console.log(e.target.checked)
    }

    render() {
        return (
            <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      不可用
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     不可用的checkbox。
                                </p>
                    <Templete code={`import Checkbox from '@/components/Checkbox'

export class Demo2md extends Component {
    render() {
        return (
            <div>
                <Checkbox disabled>Checkbox</Checkbox>
                <br />
                <Checkbox disabled defaultChecked>Checkbox</Checkbox>
            </div>
            
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}