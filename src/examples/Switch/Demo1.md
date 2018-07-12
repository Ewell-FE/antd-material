# 基本
## 最简单的用法
````jsx
import Switch from 'antd-material/core/Switch'
export class <%=component%> extends Component {
    onChangeType = checked => {
       console.log(checked)
    }
        render() {
            return (
                    <Switch defaultChecked={true} onChange={this.onChangeType}/>

            )
        }
}
````