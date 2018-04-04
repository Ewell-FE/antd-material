import React,{Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from './item'
import SubMenu from './subMenu'
import {withStyles} from 'material-ui/styles';
import ClassNames from 'classnames';
import './index.css';


const styles=theme=>{
    return {
        menuUl:{
            fontFamily:'"Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
            background:'#fff',
            width:'100%',
            padding:0,
            lineHeight:'46px',
            color:theme.palette.text.primary
        }
    }
}

class App extends Component{
    static Item=MenuItem
    static SubMenu=SubMenu
    static defaultProps={
        mode:'horizontal'
    }
    getChildContext(){
        return {
            mode:this.props.mode
        }
    }
    render(){
        const {classes,mode}=this.props;
        return (
            <div>
                <ul className={mode==='horizontal'?ClassNames(classes.menuUl,'clearfloat','antd-material-menu-horizontal'):ClassNames(classes.menuUl,'clearfloat')}>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

App.childContextTypes={
    mode:PropTypes.oneOf(['vertical','vertical-right','horizontal','inline'])
}

export default withStyles(styles,{name:'MuiMenu-ant'})(App);