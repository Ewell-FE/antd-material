#  自定义描述文案
## 自定义描述文案


````jsx
import Spin from 'antd-material/core/Spin'
import Alert from 'antd-material/core/Alert'
import { withStyles } from '@material-ui/core/styles';

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
           <Spin loading={true} tip="loading">
                 <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description info Description info Description info Description info Description"
                    type="info"
                    showIcon
                 />
           </Spin>
        )
    }
}
````