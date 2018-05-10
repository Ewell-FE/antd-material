import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Icon from '../Icon'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';

const styles = theme => ({
    top:{
        fontSize: '14px',
        lineHeight: '1.5',
        color: 'rgba(0,0,0,.65)',
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        zIndex: '10',
        position: 'fixed',
        right: '100px',
        bottom: '50px',
        height: '40px',
        width: '40px',
        cursor: 'pointer',
    },
    content:{
        height: '40px',
        width: '40px',
        borderRadius: '20px',
        backgroundColor: 'rgba(0,0,0,.45)',
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
    },
    icon:{
        fontSize:'16px',
        margin: '8px auto',
        width: '14px',
        height: '16px',
    }
});
//默认target为window
function getDefaultTarget() {
    return window;
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

//滚动到头部而非直接跳转
function scrollTo(target,callback = () => { }) {
    const Target=target();
    const scrollTop=getScroll(Target,true);
    //初始时间
    const startTime = Date.now();
    const frameFunc=()=>{
        //当前时间
        const timestamp=Date.now();
        const time=timestamp-startTime;
        //加特效的滚动
        Target.scrollTo(window.pageXOffset,easeInOutCubic(time,scrollTop,0,450));
        //超过持续时间进行回调
        if(time<450){
            reqAnimFrame(frameFunc)
        }else {
            callback()
        }
    }
    reqAnimFrame(frameFunc);
}

@withStyles(styles, {name: 'MuiBackTopAnt'})
export default class BackTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    static defaultProps = {
        visibilityHeight: 400,
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
            targetElement.detachEvent('onscroll',this.handleScroll,false);
        }
    }
    handleScrollTo=()=>{
        const {  target = getDefaultTarget,onClick=()=>{} } = this.props;
        this.animating = true;
        onClick();
        scrollTo(target, () => {
            this.animating = false;
        })
    }
    handleScroll = () => {
        const { visibilityHeight, target = getDefaultTarget } = this.props;
        const scrollTop = getScroll(target(), true);
        this.setState({
            visible: scrollTop > visibilityHeight,
        });
    }
    render() {
        const {
            className = '',
            classes,
            children,
        } = this.props;
        const classString = classNames(classes.top, className);
        const divProps = omit(this.props, [
            'className',
            'children',
            'visibilityHeight',
            'target',
        ]);
        const defaultElement = (
            <div className={classes.content}>
                <div className={classes.icon} >
                    <Icon type='arrow-up' />
                </div>
            </div>
        );
        return this.state.visible ? (
            <div  {...divProps} className={classString}  onClick={this.handleScrollTo}>
                {children || defaultElement}
            </div>
        ) : null;

    }
}
BackTop.propTypes = {
    target:PropTypes.func,//设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
    visibilityHeight:PropTypes.number, //滚动高度达到此参数值才出现 BackTop
    onClick:PropTypes.func,//点击按钮的回调函数
}




