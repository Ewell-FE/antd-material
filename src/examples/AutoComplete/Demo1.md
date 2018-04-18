#  基本
##基本使用。通过 dataSource 设置自动完成的数据源

````jsx
import AutoComplete from '@/components/AutoComplete'

export class <%=component%> extends Component {
     state = {
        dataSource: [],
      }

     handleSearch = (value) => {
         this.setState({
              dataSource: !value ? [] : [
                { value: value, label: value },
                { value: value + value, label: value + value },
                { value: value + value + value, label: value + value + value }
              ],
            });
      }

    render() {
        return (
            <AutoComplete style={{width:"200px"}} placeholder="input here"
                          dataSource={this.state.dataSource}
                          onSearch={this.handleSearch}/>
        )
    }
}
````