#  最后一个
## 当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点（用于时间正序排列）。当 pending 值为 false ，可用定制元件替换默认时间图点。


````jsx
import Timeline from '@/components/Timeline'
import {Icon} from 'antd'


export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    render() {
        return (
              <Timeline pending="Recording..." >
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              </Timeline>
          
        )
    }
}
````