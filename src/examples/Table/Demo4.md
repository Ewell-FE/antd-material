#  可选择
## 第一列是联动的选择框。


````jsx
import Table from 'antd-material/core/Table'
let data4 = [{
    key: '1',
    name: '胡彦斌1',
    age: 32,
    address: '西湖区湖底公园1号'
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
            current:1,
            pageSize:5,
            selectedRowKeys:[]
        }

    }
    onChange=page=>{
        this.setState({current:page})
    }
    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
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
        const pagination  = {
            current:this.state.current,
            pageSize:5,
            total:6,
            onChange:this.onChange,
            showQuickJumper:true
        }
        const rowSelection = {
            selectedRowKeys:this.state.selectedRowKeys,
            onChange: this.onSelectChange
        };
        return (
            <div className='table-example' style={{background:'#fff',padding:20}}>
                <Table bordered columns={columns} rowKey={'key'}  pagination={pagination}  dataSource={data4}/>
            </div>
        )
    }
}
````