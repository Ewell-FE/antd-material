#  基本
## 简单的表格，最后一列是各种操作。


````jsx
import Table from '@/components/Table'
let data1 = [{
    key: '1',
    name: '胡彦斌1',
    age: 32,
    address: '西湖区湖底公园1号',
     children:[{
              key: '7',
              name: '胡彦祖7',
              age: 88,
              address: '西湖区湖底公园2号',
               children:[{
                            key: 'ss',
                            name: 'fff',
                            age: 88,
                            address: '混蛋混蛋'
                            }]
              }]
}, {
    key: '2',
    name: '胡彦祖2',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '3',
    name: '胡彦祖3',
    age: 42,
    address: '西湖区湖底公园1号'
    ,children:[{
                  key: '9',
                  name: 'aaa',
                  age: 88,
                  address: 'hhh'
                  }]
}, {
    key: '4',
    name: '胡彦祖4',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '5',
    name: '胡彦祖5',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '6',
    name: '胡彦祖6',
    age: 42,
    address: '西湖区湖底公园1号'
}]
export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            expandKey:[]
        }
    }
    onExpand(expandKeys,record){
        this.setState({
            expandKey:expandKeys
        })
    }
    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <div><span style={{marginRight:5}}>编辑</span><span>删除</span></div>
            ),
        }];
        return (
            <div className='table-example' style={{background:'#fff',padding:20}}>
                <Table columns={columns} expandKey={this.state.expandKey}
                onExpand={(expandKeys,record)=>this.onExpand(expandKeys,record)} rowKey={'key'}  dataSource={data1}/>
            </div>
        )
    }
}
````