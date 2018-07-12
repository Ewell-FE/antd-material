#  从浮层内关闭
## 使用 visible 属性控制浮层显示。


````jsx
import Popover from 'antd-material/core/Popover'
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
    state = {
        visible: false,
    }
    hide = () => {
        this.setState({
          visible: false,
        });
    }
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
    render() {
        return (
           <Popover
               placement='top'
               title={<div>this is title</div>}
               content={<a onClick={this.hide} style={{cursor:'pointer',color:'#1890ff'}}>Close</a>}
               trigger='click'
               visible={this.state.visible}
               >
               <Button type="Primary">click me</Button>
           </Popover>
        )
    }
}
````