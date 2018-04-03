#  总数
## 通过设置 showTotal 展示总共有多少数据。


````jsx
import Pagination from '@/components/Pagination'

export class <%=component%> extends Component {
    render() {
        return (
            <div>
                <Pagination
                    total={85}
                    showTotal={total => ('总共'+total+'条')}
                    pageSize={20}
                    defaultCurrent={1}
                />
                <Pagination
                    total={85}
                    showTotal={(total, range) => (range[0]+' - '+range[1]+' / '+total +' 条')}
                    pageSize={20}
                    defaultCurrent={1}
                />
            </div>

        )
    }
}
````