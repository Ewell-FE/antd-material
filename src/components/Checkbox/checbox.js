import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import './index.css';

const styles=(theme)=>{
    return {
        wrap:{
            fontFamily: 'Monospaced Number,Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif',
            fontSize:'14px',
            boxSizing: 'border-box',
            display:'inline-block',
            cursor:'pointer',
            '&:hover>span>span':{
                borderColor:theme.colors.primary
            },
            marginRight:'10px'
        },
        checkbox:{
            boxSizing:'border-box',
            position:'relative',
            display:'inline-block',
            verticalAlign:'middle',
            '& + span':{
                padding:'0 8px',
                verticalAlign:'middle'
            }
        },
        checkedBox:{
            '&:after':{
                content:'""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '2px',
                border: `1px solid ${theme.colors.primary}`,
                animation: 'antCheckboxEffect .36s ease-in-out',
                animationFillMode: 'both'
            }
        },
        checkboxInput:{
            position:'absolute',
            left:0,
            top:0,
            width:'100%',
            height:'100%',
            padding:0,
            margin:0,
            zIndex:1,
            opacity:0
        },
        checkboxInner:{
            position:'relative',
            width:'16px',
            height:'16px',
            display:'block',
            border:`1px solid #d9d9d9`,
            backgroundColor:'#fff',
            transition:`all .3s `,
            borderRadius:'2px',
            boxSizing:'border-box',
            '&:after':{
                content:'""',
                position:'absolute',
                width:'6px',
                height:'10px',
                border:'2px solid #fff',
                top:'50%',
                left:'50%',
                marginLeft:'-3px',
                marginTop:'-7px',
                transform:'rotate(45deg) scale(0)',
                borderTop:0,
                borderLeft:0,
                boxSizing:'border-box',
                transition:'all .2s cubic-bezier(.12,.4,.29,1.46) .1s'
            }
        },
        checkedBoxInner:{
            backgroundColor:theme.colors.primary,
            borderColor:theme.colors.primary,
            '&:after':{
                transform:'rotate(45deg) scale(1)',
            }
        },
        indeterminateBoxInner:{
            backgroundColor:theme.colors.primary,
            borderColor:theme.colors.primary,
            '&:after':{
                transform:'scale(1)',
                width:'10px',
                height:'2px',
                marginTop:'-1px',
                marginLeft:'-5px'
            }
        },
        disabledWrap:{
            cursor:'not-allowed',
            color:theme.disabled.color,
            '&:hover>span>span':{
                borderColor:'#d9d9d9'
            },
            '&>span>span':{
                backgroundColor:theme.disabled.backgroundColor,
                borderColor:'#d9d9d9',
                color:theme.disabled.color
            },
            '&>span>span:after':{
                borderColor:theme.disabled.color
            },
            '& input':{
                cursor:'not-allowed'
            }
        }
    }
}

class Checkbox extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            checked:this.props.checked || this.props.defaultChecked,
            disabled:this.props.disabled,
            indeterminate:this.props.indeterminate
        }
    }

    static defaultProps={
        defaultChecked:false,
        checked:false,
        name:'',
        disabled:false,
        indeterminate:false
    }

    handleClick(e){
        this.setState({
            checked:!this.state.checked
        })
        this.props.onChange && this.props.onChange(e)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            checked:nextProps.checked,
            disabled:nextProps.disabled,
            indeterminate:nextProps.indeterminate
        })
    }

    render(){
        const {classes}=this.props;
        return (
            <label className={this.state.disabled?ClassNames(classes.wrap,classes.disabledWrap):classes.wrap}>
                <span className={this.state.checked?ClassNames(classes.checkbox,classes.checkedBox):classes.checkbox}>
                    <input 
                        checked={this.state.checked} 
                        disabled={this.state.disabled} 
                        type="checkbox" name={this.props.name && this.props.name} 
                        className={classes.checkboxInput} onChange={this.handleClick.bind(this)}
                        value={this.props.value && this.props.value}
                    />
                    <span className={this.state.checked?ClassNames(classes.checkboxInner,classes.checkedBoxInner):this.state.indeterminate?ClassNames(classes.checkboxInner,classes.indeterminateBoxInner):classes.checkboxInner}></span>
                </span>
                <span>{this.props.children}</span>
            </label>
        )
    }
}

Checkbox.propsTypes={
    onChange:PropTypes.func,
    defaultChecked:PropTypes.bool,
    checked:PropTypes.bool,
    name:PropTypes.string,
    indeterminate:PropTypes.bool,
    disabled:PropTypes.bool
}

export default withStyles(styles,{name:'MuiCheckbox-ant'})(Checkbox)