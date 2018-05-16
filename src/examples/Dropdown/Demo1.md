#  基本
## 最简单的下拉菜单


````jsx
import Dropdown from '@/components/Dropdown'
import {MenuItem, MenuList} from 'material-ui/Menu';
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export class <%=component%> extends Component {
    render() {
        const menu = (
            <MenuList role="menu">
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </MenuList>
        );
        return (
            <div>
                <Dropdown overlay={menu}>
                    <Button>Click Me<Icon type="angle-down"/></Button>
                </Dropdown>
            </div>
        )
    }
}
````