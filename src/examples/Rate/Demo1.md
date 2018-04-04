# 基础
## 基础用法
````jsx
/**
 * Created by zhy on 2018/3/21.
 */
import Rate from '@/components/Rate'
export class <%=component%> extends Component {
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  defaultValue={3}/>
            </div>
        )
    }
}
````