//name：按钮组
//desc：按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

import React, {Component} from 'react';
import Button from '@/components/Button'

import Icon from '@/components/Icon'
const ButtonGroup = Button.Group
export default class App extends Component {
    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button><Icon type="music"></Icon></Button>
                    <Button><Icon type="download"></Icon> Download</Button>
                    <Button> heart<Icon type="heart"></Icon></Button>
                </ButtonGroup>
            </div>
        )
    }
}