# 其他字符
## 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
````jsx
import Rate from 'antd-material/core/Rate'
export class <%=component%> extends Component {
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  defaultValue={2} character="好"/>
               <br />
               <Rate  defaultValue={1} character="A"/>
            </div>
        )
    }
}
````