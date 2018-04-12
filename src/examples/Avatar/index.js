import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Avatar from '@/components/Avatar'
import m1 from '@/routers/assets/image_user.png'
import Button from '@/components/Button'

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];



export class Demo1md extends Component {
    render() {
        return (
            <div>
                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <Avatar size="large" icon="user" />
                    <Avatar icon="user" />
                    <Avatar size="small" icon="user" />
                </div>
                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <Avatar size="large" shape="square" icon="user" />
                    <Avatar shape="square" icon="user" />
                    <Avatar size="small" shape="square" icon="user" />
                </div>
            </div>
        )
    }
}

export class Demo2md extends Component {
    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
               <Avatar icon="user" />
               <Avatar>U</Avatar>
               <Avatar>USERS</Avatar>
               <Avatar src={m1} />
               <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf'}}>U</Avatar>
               <Avatar icon="user" style={{ backgroundColor: '#87d068' }}/>
            </div>
        )
    }
}


export class Demo3md extends Component {
    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
               <Avatar count={9} shape="square" icon="user" />
               <Avatar dot shape="square" icon="user" />
            </div>
        )
    }
}


export class Demo4md extends Component {
     constructor(props) {
        super(props);
        this.state = {
          user: UserList[0],
          color: colorList[0],
        };
      }
     changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
          user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
          color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
      }
    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
               <Avatar style={{ backgroundColor: this.state.color }} size="large">{this.state.user}</Avatar>
               <Button onClick={this.changeUser} style={{margin:'15px'}}>change</Button>
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
                                    头像有三种尺寸,两种形状可选
                                </p>
                    <Templete code={`import Avatar from '@/components/Avatar'

export class Demo1md extends Component {
    render() {
        return (
            <div>
                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <Avatar size="large" icon="user" />
                    <Avatar icon="user" />
                    <Avatar size="small" icon="user" />
                </div>
                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <Avatar size="large" shape="square" icon="user" />
                    <Avatar shape="square" icon="user" />
                    <Avatar size="small" shape="square" icon="user" />
                </div>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    类型
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
                                </p>
                    <Templete code={`import Avatar from '@/components/Avatar'
import m1 from '@/routers/assets/image_user.png'
export class Demo2md extends Component {
    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
               <Avatar icon="user" />
               <Avatar>U</Avatar>
               <Avatar>USERS</Avatar>
               <Avatar src={m1} />
               <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf'}}>U</Avatar>
               <Avatar icon="user" style={{ backgroundColor: '#87d068' }}/>
            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    带徽标的头像
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    通常用于消息提示。
                                </p>
                    <Templete code={`import Avatar from '@/components/Avatar'

export class Demo3md extends Component {
    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
               <Avatar count={9} shape="square" icon="user" />
               <Avatar dot shape="square" icon="user" />
            </div>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    自动调整字符大小
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。
                                </p>
                    <Templete code={`import Avatar from '@/components/Avatar'
import Button from '@/components/Button'

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
export class Demo4md extends Component {
     constructor(props) {
        super(props);
        this.state = {
          user: UserList[0],
          color: colorList[0],
        };
      }
     changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
          user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
          color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
      }
    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
               <Avatar style={{ backgroundColor: this.state.color }} size="large">{this.state.user}</Avatar>
               <Button onClick={this.changeUser} style={{margin:'15px'}}>change</Button>
            </div>
        )
    }
}`}>
                        <Demo4md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}