# 提示框类型
## 提示框包括成功、警告、提示、错误 4中类型


````jsx
import Button from 'antd-material/core/Button'
import Message from 'antd-material/core/Message'
export class <%=component%> extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" onClick={()=>{Message.success("success!")}}>success</Button>
                <Button type="Default" onClick={()=>{Message.warn('warn~')}}>warn</Button>
                <Button type="Dashed"  onClick={()=>{Message.info('info~')}}>info</Button>
                <Button type="Danger"  onClick={()=>{Message.error('error~')}}>error</Button>
                <Button type="Primary" style={{marginLeft:10}}
                        onClick={()=>{Message.show({msg: '全写提示框！', type: 'info', timer:3000})}}>点击触发</Button>
            </div>
        )
    }
}
````