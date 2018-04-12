import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import style from '../Style'
import classnames from 'classnames'
import Notification from 'rc-notification';
import classzz from '@/classes'

const styles = theme => ({
    success: {
        color: style.theme.colors.success
    },
    warn: {
        color: style.theme.colors.warning
    },
    info: {
        color: style.theme.colors.info
    },
    error: {
        color: style.theme.colors.error
    }
});
let Icon = {
    'success': 'fa-check-circle',
    'warn': 'fa-exclamation-circle',
    'info': 'fa-info-circle',
    'error': 'fa-times-circle'
}
// export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

const notificationInstance = {};
let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement = 'topRight';
let defaultGetContainer;

@withStyles(styles)
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.getNotificationInstance('ant-notification','top')
    }
    getNotificationInstance(prefixCls, placement) {
        debugger
       console.log(Notification)
        const cacheKey = `${prefixCls}-${placement}`;
        if (!notificationInstance[cacheKey]) {
            notificationInstance[cacheKey] = (Notification).newInstance({
                prefixCls,
                className: `${prefixCls}-${placement}`,
                style: this.getPlacementStyle(placement),
                getContainer: defaultGetContainer,
            });
        }
        console.log(notificationInstance)
        return notificationInstance[cacheKey];
    }

    setNotificationConfig(options) {
        const { duration, placement, bottom, top, getContainer } = options;
        if (duration !== undefined) {
            defaultDuration = duration;
        }
        if (placement !== undefined) {
            defaultPlacement = placement;
        }
        if (bottom !== undefined) {
            defaultBottom = bottom;
        }
        if (top !== undefined) {
            defaultTop = top;
        }
        if (getContainer !== undefined) {
            defaultGetContainer = getContainer;
        }
    }

    getPlacementStyle(placement) {
        let style;
        switch (placement) {
            case 'topLeft':
                style = {
                    left: 0,
                    top: defaultTop,
                    bottom: 'auto',
                };
                break;
            case 'topRight':
                style = {
                    right: 0,
                    top: defaultTop,
                    bottom: 'auto',
                };
                break;
            case 'bottomLeft':
                style = {
                    left: 0,
                    top: 'auto',
                    bottom: defaultBottom,
                };
                break;
            default:
                style = {
                    right: 0,
                    top: 'auto',
                    bottom: defaultBottom,
                };
                break;
        }
        return style;
    }

    notice(args) {
        const outerPrefixCls = args.prefixCls || 'ant-notification';
        const prefixCls = `${outerPrefixCls}-notice`;
        const duration = args.duration === undefined ? defaultDuration : args.duration;

        let iconNode= null;
        if (args.icon) {
            iconNode = (
                <span className={`${prefixCls}-icon`}>
        {args.icon}
      </span>
            );
        } else if (args.type) {
            const iconType = typeToIcon[args.type];
            iconNode = (
                <Icon
                    className={`${prefixCls}-icon ${prefixCls}-icon-${args.type}`}
                    type={iconType}
                />
            );
        }

        const autoMarginTag = (!args.description && iconNode)
            ? <span className={`${prefixCls}-message-single-line-auto-margin`} />
            : null;

        getNotificationInstance(outerPrefixCls, args.placement || defaultPlacement).notice({
            content: (
                <div className={iconNode ? `${prefixCls}-with-icon` : ''}>
                    {iconNode}
                    <div className={`${prefixCls}-message`}>
                        {autoMarginTag}
                        {args.message}
                    </div>
                    <div className={`${prefixCls}-description`}>{args.description}</div>
                    {args.btn ? <span className={`${prefixCls}-btn`}>{args.btn}</span> : null}
                </div>
            ),
            duration,
            closable: true,
            onClose: args.onClose,
            key: args.key,
            style: args.style || {},
            className: args.className,
        });
    }
    render() {
        const {classes} = this.props
        console.log(Notification)
        return (
            <div>
                {/*<Notification>消息通知框</Notification>*/}
            </div>
        )
    }
}
App.propTypes={
    top:PropTypes.number,//消息距离顶部的位置
    duration:PropTypes.number,//默认4.5秒后自动关闭，配置为null则不自动关闭
    message:PropTypes.string,//通知提醒标题,必选
    description:PropTypes.string,//通知提醒内容，必选
    btn:PropTypes.element,//自定义关闭按钮
    onClose:PropTypes.func,//点击默认关闭按钮时触发的回调函数
}
export default withStyles(styles,{name:'MuiAvatar-Notification'})(App);

