# 两种大小
## size="small" 表示小号开关。
````jsx
import Switch from '@/components/Switch'
export class <%=component%> extends Component {

        render() {
            return (
                    <div>
                        <Switch defaultChecked />
                        <br />
                        <Switch size="small" defaultChecked />
                      </div>

            )
        }
}
````