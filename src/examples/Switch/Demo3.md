# 字符
## 可以添加文字和图标
````jsx
/**
 * Created by zhy on 2018/3/21.
 */
import Switch from '@/components/Switch'
export class <%=component%> extends Component {
        render(){
            return (
                <div>
                     <Switch  checkedChildren="1" unCheckedChildren="0" />
                     <br/>
                     <Switch  checkedChildren="开" unCheckedChildren="关" />
                     <br/>
                     <Switch  checkedChildren={<i className='fa fa-check'></i>} unCheckedChildren={<i className='fa fa-times'></i>} />
                </div>
            )
        }
}
````