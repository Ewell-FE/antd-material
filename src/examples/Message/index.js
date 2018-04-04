import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Button from '@/components/Button'
import Message from '@/components/Message'



export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" onClick={()=>{Message.success("success!")}} disabled>success</Button>
                <Button type="Default" onClick={()=>{Message.warn('warn~')}}>warn</Button>
                <Button type="Dashed"  onClick={()=>{Message.info('info~')}}>info</Button>
                <Button type="Danger"  onClick={()=>{Message.error('error~')}}>error</Button>
                <Button type="Primary" style={{marginLeft:10}}
                        onClick={()=>{Message.show({msg: '全写提示框！', type: 'info', timer:3000})}}>点击触发</Button>
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
                                    
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    
                                </p>
                    <Templete code={`import Button from '@/components/Button'
import Message from '@/components/Message'
export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" onClick={()=>{Message.success("success!")}} disabled>success</Button>
                <Button type="Default" onClick={()=>{Message.warn('warn~')}}>warn</Button>
                <Button type="Dashed"  onClick={()=>{Message.info('info~')}}>info</Button>
                <Button type="Danger"  onClick={()=>{Message.error('error~')}}>error</Button>
                <Button type="Primary" style={{marginLeft:10}}
                        onClick={()=>{Message.show({msg: '全写提示框！', type: 'info', timer:3000})}}>点击触发</Button>
            </div>
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