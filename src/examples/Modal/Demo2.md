#  国际化
##设置 okText 与 cancelText 以自定义按钮文字。

````jsx
import Modal from 'antd-material/core/Modal'
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
     state = { visible: false }
       showModal = () => {
         this.setState({
           visible: true,
         });
       }
       handleOk = (e) => {
         console.log(e);
         this.setState({
           visible: false,
         });
       }
       handleCancel = (e) => {
         console.log(e);
         this.setState({
           visible: false,
         });
       }
       confirm() {
         Modal.confirm({
           title: 'Confirm',
           content: 'Bla bla ...',
           okText: '确认',
           cancelText: '取消',
         });
       }
       render() {
         return (
           <div>
             <Button type="Primary" onClick={this.showModal}>Open</Button>
             <Modal
               title="Basic Modal"
               visible={this.state.visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
               okText="确认"
               cancelText="取消"
             >
               <p>Bla bla ...</p>
               <p>Bla bla ...</p>
               <p>Bla bla ...</p>
             </Modal>
             <Button onClick={this.confirm}>Confirm</Button>
           </div>
         );
       }
}
````