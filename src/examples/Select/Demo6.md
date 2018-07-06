# 自动分词
## 试下复制 露西,杰克 到输入框里。只在 tags 和 multiple 模式下可用。
````jsx
import Select from '@/components/Select';
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
                   dropdownMenuStyle={{maxHeight:200}}
                   style={{ width: 500 }}
                   tags
                   allowClear
                   onSelect={this.onSelect}
                   onDeselect={this.onDeselect}
                   placeholder="please select"
                   onChange={this.onChange}
                   tokenSeparators={[' ', ',']}
                 >
                   {children}
                 </Select>
            </div>
        )
    }
}
````