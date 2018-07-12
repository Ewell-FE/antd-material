#  前置/后置标签
## 用于配置一些固定组合。


````jsx
import Input from 'antd-material/core/Input'
import Icon from 'antd-material/core/Icon'
import Select from 'antd-material/core/Select'

var SelectDemo = ()=>{
    return (
        <Select
            style={{width:80}}
            placeholder='请选择'
            options={[{value:"http",label:"http"},{value:"https",label:"https"}]}/>
    )
}

var LastDemo = ()=>{
    return (
        <Select
            style={{width:50}}
            placeholder='请选择'
            options={[{value:".com",label:".com"},{value:".io",label:".io"}]}/>
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
        return (
            <div>
                <Input addonbefore="Http://" addonafter=".com" defaultValue="mysite" />
                <br />
                <br />
                <Input addonbefore={<SelectDemo />} addonafter={<LastDemo />} defaultValue="mysite" />
            </div>
        )
    }
}
````