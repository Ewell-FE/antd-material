# 水平分割线
## 默认为水平分割线，可在中间加入文字。
````jsx
import Divider  from 'antd-material/core/Divider'
export class <%=component%> extends Component {
    render() {
        return (
             <div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
               <Divider />
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
               <Divider lineType='dotted' orientation='left'>With Text</Divider>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
               <Divider lineType='dashed'>With Text</Divider>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
             </div>
        )
    }
}
````