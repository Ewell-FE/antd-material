#  遮罩
##点击遮罩无法关闭

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
       render() {
         return (
           <div>
             <Button type="Primary" onClick={this.showModal}>Open</Button>
             <Modal
               title="Basic Modal"
               visible={this.state.visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
               maskClosable={false}
             >
               <p>Bla bla ...</p>
               <p>Bla bla ...</p>
               <p>Bla bla ...</p>
             </Modal>
           </div>
         );
       }
}
````