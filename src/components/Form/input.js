import React, {Component} from 'react'
import Input from '../Input'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'
const Search = Input.Search
@withStyles(styles, {name: 'MuiFormInputAnt'})
export default class renderInput extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','classes','outerStyle'])
        let commonProps={
            id:`__${field.input.name}__`,
            ...otherField,
            ...field.input,
            className:classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})
        }
        return (
            <div className={classes[field.layout]} style={{...(field.outerStyle||{})}}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    {
                        otherField.type==='search'?<Search {...commonProps}/>:<Input {...commonProps}/>
                    }
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}