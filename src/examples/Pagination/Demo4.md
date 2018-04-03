#  跳转
## 快速跳转到某一页。


````jsx
import Pagination from '@/components/Pagination'

export class <%=component%> extends Component {
    render() {
        return (
            <Pagination
                showQuickJumper
                onChange={(page)=>{console.log('page:'+page)}}
                defaultCurrent={10}
                total={500}
            />
        )
    }
}
````