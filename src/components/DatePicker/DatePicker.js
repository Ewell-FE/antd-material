import './calendar.css';
import './time-picker.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
// import zhCN from 'rc-calendar/lib/locale/zh_CN';
// import enUS from 'rc-calendar/lib/locale/en_US';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Input from '../Input'
import Icon from '../Icon'
import omit from 'omit.js';
import styles from './style'
import LocaleReceiver from '../LocaleProvider/LocaleReceiver'

// const cn = true
const timePickerElement =(props)=><TimePickerPanel {...props}  prefixCls="yh-time-picker-panel"
                                                    defaultValue={(props.defaultCalendarValue||moment('00:00:00', 'HH:mm:ss'))} />;

@withStyles(styles, { name: 'MuiDatePickerAnt' })
export default class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue || props.value,
        };
    }

    static defaultProps = {
        // placeholder: 'Select date',
        // dateInputPlaceholder: 'please input',
        // locale: cn ? zhCN : enUS,
        // showTime:false,
        animation: 'slide-up',
        format: '',
        mode: 'date',
        disabled:false
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    onChange = (value) => {
        let format = this.props.format|| (this.props.showTime?'YYYY-MM-DD HH:mm:ss':'YYYY-MM-DD')
        this.setState({
            value
        });
        if(value){
            this.props.onChange && this.props.onChange(value, value.format(format))
        }else{
            this.props.onChange && this.props.onChange(null,'')
        }
    }

    emitEmpty = (e) => {
        e.stopPropagation()
        this.setState({ value: null },()=>{
            this.props.onChange && this.props.onChange(null,'')
        });
    }
    onOk=()=>{
        let date = moment(new Date()).set({'hour': 0, 'minute': 0});
        let value = this.state.value?this.state.value:date
        let format = this.props.format|| (this.props.showTime?'YYYY-MM-DD HH:mm:ss':'YYYY-MM-DD')
        this.props.onChange && this.props.onChange(value, value.format(format))
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



    renderPicker = (locale, localeCode) => {
        const props = this.props
        const otherProps = omit(this.props, ['classes', 'showTime', 'onChange', 'onOpenChange', 'defaultValue', 'placeholder', 'value', 'style','mode'])
        const state = this.state
        const suffix = props.allowClear ? <Icon type="close" onClick={this.emitEmpty} /> : <Icon type="calendar" />
        let style = props.style || {}
        let otherStyle = omit(props.style, ['width', 'height'])
        let format = props.format|| (props.showTime?'YYYY-MM-DD HH:mm:ss':'YYYY-MM-DD')
        const calendar = (<Calendar
            style={{ zIndex: 1000 }}
            prefixCls="yh-calendar"
            timePicker={props.showTime&&timePickerElement({...this.generateShowHourMinuteSecond(format||''),...props.disabledDateTime||{},defaultCalendarValue:props.defaultCalendarValue})}
            dateInputPlaceholder={locale.timePickerLocale.dateInputPlaceholder}
            locale={locale.lang}
            {...otherProps}
            {...otherStyle}
            //showOk={this.state.value?true:false}
            onOk={this.onOk}
            defaultValue={props.defaultCalendarValue}
            format={format}
        />);
        return (
            <DatePicker
                locale={locale}
                localeCode={localeCode}
                animation={this.props.animation}
                prefixCls={props.classes.root}
                calendar={calendar}
                value={state.value}
                onChange={this.onChange}
                disabled={props.disabled}
                onOpenChange={this.props.onOpenChange}
                dropdownClassName={otherProps.dropdownClassName||''}
            >
                {
                    ({ value }) => {
                        return (
                            <span tabIndex="0" className={props.classes.span}>
                                <Input
                                    readOnly
                                    className={props.className}
                                    size={props.size}
                                    placeholder={props.placeholder || locale.lang.placeholder}
                                    style={{ width: style.width, height: style.height }}
                                    disabled={props.disabled}
                                    suffix={state.value ? suffix : <Icon type="calendar" />}
                                    value={this.props.displayRenderValue ? this.props.displayRenderValue(value || ''):(value && value.format? value.format(format) : '')}
                                    onChange={this.onChangeUserName}
                                />
                            </span>
                        )
                    }
                }
            </DatePicker>
        )
    }

    render() {
        return (
            <LocaleReceiver componentName="DatePicker">
                {this.renderPicker}
            </LocaleReceiver>
        )
    }
}

app.propTypes = {
    allowClear: PropTypes.bool,//是否显示清除按钮
    autoFocus: PropTypes.bool,// todo:自动获取焦点
    dateRender: PropTypes.func,//自定义日期单元格的内容
    disabled: PropTypes.bool,//  禁用
    disabledDate: PropTypes.func,//不可选择的日期
    locale: PropTypes.object,// 国际化配置
    open: PropTypes.bool,//控制弹层是否展开
    placeholder: PropTypes.string, //输入框提示文字
    size: PropTypes.string, //输入框大小，large 高度为 40px，small 为 24px，默认是 32px
    onOpenChange: PropTypes.func,//弹出日历和关闭日历的回调
    mode: PropTypes.oneOf(['time', 'date', 'month', 'year']),
    onPanelChange: PropTypes.func,//日期面板变化时的回调
    defaultValue: PropTypes.object, //moment类型的日期对象
    disabledTime: PropTypes.func,//不可选择的时间
    format: PropTypes.string,// 展示的日期格式，配置参考 moment.js
    showTime: PropTypes.bool,// 增加时间选择功能
    showToday: PropTypes.bool,//是否展示“今天”按钮
    value: PropTypes.object, //moment 格式的日期对象
    onChange: PropTypes.func,//时间发生变化的回调
    onOk: PropTypes.func,
    dateInputPlaceholder: PropTypes.string,//日期选择里面的输入框placeholder

};
