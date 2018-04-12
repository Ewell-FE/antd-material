import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import { withStyles } from 'material-ui/styles'

const Search = Input.Search
const styles = theme => ({
  root:{
    "& > input,& > span":{
        width:200,
        marginTop:5
    }
  }
})



export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Input placeholder="Basic usage"/>
            </div>
        )
    }
}



export class Demo2md extends Component {
    constructor(props) {
            super(props)
    }

    onPressEnter(){
        console.log(this.input.value)
    }

    render() {
        return (
            <div>
                <Input
                    style={{width: 300}}
                    withRef={(e)=>{this.input = e}}
                    onPressEnter={()=>{this.onPressEnter()}}
                    suffix={<Icon type="search" />}
                    placeholder="input search text"/>
                 <br />
                 <br />
                 <Search onSearch={e=>console.log(e)} style={{width:300}} placeholder="input search text"/>
                 <br />
                 <br />
                 <Search onSearch={e=>console.log(e)} style={{width:300}} enterButton placeholder="input search text"/>
                 <br />
                 <br />
                 <Search onSearch={e=>console.log(e)} style={{width:300}} enterButton="Search" size="large" placeholder="input search text"/>

            </div>
        )
    }
}



@withStyles(styles, {name: 'MuiInput-ant-demo'})
export class Demo3md extends Component {
    constructor(props) {
            super(props)
    }

    onPressEnter(){
        console.log(this.input.value)
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Input size="small" placeholder="small size"/>
                <br />
                <Input placeholder="default size" suffix={<Icon type="search" />}/>
                <br />
                <Input size="large" placeholder="large size"/>
            </div>
        )
    }
}


export class Demo4md extends Component {
    constructor(props) {
            super(props)
            this.state={
                userName:""
            }
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close" onClick={this.emitEmpty} /> : null;
        return (
            <div>
                <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={suffix}
                    value={userName}
                    onChange={this.onChangeUserName}
                    withRef={node => this.userNameInput = node}
                />
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
                                      基本使用
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     常规输入框
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
                
                     <Typography variant="display1" gutterBottom>
                                      搜索框
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     带有搜索图表的输入框,并利用 withRef 获取真实dom元素
                                </p>
                    <Templete code={`import Input from '@/components/Input'
import Icon from '@/components/Icon'

const Search = Input.Search

export class Demo2md extends Component {
    constructor(props) {
            super(props)
    }

    onPressEnter(){
        console.log(this.input.value)
    }

    render() {
        return (
            <div>
                <Input
                    style={{width: 300}}
                    withRef={(e)=>{this.input = e}}
                    onPressEnter={()=>{this.onPressEnter()}}
                    suffix={<Icon type="search" />}
                    placeholder="input search text"/>
                 <br />
                 <br />
                 <Search onSearch={e=>console.log(e)} style={{width:300}} placeholder="input search text"/>
                 <br />
                 <br />
                 <Search onSearch={e=>console.log(e)} style={{width:300}} enterButton placeholder="input search text"/>
                 <br />
                 <br />
                 <Search onSearch={e=>console.log(e)} style={{width:300}} enterButton="Search" size="large" placeholder="input search text"/>

            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      三种大小
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     我们为{`<Input />`}输入框定义了三种尺寸（大、默认、小），高度分别为40px、32px和24px
                                </p>
                    <Templete code={`import Input from '@/components/Input'
import { withStyles } from 'material-ui/styles';
import Icon from '@/components/Icon'

const styles = theme => ({
  root:{
    "& > input,& > span":{
        width:200,
        marginTop:5
    }
  }
})

@withStyles(styles, {name: 'MuiInput-ant-demo'})
export class Demo3md extends Component {
    constructor(props) {
            super(props)
    }

    onPressEnter(){
        console.log(this.input.value)
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Input size="small" placeholder="small size"/>
                <br />
                <Input placeholder="default size" suffix={<Icon type="search" />}/>
                <br />
                <Input size="large" placeholder="large size"/>
            </div>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      前缀和后缀
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     在输入框上添加前缀或后缀图标。
                                </p>
                    <Templete code={`import Input from '@/components/Input'
import Icon from '@/components/Icon'

export class Demo4md extends Component {
    constructor(props) {
            super(props)
            this.state={
                userName:""
            }
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close" onClick={this.emitEmpty} /> : null;
        return (
            <div>
                <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={suffix}
                    value={userName}
                    onChange={this.onChangeUserName}
                    withRef={node => this.userNameInput = node}
                />
            </div>
        )
    }
}`}>
                        <Demo4md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}