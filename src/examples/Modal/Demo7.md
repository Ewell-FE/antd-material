#  信息提示
##各种类型的信息提示，只提供一个按钮用于关闭。

````jsx
import Modal from 'antd-material/core/Modal'
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
     info() {
       Modal.info({
         title: 'This is a notification message',
         content: (
           <div>
             <p>some messages...some messages...</p>
             <p>some messages...some messages...</p>
           </div>
         ),
         onOk() {},
       });
     }

     success() {
       Modal.success({
         title: 'This is a success message',
         content: 'some messages...some messages...',
       });
     }

     error() {
       Modal.error({
         title: 'This is an error message',
         content: 'some messages...some messages...',
       });
     }

     warning() {
       Modal.warning({
         title: 'This is a warning message',
         content: 'some messages...some messages...',
       });
     }
       render() {
         return (
           <div>
               <Button onClick={this.info}>Info</Button>
               <Button onClick={this.success}>Success</Button>
               <Button onClick={this.error}>Error</Button>
               <Button onClick={this.warning}>Warning</Button>
             </div>
         );
       }
}
````