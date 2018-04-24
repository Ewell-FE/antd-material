#  自定义渲染行数据,同时对搜索文案进行设置
## 自定义渲染每个 Transfer Item,可用于渲染复杂的数据.


````jsx
import Transfer from '@/components/Transfer'



export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
        mockData: [],
        targetKeys: [],
        }
    }
componentDidMount() {
    this.getMock();
  }
  
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    
    for (var i = 0; i < 20; i++) {
      var data = {
        key: i.toString(),
        title: 'content' + (i + 1),
        description: 'description of content' + (i+1),
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData:mockData, targetKeys:targetKeys });
  }
  
 
    handleChange = (targetKeys) => {
    console.log(targetKeys)
      this.setState({ targetKeys });
    }
    
  renderItem = (item) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );

    return {
      label: customLabel, // 渲染在CheckBox中的节点
      value: item.title, // 用于匹配搜索的项
    };
  }

    render() {
        return (
          <Transfer
          className='demo4'
          lazy={false}
          searchPlaceholder={['左侧搜索','右侧搜索']}  //length为1都取index=0
          notFoundContent={['左侧无数据','右侧无数据']} // 同searchPlaceholder
                 dataSource={this.state.mockData}
                 listStyle={{
                   width: 300,
                   height: 300,
                 }}
                 targetKeys={this.state.targetKeys}
                 onChange={this.handleChange}
                 render={this.renderItem}
                 showSearch
               />
        )
    }
}
````