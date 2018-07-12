#  可关闭的警告提示
## 显示关闭按钮，点击可关闭警告提示。关闭带有回调


````jsx
import Alert from 'antd-material/core/Alert'
const onClose = function () {
    console.log('I was closed.');
};
export class <%=component%> extends Component {
    render() {
        return (
             <div>
                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description Success Description Success Description Success Description"
                    type="success"
                    closable
                    onClose={onClose}
                    showIcon
                />
                <Alert
                    message="warn Text"
                    description="warn Description warn Description warn Description warn Description warn Description warn Description"
                    type="warn"
                    closable
                    onClose={onClose}
                    showIcon

                />
                <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description"
                    type="info"
                    closable
                    onClose={onClose}
                    showIcon
                    affix={false}
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closable
                    onClose={onClose}
                    showIcon
                    affix={false}

                />
             </div>
        )
    }
}
````