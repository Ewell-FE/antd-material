#  基本用法
## 最基本的用法,展示了dataSource,targetKeys,每行的渲染函数 render 以及回调函数 onChange onSelectChange onScroll 的用法。


````jsx
import Transfer from '@/components/Transfer'


export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
        targetKeys:[],
        selectedKeys:[],
        mockData:[],
        }
    }
    
    

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  }

  handleSelectChange = (type,part,e,data,sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  }

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  }




componentDidMount(){
     const mockData = []
        for(let i = 0; i < 20;i++){
            mockData.push({
                key:i.toString(),
                title:'contnet' + (i+1),
                description: 'description of content' + (i+1),
                disabled: i % 3 < 1,
            })
        }   
        const targetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
     this.setState({mockData:mockData,targetKeys:targetKeys})
}



    render() {
    const state = this.state
   
        return (
        <Transfer dataSource={state.mockData}
        targetKeys={state.targetKeys}
                  titles={['Source', 'Target']}
                  selectedKeys={state.selectedKeys}
                  onChange={this.handleChange}
                  onSelectChange={this.handleSelectChange}
                  onScroll={this.handleScroll}
                  render={item => item.title}
        />
        )
    }
}
````