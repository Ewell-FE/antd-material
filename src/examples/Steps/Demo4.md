#  基本用法
## 一个简单的 loading 状态


````jsx
import Steps from '@/components/Steps'
import Icon from '@/components/Icon'

const Step = Steps.Step;


export class <%=component%> extends Component {

    render() {
        return (
          <Steps>
                 <Step status="finish" title="Login" icon={<Icon type="user" />} />
                 <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                 <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                 <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
          </Steps>
        )
    }
}
````