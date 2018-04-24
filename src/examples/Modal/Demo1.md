#  基本
##第一个对话框

````jsx
import Modal from '@/components/Modal'
import Button from '@/components/Button'

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
               afterClose={()=>console.log('after close')}
               destroyOnClose={true}
             >
               <p>Some contents...</p>
               <p>Some contents...</p>
               <p>Some contents...</p>
             </Modal>
           </div>
         );
       }
}
````