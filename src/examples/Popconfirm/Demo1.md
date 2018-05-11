#  基本
## 最简单的用法。


````jsx
import Popconfirm from '@/components/Popconfirm'
import Message from '@/components/Message'
import Button from '@/components/Button'
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
         <Popconfirm onConfirm={this.confirm} onCancel={this.cancel} title="Are you sure delete this task?" okText="Yes" cancelText="No">
            <Button type='Primary'>Delete</Button>
          </Popconfirm>
        )
    }
}
````