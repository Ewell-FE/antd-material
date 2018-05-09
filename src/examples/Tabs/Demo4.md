#  附加内容
## 可以在页签右边添加附加操作。

````jsx
import Tabs from '@/components/Tabs'
import Button from '@/components/Button'

const Tab = Tabs.Tab
const operations = [<Button size="small">Extra Action</Button>];
export class Demo4md extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 0,
                selectnum: 0
            };
        }
    
        handleChange = (event, value) => {
            this.setState({value, selectnum: value});
    
        };

    render() {
                const {value} = this.state;
                return (
                    <div>
                        <Tabs value={value} onChange={this.handleChange} selectnum={this.state.selectnum}
                              tabBarExtraContent={operations}
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