import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display1" gutterBottom>
                    Affix固钉
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>将页面元素钉在可视范围。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p>
                <p style={{margin:'12px 0 30px 0'}}>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
            </div>
        )
    }
}