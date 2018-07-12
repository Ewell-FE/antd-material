#  基本
## 基本滑动条。当 range 为 true 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。

````jsx
import Slider from 'antd-material/core/Slider'
import Switch from 'antd-material/core/Switch';

export class Demo1md extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        };
    }

    handleDisabledChange = (disabled) => {
        this.setState({ disabled});
    }

    render() {
        const { disabled } = this.state;
        return (
            <div>
                <Slider defaultValue={30} disabled={disabled} />
                <Slider range defaultValue={[20, 50]} disabled={disabled} />
                Disabled: <Switch defaultChecked={false} onChange={this.handleDisabledChange} />
            </div>
        );
    }
}
````