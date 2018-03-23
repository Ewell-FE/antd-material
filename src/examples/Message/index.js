/**
 * Created by lilei on 2018/3/21.
 */
import React, {Component} from 'react';
import Button from '@/components/Button'
import Message from '@/components/Message'

export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" onClick={()=>{Message.success('success~')}}>success</Button>
                <Button type="Default" style={{marginLeft:10}} onClick={()=>{Message.warn('warn~')}}>warn</Button>
                <Button type="Dashed" style={{marginLeft:10}} onClick={()=>{Message.info('info~')}}>info</Button>
                <Button type="Danger" style={{marginLeft:10}} onClick={()=>{Message.error('error~')}}>error</Button>
                <Button type="Primary" style={{marginLeft:10}} onClick={()=>{Message.show({msg: '全写提示框！', type: 'info', timer:3000})}}>点击触发</Button>
            </div>
        )
    }
}