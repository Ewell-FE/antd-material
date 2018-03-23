/**
 * Created by lilei on 2018/3/21.
 */
import React, {Component} from 'react';
import Alert from '@/components/Alert'
import Button from '@/components/Button'

export default class App extends Component {
    render() {
        return (
            <div>
                <Button onClick={()=>{Alert.success('hello~')}}>点击触发22</Button>
            </div>
        )
    }
}