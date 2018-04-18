#  自定义样式
##使用 style 和 className 来定义样式。

````jsx
import Notification from '@/components/Notification'
import Button from '@/components/Button'
export class <%=component%> extends Component {
    openNotification(){
        Notification.open({
            message: 'Notification Title',
           description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
           style: {
             width: 600,
             marginLeft: 335 - 600,
           },
          });
    }
    render() {
        return (
            <Button type="Primary" onClick={this.openNotification}>Open the notification box</Button>
        )
    }
}
````