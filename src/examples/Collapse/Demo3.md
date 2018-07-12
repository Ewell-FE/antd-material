#  嵌套面板
## 嵌套折叠面板。


````jsx
import Collapse  from 'antd-material/core/Collapse'
const Panel = Collapse.Panel;
export class <%=component%> extends Component {
    render() {
        const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
        return (
            <Collapse>
                <Panel header="This is panel header 1" key="1">
                  <Collapse defaultActiveKey="1">
                    <Panel header="This is panel nest panel" key="1">
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
        )
    }
}
````