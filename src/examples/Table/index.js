import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Table from '@/components/Table'



/**
 * Created by zhy on 2018/3/21.
 */
let data1 = [{
    key: '1',
    name: '胡彦斌1',
    age: 32,
    address: '西湖区湖底公园1号',
     children:[{
              key: '7',
              name: '胡彦祖7',
              age: 88,
              address: '西湖区湖底公园2号'
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
export class Demo1md extends Component {
    constructor(props){
        super(props)

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
                <Table columns={columns} rowKey={'key'}  dataSource={data1}/>
            </div>
        )
    }
}

/**
 * Created by zhy on 2018/3/21.
 */
let data2 = [{
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
export class Demo2md extends Component {
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
        }
        const rowSelection = {
            selectedRowKeys:this.state.selectedRowKeys,
            onChange: this.onSelectChange
        };
        return (
            <div className='table-example' style={{background:'#fff',padding:20}}>
                <Table columns={columns} rowKey={'key'} rowSelection={rowSelection} pagination={pagination}  dataSource={data2}/>
            </div>
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      基本
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     简单的表格，最后一列是各种操作。
                                </p>
                    <Templete code={`/**
 * Created by zhy on 2018/3/21.
 */
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
              address: '西湖区湖底公园2号'
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
export class Demo1md extends Component {
    constructor(props){
        super(props)

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
                <Table columns={columns} rowKey={'key'}  dataSource={data1}/>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      可选择
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     第一列是联动的选择框。
                                </p>
                    <Templete code={`/**
 * Created by zhy on 2018/3/21.
 */
import Table from '@/components/Table'
let data2 = [{
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
export class Demo2md extends Component {
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
        }
        const rowSelection = {
            selectedRowKeys:this.state.selectedRowKeys,
            onChange: this.onSelectChange
        };
        return (
            <div className='table-example' style={{background:'#fff',padding:20}}>
                <Table columns={columns} rowKey={'key'} rowSelection={rowSelection} pagination={pagination}  dataSource={data2}/>
            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}