#  不可用
## Radio 不可用。


````jsx
import Radio from 'antd-material/core/Radio'
import Button from 'antd-material/core/Button'
export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: true,
          }
    }
    toggleDisabled = () => {
        this.setState({
        disabled: !this.state.disabled,
        });
    }
    render() {
        return (
            <div>
                <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
                <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
                <div style={{ marginTop: 20 }}>
                    <Button type="Primary" onClick={this.toggleDisabled}>
                           Toggle disabled
                    </Button>
                </div>
            </div>
        )
    }
}
````