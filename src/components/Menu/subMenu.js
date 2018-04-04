import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {withStyles} from 'material-ui/styles';
import ClassNames from 'classnames';
import './index.css';
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

class SubMenu extends Component{
    constructor(props){
        super(props);
        this.enterFun=this.enterFun.bind(this);
        this.leaveFun=this.leaveFun.bind(this);
        this.state={
            location:{
                left:0,
                top:'100%'
            },
            isShow:false
        }
    }

    enterFun(){
        this.setState({
            location:{
                left:$(this._subParent).offset().left,
                top:$(this._subParent).offset().top+$(this._subParent).height()
            },
            isShow:true
        })
    }

    leaveFun(){
        this.setState({
            location:{
                left:0,
                top:'100%'
            },
            isShow:false
        })
    }

    render(){
        const {classes}=this.props;
        return (
            <li className={classes.menuLi} ref={(el)=>this._subParent=el} onMouseEnter={this.enterFun} onMouseLeave={this.leaveFun}>
                <div>{this.props.title}</div>
                { (this.context.mode==='vertical' || this.context.mode==='horizontal') &&
                    <RenderInBody>
                        <ul className={ClassNames(classes.subUl,'antd-meterial-submenu-ul')} style={this.state.location}>
                            {this.props.children}
                        </ul>
                    </RenderInBody>
                }
            </li>
        )
    }
}

SubMenu.contextTypes = {
    mode:PropTypes.oneOf(['vertical','vertical-right','horizontal','inline'])
};

export default withStyles(styles)(SubMenu);