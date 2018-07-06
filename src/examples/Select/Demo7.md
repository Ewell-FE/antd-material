# 带搜索框
## 展开后可对选项进行搜索。
````jsx
import Select from '@/components/Select';
const Option = Select.Option

export class <%=component%> extends Component {

    handleChange = (value)=> {
      console.log("selected " + value);
    }

    handleBlur = ()=> {
      console.log('blur');
    }

    handleFocus = ()=> {
      console.log('focus');
    }

    render() {
        return (
            <div>
                <Select
                   showSearch
                   style={{ width: 200 }}
                   placeholder="Select a person"
                   optionFilterProp="children"
                   onChange={this.handleChange}
                   onFocus={this.handleFocus}
                   onBlur={this.handleBlur}
                   filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                 >
                   <Option value="jack">Jack</Option>
                   <Option value="lucy">Lucy</Option>
                   <Option value="tom">Tom</Option>
                 </Select>
            </div>
        )
    }
}
````