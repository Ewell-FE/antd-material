import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Rate from '@/components/Rate'



/**
 * Created by zhy on 2018/3/21.
 */
export class Demo1md extends Component {
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  defaultValue={3}/>
            </div>
        )
    }
}

/**
 * Created by zhy on 2018/3/21.
 */
export class Demo2md extends Component {
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  defaultValue={1.5} allowHalf/>
            </div>
        )
    }
}

/**
 * Created by zhy on 2018/3/21.
 */
export class Demo3md extends Component {
  constructor(props) {
        super(props)
        this.state = {
            value:4
        }

    }
    onChange(num){
       this.setState({value:num})
    }
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  value={this.state.value} onChange={(num)=>this.onChange(num)}/>
            </div>
        )
    }
}

/**
 * Created by zhy on 2018/3/21.
 */
export class Demo4md extends Component {
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  defaultValue={2} character="好"/>
               <Rate  defaultValue={1} character="A"/>
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
                                     基础
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     基础用法
                                </p>
                    <Templete code={`/**
 * Created by zhy on 2018/3/21.
 */
import Rate from '@/components/Rate'
export class Demo1md extends Component {
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  defaultValue={3}/>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                     半星
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     支持半星选中
                                </p>
                    <Templete code={`/**
 * Created by zhy on 2018/3/21.
 */
import Rate from '@/components/Rate'
export class Demo2md extends Component {
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  defaultValue={1.5} allowHalf/>
            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                     可控的
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     操作是否选择
                                </p>
                    <Templete code={`/**
 * Created by zhy on 2018/3/21.
 */
import Rate from '@/components/Rate'
export class Demo3md extends Component {
  constructor(props) {
        super(props)
        this.state = {
            value:4
        }

    }
    onChange(num){
       this.setState({value:num})
    }
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  value={this.state.value} onChange={(num)=>this.onChange(num)}/>
            </div>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                     其他字符
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
                                </p>
                    <Templete code={`/**
 * Created by zhy on 2018/3/21.
 */
import Rate from '@/components/Rate'
export class Demo4md extends Component {
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  defaultValue={2} character="好"/>
               <Rate  defaultValue={1} character="A"/>
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