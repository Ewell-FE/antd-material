#  国际化
## 使用 okText 和 cancelText 自定义按钮文字。

````jsx
import Popconfirm from '@/components/Popconfirm'
export class <%=component%> extends Component {

    render() {
        return (
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                <a href="#">Delete</a>
            </Popconfirm>
        )
    }
}
````