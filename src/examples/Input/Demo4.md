#  前缀和后缀
## 在输入框上添加前缀或后缀图标。


````jsx
import Input from 'antd-material/core/Input'
import Icon from 'antd-material/core/Icon'

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
                <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={suffix}
                    value={userName}
                    onChange={this.onChangeUserName}
                    withRef={node => this.userNameInput = node}
                />
            </div>
        )
    }
}
````