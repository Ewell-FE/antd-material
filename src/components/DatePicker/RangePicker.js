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
import omit from 'omit.js';
import styles from './style'

const cn = true
moment.locale('zh-cn')
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
        placeholder: 'Start Time ~ End Time',
        animation: 'slide-up',
        dateInputPlaceholder: ['start', 'end'],
        locale: cn ? zhCN : enUS,
        format: 'YYYY-MM-DD HH:mm:ss'
    }


    onChange = (value) => {
        this.setState({
            value
        });
        this.props.onChange && this.props.onChange(value, [value[0].format(this.props.format), value[1].format(this.props.format)])

    }

    emitEmpty = (e) => {
        e.stopPropagation()
        this.setState({value: null});
    }

    onHoverChange = (hoverValue) => {
        this.setState({hoverValue});
    }

    render() {
        const props = this.props
        const otherProps = omit(this.props, ['classes', 'showTime', 'onChange', 'onOpenChange', 'placeholder', 'value'])
        const state = this.state
        const suffix = props.allowClear ? <Icon type="close" onClick={this.emitEmpty}/> : <Icon type="calendar"/>
        let style = props.style || {}
        let otherStyle = omit(props.style, ['width', 'height'])
        const calendar = (
            <RangeCalendar
                showWeekNumber={false}
                prefixCls="yh-calendar"
                timePicker={timePickerElement}
                {...otherProps}
                {...otherStyle}
            />);
        return (
            <DatePicker
                animation="slide-up"
                prefixCls={props.classes.root}
                calendar={calendar}
                value={state.value}
                onChange={this.onChange}
            >
                {
                    ({value}) => {
                        return (<Input
                            readOnly
                            disabled={state.disabled}
                            value={(isValidRange(value) && `${value[0].format(props.format)} - ${value[1].format(props.format)}`) || ''}
                            style={{width:style.width,height:style.height}}
                            suffix={state.value ? suffix:<Icon type="calendar"/>}
                            placeholder={this.props.placeholder}
                        />);
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
    open: PropTypes.bool,//控制弹层是否展开
    placeholder: PropTypes.string, //输入框提示文字
    size: PropTypes.string, //输入框大小，large 高度为 40px，small 为 24px，默认是 32px
    onOpenChange: PropTypes.func,//弹出日历和关闭日历的回调
    mode: PropTypes.oneOf(['time', 'date', 'month', 'year']),
    onPanelChange: PropTypes.func,//日期面板变化时的回调

    defaultValue: PropTypes.object, //moment类型的日期对象
    disabledTime: PropTypes.func,//不可选择的时间
    format: PropTypes.string,// 展示的日期格式，配置参考 moment.js
    ranges: PropTypes.array,// 	预设时间范围快捷选择
    renderExtraFooter: PropTypes.node, // 在面板中添加额外的页脚
    showTime: PropTypes.bool,// 增加时间选择功能
    "showTime.defaultValue": PropTypes.object,//设置用户选择日期时默认的时分秒，例子
    value: PropTypes.object, //moment 格式的日期对象
    onChange: PropTypes.func,//时间发生变化的回调
    onOk: PropTypes.func
};