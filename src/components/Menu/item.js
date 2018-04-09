import React,{Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from "prop-types";
import ClassNames from 'classnames';

const styles=theme=>{
    return {
        menuLi:{
            padding:'0 16px',
            cursor:'pointer',
            position:'relative',
            transition:'all .3s ease',
            '&>a':{
                transition:'all .3s ease',
                color:'currentColor'
            },
            '&:hover':{
                color:theme.colors.primary
            },
            '&:hover>a':{
                color:theme.colors.primary
            }
        },
        floatLi:{
            float:'left',
            borderBottomWidth:'2px',
            borderBottomStyle:'solid',
            borderBottomColor:theme.palette.grey[300],
            '&:hover':{
                borderBottomColor:theme.colors.primary
            }
        },
        subMenuLi:{
            fontFamily:'"Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
            padding:'0 16px',
            cursor:'pointer',
            '&:hover':{
                color:theme.colors.primary
            },
            '& > a':{
                color:'currentColor',
                textDecoration:'none'
            }
        },
        activeLi:{
            borderBottomColor:theme.colors.primary,
            color:theme.colors.primary,
            '&>a':{
                color:theme.colors.primary
            }
        },
        activeSubLi:{
            background:theme.colors.light,
            color:theme.colors.primary,
            '&>a':{
                color:'currentColor',
                textDecoration:'none'
            }
        },
        activeInlineLi:{
            background:theme.colors.light,
            color:theme.colors.primary,
            borderRight:`2px solid ${theme.colors.primary}`
        }
    }
}

class MenuItem extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(keyValue,e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if(this.props.mode!=='inline'){
            this.props.isSubMenu && this.props.subClickFun();
        }
        this.props.selectedKeyChange({key:keyValue});
        this.props.onClick({key:keyValue});
    }

    render(){
        const {classes,mode,isSubMenu,children,keyValue,selectedKey}=this.props;
        let liClass='';
        liClass=(mode==='horizontal'?ClassNames(classes.menuLi,classes.floatLi):classes.menuLi),
        liClass=!isSubMenu?liClass:classes.subMenuLi;
        liClass=(selectedKey.length!=0 && selectedKey===keyValue)?(!isSubMenu?ClassNames(liClass,mode==='inline'?classes.activeInlineLi:classes.activeLi):ClassNames(liClass,mode==='inline'?classes.activeInlineLi:classes.activeSubLi)):liClass;
        return (
            <li className={liClass}
                onClick={this.handleClick.bind(this,keyValue)}
                key={keyValue}>
                {children}
            </li>
        )
    }
}

export default withStyles(styles,{name:'MuiMenuItem-ant'})(MenuItem)