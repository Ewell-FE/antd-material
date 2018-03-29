/**
 * Created by lilei on 2018/3/21.
 */
import React, {Component} from 'react';
import Spin from '@/components/Spin'

export default class App extends Component {
    render() {
        return (
            <div>
                <Spin loading={true}>
                    <div style={{height:200,backgroundColor:'#CCCCCC'}}></div>
                </Spin>
                <br />
                <Spin loading={true} tip="loading...">
                    <div style={{height:200,backgroundColor:'#CCCCCC'}}></div>
                </Spin>
            </div>
        )
    }
}