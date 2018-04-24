#  禁用
## 禁用某一项。

````jsx
import Tab from '@/components/Tabs'
const Tabs = Tab.Tabs
export class Demo2md extends Component {
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
        const {classes, theme} = this.props;
                const {value} = this.state;
                return (
                    <div>
                        <Tabs value={value} onChange={this.handleChange} selectnum={this.state.selectnum}
                              indicatorColor="primary"
                              textColor="primary">
                            <Tab label="Tab1">
                                <div>
                                    我是Tab1的内容
                                </div>
                            </Tab>
                            <Tab label="disabled" disabled>
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