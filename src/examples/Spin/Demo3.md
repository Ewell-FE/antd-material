#  自定义描述文案
## 自定义描述文案


````jsx
import Spin from '@/components/Spin'
import Alert from '@/components/Alert'
import { withStyles } from 'material-ui/styles';

const styles3 = theme => ({
  root:{
    height:200,
    backgroundColor:'gray'
  }
})

@withStyles(styles3)
export class <%=component%> extends Component {

    render() {
        return (
           <Spin loading={true}>
                <Alert
                      message="Alert message title"
                      description="Further details about the context of this alert."
                      type="info"
                    />
           </Spin>
        )
    }
}
````