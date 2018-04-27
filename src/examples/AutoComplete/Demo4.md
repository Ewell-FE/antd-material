#  查询模式 - 不确定类目
##查询模式: 不确定类目 示例。

````jsx
import AutoComplete from '@/components/AutoComplete'
function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function searchResult(num){
    return new Array(getRandomInt(5)).join('.').split('.').map((item,i)=>({
            num,
            category:num+i,
            value:num+i,
            label:getRandomInt(200,100),
            count:getRandomInt(200,100)
    }))
}
export class <%=component%> extends Component {
    state={
        dataSource:[]
    }

    renderOption(item) {
      return (
        <div key={item.category} text={item.category}>
          {item.num} 在
          <a
            href="https://www.baidu.com"
            target="_blank"
            rel="noopener noreferrer">
            {item.category}

          </a>
          区块中
          <span className="global-search-item-count">约 {item.count} 个结果</span>
        </div>
      );
    }
    handleSearch = (value) => {
        this.setState({
          dataSource: value ? searchResult(value) : [],
        });
      }

    render() {
        return (
            <AutoComplete style={{width:"200px"}} placeholder="input here" labelKey="value" onSearch={this.handleSearch}
                          dataSource={this.state.dataSource} optionRenderer={this.renderOption}/>
        )
    }
}
````