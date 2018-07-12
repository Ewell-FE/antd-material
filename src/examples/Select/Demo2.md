# 多选
## 多选，从已有条目中选择（scroll the menu）
````jsx
import Select from 'antd-material/core/Select';
const Option = Select.Option

export class <%=component%> extends Component {

    state = {
        useAnim:0,
        value:['a10']
    }

    onChange = (value, options) => {
        console.log('onChange', value, options);
        this.setState({
          value,
        });
    }

    onSelect = (...args) => {
        console.log(args);
    }

    onDeselect = (...args) => {
        console.log(args);
    }

    useAnim = (e) => {
        this.setState({
          useAnim: e.target.checked,
        });
    }

    render() {

        const children = [];
        for (let i = 10; i < 36; i++) {
          children.push(
            <Option key={i.toString(36) + i} disabled={i === 10} title={"中文"+ i}>
              {'中文'+i}
            </Option>
          );
        }
        
        return (
            <div>
               <Select
                   value={this.state.value}
                   animation={this.state.useAnim ? 'slide-up' : null}
                   choiceTransitionName="rc-select-selection__choice-zoom"
                   dropdownMenuStyle={{maxHeight:200}}
                   style={{ width: 500 }}
                   multiple
                   allowClear
                   optionFilterProp="children"
                   optionLabelProp="children"
                   onSelect={this.onSelect}
                   onDeselect={this.onDeselect}
                   placeholder="please select"
                   onChange={this.onChange}
                   onFocus={() => console.log('focus')}
                   tokenSeparators={[' ', ',']}
                 >
                   {children}
                 </Select>
            </div>
        )
    }
}
````