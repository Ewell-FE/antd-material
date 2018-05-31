import './calendar.css';
import './time-picker.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'rc-calendar/lib/Picker';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import {withStyles} from '@material-ui/core/styles';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import styles from './style'

const cn = true

const now = moment();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}
const timePickerElement = (
    <TimePickerPanel
        prefixCls="yh-time-picker-panel"
        defaultValue={[moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')]}
    />
);

function isValidRange(v) {
    return v && v[0] && v[1];
}
const formatStr = 'YYYY-MM-DD HH:mm:ss';
function format(v) {
    return v ? v.format(formatStr) : '';
}

@withStyles(styles, {name: 'MuiMonthPickerAnt'})
export default class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue,
            hoverValue: []
        };
    }

    static defaultProps = {
        placeholder: 'Select month',
        animation: 'slide-up',
        dateInputPlaceholder: ['start', 'end']
    }


    onChange = (value) => {
        console.log('DatePicker change: ', value);
        this.setState({
            value
        });
    }

    emitEmpty = (e) => {
        e.stopPropagation()
        this.setState({value: null});
    }

    onHoverChange = (hoverValue) => {
        this.setState({ hoverValue });
    }

    render() {
        const {classes} = this.props
        const state = this.state
        const calendar = (
            <RangeCalendar
                showWeekNumber={false}
                prefixCls="yh-calendar"
                dateInputPlaceholder={this.props.dateInputPlaceholder}
                defaultValue={this.props.defaultCalendarValue}
                locale={cn ? zhCN : enUS}
                timePicker={timePickerElement}
            />);
        return (
            <DatePicker
                animation="slide-up"
                prefixCls={classes.root}
                calendar={calendar}
                value={state.value}
                onChange={this.onChange}
            >
                {
                    ({value}) => {
                        return (<Input
                            readOnly
                            disabled={state.disabled}
                            value={isValidRange(value) && `${format(value[0])} - ${format(value[1])}` || ''}
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
    allowClear:PropTypes.bool,//是否显示清除按钮
    autoFocus:PropTypes.bool,// todo:自动获取焦点
    dateRender:PropTypes.func,// todo:自定义日期单元格的内容
    disabled:PropTypes.bool,//  禁用
    disabledDate:PropTypes.func,// todo:自动获取焦点
    locale:PropTypes.bool,// todo:国际化配置
    placeholder: PropTypes.string, //输入框提示文字
    size: PropTypes.string, //输入框大小，large 高度为 40px，small 为 24px，默认是 32px
    onOpenChange:PropTypes.func,//弹出日历和关闭日历的回调
    
    defaultValue: PropTypes.object,
    defaultCalendarValue: PropTypes.object,
    dateInputPlaceholder: PropTypes.string,

};