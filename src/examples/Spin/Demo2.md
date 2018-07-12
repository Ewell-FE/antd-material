#  容器
## 放入一个容器中


````jsx
import Spin from 'antd-material/core/Spin'
import { withStyles } from '@material-ui/core/styles';

const styles2 = theme => ({
  root:{
    height:200,
    backgroundColor:'gray'
  }
})

@withStyles(styles2)
export class <%=component%> extends Component {

    render() {
        return (
           <Spin loading={true}>
                <div className={this.props.classes.root}></div>
           </Spin>
        )
    }
}
````