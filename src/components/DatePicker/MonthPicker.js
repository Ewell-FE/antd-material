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
import Input from '../Input'
import Icon from '../Icon'
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
        animation: 'slide-up',
        dateInputPlaceholder: 'please input',
        locale: cn ? zhCN : enUS,
        format: 'YYYY-MM'
    }


    onChange = (value) => {
        this.setState({
            value,
        });
        this.props.onChange && this.props.onChange(value, value.format(this.props.format))
    }

    emitEmpty = (e) => {
        e.stopPropagation()
        this.setState({value: null});
    }

    render() {
        const props = this.props
        const otherProps = omit(this.props, ['classes', 'showTime', 'onChange', 'onOpenChange', 'placeholder', 'value','style'])
        const state = this.state
        const suffix = props.allowClear ? <Icon type="close" onClick={this.emitEmpty}/> : <Icon type="calendar"/>
        let style = props.style || {}
        let otherStyle = omit(props.style, ['width', 'height'])
        const calendar = (<MonthCalendar
            prefixCls="yh-calendar"
            style={{ zIndex: 1000 }}
            {...otherProps}
            {...otherStyle}
        />);
        return (
            <DatePicker
                animation="slide-up"
                prefixCls={props.classes.root}
                disabled={state.disabled}
                calendar={calendar}
                value={state.value}
                onChange={this.onChange}
            >
                {
                    ({value}) => {
                        return (<Input
                            readOnly
                            size={props.size}
                            value={value && value.format(props.format)}
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
    format: PropTypes.string,// 展示的日期格式，配置参考 moment.js
    monthCellContentRender: PropTypes.func,//自定义的月份内容渲染方法
    renderExtraFooter: PropTypes.func, //在面板中添加额外的页脚
    value: PropTypes.object, //moment 格式的日期对象
    onChange: PropTypes.func,//时间发生变化的回调

};