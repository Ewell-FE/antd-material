#  不区分大小写
##不区分大小写的 AutoComplete

````jsx
import AutoComplete from 'antd-material/core/AutoComplete'
let dataSource = [{value:'Burns Bay Road',label:'Burns Bay Road'}, {value:'Downing Street',label:'Downing Street'}, {value:'Wall Street',label:'Wall Street'}];
export class <%=component%> extends Component {

    render() {
        return (
            <AutoComplete style={{width:"200px"}} placeholder="try to type b" multi
                          dataSource={dataSource} ignoreCase
                         />
        )
    }
}
````