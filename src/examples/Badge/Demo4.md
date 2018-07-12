#  独立使用
##不包裹任何元素即是独立使用，可自定样式展现。

````jsx
import Badge from 'antd-material/core/Badge'
export class <%=component%> extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={109}></Badge>
                <Badge badgeContent={0} style={{backgroundColor: '#eee', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}}></Badge>
                <Badge badgeContent={5} style={{ backgroundColor: '#87d068' }}></Badge>
            </div>
        )
    }
}
````