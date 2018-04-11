#  大小
## 大中小三种组合，可以和表单输入框进行对应配合


````jsx
import Radio from '@/components/Radio'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state = {

          }
    }
     onChange = (e) => {

      }
    render() {
        return (
            <div>
                <div>
                      <RadioGroup onChange={this.onChange}  size='large' defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
                      <RadioGroup onChange={this.onChange}  defaultValue="a">
                             <RadioButton  value="a">Hangzhou</RadioButton>
                             <RadioButton  value="b">Shanghai</RadioButton>
                             <RadioButton value="c">Beijing</RadioButton>
                             <RadioButton value="d">Chengdu</RadioButton>
                      </RadioGroup>
                  </div>
                  <div>
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