import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import './style.css';
import TimePicker from 'rc-time-picker';
import omit from 'omit.js'
import LocaleReceiver from '../LocaleProvider/LocaleReceiver';
import Icon from '../Icon'
const styles = theme => ({});


@withStyles(styles, { name: 'MuiTimePickerAnt' })
export default class Spin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue || props.value,
        };
    }

    static defaultProps = {
        placeholder: 'Select Time',
        format: 'h:mm a',
        allowClear:true
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    onChange = (value) => {
        this.setState({
            value
        });
        if(value){
            this.props.onChange && this.props.onChange(value, value.format(this.props.format))
        }else{
            this.props.onChange && this.props.onChange(null,'')
        }
    }

    generateShowHourMinuteSecond=(format) =>{
        return {
            showHour: (
                format.indexOf('H') > -1 ||
                format.indexOf('h') > -1 ||
                format.indexOf('k') > -1
            ),
            showMinute: format.indexOf('m') > -1,
            showSecond: format.indexOf('s') > -1,
        };
    }


    renderTimePicker = (locale) => {
        const state = this.state
        const props = this.props;
        const otherProps = omit(props, ['classes', 'value', 'onChange'])
        return (
            <TimePicker
                prefixCls="yh-time-picker"
                onChange={this.onChange}
                value={state.value}
                placeholder={props.placeholder === undefined ? locale.placeholder : props.placeholder}
                {...otherProps}
                inputIcon={state.value&&props.allowClear&&!props.disabled&&<span onClick={(e)=>{e.stopPropagation();this.onChange(null)}} className="yh-time-picker-clear" title="clear" tabIndex="0">
                    <Icon type="close" className="yh-time-picker-clear-icon"/></span>}
                {...this.generateShowHourMinuteSecond(props.format||'')}
            />
        )
    }

    render() {
        return (
            <LocaleReceiver componentName="TimePicker" >
                {this.renderTimePicker}
            </LocaleReceiver >
        )
    }
}
