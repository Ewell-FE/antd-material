import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import RcInputNumber from 'rc-input-number';
import omit from 'omit.js';

const styles = theme => {

    return {
        yhInputNumber: {
            margin: '0 10px 0 0',
            padding: 0,
            fontSize: '12px',
            height: theme.size.default,
            display: 'inline-block',
            border: '1px solid #d9d9d9',
            borderRadius: '2px',
            width: '90px',
            position: 'relative',

            '&:hover': {
                borderColor: theme.colors.primary,
                '& .yhInputNumber-handler-wrap': {
                    opacity: '1',
                }
            },
            '&.yhInputNumber-focused': {
                outline: '0',
                borderColor: theme.colors.primary,
                boxShadow: `0 0 0 2px ${theme.primary[100]}`
            },
            '&.yhInputNumber-disabled': {
                backgroundColor: '#f7f7f7',
                opacity: '1',
                cursor: 'not-allowed',

                '& .yhInputNumber-input': {
                    opacity: '0.72',
                    cursor: 'not-allowed',
                    backgroundColor: '#f7f7f7'
                },
                '& .yhInputNumber-handler-wrap': {
                    display: 'none'
                },
            },
            '& .yhInputNumber-handler-wrap': {
                borderLeft: '1px solid #d9d9d9',
                width: '22px',
                height: '100%',
                background: '#fff',
                position: 'absolute',
                top: '0',
                right: '0',
                opacity: '0',
                borderRadius: '0 2px 2px 0',
                transition: 'opacity 0.24s linear 0.1s',
                zIndex: '2',// https://github.com/ant-design/ant-design/issues/6289

                "& .yhInputNumber-handler": {
                    textAlign: 'center',
                    lineHeight: '0',
                    height: '50%',
                    overflow: 'hidden',
                    color: 'fade(#000, 43%)',
                    position: 'relative',
                    transition: 'all 0.1s linear',
                    display: 'block',
                    width: '100%',
                    fontWeight: 'bold',
                    '&:active': {
                        background: '#f4f4f4',
                    },
                    '&.yhInputNumber-handler-up': {
                        cursor: 'pointer',
                        '& .yhInputNumber-handler-up-inner': {
                            top: '50%',
                            marginTop: '-6px',
                            '&:before': {
                                fontSize: '12px',
                                textAlign: 'center',
                                font: 'normal normal normal 14px/1 FontAwesome',
                                content: '\'\\f106\'',
                            }
                        },
                        '&:hover': {
                            height: '60% !important',
                        }
                    },
                    '&.yhInputNumber-handler-down': {
                        borderTop: '1px solid #d9d9d9',
                        top: '-1px',
                        cursor: 'pointer',

                        '& .yhInputNumber-handler-down-inner': {
                            top: '50%',
                            marginTop: '-6px',
                            '&:before': {
                                fontSize: '12px',
                                textAlign: 'center',
                                font: 'normal normal normal 14px/1 FontAwesome',
                                content: '\'\\f107\'',
                            }
                        },
                        '&:hover': {
                            height: '60% !important',
                        },

                    },

                    '&.yhInputNumber-handler-down-disabled,&.yhInputNumber-handler-up-disabled': {
                        opacity: '0.72',
                        cursor: 'not-allowed',

                        '&:hover': {
                            opacity: '0.72',
                            cursor: 'not-allowed',
                        },

                        '& .yhInputNumber-handler-down-inner,& .yhInputNumber-handler-up-inner': {
                            color: '#ccc',
                        }
                    },
                    '& .yhInputNumber-handler-up-inner,& .yhInputNumber-handler-down-inner': {
                        lineHeight: '12px',
                        userSelect: 'none',
                        position: 'absolute',
                        width: '12px',
                        height: '12px',
                        transition: 'all 0.1s linear',
                        right: '4px',
                        color: '#ccc'
                    },
                    '&:hover .yhInputNumber-handler-up-inner,&:hover .yhInputNumber-handler-down-inner': {
                        color: theme.colors.primary
                    },

                },

                '&:hover .yhInputNumber-handler': {
                    height: '40%'
                },

            },
            '& .yhInputNumber-input': {
                width: '100%',
                textAlign: 'left',
                outline: '0',
                height: (Number.parseInt(theme.size.default, 10) - 2) + 'px',
                transition: 'all 0.3s linear',
                color: 'fade(#000, 65%)',
                backgroundColor: '#fff',
                border: '0',
                borderRadius: '2px',
                padding: '0 7px',
                display: 'block'
            },

            '&.yhInputNumber-sm': {
                padding: '0',
                height: theme.size.small,
                '& input': {
                    height: theme.size.small,
                    width: '100%',
                }
            }
        },
        lg: {
            padding: '0',
            height: theme.size.large,
            '& input': {
                height: (Number.parseInt(theme.size.large, 10) - 2) + 'px!important',
                width: '100%',
            }
        },
        sm: {
            padding: '0',
            height: theme.size.small,
            '& input': {
                height: (Number.parseInt(theme.size.small, 10) - 2) + 'px!important',
                width: '100%',
            }
        },
    }
};
@withStyles(styles, {name: 'MuiInputNumberAnt'})
export default class InputNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue || props.value || null
        }
    }

    static defaultProps = {
        size: 'default',
        step: 1,
        prefixCls: 'yhInputNumber',
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        })
    }

    onChange = (value)=> {
        this.setState({value})
        this.props.onChange && this.props.onChange(value)
    }

    render() {
        const props = this.props;
        const {classes, size} = props
        const inputNumberClass = classnames(
            classes.yhInputNumber,
            {
                [classes[`lg`]]: size === 'large',
                [classes[`sm`]]: size === 'small',
            }, props.className);
        let otherProps = omit(props, ['className', 'defaultValue', 'value', 'onChange'])
        return <RcInputNumber
            className={inputNumberClass}
            value={this.state.value}
            onChange={this.onChange}
            {...otherProps} />;

    }
}

InputNumber.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'large']),//大小
    step: PropTypes.number || PropTypes.string,//步长
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//当前值
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,//是否禁止点击
    min: PropTypes.number,//最小值
    max: PropTypes.number,//最大值
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//默认值
    formatter: PropTypes.func,//控制输入框格式
    parser: PropTypes.func,//控制输入框格式
    onChange: PropTypes.func,//控制输入框格式
};