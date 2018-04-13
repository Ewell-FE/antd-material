#  基本
## 简单的checkbox。


````jsx
import Checkbox from '@/components/Checkbox';

export class <%=component%> extends Component {
    onChange(e){
        console.log(e.target.checked)
    }

    render() {
        return (
            <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
        )
    }
}
````