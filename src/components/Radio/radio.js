import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames'
import ReactDOM from "react-dom";
import Icon from '../Icon'
const styles = theme => {
    let fontSize = theme.typography.fontSize,
        activeColor = theme.radio.primary,
        fontColor = theme.palette.text.secondary,
        fontColorPar = theme.palette.text.primary
    return {
        rootRadio: {
            display: 'inline-block',
            fontSize: fontSize,
            cursor: 'pointer',
            marginRight: 8,
            color: fontColorPar
        },
        readOnly: {
            color: theme.disabled.color,
            cursor: "not-allowed"
        },
        root: {
            height: 16,
            width: 16,
            fontSize: fontSize,
            color: fontColor,
            '&$checked': {
                color: activeColor
            },
        },
        disabled: {
            color: theme.disabled.color
        },
        label: {
            padding: '0 8px'
        },
        checked: {

        },
        imgCheck:{
            display:'inline-block',
            width:16,
            height:16,
            verticalAlign:'middle',
            '& i':{
                fontSize: 20,
                marginTop:-3
            }
        },
        imgUncheck:{
            display:'inline-block',
            width:16,
            height:16,
            verticalAlign:'middle',
            '& i':{
                fontSize: 20,
                marginTop:-3
            }
        },
        imgCheckDisabled:{

        },
        imgUncheckDisabled:{

        }
    }
};


@withStyles(styles, {name: 'MuiRadioAnt'})
export default class app extends Component {
    componentDidMount() {
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.input))
    }
    static defaultProps = {
        classes:{},
        icon:<Icon type='circle-o'/>,
        checkedIcon:<Icon type='dot-circle-o'/>
    }

    render() {
        const {children, classes, disabled, defaultChecked, checked, value, style, name,checkedIcon,icon} = this.props
        let root = classnames(classes.rootRadio, disabled && classes.readOnly)
        let radioClass = {}
        Object.assign(radioClass, {
            root: classes.root,
            checked: classes.checked,
            disabled: classes.disabled
        })
        return (
            <label className={root} style={style}>
                <Radio disabled={disabled}
                       inputRef={ref=>this.input = ref}
                       disableRipple
                       checked={checked}
                       name={name}
                       onChange={this.props.onChange}
                       value={value}
                       defaultChecked={defaultChecked}
                       classes={radioClass}
                       icon={<span className={classnames(classes.imgUncheck,disabled&&classes.imgUncheckDisabled)}>{icon}</span>}
                       checkedIcon={<span className={classnames(classes.imgCheck,disabled&&classes.imgCheckDisabled)}>{checkedIcon}</span>}
                />
                <span className={classes.label}>
                      {children}
                    </span>
            </label>
        )
    }
}
app.propTypes = {
    disabled: PropTypes.bool,//当前选项是否只读
    defaultChecked: PropTypes.bool, //默认是否选中
    checked: PropTypes.bool, //是否选中
    value: PropTypes.string, //根据 value 进行比较，判断是否选中
    onChange: PropTypes.func, // 选中改变
    style: PropTypes.object, //行内样式
    icon:PropTypes.node,
    checkedIcon:PropTypes.node,
};
