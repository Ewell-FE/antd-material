import React, {Component} from 'react'
import Slider from '../Slider'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'
@withStyles(styles, {name: 'MuiFormCheckAnt'})
export default class renderCheck extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        // console.log(field)
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label'])
        let inputValue={}
        if(field.input.value){
            inputValue.value=field.input.value
        }
        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}><Slider
                    id={`__${field.input.name}__`} {...otherField}
                    onChange={field.input.onChange}
                    {...inputValue}
                    className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}/>
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}