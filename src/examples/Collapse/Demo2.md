#  手风琴
## 手风琴，每次只打开一个tab。默认打开第一个。


````jsx
import Collapse  from '@/components/Collapse'
const Panel = Collapse.Panel;
export class <%=component%> extends Component {
    render() {
        const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
        return (
            <Collapse defaultActiveKey='1' accordion>
                <Panel header="This is panel header 1" key="1">
                  <span>{text}</span>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <span>{text}</span>
                </Panel>
                <Panel header="This is panel header 3" key="3" >
                  <span>{text}</span>
                </Panel>
              </Collapse>
        )
    }
}
````