#  自定义面板
## 自定义各个面板的背景色、圆角和边距。

````jsx
import Collapse  from 'antd-material/core/Collapse'
const Panel = Collapse.Panel;
export class <%=component%> extends Component {
    render() {
        const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
        const customPanelStyle = {
          background: '#f7f7f7',
          borderRadius: 4,
          marginBottom: 24,
          border: 0,
          overflow: 'hidden',
        };
        return (
            <div style={{background:'#fff',padding:'20px',borderRadius:'2px'}}>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                      <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
````