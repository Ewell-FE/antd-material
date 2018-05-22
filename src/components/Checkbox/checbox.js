import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import _ from 'lodash';
import ReactDOM from "react-dom";
const styles = (theme)=> {
    let fontSize = theme.typography.fontSize,
        activeColor = theme.radio.primary,
        fontColorPar = theme.palette.text.primary
    return {
        root: {
            display: 'inline-block',
            fontSize: fontSize,
            cursor: 'pointer',
            marginRight: 8,
            color: fontColorPar
        },
        indeterminate: {
            '&>$default': {
                color: activeColor
            }
        },
        readOnly: {
            cursor: 'not-allowed',
            color: theme.disabled.color,
            '&>$default': {
                color: theme.disabled.color,
            }
        },
        label: {
            padding: '0 8px',
            verticalAlign: '-1.5px',
            color: 'inherit',
        },
        default: {
            width: 16,
            height: 16,
            '& svg': {
                fontSize: '22px'
            },
            '&$checked': {
                color: activeColor
            }
        }, //不可删除
        checked: {},
    }
}
@withStyles(styles, {name: 'MuiCheckboxAnt'})
class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.defaultChecked || props.checked || false
        }
    }

    static defaultProps = {
        defaultChecked: false,
        name: '',
        disabled: false,
        indeterminate: false
    }
    onChange = event => {
        if (!_.has(this.props, 'checked')) {
            this.setState({
                checked: event.target.checked
            })
        }
        this.props.onChange && this.props.onChange(event)
    }

    componentDidMount() {
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.input))
    }


    render() {
        const {classes, children, checked, disabled, indeterminate, className, style}=this.props;
        let otherProps = _.omit(this.props, ['classes', 'children', 'className', 'style'])
        let checkClass = {checked: classes.checked, root: classes.default, disabled: disabled && classes.disabled}
        let checkedValue = !_.has(this.props, 'checked') ? this.state.checked : checked
        return (
            <label className={classnames(classes.root,disabled&&classes.readOnly,
                indeterminate&&classes.indeterminate,className)} style={style}>
                <Checkbox
                    inputRef={ref=>this.input = ref}
                    {...otherProps}
                    onChange={this.onChange}
                    checked={checkedValue}
                    classes={checkClass}
                    disableRipple/>
                <span className={classes.label}>{children}</span>
            </label>
        )
    }
}

app.propsTypes = {
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    name: PropTypes.string,
    indeterminate: PropTypes.bool,
    indeterminateIcon: PropTypes.node,
    icon: PropTypes.node,
    checkedIcon: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.string, //类名
    style: PropTypes.object, //行内样式
}

export default app