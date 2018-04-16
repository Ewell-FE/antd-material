#  位置
##可以设置通知从右上角、右下角、左下角、左上角弹出。

````jsx
import Notification from '@/components/Notification'
import Button from '@/components/Button'

const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
export class <%=component%> extends Component {

    openNotification = () => {
      Notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };
    render() {
        return (
             <div>
                <select
                  defaultValue="topRight"
                  style={{ width: 120, marginRight: 10,height:'30px',lineHeight:'30px'}}
                  onChange={(e) => {
                    Notification.config({
                      placement: e.target.value,
                    });
                  }}>
                  {options.map(val => <option key={val} value={val}>{val}</option>)}
                </select>
                <Button
                  type="Primary"
                  onClick={this.openNotification}
                >
                  Open the notification box
                </Button>
              </div>
        )
    }
}
````