import React, {Component} from 'react'
import DatePicker from '../DatePicker'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'
function fixControlledValue(value) {
    return Array.isArray(value)?value.map((item)=>item===""?null:item):[null,null];
}
const RangePicker= DatePicker.RangePicker

@withStyles(styles, {name: 'MuiFormDatePickerAnt'})
export default class renderInput extends Component {
    render() {
        const {classes, field, isError, isWarn,format} = this.props
        let inputs = omit(field.input, ['onBlur', 'onDragStart', 'onDrop', 'onFocus','displayRenderValue'])
        inputs.value = fixControlledValue(inputs.value)
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label', 'classes', 'options','dateformat'])
        let useFormat = field.dateformat || format
        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className={`input ${isError?'error':''}`} style={{width:field.wrapperWidth}}>
                    <RangePicker
                        id={`__${field.input.name}__`}
                        {...inputs}
                        {...otherField}
                        format={useFormat}
                        className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}
                    />

                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}