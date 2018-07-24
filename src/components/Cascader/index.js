import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import RcCascader from 'rc-cascader';
import "./cascader.css";

import omit from 'omit.js';
import classNames from 'classnames'
import Icon from '../Icon'
import Input from '../Input'
const styles = theme => {
    return {
        zIndex: {
            zIndex: 9,
            '& .rc-cascader-menu': {
                minWidth: '111px',
                width: 'auto',
                '& .rc-cascader-menu-item:not(.rc-cascader-menu-item-disabled):hover': {
                    background: theme.select.hover
                }
            },
            '& .rc-cascader-menu-item-active': {
                background: theme.select.selected,
                color: theme.select.color,
                fontWeight: '600'
            },
        },
        'rc-cascader-menu': {},
        'rc-cascader-menu-item-active': {},
        picker: {
            width: '300px',
            fontSize: '14px',
            lineHeight: '1.5',
            color: 'rgba(0,0,0,.65)',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            listStyle: ' none',
            position: 'relative',
            display: 'inline-block',
            cursor: 'pointer',
            backgroundColor: '#fff',
            borderRadius: '4px',
            outline: '0',
        },
        pickLabel: {
            position: 'absolute',
            left: '0',
            height: '20px',
            lineHeight: '20px',
            top: '50%',
            marginTop: '-10px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '100%',
            padding: '0 12px',
            textAlign: 'left',
        },
        pickerWithValue: {
            '& $pickLabel': {
                color: 'transparent'
            }
        },
        pickerDisabled: {
            cursor: 'not-allowed'
        },
        input: {
            boxSizing: 'border-box',
            margin: '0',
            listStyle: 'none',
            display: 'inline-block',
            padding: '4px 11px',
            width: '100%',
            height: theme.size.default,
            fontSize: '14px',
            lineHeight: '1.5',
            color: 'rgba(0,0,0,.65)',
            backgroundImage: 'none',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            transition: 'all .3s',
            backgroundColor: 'transparent',
            cursor: 'pointer'
        },
        lg: {
            padding: '6px 11px',
            height: theme.size.large,
            fontSize: '16px',
        },
        sm: {
            padding: '1px 7px',
            height: theme.size.small,
        },
        keyword: {
            color: theme.colors.error,
        },
        arrow: {
            position: 'absolute',
            zIndex: '10',
            top: '50%',
            right: '12px',
            width: '12px',
            height: '12px',
            fontSize: '12px',
            marginTop: '-6px',
            lineHeight: '12px',
            color: 'rgba(0,0,0,.25)',
        },
        arrowExpand: {
            transform: 'rotate(180deg)'
        },
        pickerClear: {
            position: 'absolute',
            right: '12px',
            zIndex: '11',
            background: ' #fff',
            top: '50%',
            fontSize: '12px',
            color: 'rgba(0,0,0,.25)',
            width: '12px',
            height: '12px',
            marginTop: '-6px',
            lineHeight: '12px',
            cursor: 'pointer',
            transition: 'color .3s ease,opacity .15s ease',
        },
    }
};
function arrayTreeFilter(data, filterFn, options) {
    options = options || {};
    options.childrenKeyName = options.childrenKeyName || "children";
    var children = data || [];
    var result = [];
    var level = 0;
    var func = function () {
        var foundItem = children.filter(function (item) {
            return filterFn(item, level);
        })[0];
        if (foundItem) {
            result.push(foundItem);
            children = foundItem[options.childrenKeyName] || [];
            level += 1;
        }
        return foundItem
    }
    do {
        var item = func()
        if (!item) {
            break
        }
    } while (children.length > 0);
    return result;
}

function highlightKeyword(str, keyword, classes) {
    return str.split(keyword)
        .map((node, index) => index === 0 ? node : [
            <span className={classes.keyword} key="seperator">{keyword}</span>,
            node,
        ]);
}

function defaultFilterOption(inputValue, path) {
    return path.some(option => option.label.indexOf(inputValue) > -1);
}

function defaultRenderFilteredOption(inputValue, path, classes) {
    return path.map(({label}, index) => {
        const node = label.indexOf(inputValue) > -1 ?
            highlightKeyword(label, inputValue, classes) : label;
        return index === 0 ? node : [' / ', node];
    });
}

function defaultSortFilteredOption(a, b, inputValue) {
    function callback(elem) {
        return (elem.label).indexOf(inputValue) > -1;
    }

    return a.findIndex(callback) - b.findIndex(callback);
}

function getFilledFieldNames(filedNames = {}) {
    const names = {
        children: filedNames.children || 'children',
        label: filedNames.label || 'label',
        value: filedNames.value || 'value',
    };
    return names;
}

const defaultDisplayRender = (label) => label.join(' / ');

@withStyles(styles, {name: 'MuiCascaderAnt'})
export default class Cascader extends React.Component {
    static defaultProps = {
        placeholder: 'Please select',
        transitionName: 'slide-up',
        popupPlacement: 'bottomLeft',
        options: [],
        disabled: false,
        allowClear: true,
        notFoundContent: 'Not Found',
    };


    constructor(props) {
        super(props);
        this.state = {
            value: props.value || props.defaultValue || [],
            inputValue: '',
            inputFocused: false,
            popupVisible: props.popupVisible,
            flattenOptions: props.showSearch && this.flattenTree(props.options, props.changeOnSelect),
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({value: nextProps.value || []});
        }
        if ('popupVisible' in nextProps) {
            this.setState({popupVisible: nextProps.popupVisible});
        }
        if (nextProps.showSearch && this.props.options !== nextProps.options) {
            this.setState({flattenOptions: this.flattenTree(nextProps.options, nextProps.changeOnSelect)});
        }
    }

    handleChange = (value, selectedOptions) => {
        this.setState({inputValue: ''});
        if (selectedOptions[0].__IS_FILTERED_OPTION) {
            const unwrappedValue = value[0];
            const unwrappedSelectedOptions = selectedOptions[0].path;
            this.setValue(unwrappedValue, unwrappedSelectedOptions);
            return;
        }
        this.setValue(value, selectedOptions);
    }

    handlePopupVisibleChange = (popupVisible) => {
        if (!('popupVisible' in this.props)) {
            this.setState({
                popupVisible,
                inputFocused: popupVisible,
                inputValue: popupVisible ? this.state.inputValue : '',
            });
        }
        const onPopupVisibleChange = this.props.onPopupVisibleChange;
        if (onPopupVisibleChange) {
            onPopupVisibleChange(popupVisible);
        }
    }

    handleInputBlur = () => {
        this.setState({
            inputFocused: false,
        });
    }

    handleInputClick = (e) => {
        const {inputFocused, popupVisible} = this.state;
        // Prevent `Trigger` behaviour.
        if (inputFocused || popupVisible) {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 8) {
            e.stopPropagation();
        }
    }

    handleInputChange = (e) => {
        const inputValue = e.target.value;
        this.setState({inputValue});
    }

    setValue = (value, selectedOptions) => {
        if (!('value' in this.props)) {
            this.setState({value});
        }
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(value, selectedOptions);
        }
    }

    getLabel() {
        const {options, displayRender = defaultDisplayRender, filedNames} = this.props;
        const names = getFilledFieldNames(filedNames);
        const value = this.state.value;
        const unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
        const selectedOptions = arrayTreeFilter(options,
            (o, level) => o[names.value] === unwrappedValue[level],
        );
        const label = selectedOptions.map(o => o[names.label]);
        return displayRender(label, selectedOptions);
    }

    clearSelection = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!this.state.inputValue) {
            this.setValue([]);
            this.handlePopupVisibleChange(false);
        } else {
            this.setState({inputValue: ''});
        }
    }

    flattenTree(options, changeOnSelect, ancestor = []) {
        let flattenOptions = [];
        options.forEach((option) => {
            const path = ancestor.concat(option);
            if (changeOnSelect || !option.children || !option.children.length) {
                flattenOptions.push(path);
            }
            if (option.children) {
                flattenOptions = flattenOptions.concat(this.flattenTree(option.children, changeOnSelect, path));
            }
        });
        return flattenOptions;
    }

    generateFilteredOptions(classes) {
        const {showSearch, notFoundContent} = this.props;
        const {
            filter = defaultFilterOption,
            render = defaultRenderFilteredOption,
            sort = defaultSortFilteredOption,
        } = showSearch;
        const {flattenOptions, inputValue} = this.state;
        const filtered = flattenOptions.filter((path) => filter(this.state.inputValue, path))
            .sort((a, b) => sort(a, b, inputValue));

        if (filtered.length > 0) {
            return filtered.map((path) => {
                return {
                    __IS_FILTERED_OPTION: true,
                    path,
                    label: render(inputValue, path, classes),
                    value: path.map((o) => o.value),
                    disabled: path.some((o) => o.disabled),
                };
            });
        }
        return [{label: notFoundContent, value: 'NOT_FOUND', disabled: true}];
    }

    focus() {
        this.input.focus();
    }

    blur() {
        this.input.blur();
    }

    saveInput = (node) => {
        this.input = node;
    }

    render() {
        const {props, state} = this;
        const {
            classes, children, placeholder, size, disabled,
            className, style, allowClear, showSearch = false, ...otherProps,
        } = props;
        const value = state.value;

        const sizeCls = classNames(classes.input, {
            [classes['lg']]: size === 'large',
            [classes['sm']]: size === 'small',
        });
        const clearIcon = (allowClear && !disabled && value.length > 0) || state.inputValue ? (
            <Icon
                type="times-circle"
                className={classes['pickerClear']}
                onClick={this.clearSelection}
            />
        ) : null;
        const arrowCls = classNames({
            [classes['arrow']]: true,
            [classes['arrowExpand']]: state.popupVisible,
        });
        const pickerCls = classNames(
            className, classes.picker, {
                [classes['pickerWithValue']]: state.inputValue,
                [classes['pickerDisabled']]: disabled,
            });

        const inputProps = omit(otherProps, [
            'onChange',
            'options',
            'popupPlacement',
            'transitionName',
            'displayRender',
            'onPopupVisibleChange',
            'changeOnSelect',
            'expandTrigger',
            'popupVisible',
            'getPopupContainer',
            'loadData',
            'popupClassName',
            'filterOption',
            'renderFilteredOption',
            'sortFilteredOption',
            'notFoundContent',
            'filedNames',
            'defaultValue'
        ]);

        let options = props.options;
        if (state.inputValue) {
            options = this.generateFilteredOptions(classes);
        }
        if (!state.popupVisible) {
            options = this.cachedOptions;
        } else {
            this.cachedOptions = options;
        }

        const dropdownMenuColumnStyle = {};
        const isNotFound = (options || []).length === 1 && options[0].value === 'ANT_CASCADER_NOT_FOUND';
        if (isNotFound) {
            dropdownMenuColumnStyle.height = 'auto';
        }
        const resultListMatchInputWidth = showSearch.matchInputWidth === false ? false : true;
        if (resultListMatchInputWidth && state.inputValue && this.input) {
            dropdownMenuColumnStyle.width = this.input.offsetWidth;
        }

        const input = children || (
                <span
                    style={style}
                    className={pickerCls}
                >
        <span className={classes.pickLabel} onClick={()=>{this.focus()}}>
          {this.getLabel()}
        </span>
        <Input
            {...inputProps}
            withRef={this.saveInput}
            placeholder={value && value.length > 0 ? undefined : placeholder}
            className={sizeCls}
            value={state.inputValue}
            disabled={disabled}
            readOnly={!showSearch}
            onPressEnter={showSearch ? this.handleInputClick : undefined}
            onBlur={showSearch ? this.handleInputBlur : undefined}
            onKeyDown={this.handleKeyDown}
            onChange={showSearch ? this.handleInputChange : undefined}
        />
                    {clearIcon}
                    <Icon type="angle-down" className={arrowCls}/>
      </span>
            );
        return (
            <RcCascader
                {...props}
                options={options}
                value={value}
                popupVisible={state.popupVisible}
                onPopupVisibleChange={this.handlePopupVisibleChange}
                onChange={this.handleChange}
                dropdownMenuColumnStyle={dropdownMenuColumnStyle}
                popupClassName={classes.zIndex}
            >
                {input}
            </RcCascader>
        );
    }
}
Cascader.propTypes = {
    allowClear: PropTypes.bool,//是否支持清除
    changeOnSelect: PropTypes.bool,//当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示
    className: PropTypes.string,//自定义类名
    defaultValue: PropTypes.any,//默认的选中项
    disabled: PropTypes.bool,//禁用
    displayRender: PropTypes.func,//选择后展示的渲染函数
    expandTrigger: PropTypes.oneOf(['click', 'hover']),//次级菜单的展开方式，可选 'click' 和 'hover'
    getPopupContainer: PropTypes.func,//菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位
    loadData: PropTypes.func,//	用于动态加载选项，无法与 showSearch 一起使用
    notFoundContent: PropTypes.string,//当下拉列表为空时显示的内容
    options: PropTypes.any,//可选项数据源
    placeholder: PropTypes.string,//输入框占位文本
    popupClassName: PropTypes.string,//自定义浮层类名
    popupPlacement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),//浮层预设位置：bottomLeft bottomRight topLeft topRight
    popupVisible: PropTypes.bool,//控制浮层显隐
    showSearch: PropTypes.any,//在选择框中显示搜索框
    size: PropTypes.oneOf(['large', 'default', 'small']),//输入框大小，可选 large default small
    style: PropTypes.object,//自定义样式
    value: PropTypes.any,//指定选中项
    onChange: PropTypes.func,//选择完成后的回调
    onPopupVisibleChange: PropTypes.func,//显示/隐藏浮层的回调
    filedNames: PropTypes.object,//自定义 options 中 label name children 的字段
}