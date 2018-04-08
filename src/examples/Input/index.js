import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Input from '@/components/Input'




export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Input placeholder="Basic usage"/>
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
                                      按钮类型
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
                                </p>
                    <Templete code={`import Input from '@/components/Input'

export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Input placeholder="Basic usage"/>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}