import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import './style.css';
import TimePicker from 'rc-time-picker';
import moment from 'moment'
import omit from 'omit.js'
const styles = theme => ({});

@withStyles(styles, {name: 'MuiTimePickerAnt'})
export default class Spin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue || null,
        };
    }

    static defaultProps = {
        placeholder: 'Select time',
        format: 'h:mm a'
    }

    onChange = (value) => {
        console.log(moment.locale())
        this.setState({
            value
        });
        this.props.onChange && this.props.onChange(value, value.format(this.props.format))
    }

    render() {
        const state = this.state
        const props = this.props;
        const otherProps = omit(props, ['classes', 'value', 'onChange'])
        return (
            <TimePicker
                prefixCls="yh-time-picker"
                onChange={this.onChange}
                value={state.value}
                {...otherProps}
            />
        )
    }
}
