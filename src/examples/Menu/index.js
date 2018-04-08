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
                    <i className="fa fa-map" aria-hidden="true" style={{marginRight:'10px'}}></i>导航一
                </Menu.Item>
                <Menu.Item key="nav2">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" style={{marginRight:'10px'}}></i>导航二
                </Menu.Item>
                <Menu.SubMenu key="nav3" title={<span><i className="fa fa-cog" aria-hidden="true" style={{marginRight:'10px'}}></i>导航三</span>}>
                    <Menu.Item key="subNav1">子菜单1</Menu.Item>
                    <Menu.Item key="subNav2"><a href="http://www.baidu.com" target="_blank">子菜单2</a></Menu.Item>
                    <Menu.Item key="subNav3">子菜单3</Menu.Item>
                    <Menu.Item key="subNav4">子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="nav4">
                   <i className="fa fa-tty" aria-hidden="true" style={{marginRight:'10px'}}></i>导航四
                </Menu.Item>
                <Menu.Item key="nav5">
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'10px'}}></i>导航外链</a>
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
                    <i className="fa fa-map" aria-hidden="true" style={{marginRight:'10px'}}></i>导航一
                </Menu.Item>
                <Menu.Item key="nav2">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" style={{marginRight:'10px'}}></i>导航二
                </Menu.Item>
                <Menu.SubMenu key="nav3" title={<span><i className="fa fa-cog" aria-hidden="true" style={{marginRight:'10px'}}></i>导航三</span>}>
                    <Menu.Item key="subNav1">子菜单1</Menu.Item>
                    <Menu.Item key="subNav2"><a href="http://www.baidu.com" target="_blank">子菜单2</a></Menu.Item>
                    <Menu.Item key="subNav3">子菜单3</Menu.Item>
                    <Menu.Item key="subNav4">子菜单4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="nav4">
                   <i className="fa fa-tty" aria-hidden="true" style={{marginRight:'10px'}}></i>导航四
                </Menu.Item>
                <Menu.Item key="nav5">
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'10px'}}></i>导航外链</a>
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
}`}>
                        <Demo2md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}