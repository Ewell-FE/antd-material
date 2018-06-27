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
            verticalAlign: '-1px',
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
    static contextTypes = {
        onChange: PropTypes.func,
        arr: PropTypes.array,
    };
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({ checked: nextProps.value });
        }
    }
    onChange = (event,value) => {
        if (!_.has(this.props, 'checked')) {
            this.setState({
                checked: event.target.checked
            })
            this.context.onChange&&this.context.onChange(event,value)
        }
        this.props.onChange && this.props.onChange(event)
    }

    componentDidMount() {
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.input))
    }


    render() {
        const {classes, children, checked, disabled, indeterminate, className, style,value}=this.props;
        const {arr}=this.context
        let otherProps = _.omit(this.props, ['classes', 'children', 'className', 'style','type','value'])
        let checkClass = {checked: classes.checked, root: classes.default, disabled: disabled && classes.disabled}
        let checkedValue = !_.has(this.props, 'checked') ? this.state.checked : checked
        let flag = _.has(this.props, 'checked') ? false : (arr ? true : false)
        return (
            <label className={classnames(classes.root,disabled&&classes.readOnly,
                indeterminate&&classes.indeterminate,className)} style={style}>
                <Checkbox
                    inputRef={ref=>this.input = ref}
                    {...otherProps}
                    onChange={(e)=>this.onChange(e,value)}
                    checked={flag?_.indexOf(arr,checkedValue||value)!==-1:checkedValue}
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