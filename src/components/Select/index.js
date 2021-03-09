import React, { Component } from "react";
import Select, { Option, OptGroup } from "rc-select";
import "./style.css";
import PropTypes from "prop-types";
import classnames from 'classnames'
import { withStyles } from "@material-ui/core/styles";
import omit from "omit.js";
import LocaleReceiver from '../LocaleProvider/LocaleReceiver'

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
        },
        dropMenu:{

        }
    }
}
@withStyles(styles, { name: 'MuiSelectAnt' })
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue || props.value ||undefined,
            searchValue:'',
            showSearch:props.filterOption||props.onSearch?true:false
        }
    }

    static defaultProps = {
        prefixCls: 'yh-select',
        size: 'default',
        optionLabelProp: 'children',
        placeholder: 'Select',
        notFoundContentSpecial:'noEnter'
    }

    getNotFoundContent = (locale,options) => {
        const { notFoundContent, notFoundContentSpecial, mode,enterAlertContent,searchNum } = this.props;
        const isCombobox = mode === 'combobox';
        if (isCombobox) {
            // AutoComplete don't have notFoundContent defaultly
            return notFoundContent === undefined ? null : notFoundContent;
        }
        if(notFoundContentSpecial === 'noEnter'){
            if(this.props.onSearch){
                //判断是输入搜索
                if(this.state.searchValue.length===0){
                    return null
                }else if(searchNum){
                    if(this.state.searchValue.length<searchNum){
                        return enterAlertContent? enterAlertContent : locale.enterAlertContent
                    }
                }
            }
        }
        if(notFoundContentSpecial === 'special'){
            if (options===null||options.length === 0) {
                return null;
            } else{
                return locale.notFoundContent
            }
        }

        return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
    }
    onChange=(e)=>{
        this.setState({
            value:e
        })
        this.props.onChange&&this.props.onChange(e||null)
    }


    componentWillReceiveProps(nextProps){
        if(this.props.value !== nextProps.value || this.state.value !== nextProps.value){
            this.setState({
                value:nextProps.value
            })
        }
    }
    onSearch=(searchValue)=>{
        this.setState({searchValue})
        this.props.onSearch&&this.props.onSearch(searchValue)
    }
    onBlur=(e)=>{
        this.setState({searchValue:''})
        this.props.onBlur&&this.props.onBlur(e)
    }

    renderSelect = (locale) => {
        const props = this.props
        const { notFoundContentSpecial } = this.props;
        const classes = props.classes
        let otherProps = omit(props, ['className', 'classes', 'options', 'combobox', 'multiple', 'tags'])
        let options = []
        let modeType = (props.combobox && "combobox") || (props.multiple && "multiple") || (props.tags && "tags")
        let modes = {
            combobox: { combobox: true },
            multiple: { multiple: true },
            tags: { tags: true }
        }[modeType || props.mode]

        if (props.options) {
            props.options.forEach((item, i) => {
                options.push(
                    <Option key={i} value={item.value} disabled={item.disabled||false} className={item.className||''}>{item.label}</Option>
                )
            })
        }
        if (notFoundContentSpecial === 'special') {
            delete otherProps.notFoundContent
            Object.assign(otherProps,{
                onSearch:this.onSearch
            })
        }
        if (notFoundContentSpecial === 'noEnter') {
            Object.assign(otherProps,{
                onSearch:this.onSearch
            })
        }
        return (
            <Select
                className={classnames(props.className, classes.root, classes[props.size])}
                notFoundContent={this.getNotFoundContent(locale,options)}
                {...otherProps}
                {...modes}
                dropdownClassName={(options.length === 0 && notFoundContentSpecial === 'special')||(options.length === 0 && !this.state.searchValue && notFoundContentSpecial === 'noEnter') ?
                    classnames(otherProps.dropdownClassName) : classnames(otherProps.dropdownClassName,classes.dropMenu)}
                value={this.state.value||undefined}
                onChange={this.onChange}
                onBlur={this.onBlur}
                showSearch={this.state.showSearch}
            >
                {/*{(!this.state.searchValue && notFoundContentSpecial === 'noEnter')?[]:options}*/}
                {options}
                {this.props.children}
            </Select>
        )
    }

    render() {
        return (
            <LocaleReceiver componentName="Select">
                {this.renderSelect}
            </LocaleReceiver>
        )
    }
}
App.Option = Option
App.OptGroup = OptGroup

App.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'large']),
    options: PropTypes.array
};
