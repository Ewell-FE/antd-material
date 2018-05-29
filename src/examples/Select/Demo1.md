# 基础
## 基础用法
````jsx
import Select from '@/components/Select'
export class <%=component%> extends Component {
    onChange = () =>{
        console.log(this)
    }
    render() {
         const children = [];
            for (let i = 10; i < 36; i++) {
                children.push({ value:i.toString(36) + i,label:i.toString(36) + i});
            }
        return (
               <Select
                    placeholder='请选择'
                    onChange={this.onChange}
                    options={children}/>
        )
    }
}
````