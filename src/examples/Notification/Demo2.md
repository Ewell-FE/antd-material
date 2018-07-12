#  带有图标的通知提醒框
##通知提醒框左侧有图标

````jsx
import Notification from 'antd-material/core/Notification'
import Button from 'antd-material/core/Button'
export class <%=component%> extends Component {
    openNotificationWithIcon(type){
        Notification[type]({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
    }
    render() {
        return (
           <div>
               <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
               <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
               <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
               <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
           </div>
        )
    }
}
````