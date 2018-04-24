#  自定义页脚
##更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。
##不需要默认确定取消按钮时，你可以把 footer 设为 null。

````jsx
import Modal from '@/components/Modal'
import Button from '@/components/Button'

export class <%=component%> extends Component {
      state = {
         loading: false,
         visible: false,
       }
       showModal = () => {
         this.setState({
           visible: true,
         });
       }
       handleOk = () => {
         this.setState({ loading: true });
         setTimeout(() => {
           this.setState({ loading: false, visible: false });
         }, 3000);
       }
       handleCancel = () => {
         this.setState({ visible: false });
       }
       render() {
         const { visible, loading } = this.state;
         return (
           <div>
             <Button type="Primary" onClick={this.showModal}>
               Open
             </Button>
             <Modal
               visible={visible}
               title="Title"
               onOk={this.handleOk}
               onCancel={this.handleCancel}
               footer={[
                 <Button key="back" onClick={this.handleCancel}>Return</Button>,
                 <Button type="Primary" key="submit" loading={loading} onClick={this.handleOk}>
                   Submit
                 </Button>,
               ]}
             >
               <p>Some contents...</p>
               <p>Some contents...</p>
               <p>Some contents...</p>
               <p>Some contents...</p>
               <p>Some contents...</p>
             </Modal>
           </div>
         );
       }
}
````