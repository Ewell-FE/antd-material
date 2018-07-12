#  确认对话框
##使用 confirm() 可以快捷地弹出确认框。

````jsx
import Modal from 'antd-material/core/Modal'
import Button from 'antd-material/core/Button'
const confirm = Modal.confirm;

export class <%=component%> extends Component {
     showConfirm() {
       confirm({
         title: 'Do you Want to delete these items?',
         content: 'Some descriptions',
         onOk() {
           console.log('OK');
         },
         onCancel() {
           console.log('Cancel');
         },
       });
     }

     showDeleteConfirm() {
       confirm({
         title: 'Are you sure delete this task?',
         content: 'Some descriptions',
         okText: 'Yes',
         okType: 'Danger',
         cancelText: 'No',
         onOk() {
           console.log('OK');
         },
         onCancel() {
           console.log('Cancel');
         },
       });
     }
       render() {
         return (
           <div>
               <Button onClick={this.showConfirm}>
                 Confirm
               </Button>
               <Button type="Dashed" onClick={this.showDeleteConfirm}>
                 Delete
               </Button>
             </div>
         );
       }
}
````