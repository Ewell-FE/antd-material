import React,{Component} from 'react';
import {withStyles} from 'material-ui/styles';


var styles=theme=>{
    return {
        MenuLi:{
            float:'left'
        }
    }
}
@withStyles(styles)
export default class MenuItem extends Component{
    render(){
        const {classes}=this.props;
        return (
            <li className={classes.MenuLi}>
                {this.props.children}
            </li>
        )
    }
}