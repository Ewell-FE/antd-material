#  自定义文字格式
## format 属性指定格式。
   
````jsx
import Progress  from '@/components/Progress'

export class <%=component%> extends Component {
    render() {
        return (
          <div>
               <Progress type="circle" percent={100} format={() => 'Done'} />
           </div>
        )
    }
}
````