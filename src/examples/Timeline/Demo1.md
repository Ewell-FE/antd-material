#  基本
## 基本的时间轴。


````jsx
import Timeline from 'antd-material/core/Timeline'

export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }


    render() {
        return (
        <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item className='aaa'>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
        )
    }
}
````