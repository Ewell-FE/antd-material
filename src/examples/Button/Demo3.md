#   图标按钮
##  当需要在 Button 内嵌入 Icon 时，直接在 Button 内使用 Icon 组件，组件内部会根据位置自动调节边距方向。

````jsx
import Button from 'antd-material/core/Button'
import Icon from 'antd-material/core/Icon'

export class <%=component%> extends Component {
    render() {
        return (
            <div>
                 <Button><Icon type="music"></Icon></Button>
                 <Button><Icon type="download"></Icon> Download</Button>
                 <Button> heart<Icon type="heart"></Icon></Button>
            </div>
        )
    }
}
````