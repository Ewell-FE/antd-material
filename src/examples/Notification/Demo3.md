#  自定义图标
##图标可以被自定义。

````jsx
import Notification from 'antd-material/core/Notification'
import Button from 'antd-material/core/Button'
import Icon from 'antd-material/core/Icon'
export class <%=component%> extends Component {
    openNotification(){
        Notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <Icon type="smile-o" style={{ color: '#108ee9' }}/>,
          });
    }
    render() {
        return (
           <div>
               <Button type="Primary" onClick={this.openNotification}>Open the notification box</Button>
           </div>
        )
    }
}
````