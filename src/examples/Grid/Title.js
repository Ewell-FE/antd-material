import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Grid 栅格
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>12 栅格系统</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 20px'}}>
                    <ul>
                        <li style={{listStyleType: 'disc'}}>它使用CSS的Flexible Box模块来实现高度的灵活性。</li>
                        <li style={{listStyleType: 'disc'}}>有两种布局：容器和物品。</li>
                        <li style={{listStyleType: 'disc'}}>商品宽度以百分比设置，所以它们始终是流畅的，并且相对于其父元素的大小。</li>
                        <li style={{listStyleType: 'disc'}}>项目具有填充以创建单个项目之间的间距。</li>
                        <li style={{listStyleType: 'disc'}}>有五个网格断点：xs，sm，md，lg和xl。</li>
                    </ul>

                </p>
            </div>
        )
    }
}