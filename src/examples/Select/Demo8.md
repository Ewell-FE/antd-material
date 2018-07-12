# 三种大小
## 三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。
````jsx
import Select from 'antd-material/core/Select';
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
                <Select size="small" defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="ewell">ewell</Option>
                </Select>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="ewell">ewell</Option>
                </Select>
                <Select size="large" defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="ewell">ewell</Option>
                </Select>
            </div>
        )
    }
}
````