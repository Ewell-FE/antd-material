#  带图标的步骤条
## 通过设置 Steps.Step 的 icon 属性，可以启用自定义图标。


````jsx
import Steps from '@/components/Steps'
import Icon from '@/components/Icon'
import CircularProgress from '@material-ui/core/CircularProgress';

const Step = Steps.Step;


export class <%=component%> extends Component {

    render() {
        return (
          <Steps>
                 <Step status="finish" title="Login" icon={<Icon type="user" />} />
                 <Step status="finish" title="Verification" icon={<Icon type="address-book" />} />
                 <Step status="process" title="Pay" icon={ <CircularProgress />} />
                 <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
          </Steps>
        )
    }
}
````