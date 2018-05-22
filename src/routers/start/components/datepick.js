/**
 * Created by lilei on 2018/2/8.
 */
import React, {Fragment, Component} from 'react';
import moment from 'moment';
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {TimePicker, DatePicker} from '@material-ui/core-pickers';
import zhcnUtils from './zh-cn';


const styles = theme => ({
    textFieldInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 50px 10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        }
    }
});

@withStyles(styles)
export default class DatePick extends Component {
    state = {
        selectedDate: moment()
    }

    handleDateChange = (date) => {
        console.log(date)
        this.setState({selectedDate: date});
    }

    render() {
        const {classes} = this.props;
        const {selectedDate} = this.state;
        const Left = props => <i className="fa fa-angle-left" aria-hidden="true"></i>;
        const Right = props => <i className="fa fa-angle-right" aria-hidden="true"></i>;
        const Calendar = props => <i className="fa fa-calendar" aria-hidden="true"></i>;
        const Clock = props => <i className="fa fa-clock-o" aria-hidden="true"></i>;
        return (
            <Fragment>
                <div className="picker">
                    <Typography type="headline" align="center" gutterBottom>
                        Date picker
                    </Typography>
                    <DatePicker
                        format="YYYY-MM-DD"
                        okLabel="确定"
                        cancelLabel="取消"
                        clearLabel="清除"
                        leftArrowIcon={<Left></Left>}
                        rightArrowIcon={<Right></Right>}
                        keyboardIcon={<Calendar></Calendar>}
                        keyboard
                        clearable
                        value={selectedDate}
                        onChange={this.handleDateChange}
                        animateYearScrolling={false}
                        InputProps={{
                          disableUnderline: true,
                          classes: {
                            input: classes.textFieldInput
                          }
                        }}
                    />
                </div>

                <div className="picker">
                    <Typography type="headline" align="center" gutterBottom>
                        Time picker
                    </Typography>

                    <TimePicker
                        keyboard
                        mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
                        placeholder="08:00 AM"
                        keyboardIcon={<Clock></Clock>}
                        value={selectedDate}
                        onChange={this.handleDateChange}
                    />
                </div>
            </Fragment>
        );
    }
}