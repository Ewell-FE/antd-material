#  自定义按钮
##自定义关闭按钮的样式和文字

````jsx
import Notification from '@/components/Notification'
import Button from '@/components/Button'

export class <%=component%> extends Component {
    close(key){
      console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
    };
    btnClick() {
       console.log('go on')
    };
    openNotification(){
      let that = this;
      const key = "open"+ Date.now();
      Notification.open({
        message: 'Notification Title',
        description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        key,
        cancelText:'Confirm',
        cancelBtnStyle:{color:'#fff',background:'#abcdef'},
        onClose: that.close,
        onCancel:that.btnClick
      });
    };

    render() {
        return (
            <Button type="Primary" onClick={()=>this.openNotification()}>Open the notification box</Button>
        )
    }
}
````