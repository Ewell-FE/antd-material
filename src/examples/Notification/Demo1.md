#  基本
##最简单的用法，4.5 秒后自动关闭。

````jsx
import Notification from '@/components/Notification'
import Button from '@/components/Button'
export class <%=component%> extends Component {
    openNotification(){
        Notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
    }
    render() {
        return (
            <Button onClick={this.openNotification}>Open the notification box</Button>
        )
    }
}
````