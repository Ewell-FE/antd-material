#  简洁风格
## 一套没有边框的简洁样式。


````jsx
import Collapse  from 'antd-material/core/Collapse'
const Panel = Collapse.Panel;
export class <%=component%> extends Component {
    render() {
        const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
        return (
            <div style={{background:'#fff',padding:'20px',borderRadius:'2px'}}>
                <Collapse defaultActiveKey={['1']} bordered={false}>
                    <Panel header="This is panel header 1" key="1">
                      <span>{text}</span>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                      <span>{text}</span>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                      <span>{text}</span>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
````