#  自定义点状步骤条
## 为点状步骤条增加自定义展示。

````jsx
import Steps from '@/components/Steps'
import Popover from '@/components/Popover'

const Step = Steps.Step;


export class <%=component%> extends Component {

    render() {
        const customDot = (dot, { Status, index }) => (
          <Popover title={<div>this is title</div>} content={<span>step {index} status: {Status}</span>}>
            {dot}
          </Popover>
        );

        return (
          <Steps current={1}  progressDot={customDot}>
                  <Step title="Finished" description="This is a description." />
                  <Step title="In Progress" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
          </Steps>
        )
    }
}
````