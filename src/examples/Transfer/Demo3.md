#  高级用法
## 穿梭框高级用法,可配置操作文案,可定制宽高,可对底部进行自定义分别渲染,可去除箭头


````jsx
import Transfer from 'antd-material/core/Transfer'
import Button from 'antd-material/core/Button'



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
      renderFooter = () => {
        return (
          <Button
            size="small"
            style={{ float: 'right', margin: 5 }}
            onClick={this.getMock}
          >
            reload
          </Button>
        );
      }




    render() {
        return (
         <Transfer
                dataSource={this.state.mockData}
                showSearch
                listStyle={{
                  width: 250,
                  height: 300,
                }}
                hiddenArrow
                operations={['to right', 'to left']}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange}
                render={item => item.key}
                footer={[this.renderFooter(),'']}
              />
        )
    }
}
````