#  基本用法
## 一个简单的 loading 状态


````jsx
import Steps from '@/components/Steps'
const Step = Steps.Step;


export class <%=component%> extends Component {

    render() {
        return (
          <Steps current={1}>
                  <Step title="Finished" description="This is a description." />
                  <Step title="In Progress" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
          </Steps>
        )
    }
}
````