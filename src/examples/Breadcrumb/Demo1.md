#  基本
## 最简单的用法。


````jsx
import Breadcrumb from 'antd-material/core/Breadcrumb'
const BreadcrumbItem=Breadcrumb.BreadcrumbItem
export class Demo1md extends Component {
    render() {
        return (
            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem><a href="">Application Center</a></BreadcrumbItem>
                <BreadcrumbItem><a href="">Application List</a></BreadcrumbItem>
                <BreadcrumbItem>An Application</BreadcrumbItem>
            </Breadcrumb>
        )
    }
}
````