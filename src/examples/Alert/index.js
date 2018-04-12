import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Alert from '@/components/Alert'
import Button from '@/components/Button'

const onClose = function () {
    console.log('I was closed.');
};
const onAfterClose = function () {
    console.log('I was closed after transition.');
};



export class Demo1md extends Component {
    render() {
        return (
             <div>
                <Alert message="Success Text" type="success" />
                <Alert message="warn Text" type="warn" />
                <Alert message="info Text" type="info" />
                <Alert message="error Text" type="error" />
             </div>
        )
    }
}


export class Demo2md extends Component {
    render() {
        return (
             <div>
                <Alert message="Success Text" type="success" showIcon/>
                <Alert message="warn Text" type="warn" showIcon/>
                <Alert message="info Text" type="info" showIcon/>
                <Alert message="error Text" type="error" showIcon/>
                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description Success Description Success Description Success Description"
                    type="success"
                    showIcon
                />
                <Alert
                    message="warn Text"
                    description="warn Description warn Description warn Description warn Description warn Description warn Description"
                    type="warn"
                    showIcon
                />
                <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description"
                    type="info"
                    showIcon
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    showIcon
                />
             </div>
        )
    }
}

export class Demo3md extends Component {
    render() {
        return (
             <div>
                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description Success Description Success Description Success Description"
                    type="success"
                    closable
                    onClose={onClose}
                    showIcon
                />
                <Alert
                    message="warn Text"
                    description="warn Description warn Description warn Description warn Description warn Description warn Description"
                    type="warn"
                    closable
                    onClose={onClose}
                    showIcon
                />
                <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description"
                    type="info"
                    closable
                    onClose={onClose}
                    showIcon
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closable
                    onClose={onClose}
                    showIcon
                />
             </div>
        )
    }
}


export class Demo4md extends Component {
    render() {
        return (
             <div>
                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description Success Description Success Description Success Description"
                    type="success"
                    closeText="Close Now"
                />
                <Alert
                    message="warn Text"
                    description="warn Description warn Description warn Description warn Description warn Description warn Description"
                    type="warn"
                    closeText="Close Now"
                />
                <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description"
                    type="info"
                    closeText="Close Now"
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closeText="Close Now"
                />
             </div>
        )
    }
}

export class Demo5md extends Component {
    render() {
        return (
        <Alert
            message="Success Text afterClose"
            description="Success afterClose Success afterClose Success afterClose Success afterClose Success afterClose Success afterClose"
            type="success"
            closable
            afterClose={onAfterClose}
        />
        )
    }
}


export class Demo6md extends Component {
    constructor(props) {
            super(props);

            this.state={
                alert1:false,
                alert2:false,
                alert3:false
            }
        }
    render() {
        const {alert1,alert2,alert3}=this.state
        return (
             <div>
                 <Button type="Primary" onClick={()=>{this.setState({alert1:true})}}>默认Type为warning且Icon显示</Button>
                 {alert1?
                     <Alert
                         message="banner Text"
                         description="banner Description banner Description banner Description banner Description banner Description banner Description"
                         closable
                         onClose={onClose}
                         banner
                     />:''
                  }
                 <Button type="Primary" onClick={()=>{this.setState({alert2:true})}}>自定义Type为error</Button>
                 {alert2?
                     <Alert
                         message="Error banner Text"
                         description="Error banner Description Error banner Description Error banner Description Error Description Error Description Error Description"
                         type="error"
                         closable
                         onClose={onClose}
                         banner
                     />:''
                 }
                 <Button type="Primary" onClick={()=>{this.setState({alert3:true})}}>自定义Type为error且Icon隐藏</Button>
                 {alert3?
                     <Alert
                         message="Error banner Text & no Icon"
                         description="Error banner Description Error banner Description Error banner Description Error Description Error Description Error Description"
                         type="error"
                         closable
                         onClose={onClose}
                         showIcon={false}
                         banner
                     />
                    :''
                    }

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
                                     最简单的用法，适用于简短的警告提示,共有四种样式 success、info、warning、error。
                                </p>
                    <Templete code={`import Alert from '@/components/Alert'

export class Demo1md extends Component {
    render() {
        return (
             <div>
                <Alert message="Success Text" type="success" />
                <Alert message="warn Text" type="warn" />
                <Alert message="info Text" type="info" />
                <Alert message="error Text" type="error" />
             </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      图标
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     可口的图标让信息类型更加醒目。
                                </p>
                    <Templete code={`import Alert from '@/components/Alert'

export class Demo2md extends Component {
    render() {
        return (
             <div>
                <Alert message="Success Text" type="success" showIcon/>
                <Alert message="warn Text" type="warn" showIcon/>
                <Alert message="info Text" type="info" showIcon/>
                <Alert message="error Text" type="error" showIcon/>
                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description Success Description Success Description Success Description"
                    type="success"
                    showIcon
                />
                <Alert
                    message="warn Text"
                    description="warn Description warn Description warn Description warn Description warn Description warn Description"
                    type="warn"
                    showIcon
                />
                <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description"
                    type="info"
                    showIcon
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    showIcon
                />
             </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      可关闭的警告提示
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     显示关闭按钮，点击可关闭警告提示。关闭带有回调
                                </p>
                    <Templete code={`import Alert from '@/components/Alert'
const onClose = function () {
    console.log('I was closed.');
};
export class Demo3md extends Component {
    render() {
        return (
             <div>
                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description Success Description Success Description Success Description"
                    type="success"
                    closable
                    onClose={onClose}
                    showIcon
                />
                <Alert
                    message="warn Text"
                    description="warn Description warn Description warn Description warn Description warn Description warn Description"
                    type="warn"
                    closable
                    onClose={onClose}
                    showIcon
                />
                <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description"
                    type="info"
                    closable
                    onClose={onClose}
                    showIcon
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closable
                    onClose={onClose}
                    showIcon
                />
             </div>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      自定义关闭
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     可以自定义关闭，自定义的文字会替换原先的关闭 Icon。
                                </p>
                    <Templete code={`import Alert from '@/components/Alert'

export class Demo4md extends Component {
    render() {
        return (
             <div>
                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description Success Description Success Description Success Description"
                    type="success"
                    closeText="Close Now"
                />
                <Alert
                    message="warn Text"
                    description="warn Description warn Description warn Description warn Description warn Description warn Description"
                    type="warn"
                    closeText="Close Now"
                />
                <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description"
                    type="info"
                    closeText="Close Now"
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closeText="Close Now"
                />
             </div>
        )
    }
}`}>
                        <Demo4md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      平滑的卸载
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     平滑、自然的卸载提示,Alert动画关闭后调用回调函数
                                </p>
                    <Templete code={`import Alert from '@/components/Alert'
const onAfterClose = function () {
    console.log('I was closed after transition.');
};
export class Demo5md extends Component {
    render() {
        return (
        <Alert
            message="Success Text afterClose"
            description="Success afterClose Success afterClose Success afterClose Success afterClose Success afterClose Success afterClose"
            type="success"
            closable
            afterClose={onAfterClose}
        />
        )
    }
}`}>
                        <Demo5md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      顶部公告
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     页面顶部通告形式，默认有图标且type 为 'warning'。
                                </p>
                    <Templete code={`import Alert from '@/components/Alert'
import Button from '@/components/Button'

export class Demo6md extends Component {
    constructor(props) {
            super(props);

            this.state={
                alert1:false,
                alert2:false,
                alert3:false
            }
        }
    render() {
        const {alert1,alert2,alert3}=this.state
        return (
             <div>
                 <Button type="Primary" onClick={()=>{this.setState({alert1:true})}}>默认Type为warning且Icon显示</Button>
                 {alert1?
                     <Alert
                         message="banner Text"
                         description="banner Description banner Description banner Description banner Description banner Description banner Description"
                         closable
                         onClose={onClose}
                         banner
                     />:''
                  }
                 <Button type="Primary" onClick={()=>{this.setState({alert2:true})}}>自定义Type为error</Button>
                 {alert2?
                     <Alert
                         message="Error banner Text"
                         description="Error banner Description Error banner Description Error banner Description Error Description Error Description Error Description"
                         type="error"
                         closable
                         onClose={onClose}
                         banner
                     />:''
                 }
                 <Button type="Primary" onClick={()=>{this.setState({alert3:true})}}>自定义Type为error且Icon隐藏</Button>
                 {alert3?
                     <Alert
                         message="Error banner Text & no Icon"
                         description="Error banner Description Error banner Description Error banner Description Error Description Error Description Error Description"
                         type="error"
                         closable
                         onClose={onClose}
                         showIcon={false}
                         banner
                     />
                    :''
                    }

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