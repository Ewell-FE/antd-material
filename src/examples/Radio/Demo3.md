#  单选组合
## 一组互斥的 Radio 配合使用。


````jsx
import Radio from '@/components/Radio'
const RadioGroup = Radio.Group
export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '1',
          }
    }
     onChange = (e) => {
        this.setState({
          value: e.target.value,
        });
      }
    render() {
        return (
             <RadioGroup onChange={this.onChange} name='groupName'  value={this.state.value}>
                    <Radio value='1'>A</Radio>
                    <Radio value='2'>B</Radio>
                    <Radio value='3'>C</Radio>
                    <Radio value='4'>D</Radio>
             </RadioGroup>
        )
    }
}
````