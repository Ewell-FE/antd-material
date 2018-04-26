#  不可用
## checkbox 不可用。


````jsx
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';

export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: true,
            disabled: false,
        }
    }
    toggleChecked = () => {
        this.setState({ checked: !this.state.checked });
    }
    toggleDisable = () => {
        this.setState({ disabled: !this.state.disabled });
    }
    onChange = (e) => {
        this.setState({
          checked: e.target.checked,
        });
    }
    render() {
        return (
                  <div>
                    <p style={{ marginBottom: '20px' }}>
                      <Checkbox
                        checked={this.state.checked}
                        disabled={this.state.disabled}
                        onChange={this.onChange}
                      >
                        {(this.state.checked ? 'Checked' : 'Unchecked') + " - " + (this.state.disabled ? 'Disabled' : 'Enabled')  }
                      </Checkbox>
                    </p>
                    <p>
                      <Button
                        type="Primary"
                        size="small"
                        onClick={()=>this.toggleChecked()}
                      >
                        {!this.state.checked ? 'Check' : 'Uncheck'}
                      </Button>
                      <Button
                        style={{ marginLeft: '10px' }}
                        type="Primary"
                        size="small"
                        onClick={()=>this.toggleDisable()}
                      >
                        {!this.state.disabled ? 'Disable' : 'Enable'}
                      </Button>
                    </p>
                  </div>
        )
    }
}
````