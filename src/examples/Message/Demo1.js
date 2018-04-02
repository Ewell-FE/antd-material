//name：按钮类型
//desc：按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

import React, {Component} from 'react';
import Button from '@/components/Button'
import Message from '@/components/Message'

export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" onClick={()=>{Message.success("success!")}}>success</Button>
                <Button type="Default" onClick={()=>{Message.warn('warn~')}}>warn</Button>
                <Button type="Dashed"  onClick={()=>{Message.info('info~')}}>info</Button>
                <Button type="Danger"  onClick={()=>{Message.error('error~')}}>error</Button>
                <Button type="Primary" style={{marginLeft:10}}
                        onClick={()=>{Message.show({msg: '全写提示框！', type: 'info', timer:3000})}}>点击触发</Button>
            </div>
        )
    }
}