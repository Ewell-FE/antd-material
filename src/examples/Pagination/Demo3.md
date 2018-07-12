#  改变
## 改变每页显示条目数。


````jsx
import Pagination from 'antd-material/core/Pagination'

export class <%=component%> extends Component {
    render() {
        return (
            <Pagination
                showSizeChanger
                onShowSizeChange={(current,pageSize)=>{console.log(current,pageSize)}}
                defaultCurrent={10}
                total={500} />
        )
    }
}
````