#  不可用状态
## 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变


````jsx
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" disabled>Primary(disabled)</Button>
                <Button disabled>Default(disabled)</Button>
                <Button type="Dashed" disabled>Dashed(disabled)</Button>
                <Button type="Danger" disabled>Danger(disabled)</Button>
            </div>
        )
    }
}
````