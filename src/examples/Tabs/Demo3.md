#  图标
## 有图标的标签。

````jsx
import Tabs from '@/components/Tabs'
const Tab = Tabs.Tab
export class Demo3md extends Component {
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
                              >
                            <Tab label="Tab1" icon={<i className="fa fa-apple" />}>
                                <div>
                                    我是Tab1的内容
                                </div>
                            </Tab>
                            <Tab label="disabled" icon={<i className="fa fa-android"/>}>
                                <div>
                                    我是Tab2的内容
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                )
    }
}
````