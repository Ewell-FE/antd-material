#  按钮组合
## 可以将多个 Button 放入 Button.Group 的容器中。按钮组的size会覆盖button的size

````jsx
import Button from '@/components/Button'
import Icon from '@/components/Icon'
const ButtonGroup = Button.Group

export class <%=component%> extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:'small'
        }
    }

    render() {
        return (
            <ButtonGroup size={this.state.value} value={this.state.value} onChange={(val)=>{this.setState({value:val})}}>
                <Button value="small">small</Button>
                <Button value="default">default</Button>
                <Button value="large">large</Button>
            </ButtonGroup>
        )
    }
}
````