import React, {Component} from 'react'
import Mention from '../Mention'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'
const { toStrings } = Mention;
@withStyles(styles, {name: 'MuiFormMentionAnt'})
export default class renderInput extends Component {
    //获取mention的值
    onChange(value,field){
        field.input.onChange(toStrings(value))
    }

    render() {
        const {classes, field, isError, isWarn} = this.props
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','classes','suggestions'])
        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    <Mention
                        placeholder={field.placeholder}
                        id={`__${field.input.name}__`}
                        {...otherField}
                        className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}
                        onChange={(value)=>this.onChange(value,field)}
                        suggestions={field.suggestions || []}/>
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}