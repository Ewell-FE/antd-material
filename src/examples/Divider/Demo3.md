# 标题位置
## 修改分割线标题的位置。
````jsx
import Divider  from 'antd-material/core/Divider'
export class <%=component%> extends Component {
    render() {
        return (
             <div>
                 <Divider orientation="left">Left Text</Divider>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                 <Divider orientation="right">Right Text</Divider>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
             </div>
        )
    }
}
````