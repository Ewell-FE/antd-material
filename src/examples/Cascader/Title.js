import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Cascader级联选择
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>级联选择框。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。</p>
                <p style={{margin:'12px 0 30px 0'}}>从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。</p>
                <p style={{margin:'12px 0 30px 0'}}>比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。</p>

            </div>
        )
    }
}