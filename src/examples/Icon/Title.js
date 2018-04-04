import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import HighLight from 'react-highlight';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Icon图标
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>语义化的矢量图形</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>使用 {'\<Icon />'} 标签声明组件，指定图标对应的 type 属性，示例代码如下:</p>
                <HighLight>
                    {`\<Icon type="star"/>`}
                </HighLight>
            </div>
        )
    }
}