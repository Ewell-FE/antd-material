import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Notification from '@/components/Notification'
import Button from '@/components/Button'



export class Demo1md extends Component {
    openNotification(){
        console.log('====')
        Notification.open({
            message: '这是标题',
            description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
          });
    }
    render() {
        return (
            <Button onClinck={this.openNotification}>打开notification</Button>
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
                                    最简单的用法，4.5 秒后自动关闭。
                                </p>
                    <Templete code={`import Notification from '@/components/Notification'
import Button from '@/components/Button'
export class Demo1md extends Component {
    openNotification(){
        console.log('====')
        Notification.open({
            message: '这是标题',
            description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
          });
    }
    render() {
        return (
            <Button onClinck={this.openNotification}>打开notification</Button>
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