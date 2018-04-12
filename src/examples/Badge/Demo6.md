#  状态点
##用于表示状态的小圆点

````jsx
import Badge from '@/components/Badge'
export class <%=component%> extends Component {

    render() {
        return (
            <div>
                <Badge status="success" />
                <Badge status="error" />
                <Badge status="default" />
                <Badge status="processing" />
                <Badge status="warn" /><br />
                <Badge status="success" text="Success" /><br />
                <Badge status="error" text="error" /><br />
                <Badge status="default" text="Default" /><br />
                <Badge status="processing" text="Processing" /><br />
                <Badge status="warn" text="Warn" /><br />
            </div>
        )
    }
}
````