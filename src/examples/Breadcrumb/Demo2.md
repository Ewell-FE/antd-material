#  带有图标的
## 图标放在文字前面。


````jsx
import Breadcrumb from 'antd-material/core/Breadcrumb'
import Icon from 'antd-material/core/Icon'
const BreadcrumbItem=Breadcrumb.BreadcrumbItem
export class Demo2md extends Component {
    render() {
        return (
             <Breadcrumb>
                <BreadcrumbItem href="">
                  <Icon type="home" />
                </BreadcrumbItem>
                <BreadcrumbItem href="">
                  <Icon type="user" />
                  <span>Application List</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  Application
                </BreadcrumbItem>
              </Breadcrumb>
        )
    }
}
````