#  竖直方向的步骤条
## 简单的竖直方向的步骤条。


````jsx
import Steps from 'antd-material/core/Steps'
const Step = Steps.Step;


export class <%=component%> extends Component {

    render() {
        return (
          <Steps current={1}  direction="vertical">
                  <Step title="Finished" description="This is a description." />
                  <Step title="In Progress" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
          </Steps>
        )
    }
}
````