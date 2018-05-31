import './calendar.css';
import './time-picker.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import {withStyles} from '@material-ui/core/styles';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import omit from 'omit.js';
import styles from './style'

const cn = true

const now = moment();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

const timePickerElement = <TimePickerPanel prefixCls="yh-time-picker-panel"
                                           defaultValue={moment('00:00:00', 'HH:mm:ss')}/>;


@withStyles(styles, {name: 'MuiDatePickerAnt'})
export default class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue,
        };
    }

    static defaultProps = {
        placeholder: 'Select date',
        dateInputPlaceholder: 'please input',
        locale: cn ? zhCN : enUS,
        animation: 'slide-up',
        format: 'YYYY-MM-DD',
        mode:'date'
    }


    onChange = (value) => {
        this.setState({
            value
        });
        this.props.onChange && this.props.onChange(value)
    }

    emitEmpty = (e) => {
        e.stopPropagation()
        this.setState({value: null});
    }

    render() {
        const props = this.props
        const otherProps = omit(this.props, ['classes', 'showTime', 'onChange', 'onOpenChange', 'placeholder'])
        const state = this.state
        const suffix = props.allowClear ? <Icon type="close" onClick={this.emitEmpty}/> : <Icon type="calendar"/>
        const calendar = (<Calendar
            style={{ zIndex: 1000 }}
            prefixCls="yh-calendar"
            timePicker={props.showTime && timePickerElement}
            {...otherProps}
        />);
        return (
            <DatePicker
                animation={this.props.animation}
                prefixCls={props.classes.root}
                calendar={calendar}
                value={state.value}
                onChange={this.onChange}
                onOpenChange={this.props.onOpenChange}
            >
                {
                    ({value}) => {
                        return (
                            <span tabIndex="0">
                                 <Input
                                     placeholder={props.placeholder}
                                     suffix={state.value ? suffix:<Icon type="calendar"/>}
                                     value={value ? value.format(props.showTime?'YYYY-MM-DD HH:mm:ss':props.format) : ''}
                                     onChange={this.onChangeUserName}
                                 />
                            </span>
                        )
                    }
                }
            </DatePicker>
        )
    }
}

app.propTypes = {
    allowClear: PropTypes.bool,//是否显示清除按钮
    autoFocus: PropTypes.bool,// todo:自动获取焦点
    dateRender: PropTypes.func,//自定义日期单元格的内容
    disabled: PropTypes.bool,//  禁用
    disabledDate: PropTypes.func,//不可选择的日期
    locale: PropTypes.bool,// 国际化配置
    open:PropTypes.bool,//控制弹层是否展开
    placeholder: PropTypes.string, //输入框提示文字
    size: PropTypes.string, //输入框大小，large 高度为 40px，small 为 24px，默认是 32px
    onOpenChange: PropTypes.func,//弹出日历和关闭日历的回调

    defaultValue: PropTypes.object, //moment类型的日期对象
    disabledTime: PropTypes.func,//不可选择的时间
    format: PropTypes.string,// 展示的日期格式，配置参考 moment.js
    showTime: PropTypes.bool,// 增加时间选择功能
    showToday: PropTypes.bool,//是否展示“今天”按钮
    value: PropTypes.object, //moment 格式的日期对象
    onChange: PropTypes.func,//时间发生变化的回调
    onOk: PropTypes.func,
    mode:PropTypes.oneOf(['time','date','month','year']),
    onPanelChange:PropTypes.func,//日期面板变化时的回调
    dateInputPlaceholder: PropTypes.string,//日期选择里面的输入框placeholder

};