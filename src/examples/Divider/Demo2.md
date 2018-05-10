# 垂直分割线
## 使用 type="vertical" 设置为行内的垂直分割线
````jsx
import Divider  from '@/components/Divider'
export class <%=component%> extends Component {
    render() {
        return (
             <div>
                 Text
                 <Divider type="vertical" />
                 <a href="#">Link</a>
                 <Divider type="vertical" />
                 <a href="#">Link</a>
             </div>
        )
    }
}
````