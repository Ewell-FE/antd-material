#  基本
## 最简单的用法，浮层的大小由内容区域决定。


````jsx
import Popover from '@/components/Popover'
import Button from '@/components/Button'
import Test from '@/components/Popover/test'
export class <%=component%> extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
           <Popover
               placement='top'
               title={<div>this is title</div>}
               content={<div>this is content</div>}
               >
               <Button type="Primary">hover me</Button>
           </Popover>
           <Popover
              placement='top'
              title={<div>this is title</div>}
              content={<div>原生元素无需withRef属性</div>}
              >
              <button type="Primary">原生 hover me</button>
          </Popover>
          <Popover
              placement='top'
              title={<div>this is title</div>}
              content={<div>自定义组件需要withRef属性</div>}
              >
              <Test>test hover me</Test>
          </Popover>
        </div>
        )
    }
}
````