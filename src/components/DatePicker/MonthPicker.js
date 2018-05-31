import './calendar.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import {withStyles} from '@material-ui/core/styles';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import styles from './style'

const format = 'YYYY-MM';
const cn = true

const now = moment();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

@withStyles(styles, {name: 'MuiMonthPickerAnt'})
export default class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue
        };
    }

    static defaultProps = {
        placeholder: 'Select month',
        animation: 'slide-up'
    }


    onChange = (value) => {
        console.log('DatePicker change: ', (value && value.format(format)));
        this.setState({
            value,
        });
    }

    emitEmpty = (e) => {
        e.stopPropagation()
        this.setState({value: null});
    }

    render() {
        const {classes} = this.props
        const state = this.state
        const calendar = (<MonthCalendar
            prefixCls="yh-calendar"
            locale={cn ? zhCN : enUS}
            style={{ zIndex: 1000 }}
        />);
        return (
            <DatePicker
                animation="slide-up"
                prefixCls={classes.root}
                disabled={state.disabled}
                calendar={calendar}
                value={state.value}
                onChange={this.onChange}
            >
                {
                    ({value}) => {
                        return (<Input
                            readOnly
                            disabled={state.disabled}
                            value={value && value.format(format)}
                            suffix={state.value ? <Icon type="close" onClick={this.emitEmpty}/> : <Icon type="calendar"/>}
                            placeholder={this.props.placeholder}
                        />);
                    }
                }

            </DatePicker>
        )
    }
}

app.propTypes = {
    defaultValue: PropTypes.object,
    defaultCalendarValue: PropTypes.object,
    placeholder: PropTypes.string,
    dateInputPlaceholder: PropTypes.string,

};