#  不可用
## 点击按钮切换可用状态。


````jsx
import InputNumber from '@/components/InputNumber'
import Button from '@/components/Button'
export class Demo3md extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        }
    }

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    render() {
        return (
            <div>
                <InputNumber placeholder="Basic usage" step={3} min={1} max={10} defaultValue={3} size="small"
                             disabled={this.state.disabled}/>
                <div style={{marginTop: 20}}>
                    <Button size="small" type="Primary" onClick={this.toggle}>点击切换可用状态</Button>
                </div>
            </div>
        )
    }
}
````