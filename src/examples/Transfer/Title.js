import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Transfer 穿梭框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>双栏穿梭选择框。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>用只管的方式在两栏中移动元素,完成选择行为.</p>
                <p style={{margin:'12px 0 30px 0'}}>选择一个或以上的选项后,点击对应方向键,可以把选中的选项移动到另一栏.其中,左边一栏为source,右边一栏为target,API的设计也反映了这两个概念</p>
            </div>
        )
    }
}