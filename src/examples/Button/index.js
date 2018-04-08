import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
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
                <Button type="Primary">Primary</Button>
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
                <Button type="Primary">default</Button>
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
    constructor(props) {
        super(props)
        this.state={
            value:'small'
        }
    }

    render() {
        return (
            <ButtonGroup size="small" value={this.state.value} onChange={(val)=>{this.setState({value:val})}}>
                <Button value="small">small</Button>
                <Button value="default">default</Button>
                <Button value="large">large</Button>
            </ButtonGroup>
        )
    }
}


export class Demo5md extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" disabled>Primary(disabled)</Button>
                <Button disabled>Default(disabled)</Button>
                <Button type="Dashed" disabled>Dashed(disabled)</Button>
                <Button type="Danger" disabled>Danger(disabled)</Button>
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
                <Button type="Primary">Primary</Button>
                <Button>Default</Button>
                <Button type="Dashed">Dashed</Button>
                <Button type="Danger">Danger</Button>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      按钮尺寸
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     按钮有大、中、小三种尺寸。 通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中
                                </p>
                    <Templete code={`import Button from '@/components/Button'

export class Demo2md extends Component {
    render() {
        return (
            <div>
                <Button size="small" type="Primary">small</Button>
                <Button type="Primary">default</Button>
                <Button size="large" type="Primary">large</Button>
            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                       图标按钮
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                      当需要在 Button 内嵌入 Icon 时，直接在 Button 内使用 Icon 组件，组件内部会根据位置自动调节边距方向。
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
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      按钮组合
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     可以将多个 Button 放入 Button.Group 的容器中。按钮组的size会覆盖button的size
                                </p>
                    <Templete code={`import Button from '@/components/Button'
import Icon from '@/components/Icon'
const ButtonGroup = Button.Group

export class Demo4md extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:'small'
        }
    }

    render() {
        return (
            <ButtonGroup size="small" value={this.state.value} onChange={(val)=>{this.setState({value:val})}}>
                <Button value="small">small</Button>
                <Button value="default">default</Button>
                <Button value="large">large</Button>
            </ButtonGroup>
        )
    }
}`}>
                        <Demo4md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      不可用状态
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变
                                </p>
                    <Templete code={`import Button from '@/components/Button'

export class Demo5md extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" disabled>Primary(disabled)</Button>
                <Button disabled>Default(disabled)</Button>
                <Button type="Dashed" disabled>Dashed(disabled)</Button>
                <Button type="Danger" disabled>Danger(disabled)</Button>
            </div>
        )
    }
}`}>
                        <Demo5md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}