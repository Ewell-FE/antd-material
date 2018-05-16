#  新增和关闭标签
## 只有卡片样式的页签支持新增和关闭选项。 使用 closable={true} 添加关闭。

````jsx
import Tabs from '@/components/Tabs'
const Tab = Tabs.Tab
export class Demo8md extends Component {
        constructor(props) {
            super(props);
            this.newTabIndex = 0;
 const panes = [
            {title: 'Tab 1', content: 'Content of Tab 1', key: '0',closable: true},
            {title: 'Tab 2', content: 'Content of Tab 2', key: '1',closable: true},
            {title: 'Tab 3', content: 'Content of Tab 3', key: '2'},
        ];
        this.state = {
           value: Number(panes[0].key),
           selectnum: Number(panes[0].key),
           panes
        };
        }
    
        handleChange = (event, value) => {
            this.setState({value, selectnum: value});
    
        };
        
        onClose = (e,pane) => {
             e.stopPropagation()
             const panes=this.state.panes.filter((item)=>{
                 return item.key !==pane.key
             })
             this.setState({panes})
        
        }
        
   onAdd = () => {
        const panes = this.state.panes
        const activeKey = 'newTab'+this.newTabIndex++;
        panes.push({title: 'New Tab', content: 'Content of new Tab', key: activeKey,closable: true});
        this.setState({panes})
    }

    render() {
                const {value} = this.state;
                const add = [<i className="fa fa-plus-square-o" aria-hidden="true" onClick={this.onAdd}></i>];
                return (
                    <div style={{background: '#fff'}}>
                        <Tabs value={value} onChange={this.handleChange} selectnum={this.state.selectnum}
                              type='card'
                              tabBarExtraContent={add}
                                >
                            {this.state.panes.map(pane => <Tab label={pane.title} key={pane.key}
                                                            onClose={(e) => this.onClose(e,pane)}
                                                            closable={pane.closable}>
                                                        <div>
                                                             {'我是'+ pane.title +'的内容'}
                                                        </div>
                                                </Tab>)}
                        </Tabs>
                    </div>
                )
    }
}
````