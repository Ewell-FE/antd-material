//name：按钮类型
//desc：按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

import React, {Component} from 'react';
import Button from '@/components/Button'
export default class App extends Component {
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