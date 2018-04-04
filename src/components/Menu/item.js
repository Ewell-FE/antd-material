import React,{Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from "prop-types";

const styles=theme=>{
    return {
        menuLi:{
            padding:'0 20px',
            cursor:'pointer',
            position:'relative',
            borderBottomWidth:'1px',
            borderBottomStyle:'solid',
            borderBottomColor:theme.palette.grey[300],
            transition:'all .3s ease',
            '&>a':{
                transition:'all .3s ease',
                color:'currentColor'
            },
            '&:hover':{
                borderBottomColor:theme.palette.primary.main,
                color:theme.palette.primary.main
            },
            '&:hover>a':{
                color:theme.palette.primary.main
            }
        }
    }
}

class MenuItem extends Component{
    render(){
        const {classes}=this.props;
        return (
            <li className={classes.menuLi}>
                {this.props.children}
            </li>
        )
    }
}

MenuItem.contextTypes = {
    mode:PropTypes.oneOf(['vertical','vertical-right','horizontal','inline'])
};

export default withStyles(styles)(MenuItem);