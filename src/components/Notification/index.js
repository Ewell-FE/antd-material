import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import style from '../Style'
import './style.less'
import classnames from 'classnames'
import Notification from 'rc-notification';

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
    },
    'ant-notification':{
        position: 'fixed',
        zIndex: '1010',
        width: '335px',
        marginRight: '24px',
    }
});
let typeToIcon = {
    'success': 'check-circle',
    'warning': 'exclamation-circle',
    'info': 'info-circle',
    'error': 'times-circle'
}

const notificationInstance = {};
let defaultDuration = 4500;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement = 'topRight';//'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
let defaultGetContainer;

function setNotificationConfig(options) {
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

function getPlacementStyle(placement) {
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

function getNotificationInstance(prefixCls, placement) {
    const cacheKey = `${prefixCls}-${placement}`;
    //实例化
    if (!notificationInstance[cacheKey]) {
         Notification.newInstance({
            prefixCls,
            className: `${prefixCls}-${placement}`,
            style: getPlacementStyle(placement),
            getContainer: defaultGetContainer,
        }, (n) => notificationInstance[cacheKey] = n);
    }
    return notificationInstance[cacheKey];
}
function notice(args) {
    const outerPrefixCls = args.prefixCls || 'MuiAvatar-ant-notification';
    const prefixCls = `${outerPrefixCls}-notice`;
    const duration = args.duration === undefined ? defaultDuration : args.duration;

    let iconNode= null;
    if (args.icon) {
        iconNode = (
            <span className={`${prefixCls}-icon`}><i className={classnames(`fa fa-${args.icon}`)} /></span>
        );
    } else if (args.type) {
        const iconType = typeToIcon[args.type]
        iconNode = (
            <span style={{color:style.theme.colors[args.type],marginBottom:'32px'}}><i className={classnames(`fa fa-${iconType}`)} /></span>
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
@withStyles(styles)
export class App extends Component {}
const api = {
    open: notice,
    close(key) {
        Object.keys(notificationInstance)
            .forEach(cacheKey => notificationInstance[cacheKey].removeNotice(key));
    },
    config: setNotificationConfig,
    destroy() {
        Object.keys(notificationInstance).forEach(cacheKey => {
            notificationInstance[cacheKey].destroy();
            delete notificationInstance[cacheKey];
        });
    },
};

['success', 'info', 'warning', 'error'].forEach((type) => {
    api[type] = (args) => api.open({
        ...args,
        type,
    });
});

api.warn = api.warning

export default api;

