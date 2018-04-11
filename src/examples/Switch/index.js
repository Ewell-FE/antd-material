import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Switch from '@/components/Switch'
import Button from '@/components/Button'



export class Demo1md extends Component {
 constructor(props){
        super(props)
        this.state={
            value:false
        }
    }
    onChangeType(checked){
        this.setState({value:checked})
    }
        render() {
            return (
                <div>
                    <Switch  size='small'/>
                    <br/>
                    <Switch defaultChecked={true}/>
                    <br/>
                    <Switch onChange={(checked)=>this.onChangeType(checked)} checked={this.state.value}/>
                </div>

            )
        }
}

export class Demo2md extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled:true
        }
    }
    onChangeType(){
        this.setState({disabled:!this.state.disabled})
    }
    render() {
        return (
              <div>
                 <Switch disabled={this.state.disabled}/>
                 <br/>
                 <Button type="Primary" onClick={()=>this.onChangeType()}>点击我哟哟</Button>
              </div>
        )
    }
}

export class Demo3md extends Component {
        render(){
            return (
                <div>
                     <Switch  checkedChildren="1" unCheckedChildren="0" />
                     <br/>
                     <Switch  checkedChildren="开" unCheckedChildren="关" />
                     <br/>
                     <Switch  checkedChildren={<i className='fa fa-check'></i>} unCheckedChildren={<i className='fa fa-times'></i>} />
                </div>
            )
        }
}

export class Demo4md extends Component {
        render() {
            return (
                    <Switch  loading={true}/>
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
                                     最简单的用法
                                </p>
                    <Templete code={`import Switch from '@/components/Switch'
export class Demo1md extends Component {
 constructor(props){
        super(props)
        this.state={
            value:false
        }
    }
    onChangeType(checked){
        this.setState({value:checked})
    }
        render() {
            return (
                <div>
                    <Switch  size='small'/>
                    <br/>
                    <Switch defaultChecked={true}/>
                    <br/>
                    <Switch onChange={(checked)=>this.onChangeType(checked)} checked={this.state.value}/>
                </div>

            )
        }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                     禁用
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     不可操作
                                </p>
                    <Templete code={`import Switch from '@/components/Switch'
import Button from '@/components/Button'
export class Demo2md extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled:true
        }
    }
    onChangeType(){
        this.setState({disabled:!this.state.disabled})
    }
    render() {
        return (
              <div>
                 <Switch disabled={this.state.disabled}/>
                 <br/>
                 <Button type="Primary" onClick={()=>this.onChangeType()}>点击我哟哟</Button>
              </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                     字符
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     可以添加文字和图标
                                </p>
                    <Templete code={`import Switch from '@/components/Switch'
export class Demo3md extends Component {
        render(){
            return (
                <div>
                     <Switch  checkedChildren="1" unCheckedChildren="0" />
                     <br/>
                     <Switch  checkedChildren="开" unCheckedChildren="关" />
                     <br/>
                     <Switch  checkedChildren={<i className='fa fa-check'></i>} unCheckedChildren={<i className='fa fa-times'></i>} />
                </div>
            )
        }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                     加载中
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     标识开关操作仍在执行中
                                </p>
                    <Templete code={`import Switch from '@/components/Switch'
export class Demo4md extends Component {
        render() {
            return (
                    <Switch  loading={true}/>
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