#  顶部导航
## 水平的顶部导航菜单。


````jsx
import Menu from 'antd-material/core/Menu'
import Icon from 'antd-material/core/Icon'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
const Divider = Menu.Divider
const MenuItemGroup = Menu.MenuItemGroup;

export class <%=component%> extends Component {

    constructor(props,context) {
        super(props)
        this.state = {
            current:'mail'
        }
    }

    handleClick(e){
        console.log(e)
        this.setState({current:e.key})
    }

    render() {
        return (
           <Menu
                mode="horizontal"
                onClick={(e)=>{this.handleClick(e)}}
                selectedKeys={[this.state.current]}
                >
                <MenuItem key="mail"><Icon type="envelope-o"/>Navigation One</MenuItem>
                <MenuItem key="app"  disabled><Icon type="apple" />Navigation Tow</MenuItem>
                <SubMenu title={<span><Icon type="cog" />Navigation Three - Submenu</span>}>
                      <MenuItemGroup title="Item 1">
                        <MenuItem key="setting:1">Option 1</MenuItem>
                        <MenuItem key="setting:2">Option 2</MenuItem>
                      </MenuItemGroup>
                      <MenuItemGroup title="Item 2">
                        <MenuItem key="setting:3">Option 3</MenuItem>
                        <MenuItem key="setting:4">Option 4</MenuItem>
                      </MenuItemGroup>
                </SubMenu>
                <MenuItem key="link"><a href="http://ewell-fe.github.io" target="_blank" rel="noopener noreferrer">antd-material - Link</a></MenuItem>
           </Menu>
        )
    }
}
````