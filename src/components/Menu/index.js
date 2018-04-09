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
        clearFloat:theme.clearfloat
    }
}

class App extends Component{
    constructor(props){
        super(props);
        this.openKeysChanges=this.openKeysChanges.bind(this);
        this.selectedKeyChange=this.selectedKeyChange.bind(this);
        this.state={
            openKeys:this.props.defaultOpenKeys || this.props.openKeys,
            selectedKey:this.props.selectedKey || this.props.defaultSelectedKey
        }
    }

    static Item=MenuItem
    static SubMenu=SubMenu
    static defaultProps={
        mode:'vertical',
        style:{},
        openKeys:[],
        defaultOpenKeys:[],
        defaultSelectedKey:''
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

    selectedKeyChange(selectedKey){
        this.setState({
            selectedKey:selectedKey.key
        })
    }

    render(){
        const {classes,mode,onClick,children,style}=this.props;
        let selectedKey=this.state.selectedKey;
        return (
            <div>
                <ul className={mode==='horizontal'?ClassNames(classes.menuUl,classes.clearFloat):ClassNames(classes.menuUl)}
                    style={style}>
                    {
                        React.Children.map(children, child=>{
                            return React.cloneElement(child,{
                                    mode:mode,
                                    onClick:onClick ? onClick :()=>{},
                                    selectedKey:selectedKey ? selectedKey:'',
                                    keyValue:child.key ? child.key:'',
                                    openKeys:this.state.openKeys,
                                    openKeysChanges:this.props.onOpenChange || this.openKeysChanges,
                                    selectedKeyChange:this.selectedKeyChange
                               })
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default withStyles(styles,{name:'MuiMenu-ant'})(App);