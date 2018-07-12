#  图标
## 可口的图标让信息类型更加醒目。


````jsx
import Alert from 'antd-material/core/Alert'

export class <%=component%> extends Component {
    render() {
        return (
             <div>
                <Alert message="Success Text" type="success" showIcon/>
                <Alert message="warn Text" type="warn" showIcon/>
                <Alert message="info Text" type="info" showIcon/>
                <Alert message="error Text" type="error" showIcon/>
                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description Success Description Success Description Success Description"
                    type="success"
                    showIcon
                />
                <Alert
                    message="warn Text"
                    description="warn Description warn Description warn Description warn Description warn Description warn Description"
                    type="warn"
                    showIcon
                />
                <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description"
                    type="info"
                    showIcon
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    showIcon
                />
             </div>
        )
    }
}
````