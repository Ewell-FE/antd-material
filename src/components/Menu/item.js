import React,{Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from "prop-types";
import ClassNames from 'classnames';

const styles=theme=>{
    console.log(theme)
    return {
        menuLi:{
            padding:'0 20px',
            cursor:'pointer',
            position:'relative',
            transition:'all .3s ease',
            '&>a':{
                transition:'all .3s ease',
                color:'currentColor'
            },
            '&:hover':{
                color:theme.palette.primary.main
            },
            '&:hover>a':{
                color:theme.palette.primary.main
            }
        },
        floatLi:{
            float:'left',
            borderBottomWidth:'1px',
            borderBottomStyle:'solid',
            borderBottomColor:theme.palette.grey[300],
            '&:hover':{
                borderBottomColor:theme.palette.primary.main
            }
        },
        subMenuLi:{
            fontFamily:'"Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
            lineHeight:'36px',
            padding:'0 10px',
            fontSize:'14px',
            cursor:'pointer',
            '&:hover':{
                color:theme.palette.primary.main
            },
            '& > a':{
                color:'currentColor',
                textDecoration:'none'
            }
        },
        activeLi:{
            borderBottomColor:theme.palette.primary.main,
            color:theme.palette.primary.main,
            '&>a':{
                color:theme.palette.primary.main
            }
        },
        activeSubLi:{
            color:theme.palette.primary.main,
            '&>a':{
                color:'currentColor',
                textDecoration:'none'
            }
        },
        activeInlineLi:{
            background:theme.palette.primary.light,
            '&:hover':{
                color:theme.palette.text.primary
            }
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
        }else{
            this.props.selectedKeyChange(keyValue);
        }
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


export default withStyles(styles,{name:'MuiMenuItem-ant'})(MenuItem);