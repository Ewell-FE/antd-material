#  基本
##头像有三种尺寸,两种形状可选

````jsx
import Avatar from '@/components/Avatar'

export class <%=component%> extends Component {
    render() {
        return (
            <div>
                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <Avatar size="large" icon="user" />
                    <Avatar icon="user" />
                    <Avatar size="small" icon="user" />
                </div>
                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <Avatar size="large" shape="square" icon="user" />
                    <Avatar shape="square" icon="user" />
                    <Avatar size="small" shape="square" icon="user" />
                </div>
            </div>
        )
    }
}
````