#  基本
##最简单的用法，4.5 秒后自动关闭。

````jsx
import Notification from '@/components/Notification'
import Button from '@/components/Button'
export class <%=component%> extends Component {
    openNotification(){
        console.log('====')
        Notification.open({
            message: '这是标题',
            description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
          });
    }
    render() {
        return (
            <Button onClinck={this.openNotification}>打开notification</Button>
        )
    }
}
````