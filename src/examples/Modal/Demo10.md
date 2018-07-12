#  自定义位置
##您可以直接使用 style.top 或配合其他样式来设置对话框位置。

````jsx
import Modal from 'antd-material/core/Modal'
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
       state = {
          modal1Visible: false,
          modal2Visible: false,
        }
        setModal1Visible(modal1Visible) {
          this.setState({ modal1Visible });
        }
        setModal2Visible(modal2Visible) {
          this.setState({ modal2Visible });
        }
        render() {
          return (
            <div>
              <Button type="Primary" onClick={() => this.setModal1Visible(true)}>Display a modal dialog at 20px to Top</Button>
              <Modal
                title="20px to Top"
                style={{ top: 20 }}
                visible={this.state.modal1Visible}
                onOk={() => this.setModal1Visible(false)}
                onCancel={() => this.setModal1Visible(false)}
              >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
              <br /><br />
              <Button type="Primary" onClick={() => this.setModal2Visible(true)}>Vertically centered modal dialog</Button>
              <Modal
                title="Vertically centered modal dialog"
                wrapClassName="vertical-center-modal"
                verticalAlign
                visible={this.state.modal2Visible}
                onOk={() => this.setModal2Visible(false)}
                onCancel={() => this.setModal2Visible(false)}
              >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
            </div>
          );
        }
}
````