#  内嵌导航
## 垂直菜单，子菜单内嵌在菜单区域。


````jsx
import Menu from '@/components/Menu'

export class <%=component%> extends Component {
    constructor(props){
        super(props)
    }

    handleClick(obj){
        console.log(obj);
    }

    render() {
        return (
            <Menu mode="inline"
                  style={{width:'256px'}}
                  onClick={this.handleClick}>
                <Menu.Item key="side1">
                    导航一
                </Menu.Item>
                <Menu.Item key="side2">
                    导航二
                </Menu.Item>
                <Menu.SubMenu key="side3" title={<span><i className="fa fa-cog" aria-hidden="true" style={{marginRight:'10px'}}></i>导航三</span>}>
                    <Menu.Item key="subSide1">子菜单1</Menu.Item>
                    <Menu.Item key="subSide2"><a href="http://www.baidu.com" target="_blank">子菜单2</a></Menu.Item>
                    <Menu.Item key="subSide3">子菜单3</Menu.Item>
                    <Menu.Item key="subSide4">子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="side4">
                   <i className="fa fa-tty" aria-hidden="true" style={{marginRight:'10px'}}></i>导航四
                </Menu.Item>
                <Menu.Item key="side5">
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'10px'}}></i>导航外链</a>
                </Menu.Item>
            </Menu>
        )
    }
}
````