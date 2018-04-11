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
        },
        clearFix:theme.clearfix
    }
}

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
        const {classes,mode,onClick,children,style}=this.props;
        let selectedKey=this.state.selectedKey;
        return (
            <div>
                <ul className={mode==='horizontal'?ClassNames(classes.menuUl,classes.clearFix):ClassNames(classes.menuUl)}
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
                                    selectedPath:this.state.selectedPath
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

export default withStyles(styles,{name:'MuiMenu-ant'})(Menu);