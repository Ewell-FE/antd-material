#  嵌套子表格
## 展示每行数据更详细的信息


````jsx
import Table from '@/components/Table'

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
````