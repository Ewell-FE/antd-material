#  异步关闭
##点击确定后异步关闭对话框，例如提交表单。

````jsx
import Modal from 'antd-material/core/Modal'
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
      state = {
         ModalText: 'Content of the modal',
         visible: false,
         confirmLoading: false,
       }
       showModal = () => {
         this.setState({
           visible: true,
         });
       }
       handleOk = () => {
         this.setState({
           ModalText: 'The modal will be closed after two seconds',
           confirmLoading: true,
         });
         setTimeout(() => {
           this.setState({
             visible: false,
             confirmLoading: false,
           });
         }, 2000);
       }
       handleCancel = () => {
         console.log('Clicked cancel button');
         this.setState({
           visible: false,
         });
       }
       render() {
         const { visible, confirmLoading, ModalText } = this.state;
         return (
           <div>
             <Button type="Primary" onClick={this.showModal}>Open</Button>
             <Modal title="Title"
               visible={visible}
               onOk={this.handleOk}
               confirmLoading={confirmLoading}
               onCancel={this.handleCancel}
             >
               <p>{ModalText}</p>
             </Modal>
           </div>
         );
       }
}
````