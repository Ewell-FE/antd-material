# 基础
## 基础用法
````jsx
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