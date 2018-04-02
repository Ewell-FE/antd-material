//name：按钮大小
//desc：按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。


import React, {Component} from 'react';
import Button from '@/components/Button'

export default class App extends Component {
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