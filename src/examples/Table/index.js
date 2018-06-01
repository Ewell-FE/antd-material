import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
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
export class Demo1md extends Component {
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
            showQuickJumper:true
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


export class Demo3md extends Component {
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
      const expandedRowRender = (record) => {
        const columns = [
          { title: 'Date', dataIndex: 'date', key: 'date' },
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Status', key: 'state', render: () => <span>Finished</span> },
          { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
          {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
              <span className="table-operation">
                <a>Pause</a>
              </span>
            ),
          },
        ];

        const data4 = [];
        for (let i = 0; i < 3; ++i) {
          data4.push({
            key: i+'0',
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
          });
        }
        if(record.key === 0){
         return (
                  <Table
                    columns={columns}
                    rowKey='key'
                    dataSource={data4}
                    pagination={false}
                  />
                );
        }

      };
       const columns = [
           { title: 'Name', dataIndex: 'name', key: 'name' },
           { title: 'Platform', dataIndex: 'platform', key: 'platform' },
           { title: 'Version', dataIndex: 'version', key: 'version' },
           { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
           { title: 'Creator', dataIndex: 'creator', key: 'creator' },
           { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
         ];

         const data3 = [];
         for (let i = 0; i < 3; ++i) {
           data3.push({
             key: i,
             name: 'Screem',
             platform: 'iOS',
             version: '10.3.4.5654',
             upgradeNum: 500,
             creator: 'Jack',
             createdAt: '2014-12-24 23:12:00',
           });
         }

        return (
            <div className='table-example' style={{background:'#fff',padding:20}}>
                <Table columns={columns}  expandedRowRender={expandedRowRender} expandKey={this.state.expandKey}
                onExpand={(expandKeys,record)=>this.onExpand(expandKeys,record)} rowKey={'key'}  dataSource={data3}/>
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
                    <Templete code={`import Table from '@/components/Table'
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
export class Demo1md extends Component {
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
}`} github={`https://github.com/Ewell-FE/antd-material/tree/master/src/examples/Table/Demo1.md`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      可选择
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     第一列是联动的选择框。
                                </p>
                    <Templete code={`import Table from '@/components/Table'
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
            showQuickJumper:true
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
}`} github={`https://github.com/Ewell-FE/antd-material/tree/master/src/examples/Table/Demo2.md`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      嵌套子表格
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     展示每行数据更详细的信息
                                </p>
                    <Templete code={`import Table from '@/components/Table'

export class Demo3md extends Component {
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
      const expandedRowRender = (record) => {
        const columns = [
          { title: 'Date', dataIndex: 'date', key: 'date' },
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Status', key: 'state', render: () => <span>Finished</span> },
          { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
          {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
              <span className="table-operation">
                <a>Pause</a>
              </span>
            ),
          },
        ];

        const data4 = [];
        for (let i = 0; i < 3; ++i) {
          data4.push({
            key: i+'0',
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
          });
        }
        if(record.key === 0){
         return (
                  <Table
                    columns={columns}
                    rowKey='key'
                    dataSource={data4}
                    pagination={false}
                  />
                );
        }

      };
       const columns = [
           { title: 'Name', dataIndex: 'name', key: 'name' },
           { title: 'Platform', dataIndex: 'platform', key: 'platform' },
           { title: 'Version', dataIndex: 'version', key: 'version' },
           { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
           { title: 'Creator', dataIndex: 'creator', key: 'creator' },
           { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
         ];

         const data3 = [];
         for (let i = 0; i < 3; ++i) {
           data3.push({
             key: i,
             name: 'Screem',
             platform: 'iOS',
             version: '10.3.4.5654',
             upgradeNum: 500,
             creator: 'Jack',
             createdAt: '2014-12-24 23:12:00',
           });
         }

        return (
            <div className='table-example' style={{background:'#fff',padding:20}}>
                <Table columns={columns}  expandedRowRender={expandedRowRender} expandKey={this.state.expandKey}
                onExpand={(expandKeys,record)=>this.onExpand(expandKeys,record)} rowKey={'key'}  dataSource={data3}/>
            </div>
        )
    }
}`} github={`https://github.com/Ewell-FE/antd-material/tree/master/src/examples/Table/Demo3.md`}>
                        <Demo3md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}