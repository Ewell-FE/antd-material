import React, {Component} from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Icon from '../Icon'
import _ from 'lodash'
import {withStyles} from "material-ui/styles/index";
import ReactDOM from "react-dom";
function getComponent(type) {
    //计算高度
    function getLineHeight(str) {
        let num = str.split('px')[0]
        return Number(num - 2)
    }
//公共样式
    const styles = theme => {
        let fontSize = theme.typography.fontSize,
            height = getLineHeight(theme.size.default),
            small = getLineHeight(theme.size.small),
            large = getLineHeight(theme.size.large),
            fontColor = theme.palette.text.primary;
        let childrenHeight = height - 6, childrenSmall = small - 6, childrenLarge = large - 6;
        let childTop = (height - childrenHeight) / 2,
            childrenSmallTop = (small - childrenSmall) / 2,
            childrenLargeTop = (large - childrenLarge) / 2;
        return {
            root: {
                display: 'inline-block',
                width: '100%',
                textAlign: 'left'
            },
            control: {
                '&>.Select': {
                    clear: 'both',
                    minHeight: small,
                    fontSize: fontSize,
                    '&>.Select-control': {
                        height: '100%',
                        overflow: 'auto',
                        '& .Select-value,& .Select-placeholder,& .Select-input': {
                            height: height,
                            lineHeight: height + 'px',
                        },
                        '& .Select-value': {
                            color: 'rgba(0,0,0,.65)',
                            cursor: 'default',
                            marginRight: 4,
                            marginTop: 0,
                            fontSize: 'inherit',
                            borderRadius: '2px',
                            '&>.Select-value-icon': {
                                border: 'none',
                                float: 'right',
                                padding: '0 5px',
                                '&:hover': {
                                    backgroundColor: '#fafafa',
                                    color: 'rgba(0,0,0,.90)',
                                },
                            },
                            '& .Select-value-label': {
                                border: 'none',
                                color: fontColor,
                                padding: '0 5px',
                                verticalAlign: 'baseline'
                            }
                        }
                    },
                    '&>.Select-menu-outer': {
                        marginTop: 2,
                        borderRadius: 4,
                        fontSize: 'inherit',
                        boxShadow: '0 2px 8px rgba(0,0,0,.15)',
                    },
                },
                '&>.Select.is-focused:not(.is-open) > .Select-control': {
                    borderColor: theme.colors.primary,
                    boxShadow: "0 0 0 2px rgba(24,144,255,.2)"
                },
                '& .Select.Select--multi': {
                    '& .Select-control .Select-value': {
                        backgroundColor: '#fafafa',
                        border: '1px solid #e8e8e8',
                        height: childrenHeight,
                        lineHeight: childrenHeight + 'px',
                        marginTop:childTop
                    }
                },
            },
            large: {
                '& .Select': {
                    '& .Select-control': {
                        fontSize: fontSize + 2,
                        '.Select-value,& .Select-placeholder,& .Select-input': {
                            height: large,
                            lineHeight: large + 'px',
                        }
                    }
                },
                '& .Select.Select--multi': {
                    '& .Select-control .Select-value': {
                        height: childrenLarge,
                        lineHeight: childrenLarge + 'px',
                        marginTop:childrenLargeTop

                    }

                },
            },
            small: {
                '& .Select': {
                    '& .Select-control': {
                        '.Select-value,& .Select-placeholder,& .Select-input': {
                            height: small,
                            lineHeight: small + 'px',
                        }
                    }
                },
                '& .Select.Select--multi': {
                    '& .Select-control .Select-value': {
                        height: childrenSmall,
                        lineHeight: childrenSmall + 'px',
                        marginTop:childrenSmallTop
                    }

                },
            },
        }
    }
    @withStyles(styles, {name: 'MuiSelect-ant'})
    class App extends Component {
        constructor(props) {
            super(props)
            this.state = {
                value: props.defaultValue || null
            }
        }

        static defaultProps = {
            arrowRenderer: (onMouseDown) => {
                if (onMouseDown.isOpen) {
                    return (
                        <Icon type="angle-up" />
                    );
                } else {
                    return (
                        <Icon type="angle-down" />
                    );
                }

            }
        }

        componentDidMount() {
            this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.select))
        }

        onHandleChange = (selectOptions) => {
            const {value, valueKey, onChange} = this.props
            if (value === undefined) {
                if (selectOptions) {
                    if (_.isArray(selectOptions)) {
                        let arr = []
                        selectOptions.map((item) => {
                            arr.push(item[`${valueKey}`] || item.value)
                        })
                        this.setState({
                            value: arr
                        })
                    } else {
                        this.setState({
                            value: selectOptions[`${valueKey}`] || selectOptions.value
                        })
                    }
                } else {
                    this.setState({
                        value: null
                    })
                }

            }
            onChange && onChange(selectOptions)
        }

        domApp = (type) => {
            const props = this.props
            switch (type){
                case 'Select':
                    return <Select {...props}/>

                case 'Async':
                    return <Select.Async {...props}/>

                case 'Creatable':
                    return <Select.Creatable {...props}/>

                case 'AsyncCreatable':
                    return <Select.AsyncCreatable {...props}/>

                default:
                    break;
            }
        }

        render() {
            const props = this.props
            const {classes, style, width, arrowRenderer, size} = props
            return (
                <span style={{...style, width: width}}
                      className={classnames(classes.root, classes.control, classes[size])}>
                {
                    React.cloneElement(this.domApp(type), {
                        arrowRenderer: arrowRenderer,
                        ref:ref=>this.select =ref,
                        value: props.value || this.state.value,
                        onChange: this.onHandleChange
                    })
                }
            </span>
            );

        }
    }
//更多请参考react-select
    App.propTypes = {
        style: PropTypes.object, //行内样式
        defaultValue: PropTypes.string, //默认值
        width: PropTypes.any, //宽
        size: PropTypes.oneOf(['small', 'default', 'large']), //大小
        withRef: PropTypes.func,
    }
    return App
}
export default getComponent