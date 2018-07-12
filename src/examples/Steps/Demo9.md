#  竖直方向点状步骤条
## 简单的竖直方向的点状步骤条。


````jsx
import Steps from 'antd-material/core/Steps'
import Popover from 'antd-material/core/Popover'

const Step = Steps.Step;


export class <%=component%> extends Component {

    render() {
        const customDot = (dot, { Status, index }) => (
          <Popover title={<div>this is title</div>} content={<span>step {index} status: {Status}</span>}>
            {dot}
          </Popover>
        );

        return (
          <Steps current={1}  progressDot={customDot} direction="vertical">
                  <Step title="Finished" description="This is a description." />
                  <Step title="In Progress" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
          </Steps>
        )
    }
}
````