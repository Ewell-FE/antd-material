#  基本
## 最简单的用法。


````jsx
import Tooltip from 'antd-material/core/Tooltip'

export class <%=component%> extends Component {
    render() {
        return (
            <Tooltip title='prompt text'>
                <span>Tooltip will show when mouse enter.</span>
            </Tooltip >
        )
    }
}
````