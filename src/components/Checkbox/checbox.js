import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '../Icon'
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
            },
            '& i': {
                color: theme.disabled.color,
            }
        },
        label: {
            padding: '0 8px',
            color: 'inherit',
            fontSize: 14,
        },
        default: {
            width: 16,
            height: 16,
            '& i': {
                fontSize: '20px',
                verticalAlign: 'top',
                marginTop: '-3px'
            },
            '&$checked': {
                color: activeColor
            }
        }, //不可删除
        checked: {},
        imgCheck: {
            width: 16,
            height: 16,
            display: 'inline-block',

        },
        imgCheckDisabled: {},
        imgUncheck: {
            width: 16,
            height: 16,
            '& i': {
                fontSize: '22px',
            },
        },
        imgUncheckDisabled: {},
        imgHalf: {
            width: 16,
            height: 16,
        }
    }
}
class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.defaultChecked || props.checked || false,
            value: props.defaultValue || props.value || undefined
        }
    }

    static defaultProps = {
        defaultChecked: false,
        name: '',
        disabled: false,
        indeterminate: false,
        indeterminateIcon: <Icon type='minus-square'/>,
        checkedIcon: <Icon type='check-square'/>,
        icon: <Icon type='square-o'/>,

    }

    componentWillReceiveProps(nextProps) {
        if (this.state.value !== nextProps.value || this.state.checked !== Boolean(nextProps.checked)) {
            this.setState({value: nextProps.value, checked: Boolean(nextProps.checked)});
        }
    }

    onChange = (event, value) => {
        if (!_.has(this.props, 'checked')) {
            this.setState({
                checked: !this.state.checked
            })
            this.context.onChange && this.context.onChange(event, value)
        }
        this.props.onChange && this.props.onChange(event, value)
    }

    componentDidMount() {
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.input))
    }


    render() {
        const {classes, children, disabled, indeterminate, className, style, icon, indeterminateIcon, checkedIcon}=this.props;
        const {arr}=this.context
        let otherProps = _.omit(this.props, ['classes', 'children', 'className', 'style', 'type', 'value', 'icon', 'indeterminateIcon', 'checkedIcon'])
        let checkClass = {checked: classes.checked, root: classes.default, disabled: disabled && classes.disabled}
        let {value, checked} = this.state
        return (
            <label className={classnames(classes.root,disabled&&classes.readOnly,
                indeterminate&&classes.indeterminate,className)} style={style}>
                <Checkbox
                    inputRef={ref=>this.input = ref}
                    {...otherProps}
                    onChange={(e)=>this.onChange(e,value)}
                    checked={_.indexOf(arr,value)!==-1 || checked}
                    classes={checkClass}
                    icon={<span className={classnames(classes.imgUncheck,disabled&&classes.imgUncheckDisabled)}>{icon}</span>}
                    indeterminateIcon={<span  className={classnames(classes.imgHalf)}>{indeterminateIcon}</span>}
                    checkedIcon={<span  className={classnames(classes.imgCheck,disabled&&classes.imgCheckDisabled)}>{checkedIcon}</span>}
                    disableRipple/>
                {children && <span className={classes.label}>children</span>}
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
app.contextTypes = {
    onChange: PropTypes.func,
    arr: PropTypes.array
}
export default withStyles(styles, {name: 'MuiCheckboxAnt'})(app)