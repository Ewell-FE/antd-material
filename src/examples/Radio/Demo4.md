#  RadioGroup 组合 - 配置方式
## 通过配置 options 参数来渲染单选框。


````jsx
import Radio from '@/components/Radio'
const RadioGroup = Radio.Group
export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'Apple'
          }
    }
    onChange = (e) => {
        this.setState({
          value: e.target.value,
        });
    }
    render() {
        const options = [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' ,disabled:true},
        ];
        return (
             <RadioGroup options={options} onChange={this.onChange} value={this.state.value} />
        )
    }
}
````