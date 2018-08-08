#  确认对话框
##使用 confirm() 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭

````jsx
import Modal from 'antd-material/core/Modal'
import Button from 'antd-material/core/Button'
const confirm = Modal.confirm;

export class <%=component%> extends Component {
     showConfirm() {
       confirm({
           title: 'Do you want to delete these items?',
           content: 'When clicked the OK button, this dialog will be closed after 1 second',
           onOk() {
             return new Promise((resolve, reject) => {
               setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
             }).catch(() => console.log('Oops errors!'));
           },
           onCancel() {},
         });
     }
       render() {
         return (
           <div>
               <Button onClick={this.showConfirm}>
                 Confirm
               </Button>
             </div>
         );
       }
}
````