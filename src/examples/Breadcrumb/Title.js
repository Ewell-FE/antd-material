import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Breadcrumb面包屑
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>显示当前页面在系统层级结构中的位置，并能向上返。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当系统拥有超过两级以上的层级结构时；
                    当需要告知用户『你在哪里』时；
                    当需要向上导航的功能时。</p>
            </div>
        )
    }
}