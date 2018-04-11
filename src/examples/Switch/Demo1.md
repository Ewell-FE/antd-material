# 基本
## 最简单的用法
````jsx
import Switch from '@/components/Switch'
export class <%=component%> extends Component {
 constructor(props){
        super(props)
        this.state={
            value:false
        }
    }
    onChangeType(checked){
        this.setState({value:checked})
    }
        render() {
            return (
                <div>
                    <Switch  size='small'/>
                    <br/>
                    <Switch defaultChecked={true}/>
                    <br/>
                    <Switch onChange={(checked)=>this.onChangeType(checked)} checked={this.state.value}/>
                </div>

            )
        }
}
````