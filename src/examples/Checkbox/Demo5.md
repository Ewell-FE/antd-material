#  全选
## 在实现全选效果时，你可能会用到 indeterminate 属性。


````jsx
import Checkbox from '@/components/Checkbox';

const exampleoptions=['Red','Yellow','Blue'];
const checkedList=['Red','Yellow'];
export class <%=component%> extends Component {
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onCheckAllChange=this.onCheckAllChange.bind(this);
        this.state={
            indeterminate:true,
            checkAll:false,
            checkedList:checkedList
        }
    }

    onChange(checkedList){
        this.setState({
            checkedList,
            indeterminate:!!checkedList.length 
                            && (checkedList.length < exampleoptions.length),
            checkAll:checkedList.length===exampleoptions.length
        })
    }

    onCheckAllChange(e){
        this.setState({
            checkedList: e.target.checked ? exampleoptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        })
    }

    render() {
        return (
            <div style={{width:'300px',margin:'0 auto',textAlign:'left'}}>
                <div style={{borderBottom:'1px solid #d9d9d9',paddingBottom:'5px'}}>
                    <Checkbox 
                        onChange={this.onCheckAllChange} 
                        indeterminate={this.state.indeterminate}
                        checked={this.state.checkAll}
                    >
                    Check All
                    </Checkbox>
                </div>
                <Checkbox.Group 
                    options={exampleoptions}
                    value={this.state.checkedList}
                    onChange={this.onChange}/>
            </div>
            
        )
    }
}
````