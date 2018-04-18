# 多选
## 多选，从已有条目中选择（scroll the menu）
````jsx
import Select from '@/components/Select'
const children2 = [];
for (let i = 10; i < 36; i++) {
  children2.push({ value:i.toString(36) + i,label:i.toString(36) + i});
}
export class <%=component%> extends Component {
    render() {
        return (
               <Select
                    placeholder='请选择'
                    multi={true}
                    width={300}
                    options={children2}/>
        )
    }
}
````