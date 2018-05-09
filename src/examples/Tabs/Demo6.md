#  滑动
## 可以左右滑动，能容纳更多的标签。

````jsx
import Tabs from '@/components/Tabs'
const Tab = Tabs.Tab
 
export class Demo6md extends Component {
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
                              size='small'
                              scrollable
                              scrollButtons="on"
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
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
                                                    </div>
                                                </Tab>
                                                <Tab label="Tab3">
                                                    <div>
                                                        我是Tab3的内容
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