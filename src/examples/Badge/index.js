import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Badge from '@/components/Badge'
import Icon from '@/components/Icon'



export class Demo1md extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
                <Badge badgeContent={0}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
                <Badge badgeContent={0} unshowZero>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
            </div>
        )
    }
}

export class Demo2md extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10} overflowCount={99}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
                <Badge badgeContent={100} overflowCount={99}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
            </div>
        )
    }
}

export class Demo3md extends Component {
    render() {
        return (
            <div>
                <a href="#">
                    <Badge badgeContent={10}>
                        <span style={{width:'40px',height:'40px',background:'#fff'}}></span>
                    </Badge>
               </a>
            </div>
        )
    }
}

export class Demo4md extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={0}></Badge>
                <Badge badgeContent={5} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} ></Badge>
                <Badge badgeContent={109} style={{ backgroundColor: '#87d068' }}></Badge>
            </div>
        )
    }
}

export class Demo5md extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10} dot>
                    <Icon type="user"/>
                </Badge>
                <Badge badgeContent={0} dot>
                    <a style={{color:'#108ee9'}}>Link something</a>
                </Badge>
            </div>
        )
    }
}

export class Demo6md extends Component {

    render() {
        return (
            <div>
                <Badge status="success" />
                <Badge status="error" />
                <Badge status="default" />
                <Badge status="processing" />
                <Badge status="warn" /><br />
                <Badge status="success" text="Success" /><br />
                <Badge status="error" text="error" /><br />
                <Badge status="default" text="Default" /><br />
                <Badge status="processing" text="Processing" /><br />
                <Badge status="warn" text="Warn" /><br />
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
                                    简单的徽章展示，当 count 为 0 时，默认显示，但是可以使用 unshowZero 修改为不显示。
                                </p>
                    <Templete code={`import Badge from '@/components/Badge'
export class Demo1md extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
                <Badge badgeContent={0}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
                <Badge badgeContent={0} unshowZero>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      封顶数字
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    超过 overflowCount 的会显示为 +。
                                </p>
                    <Templete code={`import Badge from '@/components/Badge'
export class Demo2md extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10} overflowCount={99}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
                <Badge badgeContent={100} overflowCount={99}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      可点击
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    用 a 标签进行包裹即可。
                                </p>
                    <Templete code={`import Badge from '@/components/Badge'
export class Demo3md extends Component {
    render() {
        return (
            <div>
                <a href="#">
                    <Badge badgeContent={10}>
                        <span style={{width:'40px',height:'40px',background:'#fff'}}></span>
                    </Badge>
               </a>
            </div>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      独立使用
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    不包裹任何元素即是独立使用，可自定样式展现。
                                </p>
                    <Templete code={`import Badge from '@/components/Badge'
export class Demo4md extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={0}></Badge>
                <Badge badgeContent={5} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} ></Badge>
                <Badge badgeContent={109} style={{ backgroundColor: '#87d068' }}></Badge>
            </div>
        )
    }
}`}>
                        <Demo4md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      讨嫌的小红点
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    没有具体的数字。
                                </p>
                    <Templete code={`import Badge from '@/components/Badge'
import Icon from '@/components/Icon'
export class Demo5md extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10} dot>
                    <Icon type="user"/>
                </Badge>
                <Badge badgeContent={0} dot>
                    <a style={{color:'#108ee9'}}>Link something</a>
                </Badge>
            </div>
        )
    }
}`}>
                        <Demo5md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      状态点
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    用于表示状态的小圆点
                                </p>
                    <Templete code={`import Badge from '@/components/Badge'
export class Demo6md extends Component {

    render() {
        return (
            <div>
                <Badge status="success" />
                <Badge status="error" />
                <Badge status="default" />
                <Badge status="processing" />
                <Badge status="warn" /><br />
                <Badge status="success" text="Success" /><br />
                <Badge status="error" text="error" /><br />
                <Badge status="default" text="Default" /><br />
                <Badge status="processing" text="Processing" /><br />
                <Badge status="warn" text="Warn" /><br />
            </div>
        )
    }
}`}>
                        <Demo6md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}