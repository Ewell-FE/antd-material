import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Select 选择器
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>下拉选择器。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</p>
                <p style={{margin:'12px 0 30px 0'}}>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</p>
            </div>
        )
    }
}