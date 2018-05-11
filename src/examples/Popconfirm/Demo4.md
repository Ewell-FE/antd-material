#  条件触发
## 可以判断是否需要弹出。


````jsx
import Popconfirm from '@/components/Popconfirm'
import Switch from '@/components/Switch'
import Message  from '@/components/Message '

export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
                visible: false,
                condition: true,
            }
    }

    changeCondition = (value) => {
       this.setState({ condition: value });
    }
    confirm = () => {
       this.setState({ visible: false });
       Message.success('Next step.');
    }
    cancel = () => {
       this.setState({ visible: false });
       Message.error('Click on cancel.');
    }
    handleVisibleChange = (visible) => {
       if (!visible) {
         this.setState({ visible });
         return;
       }
       console.log(this.state.condition);
       if (this.state.condition) {
         this.confirm();
       } else {
         this.setState({ visible });
       }
    }
    render() {
        return (
            <div>
                <Popconfirm
                    title="Are you sure delete this task?"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="#">Delete a task</a>
                </Popconfirm>
                <br />
                <br />
                Whether directly execute：<Switch defaultChecked onChange={this.changeCondition} />
            </div>
        )
    }
}
````