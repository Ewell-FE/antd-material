#  基本使用
## 数字输入框


````jsx
import InputNumber from 'antd-material/core/InputNumber'

export class Demo1md extends Component {
    render() {
        return (
            <div>
                <InputNumber placeholder="Basic usage" step={3} min={1} max={10} defaultValue={1}/>
            </div>
        )
    }
}
````