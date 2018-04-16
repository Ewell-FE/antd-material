#  自定义图标
##图标可以被自定义。

````jsx
import Notification from '@/components/Notification'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
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