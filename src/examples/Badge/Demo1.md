#  基本
##简单的徽章展示，当 count 为 0 时，默认显示，但是可以使用 unshowZero 修改为不显示。

````jsx
import Badge from '@/components/Badge'
export class <%=component%> extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10}>
                    <span style={{width:'40px',height:'40px',background:'#fff'}}></span>
                </Badge>
                <Badge badgeContent={0}>
                    <span style={{width:'40px',height:'40px',background:'#fff'}}></span>
                </Badge>
                <Badge badgeContent={0} unshowZero>
                    <span style={{width:'40px',height:'40px',background:'#fff'}}></span>
                </Badge>
            </div>
        )
    }
}
````