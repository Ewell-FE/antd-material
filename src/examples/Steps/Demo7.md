#  步骤运行错误
## 使用 Steps 的 status 属性来指定当前步骤的状态。


````jsx
import Steps from 'antd-material/core/Steps'
const Step = Steps.Step;


export class <%=component%> extends Component {

    render() {
        return (
          <Steps current={1} status="error">
                  <Step title="Finished" description="This is a description." />
                  <Step title="In Progress" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
          </Steps>
        )
    }
}
````