import React, {Component} from 'react'
import Radio from '../Radio'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;


@withStyles(styles, {name: 'MuiFormRadioButtonAnt'})
export default class renderRadioButton extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','options'])
        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    <RadioGroup
                        id={`__${field.input.name}__`} {...otherField} {...field.input}
                        className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}>
                        {field.options.map((item,i)=>
                            <RadioButton
                                key={i}
                                value={item.value} disabled={item.disabled}>
                                {item.label}
                            </RadioButton>
                            )}
                    </RadioGroup>

                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}