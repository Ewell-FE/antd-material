import React, {Component} from "react";
import Select, {Option, OptGroup} from "rc-select";
import "./style.css";
import PropTypes from "prop-types";
import classnames from 'classnames'
import Icon from "../Icon";
import {withStyles} from "@material-ui/core/styles";
import omit from "omit.js";

const styles = theme => {
    let c2 = function (size, count) {
        return (parseInt(size, 10) / count) + 'px'
    }
    let sub = function (size, count) {
        return (parseInt(size, 10) - count) + 'px'
    }
    return {
        "root": {
            width: '100%',
            "& .yh-select-selection:hover": {
                borderColor: theme.colors.primary,
                borderRightWidth: "1px !important"
            },
            "& .yh-select-focused .yh-select-selection,& .yh-select-selection:focus,& .yh-select-selection:active,&.yh-select-open .yh-select-selection": {
                borderColor: theme.colors.primary,
                outline: "0",
                boxShadow: `0 0 0 2px ${theme.primary[100]}`,
                borderRightWidth: "1px !important"
            },

        },
        "small": {
            "& .yh-select-selection--single": {
                height: theme.size.small
            },
            "& .yh-select-selection__rendered": {
                lineHeight: sub(theme.size.small, 2)
            },
            "& .yh-select-selection--multiple": {
                minHeight: theme.size.small,
                "& .yh-select-selection__rendered li": {
                    height: sub(theme.size.small, 8),
                    lineHeight: sub(theme.size.default, 8)
                },
                "& .yh-select-selection__clear": {
                    top: c2(theme.size.small, 2)
                }
            },
            "& .yh-select-selection__clear ,& .yh-select-arrow": {
                right: "8px"
            }
        },
        "default": {
            fontSize: 14,
            "& .yh-select-selection--single": {
                height: theme.size.default
            },
            "& .yh-select-selection__rendered": {
                lineHeight: sub(theme.size.default, 2)
            },
            "& .yh-select-selection--multiple": {
                minHeight: theme.size.default,
                "& .yh-select-selection__rendered li": {
                    height: sub(theme.size.default, 8),
                    lineHeight: sub(theme.size.default, 8)
                },
                "& .yh-select-selection__clear": {
                    top: c2(theme.size.default, 2)
                }
            },
            "& .yh-select-selection__clear ,& .yh-select-arrow": {
                right: "8px"
            }
        },
        "large": {
            fontSize: 16,
            "& .yh-select-selection--single": {
                height: theme.size.large
            },
            "& .yh-select-selection__rendered": {
                lineHeight: sub(theme.size.large, 2)
            },
            "& .yh-select-selection--multiple": {
                minHeight: theme.size.large,
                "& .yh-select-selection__rendered li": {
                    height: sub(theme.size.large, 8),
                    lineHeight: sub(theme.size.large, 8)
                },
                "& .yh-select-selection__clear": {
                    top: c2(theme.size.large, 2)
                }
            },
            "& .yh-select-selection__clear ,& .yh-select-arrow": {
                right: "8px"
            }
        }
    }
}
@withStyles(styles, {name: 'MuiSelectAnt'})
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue || null
        }
    }

    static defaultProps = {
        prefixCls: 'yh-select',
        size: 'default',
        optionLabelProp: 'children',
        placeholder: <span>please select</span>
    }


    render() {
        const props = this.props
        const classes = props.classes
        let otherProps = omit(props, ['className', 'classes', 'options'])
        let options = []
        if (props.options) {
            props.options.forEach((item, i)=> {
                options.push(
                    <Option key={i} value={item.value}>{item.label}</Option>
                )
            })
        }
        return (
            <Select {...otherProps} className={classnames(props.className,classes.root,classes[props.size])}>
                {options}
                {this.props.children}
            </Select>
        )
    }
}
App
    .Option = Option
App
    .OptGroup = OptGroup

App
    .propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'large']),
    options: PropTypes.array
};