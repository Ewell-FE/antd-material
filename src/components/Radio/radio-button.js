import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import classnames from 'classnames'
import ReactDOM from "react-dom";
function getLineHeight(str) {
    let num = str.split('px')[0]
    return Number(num-2) + 'px'
}

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
            height: theme.size.default,
            lineHeight: getLineHeight(theme.size.default),
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
            height: theme.size.large,
            lineHeight: getLineHeight(theme.size.large),
        },
        small: {
            height: theme.size.small,
            lineHeight: getLineHeight(theme.size.small),
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
@withStyles(styles, {name: 'MuiRadioButtonAnt'})
export default class app extends Component {

    componentDidMount() {
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.input))
    }

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
                       inputRef={ref=>this.input = ref}
                       checked={checked}
                       onChange={this.props.onChange}
                       value={value}
                       defaultChecked={defaultChecked}
                       classes={{root: classes.input}}/>
                {children}
            </label>
        )
    }
}
app.propTypes = {
    disabled: PropTypes.bool,//当前选项是否只读
    defaultChecked: PropTypes.bool, //默认是否选中
    checked: PropTypes.bool, //是否选中
    value: PropTypes.any, //根据 value 进行比较，判断是否选中
    size: PropTypes.string, //大小设定
    onChange: PropTypes.func, // 选中改变
    style: PropTypes.object,
};