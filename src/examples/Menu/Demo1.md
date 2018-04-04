#  顶部导航
## 水平的顶部导航菜单。


````jsx
import Menu from '@/components/Menu'

export class <%=component%> extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item>
                    <i className="fa fa-map" aria-hidden="true" style={{marginRight:'10px'}}></i>导航一
                </Menu.Item>
                <Menu.Item>
                    <i className="fa fa-pencil-square-o" aria-hidden="true" style={{marginRight:'10px'}}></i>导航二
                </Menu.Item>
                <Menu.SubMenu title={<span><i className="fa fa-cog" aria-hidden="true" style={{marginRight:'10px'}}></i>导航三</span>}>
                    <Menu.Item>子菜单1</Menu.Item>
                    <Menu.Item>子菜单2</Menu.Item>
                    <Menu.Item>子菜单3</Menu.Item>
                    <Menu.Item>子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item>
                   <i className="fa fa-tty" aria-hidden="true" style={{marginRight:'10px'}}></i>导航三
                </Menu.Item>
                <Menu.Item>
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'10px'}}></i>导航外链</a>
                </Menu.Item>
            </Menu>
        )
    }
}
````