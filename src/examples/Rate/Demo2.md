# 半星
## 支持半星选中
````jsx
import Rate from 'antd-material/core/Rate'
export class <%=component%> extends Component {
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  defaultValue={1.5} allowHalf/>
            </div>
        )
    }
}
````