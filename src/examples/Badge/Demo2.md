#  封顶数字
##超过 overflowCount 的会显示为 +。

````jsx
import Badge from 'antd-material/core/Badge'
export class <%=component%> extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10} overflowCount={99}>
                    <span style={{width:'40px',height:'40px',background:'#eee'}}></span>
                </Badge>
                <Badge badgeContent={100} overflowCount={99}>
                    <span style={{width:'40px',height:'40px',background:'#eee'}}></span>
                </Badge>
            </div>
        )
    }
}
````