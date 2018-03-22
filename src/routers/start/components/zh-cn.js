import Moment from 'moment';
import {extendMoment} from 'moment-range';
import 'moment/locale/zh-cn'
var moment = extendMoment(Moment);
moment.locale('zh-cn')
export function formatNumber(num) {
    return num;
}

export function getCalendarHeaderText(date) {
    return date.format('MMMM YYYY');
}

export function getDatePickerHeaderText(date) {
    return date.format('ddd M月D日');
}

export function getDateTimePickerHeaderText(date) {
    return date.format('M月D日');
}

export function getDayText(date) {
    return date.format('D');
}

export function getHourText(date, ampm) {
    return date.format(ampm ? 'hh' : 'HH');
}

export function getMinuteText(date) {
    return date.format('mm');
}

export function getMeridiemText(ampm) {
    return ampm === 'am' ? 'AM' : 'PM';
}

export function getYearText(date) {
    return date.format('YYYY年');
}

export function getMonthNumber(date) {
    return date.get('month');
}

export function getStartOfMonth(date) {
    return date.clone().startOf('month');
}

export function getNextMonth(date) {
    return date.clone().add(1, 'month');
}

export function getPreviousMonth(date) {
    return date.clone().subtract(1, 'month');
}

export function getYear(date) {
    return date.get('year');
}

export function setYear(date, year) {
    return date.clone().set('year', year);
}

export function getWeekdays() {
    return [0, 1, 2, 3, 4, 5, 6].map(function (dayOfWeek) {
        return moment().weekday(dayOfWeek).format('dd')[0];
    });
}

export function getWeekArray(date) {
    var start = date.clone().startOf('month').startOf('week');
    var end = date.clone().endOf('month').endOf('week');

    var weeks = Array.from(moment.range(start, end).by('week'));

    var nestedWeeks = [];

    weeks.forEach(function (week) {
        var endOfWeek = week.clone().endOf('week');
        nestedWeeks.push(Array.from(moment.range(week, endOfWeek).by('day')));
    });

    return nestedWeeks;
}

var utils = {
    formatNumber: formatNumber,
    getCalendarHeaderText: getCalendarHeaderText,
    getDatePickerHeaderText: getDatePickerHeaderText,
    getDateTimePickerHeaderText: getDateTimePickerHeaderText,
    getDayText: getDayText,
    getHourText: getHourText,
    getMinuteText: getMinuteText,
    getMeridiemText: getMeridiemText,
    getYearText: getYearText,
    getMonthNumber: getMonthNumber,
    getStartOfMonth: getStartOfMonth,
    getNextMonth: getNextMonth,
    getPreviousMonth: getPreviousMonth,
    getYear: getYear,
    setYear: setYear,
    getWeekdays: getWeekdays,
    getWeekArray: getWeekArray,
};

export default utils;