import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {withStyles} from 'material-ui/styles';
import ClassNames from 'classnames';
import './index.css';
import Collapse from 'material-ui/transitions/Collapse';
import PropTypes from "prop-types";

class RenderInBody extends Component{
    componentDidMount(){//新建一个div标签并塞进body
        this.popup = document.createElement("div");
        document.body.appendChild(this.popup);
        this.popup.style='position:absolute;width:100%;left:0;top:0;';
        this._renderLayer();
    }
    componentDidUpdate() {
        this._renderLayer();
    }
    componentWillUnmount(){//在组件卸载的时候，保证弹层也被卸载掉
        ReactDom.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
    }
    _renderLayer(){//将弹层渲染到body下的div标签
        ReactDom.render(this.props.children, this.popup);
    }
    render(){
        return null;
    }
}

const styles=theme=>{
    return {
        subUl:{
            position:'absolute',
            padding:'0',
            margin:'0',
            zIndex:10,
            listStyle:'none',
            background:'#fff',
            '&>li':{
                border:'none'
            }
        },
        inlineSubUl:{
            listStyle:'none',
            background:'#fff',
            padding:'0',
            margin:'0',
            '&>li':{
                border:'none'
            }
        },
        menuLi:{
            padding:'0 20px',
            cursor:'pointer',
            position:'relative',
            transition:'all .3s ease',
            '&>a':{
                transition:'all .3s ease',
                color:'currentColor'
            }
        },
        subDiv:{
            position:'relative',
            '&:hover':{
                color:theme.palette.primary.main
            }
        },
        activeLi:{
            borderBottomColor:theme.palette.primary.main,
            color:theme.palette.primary.main,
            '&:hover>a':{
                color:theme.palette.primary.main
            }
        },
        floatLi:{
            float:'left',
            borderBottomWidth:'1px',
            borderBottomStyle:'solid',
            borderBottomColor:theme.palette.grey[300]
        },
        hidden:{
            display:'none'
        },
        animationIn:{
            animation:'slideUpIn .5s ease'
        },
        animationOut:{
            animation:'slideUpOut .5s ease'
        },
        menuIcon:{
            position:'absolute',
            right:'0',
            top:'50%',
            transform:'translateY(-50%)'
        }
    }
}

class SubMenu extends Component{
    constructor(props){
        super(props);
        this.getOffset=this.getOffset.bind(this);
        this.getHeight=this.getHeight.bind(this);
        this.getWidth=this.getWidth.bind(this);
        this.enterFun=this.enterFun.bind(this);
        this.leaveFun=this.leaveFun.bind(this);
        this.subClickFun=this.subClickFun.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            location:{
                left:0,
                top:'100%'
            },
            minWidth:{
                minWidth:0
            },
            isShow:false
        }
    }

    getOffset(dom){
        var docElem, win,
            box = { top: 0, left: 0 },
            elem = dom,
            doc = elem && elem.ownerDocument;
        if ( !doc ) {
            return;
        }
        docElem = doc.documentElement;
        //这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。
        if ( typeof elem.getBoundingClientRect !== 'undefined' ) {
            box = elem.getBoundingClientRect();
        }
        //获取window对象
        win = window;
        //返回的对象的top属性是elem.getBoundingClientRect+window.pageYoffset||documentElement.scrollTop-documentElement.clientTop
        return {
            top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
            left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
        };
    }

    getHeight(dom){
        return dom.getBoundingClientRect().bottom-dom.getBoundingClientRect().top;
    }

    getWidth(dom){
        return dom.getBoundingClientRect().right-dom.getBoundingClientRect().left;
    }

    enterFun(){
        if(this.props.mode==='inline') return;
        let elem=this._subParent,
            minWidth=0;
        if(this.props.mode==='horizontal') minWidth=this.getWidth(elem);
        this.setState({
            location:{
                left:this.getOffset(elem).left,
                top:this.getOffset(elem).top+this.getHeight(elem),
                minWidth:minWidth
            },
            isShow:true
        })
    }

    leaveFun(){
        if(this.props.mode==='inline') return;
        this.setState({
            isShow:false
        })
    }

    subClickFun(){
        this.leaveFun();
    }

    handleClick(){
        let openKeys=this.props.openKeys;
        if(this.state.isShow){
            openKeys.splice(openKeys.findIndex(item => item === this.props.keyValue), 1);
        }else{
            openKeys.push(this.props.keyValue);
        }
        if(this.props.mode==='inline') this.props.openKeysChanges(openKeys);
        this.setState({
            isShow:!this.state.isShow
        })
    }

    componentDidMount(){
        if(this.props.mode==='inline'){
            this.props.openKeys.length!=0 && this.props.openKeys.map(item,index=>{
                if(item===this.props.keyValue){
                    this.setState({
                        isShow:true
                    })
                }
            })
        }
    }

    render(){
        const {classes,mode,children,onClick,selectedKey,openKeysChanges}=this.props;
        let liClass=mode==='horizontal'?(this.state.isShow?ClassNames(classes.menuLi,classes.floatLi,classes.activeLi):ClassNames(classes.menuLi,classes.floatLi)):(classes.menuLi);
        return (
            <li className={liClass}
                ref={(el)=>this._subParent=el}
                onMouseEnter={this.enterFun}
                onMouseLeave={this.leaveFun}
                onClick={this.handleClick}>
                <div className={classes.subDiv}>
                    {this.props.title}
                    {   mode==='inline' &&
                        <i className={ClassNames('fa','fa-angle-down',classes.menuIcon)} aria-hidden="true"></i>
                    }
                </div>
                { (mode==='horizontal') &&
                    <RenderInBody>
                        <ul className={this.state.isShow?ClassNames(classes.subUl,classes.animationIn):ClassNames(classes.animationOut,classes.hidden)}
                            style={this.state.location}
                            onMouseEnter={this.enterFun}
                            onMouseLeave={this.leaveFun}>
                            {
                                React.Children.map(children,child=>{
                                    return React.cloneElement(child,{
                                        mode:mode,
                                        isSubMenu:true,
                                        onClick:onClick ? onClick :()=>{},
                                        selectedKey:selectedKey ? selectedKey:'',
                                        keyValue:child.key ? child.key:'',
                                        subClickFun:this.subClickFun
                                    })
                                })
                            }
                        </ul>
                    </RenderInBody>
                }
                {   mode==='inline' &&
                    <Collapse in={this.state.isShow}>
                        <ul className={classes.inlineSubUl}>
                            {
                                React.Children.map(children,child=>{
                                    return React.cloneElement(child,{
                                        mode:mode,
                                        isSubMenu:true,
                                        onClick:onClick ? onClick :()=>{},
                                        selectedKey:selectedKey ? selectedKey:'',
                                        keyValue:child.key ? child.key:'',
                                        subClickFun:this.subClickFun,
                                        openKeysChanges:openKeysChanges,
                                        selectedKeyChange:this.props.selectedKeyChange
                                    })
                                })
                            }
                        </ul>
                    </Collapse>
                }
            </li>
        )
    }
}

export default withStyles(styles,{name:'MuiSubMenu-ant'})(SubMenu);