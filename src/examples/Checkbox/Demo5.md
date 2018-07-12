#  全选
## 在实现全选效果时，你可能会用到 indeterminate 属性


````jsx
import Checkbox from 'antd-material/core/Checkbox';
const CheckboxGroup = Checkbox.Group;

const plainOptions5 = ['Apple', 'Pear', 'Orange'];

export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkedList: ['Apple', 'Orange'],
            indeterminate: true,
            checkAll: false,
        }
    }
    onChange = (checkedList) => {
        this.setState({
          checkedList,
          indeterminate: !!checkedList.length && (checkedList.length < plainOptions5.length),
          checkAll: checkedList.length === plainOptions5.length,
        });
      }
    onCheckAllChange = (e) => {
        this.setState({
          checkedList: e.target.checked ? plainOptions5 : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
    }
    render() {
        return (
            <div>
                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                     <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                         checked={this.state.checkAll}>
                             Check all
                           </Checkbox>
                </div>
                <br />
                <CheckboxGroup options={plainOptions5} value={this.state.checkedList} onChange={this.onChange} />
            </div>
        )
    }
}
````