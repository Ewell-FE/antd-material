#  分段进度条
## 标准的进度条。
   
````jsx
import Progress  from 'antd-material/core/Progress'
export class <%=component%> extends Component {
    render() {
        return (
          <div>
               <Progress percent={60} successPercent={30} />
           </div>
        )
    }
}
````