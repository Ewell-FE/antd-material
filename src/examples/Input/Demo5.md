#  前置/后置标签
## 用于配置一些固定组合。


````jsx
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import Select from '@/components/Select'

var SelectDemo = ()=>{
    return (
        <Select
            clearable={false}
            style={{height:'100%',border:0,width:80,backgroundColor:'transparent'}}
            placeholder='请选择'
            options={[{value:"http",label:"http"},{value:"https",label:"https"}]}/>
    )
}

export class <%=component%> extends Component {
    constructor(props) {
            super(props)
            this.state={
                userName:""
            }
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close" onClick={this.emitEmpty} /> : null;
        return (
            <div>
                <Input addonbefore="Http://" addonafter=".com" defaultValue="mysite" />
                <br />
                <br />
                <Input addonbefore={<SelectDemo />} addonafter=".com" defaultValue="mysite" />
            </div>
        )
    }
}
````