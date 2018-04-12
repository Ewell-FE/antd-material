import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Radio from 'material-ui/Radio';
import classnames from 'classnames'

const styles = theme => {
    let fontSize = theme.typography.fontSize,
        activeColor = theme.radio.primary,
        fontColor = theme.palette.text.primary
    return {
        root: {
            display: 'inline-block',
            fontSize: fontSize,
            cursor: 'pointer',
            color: fontColor,
            height: 36,
            lineHeight: '34px',
            border: '1px solid ' + theme.colors.normal,
            borderTopWidth: '1.02px',
            background: '#fff',
            borderLeft: 0,
            padding: '0 15px',
            '&:first-child': {
                borderRadius: '4px 0 0 4px',
                borderLeft: '1px solid ' + theme.colors.normal,
            },
            '&:last-child': {
                borderRadius: '0 4px 4px 0',
            },
            '&:hover': {
                color: activeColor
            }
        },
        large: {
            height: 40,
            lineHeight: '38px',
            fontSize: '16px',
        },
        small: {
            height: 32,
            lineHeight: '30px',
            padding: '0 7px',
        },
        readOnly: {
            color: theme.disabled.color,
            backgroundColor: theme.disabled.backgroundColor,
            cursor: "not-allowed",
            '&:hover': {
                color: theme.disabled.color
            }
        },
        input: {
            width: 0,
            height: 0,
            opacity: 0
        },
        checked: {
            borderColor: activeColor,
            color: activeColor,
            boxShadow: '-1px 0 0 0 ' + activeColor,
            '&:first-child': {
                boxShadow: 'none',
                borderLeft: '1px solid ' + activeColor,
            },
            '&:hover': {
                color: activeColor
            }
        },
        checkedDisable: {
            color: '#fff',
            background: theme.radio.disabled,
            borderColor: theme.colors.normal,
            '&:first-child': {
                boxShadow: 'none',
                borderLeft: '1px solid ' + theme.colors.normal,
            },
            '&:hover': {
                color: '#fff'
            }
        }
    }
};
@withStyles(styles, {name: 'MuiRadioButton-ant'})
export default class app extends Component {
    render() {
        const {children, classes, disabled, defaultChecked, checked, value, style, name, size} = this.props
        let root = classnames(classes.root, disabled && classes.readOnly,
            checked && classes.checked, size === 'small' && classes.small, size === 'large' && classes.large,
            checked && disabled && classes.checkedDisable)
        return (
            <label className={root} style={style}>
                <Radio disabled={disabled}
                       disableRipple
                       name={name}
                       checked={checked}
                       onChange={this.props.onChange}
                       value={value}
                       defaultChecked={defaultChecked}
                       classes={{default: classes.input}}/>
                {children}
            </label>
        )
    }
}
app.propTypes = {
    disabled: PropTypes.bool,//当前选项是否只读
    defaultChecked: PropTypes.bool, //默认是否选中
    checked: PropTypes.bool, //是否选中
    value: PropTypes.string, //根据 value 进行比较，判断是否选中
    size: PropTypes.string, //大小设定
    onChange: PropTypes.func, // 选中改变
    style: PropTypes.object,
};