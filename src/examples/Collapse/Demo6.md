#  隐藏箭头
## 你可以通过 showArrow={false} 隐藏 Panel 组件的箭头图标。

````jsx
import Collapse  from 'antd-material/core/Collapse'
const Panel = Collapse.Panel;
export class <%=component%> extends Component {
    render() {
        const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."

        return (
                <Collapse  defaultActiveKey={['1']}>
                    <Panel header="This is panel header 1" key="1">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2" showArrow={false}>
                      <p>{text}</p>
                    </Panel>
                </Collapse>
        )
    }
}
````