#  三种大小
## 我们为{`<Input />`}输入框定义了三种尺寸（大、默认、小），高度分别为40px、32px和24px


````jsx
import Input from '@/components/Input'
import { withStyles } from 'material-ui/styles';
import Icon from '@/components/Icon'

const styles = theme => ({
  root:{
    "& > input,& > span":{
        width:200,
        marginTop:5
    }
  }
})

@withStyles(styles, {name: 'MuiInput-ant-demo'})
export class <%=component%> extends Component {
    constructor(props) {
            super(props)
    }

    onPressEnter(){
        console.log(this.input.value)
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Input size="small" placeholder="small size"/>
                <br />
                <Input placeholder="default size" suffix={<Icon type="search" />}/>
                <br />
                <Input size="large" placeholder="large size"/>
            </div>
        )
    }
}
````