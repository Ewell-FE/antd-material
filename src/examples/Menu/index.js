import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Menu from '@/components/Menu'




export class Demo1md extends Component {
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
                    <Menu.Item key="subNav2"><a href="http://www.baidu.com" target="_blank">子菜单2</a></Menu.Item>
                    <Menu.Item key="subNav3">子菜单3</Menu.Item>
                    <Menu.Item key="subNav4">子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="nav4">
                   <i className="fa fa-tty" aria-hidden="true" style={{marginRight:'5px'}}></i>导航四
                </Menu.Item>
                <Menu.Item key="nav5">
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'5px'}}></i>导航外链</a>
                </Menu.Item>
            </Menu>
        )
    }
}


export class Demo2md extends Component {
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
                  onClick={this.handleClick}
                  defaultSelectedKey={'subSide1'}
                  defaultOpenKeys={['side3']}>
                <Menu.Item key="side1">
                    导航一
                </Menu.Item>
                <Menu.Item key="side2">
                    导航二
                </Menu.Item>
                <Menu.SubMenu key="side3" title={<span><i className="fa fa-cog" aria-hidden="true" style={{marginRight:'5px'}}></i>导航三--有子导航</span>}>
                    <Menu.Item key="subSide1">子菜单1</Menu.Item>
                    <Menu.Item key="subSide2"><a href="http://www.baidu.com" target="_blank">子菜单2</a></Menu.Item>
                    <Menu.Item key="subSide3">子菜单3</Menu.Item>
                    <Menu.Item key="subSide4">子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="side4" title={<span><i className="fa fa-tty" aria-hidden="true" style={{marginRight:'5px'}}></i>导航三--有子导航</span>}>
                    <Menu.Item key="subSide15">子菜单5</Menu.Item>
                    <Menu.Item key="subSide25"><a href="http://www.baidu.com" target="_blank">子菜单6</a></Menu.Item>
                    <Menu.Item key="subSide35">子菜单7</Menu.Item>
                    <Menu.Item key="subSide45">子菜单8</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="side5">
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'5px'}}></i>导航外链</a>
                </Menu.Item>
            </Menu>
        )
    }
}


export class Demo3md extends Component {
    constructor(props){
        super(props);
        this.onOpenChange=this.onOpenChange.bind(this);
        this.state={
            openKey:'side1'
        }
    }

    rootSubmenuKeys=['side1','side2','side3','side4'];

    onOpenChange(openKeys){
        let lastKey=openKeys[openKeys.length-1];
        this.setState({
            openKey:lastKey
        })
    }

    render() {
        return (
            <Menu mode="inline"
                  style={{width:'256px'}}
                  openKeys={[this.state.openKey]}
                  onOpenChange={this.onOpenChange}>
                <Menu.SubMenu key="side1" title={<span><i className="fa fa-envelope-o" aria-hidden="true" style={{marginRight:'5px'}}></i>导航一</span>}>
                    <Menu.Item key="subSide12">子菜单12</Menu.Item>
                    <Menu.Item key="subSide22"><a href="http://www.baidu.com" target="_blank">子菜单22</a></Menu.Item>
                    <Menu.Item key="subSide32">子菜单32</Menu.Item>
                    <Menu.Item key="subSide42">子菜单42</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="side2" title={<span><i className="fa fa-leaf" aria-hidden="true" style={{marginRight:'5px'}}></i>导航二</span>}>
                    <Menu.Item key="subSide11">子菜单11</Menu.Item>
                    <Menu.Item key="subSide21"><a href="http://www.baidu.com" target="_blank">子菜单21</a></Menu.Item>
                    <Menu.Item key="subSide31">子菜单31</Menu.Item>
                    <Menu.Item key="subSide41">子菜单41</Menu.Item>
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


export class Demo4md extends Component {
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


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      顶部导航
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     水平的顶部导航菜单。
                                </p>
                    <Templete code={`import Menu from '@/components/Menu'

export class Demo1md extends Component {
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
                    <Menu.Item key="subNav2"><a href="http://www.baidu.com" target="_blank">子菜单2</a></Menu.Item>
                    <Menu.Item key="subNav3">子菜单3</Menu.Item>
                    <Menu.Item key="subNav4">子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="nav4">
                   <i className="fa fa-tty" aria-hidden="true" style={{marginRight:'5px'}}></i>导航四
                </Menu.Item>
                <Menu.Item key="nav5">
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'5px'}}></i>导航外链</a>
                </Menu.Item>
            </Menu>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      内嵌导航
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     垂直菜单，子菜单内嵌在菜单区域。
                                </p>
                    <Templete code={`import Menu from '@/components/Menu'

export class Demo2md extends Component {
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
                  onClick={this.handleClick}
                  defaultSelectedKey={'subSide1'}
                  defaultOpenKeys={['side3']}>
                <Menu.Item key="side1">
                    导航一
                </Menu.Item>
                <Menu.Item key="side2">
                    导航二
                </Menu.Item>
                <Menu.SubMenu key="side3" title={<span><i className="fa fa-cog" aria-hidden="true" style={{marginRight:'5px'}}></i>导航三--有子导航</span>}>
                    <Menu.Item key="subSide1">子菜单1</Menu.Item>
                    <Menu.Item key="subSide2"><a href="http://www.baidu.com" target="_blank">子菜单2</a></Menu.Item>
                    <Menu.Item key="subSide3">子菜单3</Menu.Item>
                    <Menu.Item key="subSide4">子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="side4" title={<span><i className="fa fa-tty" aria-hidden="true" style={{marginRight:'5px'}}></i>导航三--有子导航</span>}>
                    <Menu.Item key="subSide15">子菜单5</Menu.Item>
                    <Menu.Item key="subSide25"><a href="http://www.baidu.com" target="_blank">子菜单6</a></Menu.Item>
                    <Menu.Item key="subSide35">子菜单7</Menu.Item>
                    <Menu.Item key="subSide45">子菜单8</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="side5">
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'5px'}}></i>导航外链</a>
                </Menu.Item>
            </Menu>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      只展开当前父级菜单
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
                                </p>
                    <Templete code={`import Menu from '@/components/Menu'

export class Demo3md extends Component {
    constructor(props){
        super(props);
        this.onOpenChange=this.onOpenChange.bind(this);
        this.state={
            openKey:'side1'
        }
    }

    rootSubmenuKeys=['side1','side2','side3','side4'];

    onOpenChange(openKeys){
        let lastKey=openKeys[openKeys.length-1];
        this.setState({
            openKey:lastKey
        })
    }

    render() {
        return (
            <Menu mode="inline"
                  style={{width:'256px'}}
                  openKeys={[this.state.openKey]}
                  onOpenChange={this.onOpenChange}>
                <Menu.SubMenu key="side1" title={<span><i className="fa fa-envelope-o" aria-hidden="true" style={{marginRight:'5px'}}></i>导航一</span>}>
                    <Menu.Item key="subSide12">子菜单12</Menu.Item>
                    <Menu.Item key="subSide22"><a href="http://www.baidu.com" target="_blank">子菜单22</a></Menu.Item>
                    <Menu.Item key="subSide32">子菜单32</Menu.Item>
                    <Menu.Item key="subSide42">子菜单42</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="side2" title={<span><i className="fa fa-leaf" aria-hidden="true" style={{marginRight:'5px'}}></i>导航二</span>}>
                    <Menu.Item key="subSide11">子菜单11</Menu.Item>
                    <Menu.Item key="subSide21"><a href="http://www.baidu.com" target="_blank">子菜单21</a></Menu.Item>
                    <Menu.Item key="subSide31">子菜单31</Menu.Item>
                    <Menu.Item key="subSide41">子菜单41</Menu.Item>
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
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      垂直菜单
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     子菜单是弹出的形式。
                                </p>
                    <Templete code={`import Menu from '@/components/Menu'

export class Demo4md extends Component {
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
}`}>
                        <Demo4md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}