# 基础
## 基础用法
````jsx
import Select from 'antd-material/core/Select';
const Option = Select.Option

export class <%=component%> extends Component {
    state = {
        value:undefined
    }
    handleChange = (val) =>{
        console.log(val)
    }
    onChange = (value, option)=> {
        console.log(option)
        this.setState({
          value
        });
    }
    render() {
        return (
            <div>
                   <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="jack">杰克</Option>
                        <Option value="ls">露丝</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="ewell">ewell</Option>
                    </Select>
                   <Select defaultValue="lucy" style={{ width: 120, marginLeft: 20 }} disabled>
                        <Option value="lucy">Lucy</Option>
                   </Select>
                   <Select onChange={this.onChange}
                        value={this.state.value}
                        style={{ width: 120, marginLeft: 20 }}
                        defaultActiveFirstOption={false}
                        placeholder={'请选择'}
                        options={[{value:'jack',label:'杰克'},{value:'alei',label:'阿磊'}]}>
                  </Select>
            </div>
        )
    }
}
````