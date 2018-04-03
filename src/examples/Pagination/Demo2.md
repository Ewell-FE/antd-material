#  更多
## 页码比较多的情况的分页。


````jsx
import Pagination from '@/components/Pagination'

export class <%=component%> extends Component {
    render() {
        return (
            <Pagination defaultCurrent={10} total={500} />
        )
    }
}
````