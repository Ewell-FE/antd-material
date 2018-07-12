#  内嵌菜单
## 垂直菜单，子菜单内嵌在菜单区域


````jsx
import Menu from 'antd-material/core/Menu'
import Icon from 'antd-material/core/Icon'
import Switch from 'antd-material/core/Switch'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
const MenuItemGroup = Menu.MenuItemGroup;

export class <%=component%> extends Component {
    constructor(props,context) {
        super(props)
        this.state = {
            theme:'light',
            inlineCollapsed:false
        }
    }

    handleClick (e) {
        console.log(e)
    }

    changeTheme (val) {
        this.setState({theme:val?'light':'dark'})
    }

    changeCollapsed (val) {
        this.setState({inlineCollapsed:!val})
    }

    render() {
        return (
            <div style={{width:256,textAlign:'left'}}>
                皮肤：
                <Switch  checkedChildren="开" unCheckedChildren="关" onChange={(v)=>{this.changeTheme(v)}} defaultChecked />
                <br />
                <br />
                形状：
                <Switch  checkedChildren="开" unCheckedChildren="关" onChange={(v)=>{this.changeCollapsed(v)}} defaultChecked />
               <Menu theme={this.state.theme} inlineCollapsed={this.state.inlineCollapsed} mode="inline" onClick={(e)=>{this.handleClick(e)}}>
                     <MenuItem key="-1" tip="Option 1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                     </MenuItem>
                    <SubMenu key="sub1" title={<span><Icon type="envelope-o" /><span>Navigation One</span></span>}>
                          <MenuItemGroup key="g1" title="Item 1">
                            <MenuItem key="1">Option 1</MenuItem>
                            <MenuItem key="2">Option 2</MenuItem>
                          </MenuItemGroup>
                          <MenuItemGroup key="g2" title="Item 2">
                            <MenuItem key="3">Option 3</MenuItem>
                            <MenuItem key="4">Option 4</MenuItem>
                          </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="apple" /><span>Navigation Two</span></span>}>
                          <MenuItem key="5">Option 5</MenuItem>
                          <MenuItem key="6">Option 6</MenuItem>
                          <SubMenu key="sub3" title="Submenu">
                            <MenuItem key="7">Option 7</MenuItem>
                            <MenuItem key="8">Option 8</MenuItem>
                          </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="cog" /><span>Navigation Three</span></span>}>
                          <MenuItem key="9">Option 9</MenuItem>
                          <MenuItem key="10">Option 10</MenuItem>
                          <MenuItem key="11">Option 11</MenuItem>
                          <MenuItem key="12">Option 12</MenuItem>
                    </SubMenu>
               </Menu>
            </div>
        )
    }
}
````