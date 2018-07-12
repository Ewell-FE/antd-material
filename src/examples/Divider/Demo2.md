# 垂直分割线
## 使用 type="vertical" 设置为行内的垂直分割线
````jsx
import Divider  from 'antd-material/core/Divider'
export class <%=component%> extends Component {
    render() {
        return (
             <div>
                 Text
                 <Divider type="vertical" />
                 <a href="javascript:void(0)">Link</a>
                 <Divider type="vertical" />
                 <a href="javascript:void(0)">Link</a>
             </div>
        )
    }
}
````