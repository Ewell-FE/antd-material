import React, {Component} from 'react'
import Checkbox from '../Checkbox'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'

@withStyles(styles, {name: 'MuiFormCheckAnt'})
export default class renderCheck extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        // console.log(field)
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','title','afterLabel','afterLabelStyle','className'])
        return (
            <div className={`${classes[field.layout]} ${field.className||''}`}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}><Checkbox iserror={isError?isError.toString():undefined}
                    checked={field.input.value?field.input.value:false}
                    id={`__${field.input.name}__`} {...otherField} {...field.input}
                    className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}>{field.title||''}</Checkbox>
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
                {field.afterLabel&&<label style={{width:field.afterLabelWidth,...(field.afterLabelStyle||{})}}>{field.afterLabel}</label>}
            </div>
        )
    }
}