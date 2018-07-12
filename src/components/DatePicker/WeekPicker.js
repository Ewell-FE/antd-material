import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import { withStyles } from '@material-ui/core/styles';
import omit from 'omit.js';
import LocaleReceiver from '../LocaleProvider/LocaleReceiver'

const styles = theme => {
    return {
        root: {
            width: '386px',
            "& .yh-calendar-tbody > tr:hover .yh-calendar-date": {
                background: "#ebfaff"
            },
            "& .yh-calendar-tbody > tr:hover .yh-calendar-selected-day .yh-calendar-date": {
                background: "#3fc7fa"
            },
            "& .week-calendar-sidebar": {
                position: "absolute",
                top: "0",
                left: "0",
                bottom: "0",
                width: "100px",
                borderRight: "1px solid #ccc"
            }
        }
    }
}
@withStyles(styles, { name: 'MuiWeekPickerAnt' })
export default class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue,
        };
    }

    static defaultProps = {
        // placeholder: 'select week',
        format: 'YYYY-Wo'
    }

    dateRender = (current) => {
        const selectedValue = this.state.value;
        if (selectedValue && current.year() === selectedValue.year() &&
            current.week() === selectedValue.week()) {
            return (<div className="yh-calendar-selected-day">
                <div className="yh-calendar-date">
                    {current.date()}
                </div>
            </div>);
        }
        return (
            <div className="yh-calendar-date">
                {current.date()}
            </div>);
    }


    renderDatePicker = (locale) => {
        const props = this.props
        const otherProps = omit(props, ['classes'])
        return (
            <DatePicker
                className={props.classes.root}
                showWeekNumber
                showDateInput
                dateRender={this.dateRender}
                placeholder={locale.lang.weekPlaceholder}
                {...otherProps}
            />
        )
    }

    render() {
        return (
            <LocaleReceiver componentName="DatePicker">
                {this.renderDatePicker}
            </LocaleReceiver>
        )
    }
}

app.propTypes = {
    renderSidebar: PropTypes.func,//工具栏
}