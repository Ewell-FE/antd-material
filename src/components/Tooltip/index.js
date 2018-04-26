import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Tooltip from 'material-ui/Tooltip';
import {withStyles} from 'material-ui/styles';
import _ from 'lodash'

const styles = theme => {
    let bgc = theme.tooltip.background
    return {
        tooltip: {
            backgroundColor: bgc,
            borderRadius: '4px',
            minHeight: 32,
            padding: '6px 8px',
            position:'relative',
            color:theme.tooltip.color,
            fontSize:theme.tooltip.fontSize,
            "&:after": {
                content: '""',
                width: 0,
                height: 0,
                position: 'absolute',
                borderColor: 'transparent',
                borderStyle: 'solid',
                opacity:0.9
            }
        },
        tooltipPlacementLeft:{
            "&:after": {
                top: '50%',
                marginTop: '-3px',
                right: -6,
                borderWidth: '6px 0 6px 6px',
                borderLeftColor:bgc,
            }
        },
        tooltipPlacementLeftEnd:{
            "&:after": {
                bottom:'25%',
                right: -6,
                borderWidth: '6px 0 6px 6px',
                borderLeftColor:bgc,
            }
        },
        tooltipPlacementLeftStart:{
            "&:after": {
                top: '25%',
                right: -6,
                borderWidth: '6px 0 6px 6px',
                borderLeftColor:bgc,
            }
        },
        tooltipPlacementRightStart: {
            "&:after": {
                top: '25%',
                left: -5,
                borderWidth: '6px 6px 6px 0',
                borderRightColor:bgc,
            }
        },
        tooltipPlacementRight: {
            "&:after": {
                top: '50%',
                marginTop: '-3px',
                left: -5,
                borderWidth: '6px 6px 6px 0',
                borderRightColor:bgc,
            }
        },
        tooltipPlacementRightEnd: {
            "&:after": {
                bottom: '25%',
                left: -5,
                borderWidth: '6px 6px 6px 0',
                borderRightColor:bgc,
            }
        },
        tooltipPlacementTopStart: {
            "&:after": {
                bottom:-5,
                left:'25%',
                borderTopColor:bgc,
                borderWidth: '6px 6px 0 6px',
            }
        },
        tooltipPlacementTop: {
            '&:after': {
                bottom: -5,
                marginLeft: '-3px',
                left: '50%',
                borderTopColor: bgc,
                borderWidth: '6px 6px 0 6px',
            }
        },
        tooltipPlacementTopEnd: {
            "&:after": {
                bottom:-5,
                right:'25%',
                borderTopColor:bgc,
                borderWidth: '6px 6px 0 6px',
            }
        },
        tooltipPlacementBottomStart: {
            "&:after": {
                top: -5,
                left:'25%',
                borderWidth: '0 6px 6px',
                borderBottomColor: bgc,
            }
        },
        tooltipPlacementBottom: {
            "&:after": {
                top: -5,
                marginLeft: '-3px',
                left: '50%',
                borderWidth: '0 6px 6px',
                borderBottomColor: bgc,
            }
        },
        tooltipPlacementBottomEnd: {
            "&:after": {
                top: -5,
                right:'25%',
                borderWidth: '0 6px 6px',
                borderBottomColor:bgc,
            }
        }
    }
};

@withStyles(styles, {name: 'MuiTooltipAnt'})
export default class app extends Component {
    static defaultProps = {
        placement: 'bottom'
    }

    render() {
        const props = this.props
        const {classes, placement} = props
        let tootipClass = 'tooltipPlacement' + _.startCase(placement.split('-')[0])
        let tootipPlace = 'tooltipPlacement' + _.join(_.startCase(placement).split(' '),'')
        return (
            <Tooltip {...props}
                     classes={{tooltip: classes.tooltip, [`${tootipClass}`]: classes[`${tootipPlace}`]}}>
            </Tooltip>
        )
    }
}
app.propTypes = {
    title: PropTypes.node.isRequired, //	工具提示标题。零长度标题字符串从不显示。
    children : PropTypes.element.isRequired, //孩子
    classes:PropTypes.object, //组件样式覆盖类
    disableFocusListener:PropTypes.bool, //不要回应焦点事件。
    disableHoverListener:PropTypes.bool, //不要回应悬停事件。
    disableTouchListener:PropTypes.bool, //不要回应长按触摸事件。
    enterDelay:PropTypes.number, //显示工具提示之前等待的毫秒数。
    enterTouchDelay:PropTypes.number, //显示工具提示前，用户必须触摸该元素的毫秒数。
    leaveDelay:PropTypes.number, //隐藏工具提示之前要等待的毫秒数。
    leaveTouchDelay:PropTypes.number, //在隐藏工具提示之前用户停止触摸元素之后的毫秒数。
    id:PropTypes.string, //id
    onClose:PropTypes.func, //工具提示请求关闭时触发回调。
    onOpen:PropTypes.func, //工具提示请求打开时触发回调。
    placement:PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),//提示位置
    open:PropTypes.bool, // 如果true，显示提示。
    PopperProps:PropTypes.object, //应用于Popper元素的属性。
};