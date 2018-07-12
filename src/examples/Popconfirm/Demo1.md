#  基本
## 最简单的用法。


````jsx
import Popconfirm from 'antd-material/core/Popconfirm'
import Message from 'antd-material/core/Message'
import Button from 'antd-material/core/Button'
export class <%=component%> extends Component {
    confirm=(e)=> {
      console.log(e);
      Message.success('Click on Yes');
    }

    cancel=(e)=> {
      console.log(e);
      Message.error('Click on No');
    }
    render() {
        return (
         <Popconfirm onConfirm={this.confirm} onCancel={this.cancel} title="Are you sure delete this task?">
            <Button type='Primary'>Delete</Button>
          </Popconfirm>
        )
    }
}
````