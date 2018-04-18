#  受控的Checkbox
## 联动 checkbox。


````jsx
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';

export class <%=component%> extends Component {
    constructor(props){
        super(props);
        this.toggleCheck=this.toggleCheck.bind(this);
        this.toggleDisable=this.toggleDisable.bind(this);
        this.state={
            checked:false,
            disabled:false
        }
    }

    toggleCheck(){
        this.setState({
            checked:!this.state.checked
        })
    }

    toggleDisable(){
        this.setState({
            disabled:!this.state.disabled
        })
    }

    render() {
        const label=(this.state.checked ? 'Checked' : 'Unchecked')+'-'+(this.state.disabled ? 'Disabled' : 'Enabled');
        return (
            <div>
                <Checkbox
                    checked={this.state.checked}
                    disabled={this.state.disabled}
                    onChange={this.onChange}
                >
                    {label}
                </Checkbox>
                <br />
                <br />
                <Button type="Primary" onClick={this.toggleCheck}>{this.state.checked?'Checked':'Unchecked'}</Button>
                <Button type="Primary" onClick={this.toggleDisable}>{this.state.disabled?'Disabled':'Enabled'}</Button>
            </div>
            
        )
    }
}
````