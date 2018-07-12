#  基本
## 最简单的用法，适用于简短的警告提示,共有四种样式 success、info、warning、error。


````jsx
import Alert from 'antd-material/core/Alert'

export class <%=component%> extends Component {
    render() {
        return (
             <div>
                <Alert message="Success Text" type="success" width={350} />
                <Alert message="warn Text" type="warn" width={350} />
                <Alert message="info Text" type="info" width={350} />
                <Alert message="error Text" type="error" width={350} />
             </div>
        )
    }
}
````