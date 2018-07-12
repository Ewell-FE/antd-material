#带徽标的头像
##通常用于消息提示。

````jsx
import Avatar from 'antd-material/core/Avatar'

export class <%=component%> extends Component {
    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
               <Avatar count={9} shape="square" icon="user" />
               <Avatar dot shape="square" icon="user" />
            </div>
        )
    }
}
````