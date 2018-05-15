import React,{Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from "prop-types";
import classnames from 'classnames';

const styles=theme=>{
    return {
        root:{
            padding:'0 20px',
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
        }
    }
}
@withStyles(styles,{name:'MuiMenuItem-ant'})
class MenuItem extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            keyPath:this.props.keyPath || []
        }
    }

    handleClick(keyValue,e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if(this.props.mode!=='inline'){
            this.props.isSubMenu && this.props.subClickFun();
        }

        let newArr=this.state.keyPath;
        newArr.push(keyValue);
        let result={key:keyValue,keyPath:newArr};
        this.props.selectedKeyChange(result);
        this.props.onClick(result);
    }

    render(){
        const {classes,mode,isSubMenu,children,keyValue,selectedKey}=this.props;
        return (
            <li className={classnames(classes.root,
                                      'menuli',
                                      {active:selectedKey.length!==0 && selectedKey===keyValue})}
                onClick={this.handleClick.bind(this,keyValue)}
                key={keyValue}>
                {children}
            </li>
        )
    }
}

MenuItem.propTypes={
    keyValue:PropTypes.string.isRequired
}

export default MenuItem