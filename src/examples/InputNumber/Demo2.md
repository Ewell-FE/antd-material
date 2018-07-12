#  输入框的大小有三种
## 三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。


````jsx
import InputNumber from 'antd-material/core/InputNumber'

export class Demo2md extends Component {
    render() {
        return (
            <div>
                <InputNumber placeholder="Basic usage" step={3} min={1} max={10} defaultValue={3} size="large"/>
                <InputNumber placeholder="Basic usage" step={3} min={1} max={10} defaultValue={3}/>
                <InputNumber placeholder="Basic usage" step={3} min={1} max={10} defaultValue={3} size="small"/>
            </div>
        )
    }
}
````