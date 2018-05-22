import React,{Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from './item'
import SubMenu from './subMenu'
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import './index.css';

const styles=theme=>{
    return {
        root:{
            background:'#fff',
            width:'100%',
            padding:0,
            lineHeight:'40px',
            color:theme.palette.text.primary,
            textAlign:'left'
        },
        horizontalRoot:{
            borderBottomWidth:'1px',
            borderBottomStyle:'solid',
            borderBottomColor:theme.palette.grey[300],
            lineHeight:'48px',
            '&>.menuli':{
                position:'relative',
                top:'1px',
                float:'left',
                borderBottomWidth:'2px',
                borderBottomStyle:'solid',
                borderBottomColor:'transparent',
                '&:hover':{
                    borderBottomColor:theme.colors.primary
                },
                '&.active':{
                    borderBottomColor:theme.colors.primary,
                    color:theme.colors.primary,
                    '&>a':{
                        color:theme.colors.primary
                    }
                }
            }
        },
        inlineRoot:{
            '& .active':{
                background:theme.colors.light,
                color:theme.colors.primary,
                borderRight:`2px solid ${theme.colors.primary}`,
                '&>a':{
                    color:'currentColor',
                    textDecoration:'none'
                }
            }
        },
        clearFix:theme.clearfix
    }
}
@withStyles(styles,{name:'MuiMenu-ant'})
class Menu extends Component{
    constructor(props){
        super(props);
        this.openKeysChanges=this.openKeysChanges.bind(this);
        this.selectedKeyChange=this.selectedKeyChange.bind(this);
        this.state={
            openKeys:this.props.defaultOpenKeys || this.props.openKeys,
            selectedKey:this.props.selectedKey || this.props.defaultSelectedKey,
            selectedPath:[]
        }
    }

    static Item=MenuItem
    static SubMenu=SubMenu
    static defaultProps={
        mode:'vertical',
        style:{},
        openKeys:[],
        selectedKey:'',
        defaultOpenKeys:[],
        defaultSelectedKey:'',
        onClick:()=>{}
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            selectedKey:nextProps.selectedKey,
            openKeys:nextProps.openKeys
        })
    }

    openKeysChanges(openKeys){
        this.setState({
            openKeys:openKeys
        })
    }

    selectedKeyChange(selected){
        this.setState({
            selectedKey:selected.key,
            selectedPath:selected.keyPath
        })
    }

    render(){
        const {classes,mode,onClick,children,style,getPopupContainer}=this.props;
        let selectedKey=this.state.selectedKey;
        return (
            <div>
                <ul className={classnames(classes.root,
                                          {[`${classes.clearFix} ${classes.horizontalRoot}`]:mode==='horizontal'},
                                          {[`${classes.inlineRoot}`]:mode==='inline'})}
                    style={style}>
                    {
                        React.Children.map(children, child=>{
                            return React.cloneElement(child,{
                                    mode:mode,
                                    onClick:onClick,
                                    selectedKey:selectedKey,
                                    keyValue:child.key,
                                    openKeys:this.state.openKeys,
                                    openKeysChanges:this.props.onOpenChange || this.openKeysChanges,
                                    selectedKeyChange:this.selectedKeyChange,
                                    selectedPath:this.state.selectedPath,
                                    getPopupContainer:getPopupContainer
                               })
                        })
                    }
                </ul>
            </div>
        )
    }
}

Menu.propTypes={
    mode:PropTypes.oneOf(['vertical','horizontal','inline']),
    onClick:PropTypes.func,
    selectedKey:PropTypes.string,
    openKeys:PropTypes.array,
    defaultOpenKeys:PropTypes.array,
    defaultSelectedKey:PropTypes.string,
    style:PropTypes.object
}

export default Menu