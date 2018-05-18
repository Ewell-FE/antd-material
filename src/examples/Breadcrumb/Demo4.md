#  分隔符
## 使用 separator=">" 可以自定义分隔符。


````jsx
import Breadcrumb from '@/components/Breadcrumb'
const BreadcrumbItem=Breadcrumb.BreadcrumbItem
export class Demo4md extends Component {
    render() {
        return (
            <Breadcrumb separator=">">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem><a href="">Application Center</a></BreadcrumbItem>
                <BreadcrumbItem><a href="">Application List</a></BreadcrumbItem>
                <BreadcrumbItem>An Application</BreadcrumbItem>
            </Breadcrumb>
        )
    }
}
````