#  基本
## 基本的时间轴。


````jsx
import Transfer from '@/components/Transfer'

export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
        value:'value',
           
        }
    }
    logs = ()=>{
    console.log(this.state.value)
    }    


    render() {
     var mockData = [];
     mockData.push({key:1,age:2,name:3,title:'content1111',disabled:true})
     mockData.push({key:2,age:3,name:1,title:'content22222',disabled:false})
     mockData.push({key:3,age:4,name:2,title:'content33333',disabled:true})
     mockData.push({key:4,age:1,name:4,title:'content4444',disabled:false})
     mockData.push({key:5,age:6,name:7,title:'content5555',disabled:true})
     mockData.push({key:6,age:7,name:8,title:'content666',disabled:true})
     mockData.push({key:7,age:8,name:9,title:'content777',disabled:false})
     mockData.push({key:8,age:9,name:10,title:'content888',disabled:false})
 
            const targetKeys = []
        return (
        <Transfer dataSource={mockData}
                  className='asadf'
                  targetKeys={[1,3]}
                  listStyle={{height:"400px"}}
                  rowKey={(a)=>a.name}
                  titles={['Source', 'Target']}
                  render={(item,allData) => item.title + '-' + item.name}
                  notFoundContent={[123,'456',]}
                  footer={[<span>sssss</span>,]}
                  operations={[<span>sssss</span>,'aaa']}
                  showSearch
                  selectedKeys={[1,2]}
        />
        )
    }
}
````