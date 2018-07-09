import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import omit from 'omit.js';
import classnames from 'classnames'

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

const styles = theme => {
    return {
        root: {
            appearance: "none",
            boxSizing: "border-box",
            width: "100%",
            padding: "4px 11px",
            backgroundColor: "#fff",
            border: "1px solid #d9d9d9",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, .05)",
            borderRadius: "4px",
            outline: "0",
            resize: "vertical",
            transition: "all .3s",
            "&:hover": {
                borderColor: theme.colors.primary,
            },
            "&:focus": {
                borderColor: theme.colors.primary,
                boxShadow: `0 0 0 2px ${theme.primary[100]}`
            },
            "&:disabled": {
                cursor: "not-allowed",
            }
        },
        inputIconWrapper: {
            "listStyle": "none",
            "position": "relative",
            "display": "inline-block",
            "width": "100%",
            "& > input": {
                width: "100%"
            },
        },
        inputGroup: {
            fontSize: "14px",
            lineHeight: "1.5",
            color: "rgba(0,0,0,.65)",
            boxSizing: "border-box",
            margin: "0",
            padding: "0",
            listStyle: "none",
            position: "relative",
            display: "table",
            borderCollapse: "separate",
            borderSpacing: "0",
            width: "100%",
            "& > input": {
                borderRadius: 0,
                width: "100%"
            },
            "& > .inputGroupAddon,& > input": {
                display: "table-cell"
            },
            "& .inputGroupAddon": {
                width: "1px",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "1",
                color: "rgba(0,0,0,.65)",
                textAlign: "center",
                backgroundColor: "#fafafa",
                border: "1px solid #d9d9d9",
                borderRadius: "4px",
                position: "relative",
                transition: " all .3s",
                verticalAlign: "middle",
                "&.is-string": {
                    padding: "0 11px",
                },
                "&:first-child,&:first-child .yh-select-selection": {
                    borderRight: 0,
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                },
                "&:last-child,&:last-child .yh-select-selection": {
                    borderLeft: 0,
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0
                },
                "& .yh-select-selection": {
                    backgroundColor: "inherit",
                    margin: "-1px",
                    border: "1px solid transparent",
                    boxShadow: "none"
                },
                "& .yh-select-open .yh-select-selection,.yh-select-selection:focus,.yh-select-selection:hover":{
                    boxShadow: "none",
                    borderColor:'transparent'
                }
            }
        },
        icon: {
            "position": "absolute",
            "top": "50%",
            "transform": "translateY(-50%)",
            "z-index": "2",
            "line-height": "0",
            "color": "rgba(0, 0, 0, 0.2)",
            "marginTop": "-1px",
            "&.small": {
                fontSize: 12
            },
            "&.default": {
                fontSize: 14
            },
            "&.large": {
                fontSize: 16
            }
        },
        inputSuffixL: {
            left: 12
        },
        inputSuffixR: {
            right: 12
        },
        default: {
            height: theme.size.default
        },
        small: {
            height: theme.size.small
        },
        large: {
            height: theme.size.large
        },
        readonly: {
            border: 0,
            boxShadow: 'none'
        },
        disabled: {
            border: 0,
            boxShadow: 'none'
        },
        error: {
            borderColor: theme.colors.error,
        },
        warning: {
            borderColor: theme.colors.warning,
        },
        success: {
            borderColor: theme.colors.success,
        },
        leftIcon: {
            paddingLeft: 30
        },
        rightIcon: {
            paddingRight: 30
        }
    }
};
@withStyles(styles, {name: 'MuiInputAnt'})

export default class Input extends Component {
    static defaultProps = {
        type: 'text',
        disabled: false,
        size: 'default'
    }

    onPressEnter(e) {
        if (e.which === 13) {
            this.props.onPressEnter && this.props.onPressEnter(e)
        }
        return;
    }

    componentDidMount() {
        this.props.withRef && this.props.withRef(this.input)
    }

    render() {
        const props = {...this.props}
        const {classes} = this.props
        let otherProps = omit(props, ['prefix', 'suffix', 'onPressEnter', 'withRef', 'style', 'classes', 'className'])
        if ('value' in props) {
            otherProps.value = fixControlledValue(props.value);
        }
        let className = classnames(
            classes.root,
            props.className,
            {[classes[props.size]]: props.type !== 'textarea'},
            {[classes.leftIcon]: props.prefix},
            {[classes.rightIcon]: props.suffix}
        )
        let style = props.style || {}
        let otherStyle = omit(props.style, ['width', 'height'])
        if (props.addonbefore || props.addonafter) {
            return (
                <span className={classnames(classes.inputGroup)}
                      style={{width:style.width,height:style.height}}>
                    {<span
                        className={classnames("inputGroupAddon",{"is-string":typeof props.addonbefore==="string"})}>{props.addonbefore}</span>}
                     <input type="text"
                            ref={ref=>this.input =ref}
                            className={className}
                            style={otherStyle}
                            onKeyPress={this.onPressEnter.bind(this)}
                         {...otherProps}
                     />
                    {<span
                        className={classnames("inputGroupAddon",{"is-string":typeof props.addonafter==="string"})}>{props.addonafter}</span>}
            </span>
            )
        }
        if (props.suffix || props.prefix) {
            return (
                <span className={classnames(classes.inputIconWrapper)}
                      style={{width:style.width,height:style.height}}>
                     <input type="text"
                            ref={ref=>this.input =ref}
                            className={className}
                            style={otherStyle}
                            onKeyPress={this.onPressEnter.bind(this)}
                         {...otherProps}
                     />
                    {props.prefix &&
                    <span className={classnames(classes.icon,classes.inputSuffixL,[props.size])}>{props.prefix}</span>}
                    {props.suffix &&
                    <span className={classnames(classes.icon,classes.inputSuffixR,[props.size])}>{props.suffix}</span>}
                </span>
            )
        }
        if (props.type === 'textarea') {
            return (
                <textarea className={className}
                          ref={ref=>this.input =ref}
                          style={style}
                          onKeyPress={this.onPressEnter.bind(this)}
                    {...otherProps}
                />
            )
        }
        return (
            <input type="text"
                   ref={ref=>this.input =ref}
                   className={className}
                   style={style}
                   onKeyPress={this.onPressEnter.bind(this)}
                {...otherProps}
            />
        )
    }
}
Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    suffix: PropTypes.node,
    prefix: PropTypes.node,
    addonbefore: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    addonafter: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    size: PropTypes.oneOf(['small', 'default', 'large']),
    id: PropTypes.string,
    disabled: PropTypes.bool,
    withRef: PropTypes.func,
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    style: PropTypes.object,
};