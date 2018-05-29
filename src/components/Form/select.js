import React, {Component} from 'react'
import Select from '@/components/Select'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';

const styles = theme => {
    return {
        "inline": {
            "display": "inline-block",
            "padding": "0 10px",
            "vertical-align": "middle",
            "& label": {
                "lineHeight": "32px",
                "vertical-align": "top",
                "display": "inline-block",
                "color": "rgba(0,0,0,0.65)",
                "fontSize": "14px",
                "textAlign": "right",
                "paddingRight": "10px",
                "& .required": {
                    "color": theme.colors.error,
                    "verticalAlign": "middle"
                }
            },
            "& .input": {
                "position": "relative",
                "display": "inline-block",
                "width": "200px",
                "marginBottom": " 24px",
                "font-size": "14px"
            }
        },
        "vertical": {
            "marginBottom": "24px",
            "& label": {
                "textAlign": "left",
                "lineHeight": "32px",
                "vertical-align": "top",
                "fontSize": "14px",
                "display": "inline-block",
                "width": "100%",
                "color": "rgba(0,0,0,0.65)",
                "& .required": {
                    "color": theme.colors.error,
                    "verticalAlign": "middle"
                }
            },
            "& .input": {
                "position": "relative",
                "font-size": "14px"
            }
        },
        "horizontal": {
            "padding": "0 10px",
            "verticalAlign": "middle",
            "& label": {
                "textAlign": "right",
                "lineHeight": "32px",
                "vertical-align": "top",
                "fontSize": "14px",
                "display": "inline-block",
                "color": "rgba(0,0,0,0.65)",
                "paddingRight": "10px",
                "& .required": {
                    "color": theme.colors.error,
                    "verticalAlign": "middle"
                }
            },
            "& .input": {
                "position": "relative",
                "display": "inline-block",
                "marginBottom": "24px",
                "font-size": "14px"
            }
        },
        "grid": {
            "padding": "0 10px",
            "verticalAlign": "middle",
            "& label": {
                "textAlign": "right",
                "lineHeight": "32px",
                "vertical-align": "top",
                "fontSize": "14px",
                "display": "inline-block",
                "color": "rgba(0,0,0,0.65)",
                "paddingRight": "10px",
                "& .required": {
                    "color": theme.colors.error,
                    "verticalAlign": "middle"
                }
            },
            "& .input": {
                "position": "relative",
                "display": "inline-block",
                "marginBottom": "24px",
                "font-size": "14px"
            }
        },
        "inputError": {
            "&.error": {
                borderColor: theme.colors.error
            },
            "&.warn": {
                borderColor: theme.colors.warning
            }
        },
        "errorInfo": {
            "position": "absolute",
            "bottom": "-20px",
            "left": "0",
            "font-size": "12px"
        },
        "error": {
            color: theme.colors.error
        },
        "warn": {
            color: theme.colors.warning
        }
    }
};

@withStyles(styles, {name: 'MuiFormSelectAnt'})
export default class renderInput extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','classes','options'])
        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    <Select
                        placeholder={field.placeholder}
                        id={`__${field.input.name}__`}
                        {...otherField}
                        className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}
                        options={field.options || []}/>

                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}