#  定义事件类型
## 最简单的下拉菜单


````jsx
import Dropdown from '@/components/Dropdown'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export class <%=component%> extends Component {
    render() {
        const menu = (
            <MenuList role="menu">
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        );
        return (
            <div>
                <Dropdown overlay={menu} trigger={'hover'}>
                    <Button>Hover Me<Icon type="angle-down"/></Button>
                </Dropdown>
            </div>
        )
    }
}
````