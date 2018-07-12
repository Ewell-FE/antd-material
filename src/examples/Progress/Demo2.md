#  进度圈
## 圈形的进度。
   
````jsx
import Progress  from 'antd-material/core/Progress'
export class <%=component%> extends Component {
    render() {
        return (
          <div>
             <Progress type="circle" percent={75} />
             <Progress type="circle" percent={70} status="exception" />
             <Progress type="circle" percent={100} width={80} />
           </div>
        )
    }
}
````