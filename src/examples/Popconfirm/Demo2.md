#  国际化
## 使用 okText 和 cancelText 自定义按钮文字。

````jsx
import Popconfirm from 'antd-material/core/Popconfirm'
export class <%=component%> extends Component {

    render() {
        return (
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                <a href="javascript:void(0)">Delete</a>
            </Popconfirm>
        )
    }
}
````