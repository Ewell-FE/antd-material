# 半星
## 支持半星选中
````jsx
/**
 * Created by zhy on 2018/3/21.
 */
import Rate from '@/components/Rate'
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