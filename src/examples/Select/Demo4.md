# 分组
## 用 OptGroup 进行选项分组。
````jsx
import Select from '@/components/Select';
const Option = Select.Option
const OptGroup = Select.OptGroup

export class <%=component%> extends Component {

    handleChange = (val)=> {
        console.log(val)
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
                   defaultValue="lucy"
                   style={{ width: 200 }}
                   onChange={this.handleChange}
                 >
                   <OptGroup label="Manager">
                     <Option value="jack">Jack</Option>
                     <Option value="lucy">Lucy</Option>
                   </OptGroup>
                   <OptGroup label="Engineer">
                     <Option value="Vicky">Vicky</Option>
                   </OptGroup>
                </Select>
            </div>
        )
    }
}
````