#  新增和关闭标签
## 只有卡片样式的页签支持新增和关闭选项。 使用 closable={true} 添加关闭。

````jsx
import Tabs from '@/components/Tabs'
const Tab = Tabs.Tab
const add = [<i className="fa fa-plus-square-o" aria-hidden="true"></i>];
export class Demo8md extends Component {
        constructor(props) {
            super(props);
 const panes = [
            {title: 'Tab 1', content: 'Content of Tab 1', key: '1',closable: true},
            {title: 'Tab 2', content: 'Content of Tab 2', key: '2',closable: true},
            {title: 'Tab 3', content: 'Content of Tab 3', key: '3'},
        ];
        this.state = {
            value: 0,
            selectnum: 0,
            panes
        };
        }
    
        handleChange = (event, value) => {
            this.setState({value, selectnum: value});
    
        };

    render() {
                const {value} = this.state;
                return (
                    <div style={{background: '#fff'}}>
                        <Tabs value={value} onChange={this.handleChange} selectnum={this.state.selectnum}
                              indicatorColor="primary"
                              type='card'
                              tabBarExtraContent={add}
                              textColor="primary">
                            {this.state.panes.map(pane => <Tab label={pane.title} key={pane.key}
                                                                                       closable={pane.closable}>
                                                        <div>
                                                            我是Tab1的内容
                                                        </div>
                                                </Tab>)}
                        </Tabs>
                    </div>
                )
    }
}
````