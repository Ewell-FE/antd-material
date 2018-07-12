#  基本
## 最简单的下拉菜单默认click触发


````jsx
import Dropdown from 'antd-material/core/Dropdown'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from 'antd-material/core/Button'
import Icon from 'antd-material/core/Icon'

export class <%=component%> extends Component {
    render() {
        const menu = (
            <MenuList role="menu">
                <MenuItem onClick={(e)=>{this.menu.handleClose(e)}}>Profile</MenuItem>
                <MenuItem onClick={(e)=>{this.menu.handleClose(e)}}>My account</MenuItem>
                <MenuItem onClick={(e)=>{this.menu.handleClose(e)}}>Logout</MenuItem>
            </MenuList>
        );
        return (
            <div>
                <Dropdown overlay={menu} withRef={(menu)=>{this.menu = menu}}>
                    <Button>Click Me<Icon type="angle-down"/></Button>
                </Dropdown>
            </div>
        )
    }
}
````