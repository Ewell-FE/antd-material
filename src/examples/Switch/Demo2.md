# 禁用
## 不可操作
````jsx
/**
 * Created by zhy on 2018/3/21.
 */
import Switch from '@/components/Switch'
import Button from '@/components/Button'
export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled:true
        }
    }
    onChangeType(){
        this.setState({disabled:!this.state.disabled})
    }
    render() {
        return (
              <div>
                 <Switch disabled={this.state.disabled}/>
                 <br/>
                 <Button type="Primary" onClick={()=>this.onChangeType()}>点击我哟哟</Button>
              </div>
        )
    }
}
````