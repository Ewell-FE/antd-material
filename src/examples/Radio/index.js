import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Radio from '@/components/Radio'
import Button from '@/components/Button'

const RadioGroup = Radio.Group
const RadioButton = Radio.Button



export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Radio>哈哈哈</Radio>
            </div>
        )
    }
}

export class Demo2md extends Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: true,
          }
    }
    toggleDisabled = () => {
        this.setState({
        disabled: !this.state.disabled,
        });
    }
    render() {
        return (
            <div>
                <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
                <br />
                <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
                <div style={{ marginTop: 20 }}>
                    <Button type="Primary" onClick={this.toggleDisabled}>
                           Toggle disabled
                    </Button>
                </div>
            </div>
        )
    }
}

export class Demo3md extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '1',
          }
    }
     onChange = (e) => {
        this.setState({
          value: e.target.value,
        });
      }
    render() {
        return (
             <RadioGroup onChange={this.onChange} name='groupName'  value={this.state.value}>
                    <Radio value='1'>A</Radio>
                    <Radio value='2'>B</Radio>
                    <Radio value='3'>C</Radio>
                    <Radio value='4'>D</Radio>
             </RadioGroup>
        )
    }
}

export class Demo4md extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'Apple'
          }
    }
    onChange = (e) => {
        this.setState({
          value: e.target.value,
        });
    }
    render() {
        const options = [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' ,disabled:true},
        ];
        return (
             <RadioGroup options={options} onChange={this.onChange} value={this.state.value} />
        )
    }
}

export class Demo5md extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '1',
          }
    }
     onChange = (e) => {

      }
    render() {
        return (
            <div>
                <div>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  disabled value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
                      <RadioGroup onChange={this.onChange}  disabled defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
              </div>
        )
    }
}

export class Demo6md extends Component {
    constructor(props){
        super(props)
        this.state = {

          }
    }
     onChange = (e) => {

      }
    render() {
        return (
            <div>
                <div>
                      <RadioGroup onChange={this.onChange}  size='large' defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
                      <RadioGroup onChange={this.onChange}  size='small' defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
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
                                     最简单的用法。
                                </p>
                    <Templete code={`import Radio from '@/components/Radio'

export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Radio>哈哈哈</Radio>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      不可用
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     Radio 不可用。
                                </p>
                    <Templete code={`import Radio from '@/components/Radio'
import Button from '@/components/Button'
export class Demo2md extends Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: true,
          }
    }
    toggleDisabled = () => {
        this.setState({
        disabled: !this.state.disabled,
        });
    }
    render() {
        return (
            <div>
                <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
                <br />
                <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
                <div style={{ marginTop: 20 }}>
                    <Button type="Primary" onClick={this.toggleDisabled}>
                           Toggle disabled
                    </Button>
                </div>
            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      单选组合
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     一组互斥的 Radio 配合使用。
                                </p>
                    <Templete code={`import Radio from '@/components/Radio'
const RadioGroup = Radio.Group
export class Demo3md extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '1',
          }
    }
     onChange = (e) => {
        this.setState({
          value: e.target.value,
        });
      }
    render() {
        return (
             <RadioGroup onChange={this.onChange} name='groupName'  value={this.state.value}>
                    <Radio value='1'>A</Radio>
                    <Radio value='2'>B</Radio>
                    <Radio value='3'>C</Radio>
                    <Radio value='4'>D</Radio>
             </RadioGroup>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      RadioGroup 组合 - 配置方式
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     通过配置 options 参数来渲染单选框。
                                </p>
                    <Templete code={`import Radio from '@/components/Radio'
const RadioGroup = Radio.Group
export class Demo4md extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'Apple'
          }
    }
    onChange = (e) => {
        this.setState({
          value: e.target.value,
        });
    }
    render() {
        const options = [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' ,disabled:true},
        ];
        return (
             <RadioGroup options={options} onChange={this.onChange} value={this.state.value} />
        )
    }
}`}>
                        <Demo4md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      按钮样式
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     按钮样式的单选组合。
                                </p>
                    <Templete code={`import Radio from '@/components/Radio'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
export class Demo5md extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '1',
          }
    }
     onChange = (e) => {

      }
    render() {
        return (
            <div>
                <div>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  disabled value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
                      <RadioGroup onChange={this.onChange}  disabled defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
              </div>
        )
    }
}`}>
                        <Demo5md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      大小
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     大中小三种组合，可以和表单输入框进行对应配合
                                </p>
                    <Templete code={`import Radio from '@/components/Radio'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
export class Demo6md extends Component {
    constructor(props){
        super(props)
        this.state = {

          }
    }
     onChange = (e) => {

      }
    render() {
        return (
            <div>
                <div>
                      <RadioGroup onChange={this.onChange}  size='large' defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
                      <RadioGroup onChange={this.onChange}  size='small' defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
              </div>
        )
    }
}`}>
                        <Demo6md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}