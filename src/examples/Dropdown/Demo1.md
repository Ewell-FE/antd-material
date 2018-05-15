#  按钮类型
## 按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。


````jsx
import Dropdown from '@/components/Dropdown'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export class <%=component%> extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Button>Click Me<Icon type="angle-down"/></Button>
                </Dropdown>
            </div>
        )
    }
}
````