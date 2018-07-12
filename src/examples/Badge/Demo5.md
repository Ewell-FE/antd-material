#  讨嫌的小红点
##没有具体的数字。

````jsx
import Badge from 'antd-material/core/Badge'
import Icon from 'antd-material/core/Icon'
export class <%=component%> extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={10} dot>
                    <Icon type="user"/>
                </Badge>
                <Badge badgeContent={0} dot>
                    <a style={{color:'#108ee9'}}>Link something</a>
                </Badge>
            </div>
        )
    }
}
````