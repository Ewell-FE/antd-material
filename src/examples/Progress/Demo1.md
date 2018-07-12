#  进度条
## 标准的进度条。
   
````jsx
import Progress  from 'antd-material/core/Progress'
export class <%=component%> extends Component {
    render() {
        return (
         <div>
              <Progress percent={30} />
              <Progress percent={50} status="active" />
              <Progress percent={70} status="exception" />
              <Progress percent={100} />
              <Progress percent={50} showInfo={false} />
          </div>
        )
    }
}
````