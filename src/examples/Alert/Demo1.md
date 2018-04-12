#  基本
## 最简单的用法，适用于简短的警告提示,共有四种样式 success、info、warning、error。


````jsx
import Alert from '@/components/Alert'

export class <%=component%> extends Component {
    render() {
        return (
             <div>
                <Alert message="Success Text" type="success" />
                <Alert message="warn Text" type="warn" />
                <Alert message="info Text" type="info" />
                <Alert message="error Text" type="error" />
             </div>
        )
    }
}
````