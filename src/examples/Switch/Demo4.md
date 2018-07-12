# 加载中
## 标识开关操作仍在执行中
````jsx
import Switch from 'antd-material/core/Switch'
export class <%=component%> extends Component {
        render() {
            return (
                   <div>
                       <Switch loading defaultChecked />
                       <br />
                       <Switch size="small" loading />
                     </div>
            )
        }
}
````