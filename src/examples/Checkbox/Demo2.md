#  不可用
## checkbox 不可用。


````jsx
import Checkbox from '@/components/Checkbox';

export class <%=component%> extends Component {

    render() {
        return (
            <div>
               <Checkbox defaultChecked={false} disabled >Checkbox</Checkbox>
               <br />
               <Checkbox defaultChecked disabled >Checkbox</Checkbox>
             </div>
        )
    }
}
````