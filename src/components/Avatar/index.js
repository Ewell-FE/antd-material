import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import style from '../Style'
import classnames from 'classnames'
import classzz from '@/classes'

const styles = theme => ({
    primary: classzz.Button.primary,
    modalCancel: classzz.Button.modalCancel,
    root: {
        display: 'inline-block'
    },
    lg: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        lineHeight: "40px",
        fontSize: '14px',
        textAlign: "center",
        margin: '10px',
        display: 'inline-block'
    },
    iconlg: {
        lineHeight: '40px'
    },
    sm: {
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        lineHeight: "24px",
        fontSize: '12px',
        textAlign: "center",
        margin: '10px'
    },
    default: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        lineHeight: "32px",
        fontSize: '14px',
        textAlign: "center",
        margin: '10px'
    },
    square: {
        borderRadius: "4px !important"
    },
    circle: {
        borderRadius: "50% !important"
    },
    countBox: {
        position: 'relative',
        left: "0",
        top: '0',
    },
    count: {
        position: 'absolute',
        right: "0",
        top: '-10px',
        minWidth: '20px',
        height: '20px',
        lineHeight: '18px',
        color: '#fff',
        fontSize: '12px',
        background: style.theme.colors.error,
        borderRadius: '10px',
        textAlign: 'center',
        border: '1px solid transparent',
        padding: '0 6px'
    },
    dot: {
        position: 'absolute',
        top: '-4px',
        right: '6px',
        height: '8px',
        width: '8px',
        borderRadius: '100%',
        background: style.theme.colors.error,
        zIndex: '10',
        boxShadow: '0 0 0 1px #fff'
    }
});
@withStyles(styles)
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scale: 1
        }
    }
    static defaultProps = {
        type: 'circle',
        size: 'default'
    }

    componentDidMount() {
        this.setScale();
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.children !== this.props.children
            || (prevState.scale !== this.state.scale && this.state.scale === 1)) {
            this.setScale();
        }
    }
    setScale = () => {
        const childrenNode = this.avatarChild;
        if (childrenNode) {
            const childrenWidth = childrenNode.offsetWidth;
            const avatarWidth = childrenNode.offsetHeight;
            // add 4px gap for each side to get better performance
            if (avatarWidth - 8 < childrenWidth) {
                this.setState({
                    scale: (avatarWidth - 8) / childrenWidth,
                });
            } else {
                this.setState({
                    scale: 1,
                });
            }
        }
    }

    render() {
        const {classes, size, shape, src, icon, dot, count, style,children} = this.props
        const sizeCls = classnames({
            [classes[`lg`]]: size === 'large',
            [classes[`sm`]]: size === 'small',
            [classes[`default`]]: size === 'default'
        });
        const shapeCls = classnames({
            [classes[`square`]]: shape === 'square',
            [classes[`circle`]]: shape === 'circle',
        })
        const iconCls = classnames({
            [`fa fa-2x fa-${icon} ${classes['iconlg']}`]: size === 'large',
            [`fa fa-${icon}`]: size === 'small',
            [`fa fa-lg fa-${icon}`]: size === 'default'
        })
        let childDom;
        if(this.avatarChild || this.state.scale !== 1){
            //字体大小变化
            const childrenStyle = {
                msTransform: `scale(${this.state.scale})`,
                WebkitTransform: `scale(${this.state.scale})`,
                transform: `scale(${this.state.scale})`,
                position: 'absolute',
                display: 'inline-block',
                left: `calc(50% - ${Math.round(this.avatarChild.offsetWidth / 2)}px)`,
            };
            childDom = (<span ref={span=>this.avatarChild=span} style={childrenStyle}>{children}</span>)
        }else{
            childDom = (<span ref={span=>this.avatarChild=span}>{children}</span>)
        }

        return (
            <div>
                <div className={count||dot?classes.countBox:''}>
                    {src?
                        <Avatar className={classnames(sizeCls, shapeCls)} src={src} style={style}></Avatar>:
                        <Avatar className={classnames(sizeCls, shapeCls)} style={style}>
                        {icon?
                            <span><i className={iconCls} aria-hidden="true"></i></span>: childDom}
                        </Avatar>}
                    {count?
                        <span className={classes.count}>{this.props.count}</span>:
                        dot?
                            <span className={classes.dot}></span>: null}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    shape: PropTypes.oneOf(['square', 'circle']),//形状square,circle
    size: PropTypes.oneOf(['small', 'default', 'large']),//大小
    src: PropTypes.string,//图片地址
    icon: PropTypes.string,//iconfont
    count: PropTypes.number,//
    dot: PropTypes.bool,//
}
export default withStyles(styles, {name: 'MuiAvatar-ant'})(App);

