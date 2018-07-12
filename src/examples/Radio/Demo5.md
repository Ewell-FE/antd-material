#  按钮样式
## 按钮样式的单选组合。


````jsx
import Radio from 'antd-material/core/Radio'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '1',
          }
    }
     onChange = (e) => {

      }
    render() {
        return (
            <div>
                <div>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div style={{marginTop:15}}>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  disabled value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div style={{marginTop:15}}>
                      <RadioGroup onChange={this.onChange}  disabled defaultValue="a">
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