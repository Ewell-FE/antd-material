import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

const ButtonGroup = Button.Group



export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" disabled>Primary</Button>
                <Button>Default</Button>
                <Button type="Dashed">Dashed</Button>
                <Button type="Danger">Danger</Button>
            </div>
        )
    }
}


export class Demo2md extends Component {
    render() {
        return (
            <div>
                <Button size="small" type="Primary">small</Button>
                <Button size="medium" type="Primary">medium</Button>
                <Button size="large" type="Primary">large</Button>
            </div>
        )
    }
}


export class Demo3md extends Component {
    render() {
        return (
            <div>
                 <Button><Icon type="music"></Icon></Button>
                 <Button><Icon type="download"></Icon> Download</Button>
                 <Button> heart<Icon type="heart"></Icon></Button>
            </div>
        )
    }
}


export class Demo4md extends Component {
    render() {
        return (
            <div>
                <Button size="small" type="Primary">small</Button>
                <Button size="medium" type="Primary">medium</Button>
                <Button size="large" type="Primary">large</Button>
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
                    <Templete code={`import Button from '@/components/Button'

export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" disabled>Primary</Button>
                <Button>Default</Button>
                <Button type="Dashed">Dashed</Button>
                <Button type="Danger">Danger</Button>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    
                                </p>
                    <Templete code={`import Button from '@/components/Button'

export class Demo2md extends Component {
    render() {
        return (
            <div>
                <Button size="small" type="Primary">small</Button>
                <Button size="medium" type="Primary">medium</Button>
                <Button size="large" type="Primary">large</Button>
            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    
                                </p>
                    <Templete code={`import Button from '@/components/Button'
import Icon from '@/components/Icon'

export class Demo3md extends Component {
    render() {
        return (
            <div>
                 <Button><Icon type="music"></Icon></Button>
                 <Button><Icon type="download"></Icon> Download</Button>
                 <Button> heart<Icon type="heart"></Icon></Button>
            </div>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    
                                </p>
                    <Templete code={`import Button from '@/components/Button'
import Icon from '@/components/Icon'
const ButtonGroup = Button.Group

export class Demo4md extends Component {
    render() {
        return (
            <div>
                <Button size="small" type="Primary">small</Button>
                <Button size="medium" type="Primary">medium</Button>
                <Button size="large" type="Primary">large</Button>
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