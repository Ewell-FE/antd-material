#  带搜索框
## 带搜索框的穿梭框,可以自定义搜索函数


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
  
    filterOption = (inputValue, option) => {
      return option.description.indexOf(inputValue) > -1;
    }
    handleChange = (targetKeys) => {
    console.log(targetKeys)
      this.setState({ targetKeys });
    }


    render() {
        return (
        <Transfer
                dataSource={this.state.mockData}
                showSearch
                filterOption={this.filterOption}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange}
                render={item => item.title}
              />
        )
    }
}
````