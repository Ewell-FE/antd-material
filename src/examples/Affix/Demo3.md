#  固定状态改变的回调
## 可以获得是否固定的状态。


````jsx
import Affix from 'antd-material/core/Affix'
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
    render() {   
        return (
            <Affix offsetTop={150} onChange={affixed => console.log(affixed)} target={()=>document.getElementsByTagName('main')[0]}>
                <Button>150px to affix top</Button>
            </Affix>
        )
    }
}
````