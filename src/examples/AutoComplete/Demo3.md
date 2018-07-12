#  查询模式 - 确定类目
##查询模式: 确定类目 示例。

````jsx
        let data = [{
          title: '话题',
          value: '话题',
          lable: '话题',
        }, {
          title: '问题',
           value: '问题',
           lable: '问题',
        }, {
          title: '文章',
          value: '文章',
          lable: '文章',
        }];
import AutoComplete from 'antd-material/core/AutoComplete'
export class <%=component%> extends Component {
     options(options){
        return (
            <div key={options.title}>
                    <span>
                      {options.title}
                      <a
                        style={{ float: 'right' }}
                        href="https://www.google.com/search?q=antd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >更多
                      </a>
                    </span>
                </div>
            )

     }
    render() {
        return (
            <AutoComplete style={{width:"200px"}} placeholder="input here"
                          dataSource={data}  optionRenderer={this.options}/>
        )
    }
}
````