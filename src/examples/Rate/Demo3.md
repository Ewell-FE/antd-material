# 可控的
## 操作是否选择
````jsx
import Rate from 'antd-material/core/Rate'
export class <%=component%> extends Component {
  constructor(props) {
        super(props)
        this.state = {
            value:4
        }

    }
    onChange(num){
       this.setState({value:num})
    }
    render() {
        return (
            <div className='rate' style={{background:'#fff',padding:20}}>
               <Rate  value={this.state.value} onChange={(num)=>this.onChange(num)}/>
            </div>
        )
    }
}
````