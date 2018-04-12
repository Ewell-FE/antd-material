#  基本
##简单的徽章展示，当 count 为 0 时，默认显示，但是可以使用 unshowZero 修改为不显示。

````jsx
import Badge from '@/components/Badge'
export class <%=component%> extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
                <Badge badgeContent={0}>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
                <Badge badgeContent={0} unshowZero>
                    <a style={{width:'40px',height:'40px',background:'#fff'}}></a>
                </Badge>
            </div>
        )
    }
}
````