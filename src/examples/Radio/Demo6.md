#  大小
## 大中小三种组合，可以和表单输入框进行对应配合


````jsx
import Radio from 'antd-material/core/Radio'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
export class <%=component%> extends Component {
        constructor(props){
            super(props)
            this.state={value:'a'}
        }
        onChange=(e)=>{
            console.log(e.target.value)
            this.setState({value:e.target.value})
        }
    render() {
        return (
            <div>
                <div>
                      <RadioGroup onChange={this.onChange}  size='large' value={this.state.value}>
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div style={{marginTop:15}}>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div style={{marginTop:15}}>
                      <RadioGroup onChange={this.onChange}  size='small' defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
              </div>
        )
    }
}
````