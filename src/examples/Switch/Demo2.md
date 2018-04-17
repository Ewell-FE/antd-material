# 禁用
## 不可操作
````jsx
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
                 <Switch disabled={this.state.disabled} defaultChecked />
                 <br/>
                 <Button type="Primary" onClick={()=>this.onChangeType()}>Toggle disbled</Button>
              </div>
        )
    }
}
````