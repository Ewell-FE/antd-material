#  基本
## 最简单的用法，浮层的大小由内容区域决定。


````jsx
import Popover from '@/components/Popover'
import Button from '@/components/Button'

export class <%=component%> extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Popover
               placement='top'
               title={<div>this is title</div>}
               content={<div>this is content</div>}
               >
               <Button type="Primary">hover me</Button>
           </Popover>
        )
    }
}
````