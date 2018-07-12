#  基本
## 最简单的用法。


````jsx
import Affix from 'antd-material/core/Affix'
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
    render() {
        return (
             <div>
                <Affix target={()=>document.getElementsByTagName('main')[0]}>
                    <Button type="Primary">Affix top</Button>
                </Affix>
                <br />
                <Affix offsetBottom={0} target={()=>document.getElementsByTagName('main')[0]}>
                    <Button type="Primary">Affix bottom</Button>
                </Affix>
             </div>
        )
    }
}
````