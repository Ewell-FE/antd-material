import React, {Component} from 'react'
import InputNumber from '../InputNumber'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'

@withStyles(styles, {name: 'MuiFormInputNumberAnt'})
export default class renderInput extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        let inputs = omit(field.input, ['onBlur', 'onDragStart', 'onDrop', 'onFocus', 'value'])
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label', 'classes']);
        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    <InputNumber
                        placeholder={field.placeholder}
                        id={`__${field.input.name}__`}
                        {...inputs}
                        value={field.input.value.toString()}
                        {...otherField}
                        className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}
                    />

                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}