import React, {Component} from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import _ from 'lodash'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue || null
        }
    }

    static defaultProps = {
        arrowRenderer:(onMouseDown) => {
            if (onMouseDown.isOpen) {
                return (
                    <i className="fa fa-angle-up" aria-hidden="true"> </i>
                );
            } else {
                return (
                    <i className="fa fa-angle-down" aria-hidden="true"> </i>
                );
            }

        }
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

    render() {
        const props = this.props
        const {classes, style, width, arrowRenderer, size} = props
        return (
            <span style={{...style, width: width}}
                  className={classnames(classes.root, 'materialAnt-select', classes.control, classes[size])}>
            <Select
                {...props}
                arrowRenderer={arrowRenderer}
                value={props.value || this.state.value}
                onChange={this.onHandleChange}

            />
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
}
App.Creatable = Select.Creatable
App.AsyncCreatable  = Select.AsyncCreatable
