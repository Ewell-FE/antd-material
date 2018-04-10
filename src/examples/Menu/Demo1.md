#  顶部导航
## 水平的顶部导航菜单。


````jsx
import Menu from '@/components/Menu'

export class <%=component%> extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            current:'nav1'
        }
    }

    handleClick(obj){
        console.log(obj)
        this.setState({
            current:obj.key
        })
    }

    render() {
        return (
            <Menu mode="horizontal"
                  onClick={this.handleClick}
                  selectedKey={this.state.current}>
                <Menu.Item key="nav1">
                    <i className="fa fa-map" aria-hidden="true" style={{marginRight:'5px'}}></i>导航一
                </Menu.Item>
                <Menu.Item key="nav2">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" style={{marginRight:'5px'}}></i>导航二
                </Menu.Item>
                <Menu.SubMenu key="nav3" title={<span><i className="fa fa-cog" aria-hidden="true" style={{marginRight:'5px'}}></i>导航三--有子导航</span>}>
                    <Menu.Item key="subNav1">子菜单1</Menu.Item>
                    <Menu.Item key="subNav2"><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">子菜单2</a></Menu.Item>
                    <Menu.Item key="subNav3">子菜单3</Menu.Item>
                    <Menu.Item key="subNav4">子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="nav4">
                   <i className="fa fa-tty" aria-hidden="true" style={{marginRight:'5px'}}></i>导航四
                </Menu.Item>
                <Menu.Item key="nav5">
                   <a href="//www.baidu.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'5px'}}></i>导航外链</a>
                </Menu.Item>
            </Menu>
        )
    }
}
````