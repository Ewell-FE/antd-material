import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Modal对话框
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>模态对话框。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 40px 0'}}>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</p>
                <p style={{margin:'12px 0 40px 0'}}>另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 Modal.confirm() 等方法。</p>
            </div>
        )
    }
}