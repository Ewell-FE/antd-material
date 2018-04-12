import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames'
const styles = theme => ({
    yhAnchor:{
        fontSize: '14px',
        lineHeight: '1.5',
        color: 'rgba(0,0,0,.65)',
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        position: 'relative',
        paddingLeft: '2px'

    },
    yhAnchorWrapper:{
        position: 'fixed',
        top:'64px',
        left:'250px',
        backgroundColor: '#fff',
        overflow: 'auto',
        paddingLeft: '4px',
        marginLeft: '-4px',
    },
    yhAnchorInk:{
    position: 'absolute',
    height: '100%',
    left: '0',
    top: '0',
    '&::before':{
            content: '""',
            position: 'relative',
            width: '2px',
            height: '100%',
            display: 'block',
            backgroundColor: '#e8e8e8',
            margin: '0 auto',
        }
    },
    yhAnchorInkBall: {
        display: 'none',
        position: 'absolute',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        border: '2px solid #1890ff',
        backgroundColor: '#fff',
        left: '50%',
        transition: 'top .3s ease-in-out',
        transform: 'translateX(-50%)',
        top: '10px'
    },
    visible:{
        display: 'inline-block',
    }

});
//默认target为window
function getDefaultTarget() {
    return window;
}
//获取元素高度
function getOffsetTop(elm) {
    if(!elm){
        return 0;
    }
    //getClientRects 返回一个TextRectangle集合，就是TextRectangleList对象。
    //getBoundingClientRect 返回 一个TextRectangle对象。
    //TextRectangle数组的长度可知道文字是否换行，甚至是换了几行，
    //TextRectangle的几个属性和鼠标位置比较可以知道鼠标在哪一行上
    if(!elm.getClientRects().length){
        return 0;
    }
    const rect=elm.getBoundingClientRect();
    // 非IE为0，IE为2,兼容IE
    if(rect.width||rect.height){
        const doc = elm.ownerDocument;
        const docElem = doc.documentElement;
        return rect.top - docElem.clientTop;
    }
    return rect.top;
}
//t:当前时间,b:初始位置,c:目标位置,d:持续时间
function easeInOutCubic(t, b, c, d) {
    const cc = c - b;//变化量
    t /= d / 2;
    if (t < 1) {
        return cc / 2 * t * t * t + b;
    }
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
}

const reqAnimFrame = window.requestAnimationFrame.bind(window);
//获取滚动条偏移量并做兼容处理
function getScroll(target, top) {
    if (typeof window === 'undefined') {
        return 0;
    }

    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';
    const isWindow = target === window;

    let ret = isWindow ? target[prop] : target[method];
    // ie6,7,8 standard mode
    if (isWindow && typeof ret !== 'number') {
        ret = window.document.documentElement[method];
    }

    return ret;
}

//滚动到链接位置而不是直接跳转
function scrollTo(href,offsetTop= 0,target,callback = () => { }) {
    const scrollTop=getScroll(target(),true);
    const targetElement=document.getElementById(href.substring(1));
    if(!targetElement){
        return;
    }
    const eleOffsetTop=getOffsetTop(targetElement);
    const targetScrollTop=scrollTop+eleOffsetTop-offsetTop;
    //初始时间
    const startTime = Date.now();
    const frameFunc=()=>{
        //当前时间
        const timestamp=Date.now();
        const time=timestamp-startTime;
        //加特效的滚动
        window.scrollTo(window.pageXOffset,easeInOutCubic(time,scrollTop,targetScrollTop,450));
        //超过持续时间进行回调
        if(time<450){
            reqAnimFrame(frameFunc)
        }else {
            callback()
        }
    }
    reqAnimFrame(frameFunc);
    window.history.pushState(null, '', href);
}
function getDomByAttr(List,attr,value) {
    const list=Array.isArray(List)?[...List]:Array.from(List);
    let dom='';
    list.forEach((item)=>{
        if(item.getElementsByTagName('a').length&&(item.getElementsByTagName('a')[0].getAttribute(attr)==value)){
            dom= item.getElementsByTagName('a')[0]
        }
    })
    return dom;
}
@withStyles(styles, {name: 'MuiAnchorAnt'})
export default class Anchor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: null,
        };
        this.links = [];
    }
    getChildContext(){
        return {
            anchor:{
                registerLink:(link)=>{
                    if(!this.links.includes(link)){
                        this.links.push(link)
                    }
                },
                unregisterLink:(link)=>{
                    const index = this.links.indexOf(link);
                    if (index !== -1) {
                        this.links.splice(index, 1);
                    }
                },
                activeLink: this.state.activeLink,
                scrollTo:this.handleScrollTo,
            }
        }
    }
    static childContextTypes = {
        anchor: PropTypes.object,
    };
    componentDidMount(){
        const getTarget = this.props.target || getDefaultTarget;
        const targetElement=getTarget();
        targetElement.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        const getTarget = this.props.target || getDefaultTarget;
        const targetElement=getTarget();
        if(targetElement.addEventListener){ //如果为true的话，进入
            targetElement.removeEventListener('scroll',this.handleScroll,false);
        }else if( target.attachEvent ){
            //IE8以下版本
            targetElement.detachEvent('on'+ 'scroll',this.handleScroll,false);
        }
    }

    componentDidUpdate() {
        this.updateInk();
    }
    handleScroll = () => {
        if (this.animating) {
            return;
        }
        const { offsetTop, bounds } = this.props;
        this.setState({
            activeLink: this.getCurrentAnchor(offsetTop, bounds),
        });
    }
    handleScrollTo=(link)=>{
        const { offsetTop, target = getDefaultTarget } = this.props;
        this.animating = true;
        this.setState({ activeLink: link });
        scrollTo(link,offsetTop,target, () => {
            this.animating = false;
        })
    }
    getCurrentAnchor(offsetTop = 0,bounds=5){
        let activeLink = '';
        if (typeof document === 'undefined') {
            return activeLink;
        }
        const linkSections=[];
        this.links.forEach(link=>{
            const target=document.getElementById(link.substring(1));
            //判断是否边界范围以上的
            if(target&&getOffsetTop(target)<offsetTop+bounds){
                const top = getOffsetTop(target);
                linkSections.push({
                    link,
                    top,
                });
            }
        })
        if (linkSections.length) {
            const maxSection = linkSections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
            return maxSection.link;
        }
        return '';
    }
    updateInk=()=>{
        if (typeof document === 'undefined') {
            return;
        }
        if (this.state.activeLink) {
            const linkNode=getDomByAttr(this.refs.links.getElementsByTagName('div'),'href',this.state.activeLink)
            this.refs.ink.style.top = `${(linkNode).offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        }
    }
    render() {
        const {
            className = '',
            classes,
            style,
            offsetTop,
            affix,
            showInkInFixed,
            children,
        } = this.props;
        const { activeLink } = this.state;
        const inkClass = classNames(classes['yhAnchorInkBall'], {
            [classes['visible']]: activeLink,
        });

        const wrapperClass = classNames(className, classes['yhAnchorWrapper']);
        const anchorComponent=(
            <div className={wrapperClass} style={style}>
                <div className={classes['yhAnchor']} ref="links">
                    <div className={classes["yhAnchorInk"]}><span className={inkClass} ref="ink" ></span></div>
                    {
                        children.map(function (child) {
                            return child
                        })
                    }
                </div>
            </div>
        )
        return !affix?anchorComponent: (
            <div offsetTop={offsetTop}>
                {anchorComponent}
            </div>
        )

    }
}




