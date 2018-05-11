#  迷你版
## 迷你版的步骤条，通过设置 "small" 启用.


````jsx
import Steps from '@/components/Steps'
const Step = Steps.Step;


export class <%=component%> extends Component {

    render() {
        return (
          <Steps current={1} size="small">
                  <Step title="Finished" description="This is a description." />
                  <Step title="In Progress" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
          </Steps>
        )
    }
}
````