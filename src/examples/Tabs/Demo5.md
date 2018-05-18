#  大小
## 大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

````jsx
import Tabs from '@/components/Tabs'
import Button from '@/components/Button'
import Button from '@/components/Button'
const ButtonGroup = Button.Group
const Tab = Tabs.Tab
export class Demo5md extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            selectnum: 0,
            size: 'default'
        };
    }

    handleChange = (event, value) => {
        this.setState({value, selectnum: value});

    };
    onChange=(val)=>{
        this.setState({size: val})
    }

    render() {
        const {value,size} = this.state;
        return (
            <div style={{textAlign: 'left'}}>
                <ButtonGroup size="small" value={size} onChange={(val)=>{this.onChange(val)}}>
                    <Button value="small">small</Button>
                    <Button value="default">default</Button>
                    <Button value="large">large</Button>
                </ButtonGroup>
                <Tabs value={value} onChange={this.handleChange} selectnum={this.state.selectnum}
                      size={size}
                >
                    <Tab label="Tab1">
                        <div>
                            我是Tab1的内容
                        </div>
                    </Tab>
                    <Tab label="Tab2">
                        <div>
                            我是Tab2的内容
                        </div>
                    </Tab>
                    <Tab label="Tab3">
                        <div>
                            我是Tab3的内容
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
````