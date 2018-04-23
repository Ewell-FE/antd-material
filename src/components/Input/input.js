import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {withStyles} from 'material-ui/styles';
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
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.input))
    }

    render() {
        const props = {...this.props}
        const {classes} = this.props
        let otherProps = omit(props, ['prefix', 'suffix', 'onPressEnter', 'withRef', 'style', 'classes'])
        if ('value' in props) {
            otherProps.value = fixControlledValue(props.value);
        }
        let className = classnames(
            classes.root,
            props.className,
            classes[props.size],
            {[classes.leftIcon]: props.prefix},
            {[classes.rightIcon]: props.suffix}
        )
        let style = props.style || {}
        let otherStyle = omit(props.style, ['width', 'height'])
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
    size: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    withRef: PropTypes.func,
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    style: PropTypes.object,
};