import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {withStyles} from 'material-ui/styles';
import classnames from 'classnames';
import './index.css';
import Collapse from 'material-ui/transitions/Collapse';
import { MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
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

let curTheme={};
const styles=theme=>{
    curTheme=createMuiTheme(theme);
    return {
        root:{
            position:'absolute',
            padding:'0',
            margin:'0',
            zIndex:10,
            listStyle:'none',
            background:'#fff',
            boxShadow:theme.shadows[3],
            lineHeight:'36px',
            borderRadius:'2px',
            '&>li':{
                border:'none'
            },
            '& .active':{
                borderBottomColor:theme.colors.primary,
                color:theme.colors.primary,
                '&>a':{
                    color:theme.colors.primary
                }
            }
        },
        horizontalRoot:{
            '&.in':{
                animation:'slideUpIn .5s ease'
            },
            '&.out':{
                animation:'slideUpOut .5s ease',
                display:'none' 
            },
            '& .menuli':{
                paddingLeft:'40px'
            }
        },
        verticalRoot:{
            '&.in':{
                animation:'slideLeftIn .5s ease'
            },
            '&.out':{
                animation:'slideLeftOut .5s ease',
                display:'none' 
            },
        },
        inlineRoot:{
            listStyle:'none',
            background:'#fff',
            padding:'0',
            margin:'0',
            '& .active':{
                background:theme.colors.light,
                color:theme.colors.primary,
                borderRight:`2px solid ${theme.colors.primary}`,
                '&>a':{
                    color:'currentColor',
                    textDecoration:'none'
                }
            },
            '& .menuli':{
                paddingLeft:'40px'
            }
        },
        menuLi:{
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
            padding:'0 20px',
            '&:hover':{
                color:theme.colors.primary
            }
        },
        activeSubDiv:{
            color:theme.colors.primary
        },
        menuIcon:{
            position:'absolute',
            right:'20px',
            top:'50%',
            transition:`all .3s ${theme.transitions.easing.easeInOut}`,
            transform:'translateY(-50%)'
        },
        showMenuIcon:{
            transform:'rotate(180deg) translateY(50%)'
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
        this.hoverIn=this.hoverIn.bind(this);
        this.hoverOut=this.hoverOut.bind(this);
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
        this.isEnter=true;
        let elem=this._subParent,
            minWidth=0;
        if(this.props.mode==='horizontal'){
            minWidth=this.getWidth(elem);
            this.setState({
                location:{
                    left:this.getOffset(elem).left,
                    top:this.getOffset(elem).top+this.getHeight(elem),
                    minWidth:minWidth
                },
                isShow:true
            })
        }else if(this.props.mode==='vertical'){
            if(this.props.isSubMenu){
                this.setState({
                    location:{
                        left:this.getWidth(elem)+3,
                        top:0,
                        minWidth:160
                    },
                    isShow:true
                })
            }else{
                this.setState({
                    location:{
                        left:this.getOffset(elem).left+this.getWidth(elem)+3,
                        top:this.getOffset(elem).top,
                        minWidth:160
                    },
                    isShow:true
                })
            }
        }
    }

    leaveFun(){
        if(this.props.mode==='inline') return;
        this.isEnter=false;
        this.setState({
            isShow:false
        })
    }

    hoverIn(){
        if(this.props.mode==='inline') return;
        this.isEnter=true;
        setTimeout(()=>{
            this.isEnter && this.enterFun();
        },200);
    }

    hoverOut(){
        if(this.props.mode==='inline') return;
        this.isEnter=false;
        setTimeout(()=>{
            !this.isEnter && this.leaveFun();
        },200);

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
        this.props.mode==='inline' && openKeys.length!==0 && this.props.openKeysChanges(openKeys);
        this.setState({
            isShow:!this.state.isShow
        })
    }

    componentDidMount(){
        if(this.props.mode==='inline'){
            this.props.openKeys.length!==0 && this.props.openKeys.map((item,index)=>{
                if(item===this.props.keyValue){
                    this.setState({
                        isShow:true
                    })
                }
                return true
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.openKeys && nextProps.openKeys.length===1 && nextProps.openKeys[0]!==this.props.keyValue){
            this.setState({
                isShow:false
            })
        }
    }

    render(){
        const {classes,mode,children,onClick,selectedKey,keyValue,keyPath,selectedPath}=this.props;
        let newArr=!keyPath ? [] : keyPath;
        newArr.push(keyValue);
        return (
            <li className={classnames(classes.menuLi,
                                      {menuli:mode==='horizontal'},
                                      {active:(mode==='horizontal' && (this.state.isShow || (selectedPath && selectedPath.includes(keyValue))))})}
                ref={(el)=>this._subParent=el}
                onMouseEnter={this.hoverIn}
                onMouseLeave={this.hoverOut}
                onClick={this.handleClick}>
                <div className={classnames(classes.subDiv,
                                           {[`${classes.activeSubDiv}`]:mode!=='inline' && (this.state.isShow || (selectedPath && selectedPath.includes(keyValue)))})}>
                    {this.props.title}
                    {   mode==='inline' &&
                        <i className={classnames('fa',
                                      'fa-angle-down',
                                      classes.menuIcon,
                                      {[`${classes.showMenuIcon}`]:this.state.isShow})} 
                            aria-hidden="true"></i>
                    }
                    {   mode==='vertical' &&
                        <i className={classnames('fa',
                                                 'fa-angle-right',
                                                 classes.menuIcon)} 
                            aria-hidden="true"></i>
                    }
                </div>
                { (mode==='horizontal' || (mode==='vertical' && !this.props.isSubMenu)) &&
                    <RenderInBody>
                        <MuiThemeProvider theme={curTheme}>
                        <ul className={classnames(classes.root,
                                                  {[`${classes.horizontalRoot}`]:mode==='horizontal'},
                                                  {[`${classes.verticalRoot}`]:mode==='vertical'},
                                                  {in:this.state.isShow},
                                                  {out:!this.state.isShow})}
                            style={this.state.location}
                            onMouseEnter={this.enterFun}
                            onMouseLeave={this.hoverOut}>
                            {
                                React.Children.map(children,child=>{
                                    return React.cloneElement(child,{
                                        mode:mode,
                                        isSubMenu:true,
                                        onClick:onClick,
                                        selectedKey:selectedKey,
                                        keyValue:child.key,
                                        subClickFun:this.subClickFun,
                                        selectedKeyChange:this.props.selectedKeyChange,
                                        theme:curTheme,
                                        keyPath:Array.from(new Set(newArr)),
                                        selectedPath:selectedPath
                                    })
                                })
                            }
                        </ul>
                        </MuiThemeProvider>
                    </RenderInBody>
                }
                {   mode==='vertical' && this.props.isSubMenu &&
                    <MuiThemeProvider theme={curTheme}>
                        <ul className={classnames(classes.root,
                                                  classes.verticalRoot,
                                                  {in:this.state.isShow},
                                                  {out:!this.state.isShow})}
                            style={this.state.location}>
                            {
                                React.Children.map(children,child=>{
                                    return React.cloneElement(child,{
                                        mode:mode,
                                        isSubMenu:true,
                                        onClick:onClick,
                                        selectedKey:selectedKey,
                                        keyValue:child.key,
                                        subClickFun:this.subClickFun,
                                        selectedKeyChange:this.props.selectedKeyChange,
                                        theme:curTheme,
                                        keyPath: Array.from(new Set(newArr)),
                                        selectedPath:selectedPath
                                    })
                                })
                            }
                        </ul>
                    </MuiThemeProvider>
                }
                {   mode==='inline' &&
                    <Collapse in={this.state.isShow}>
                        <MuiThemeProvider theme={curTheme}>
                        <ul className={classes.inlineRoot}>
                            {
                                React.Children.map(children,child=>{
                                    return React.cloneElement(child,{
                                        mode:mode,
                                        isSubMenu:true,
                                        onClick:onClick ? onClick :()=>{},
                                        selectedKey:selectedKey ? selectedKey:'',
                                        keyValue:child.key ? child.key:'',
                                        subClickFun:this.subClickFun,
                                        selectedKeyChange:this.props.selectedKeyChange,
                                        theme:curTheme,
                                        keyPath: Array.from(new Set(newArr)),
                                        selectedPath:selectedPath
                                    })
                                })
                            }
                        </ul>
                        </MuiThemeProvider>
                    </Collapse>
                }
            </li>
        )
    }
}

SubMenu.propTypes={
    keyValue:PropTypes.string.isRequired,
    title:PropTypes.oneOfType([PropTypes.string,PropTypes.node]).isRequired
}

export default withStyles(styles,{name:'MuiSubMenu-ant'})(SubMenu);