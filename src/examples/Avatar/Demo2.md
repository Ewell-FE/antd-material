#类型
##支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

````jsx
import Avatar from '@/components/Avatar'
import m1 from '@/routers/assets/image_user.png'
export class <%=component%> extends Component {
    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
               <Avatar icon="user" />
               <Avatar>U</Avatar>
               <Avatar>USERS</Avatar>
               <Avatar src={m1} />
               <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf'}}>U</Avatar>
               <Avatar icon="user" style={{ backgroundColor: '#87d068' }}/>
            </div>
        )
    }
}
````