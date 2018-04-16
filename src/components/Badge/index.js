import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import warning from 'warning'
import style from '../Style'
import classnames from 'classnames'

const styles = theme => ({
    badgeWrap:{
        borderRadius:'10px',
        minWidth: '20px',
        marginRight:'13px',
    },
    badgeContent:{
        display:'inline-flex',
        verticalAlign: 'middle'
    },
    badge:{
        display:'none'
    },
    badgefake:{
        minWidth: '20px',
        width: 'initial',
        padding: '0 6px',
        height:'20px',
        lineHeight:'20px',
        fontSize: '0.75rem',
        borderRadius:'10px',
        position: 'absolute',
        top: '-12px',
        right: '-12px',
        display: 'flex',
        zIndex:'1',
        background:style.theme.colors.error,
        color:'#fff',
        flexWrap:' wrap',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot:{
        position: 'absolute',
        top: '-5px',
        right: '-3px',
        height: '8px',
        width: '8px',
        borderRadius: '100%',
        background: style.theme.colors.error,
        zIndex: '10',
        boxShadow: '0 0 0 1px #fff'
    },
    'status-dot':{
        width: '8px',
        height: '8px',
        display: 'inline-block',
        borderRadius:'50%'
    },
    'status-text':{
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: '12px',
        marginLeft: '8px'
    },
    'status-success': {
        background: style.theme.colors.success
    },
    'status-warn': {
        background: style.theme.colors.warning
    },
    'status-processing': {
        background: style.theme.colors.info,
        '&::after':{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid #108ee9',
            content: '',
            '-webkit-animation': 'transform:rotate 1.2s infinite ease-in-out',
            animation: 'antStatusProcessing 1.2s infinite ease-in-out'
        }
    },
    'status-error': {
        background: style.theme.colors.error
    },
    'status-default': {
        background: style.theme.colors.normal
    },
});

@withStyles(styles)
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {classes,badgeContent,overflowCount,unshowZero,dot,status,text,style,children} = this.props
        const isDot = dot || status;
        let overCount = overflowCount;
        if(overflowCount === undefined){
            overCount = 99;
        }
        let displayCount = badgeContent > overCount ? `${overCount}+` : badgeContent;
        // dot mode don't need count
        if (isDot) {
            displayCount = '';
        }

        const isZero = displayCount === '0' || displayCount === 0;
        const isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
        const hidden = (isEmpty || (isZero && unshowZero)) && !isDot;
        warning(
            !(children && status),
            '`Badge[children]` and `Badge[status]` cannot be used at the same time.',
        );

        //状态点的文本
        const statusText = (hidden || !text) ? null : (
            <span className={classes["status-text"]}>{text}</span>
        );
        if (!children && status) {
            return (
                <span className={classes.badgeWrap}>
                    <span className={classnames(classes['status-dot'],classes[`status-${status}`])}></span>
                    {statusText}
                </span>
            );
        }
        return (
            badgeContent === 0 && unshowZero?
            <span className={classes.badgeContent}>{children}</span>:
                overCount < badgeContent?
                <Badge className={classnames(classes.badgeWrap)} badgeContent={`${overCount}+`} color={"error"} classes={{badge:classes.badge}}>
                    <span className={classes.badgeContent}>{children}</span>
                    <span className={classes.badgefake} style={style}>{`${overCount}+`}</span>
                </Badge>:
                    dot?
                <Badge className={classes.badgeWrap} badgeContent={badgeContent} color={"error"} classes={{badge:classes.badge}}>
                    <span className={classes.badgeContent}>{children}</span>
                    <span className={classes.dot} style={style}></span>
                </Badge>:
                <Badge className={classes.badgeWrap} badgeContent={badgeContent} color={"error"} classes={{badge:classes.badge}} style={this.props.style}>
                    <span className={classes.badgeContent}>{children}</span>
                    <span className={classes.badgefake} style={style}>{badgeContent}</span>
                </Badge>
        )
    }
}
App.propTypes={
    badgeContent:PropTypes.number,//数据
    overflowCount:PropTypes.number,//封顶数据
    unshowZero:PropTypes.bool,//徽标数为领，true为不显示，false：显示
    status:PropTypes.oneOf(['success', 'processing', 'default','error','warn']),//设置 Badge 为状态点
    text:PropTypes.string,//在设置了 status 的前提下有效，设置状态点的文本
}
export default withStyles(styles,{name:'MuiBadge-ant'})(App);

