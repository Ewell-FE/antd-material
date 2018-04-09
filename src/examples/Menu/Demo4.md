#  垂直菜单
## 子菜单是弹出的形式。


````jsx
import Menu from '@/components/Menu'

export class <%=component%> extends Component {
    constructor(props){
        super(props)
    }

    handleClick(obj){
        console.log(obj.key);
    }

    render() {
        return (
            <Menu mode="vertical"
                  style={{width:'256px'}}
                  onClick={this.handleClick}>
                <Menu.SubMenu key="side1" title={<span><i className="fa fa-envelope-o" aria-hidden="true" style={{marginRight:'5px'}}></i>导航一</span>}>
                    <Menu.Item key="subSide12">子菜单12</Menu.Item>
                    <Menu.Item key="subSide22"><a href="http://www.baidu.com" target="_blank">子菜单22</a></Menu.Item>
                    <Menu.Item key="subSide32">子菜单32</Menu.Item>
                    <Menu.Item key="subSide42">子菜单42</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="side2" title={<span><i className="fa fa-leaf" aria-hidden="true" style={{marginRight:'5px'}}></i>导航二</span>}>
                    <Menu.Item key="subSide11">子菜单11</Menu.Item>
                    <Menu.Item key="subSide21"><a href="http://www.baidu.com" target="_blank">子菜单21</a></Menu.Item>
                    <Menu.SubMenu key="side2-subside1" title={<span>子菜单</span>}>
                        <Menu.Item key="subSide31">子菜单31</Menu.Item>
                        <Menu.Item key="subSide41">子菜单41</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="side3" title={<span><i className="fa fa-cog" aria-hidden="true" style={{marginRight:'5px'}}></i>导航三</span>}>
                    <Menu.Item key="subSide1">子菜单1</Menu.Item>
                    <Menu.Item key="subSide2"><a href="http://www.baidu.com" target="_blank">子菜单2</a></Menu.Item>
                    <Menu.Item key="subSide3">子菜单3</Menu.Item>
                    <Menu.Item key="subSide4">子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="side4" title={<span><i className="fa fa-tty" aria-hidden="true" style={{marginRight:'5px'}}></i>导航三</span>}>
                    <Menu.Item key="subSide15">子菜单5</Menu.Item>
                    <Menu.Item key="subSide25"><a href="http://www.baidu.com" target="_blank">子菜单6</a></Menu.Item>
                    <Menu.Item key="subSide35">子菜单7</Menu.Item>
                    <Menu.Item key="subSide45">子菜单8</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        )
    }
}
````