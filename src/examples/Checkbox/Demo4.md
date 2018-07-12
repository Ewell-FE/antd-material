#  Checkbox 组
## 方便的从数组生成 Checkbox 组。


````jsx
import Checkbox from 'antd-material/core/Checkbox';
const CheckboxGroup = Checkbox.Group;

export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: true,
            disabled: false,
        }
    }
    onChange = checkedValues =>{
      console.log('checked = ', checkedValues);
    }
    render() {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];
        return (
                   <div>
                      <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange} />
                      <br /><br />
                      <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange} />
                      <br /><br />
                      <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onChange} />
                    </div>
        )
    }
}
````