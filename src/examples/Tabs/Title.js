import React, {Component} from 'react';
import Typography from 'material-ui/Typography';

export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Tabs标签页
                </Typography>
                <p style={{margin: '12px 0 30px 0'}}>选项卡切换组件</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin: '12px 0 30px 0'}}>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

                    Ant Design 依次提供了三级选项卡，分别用于不同的场景。

                    卡片式的页签，提供可关闭的样式，常用于容器顶部。
                    标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
                    RadioButton 可作为更次级的页签来使用。</p>
            </div>
        )
    }
}