import React, {Component} from 'react'
import Checkbox from '../Checkbox'
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'

const CheckboxGroup = Checkbox.Group;

@withStyles(styles, {name: 'MuiFormCheckGroupAnt'})
export default class renderCheckGroup extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        const gridArr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','xs'])
        let input = omit(field.input, ['value'])
        let valueList= Array.isArray(field.input.value) ? field.input.value : []
        otherField=field.xs&&gridArr.includes(Number(field.xs))?omit(otherField,['options']):otherField;
        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    <CheckboxGroup
                    id={`__${field.input.name}__`} {...otherField} {...input} defaultValue={valueList}
                    className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}>
                    {
                        field.xs&&gridArr.includes(Number(field.xs))&&
                        <Grid container spacing={0}>
                            {field.options.map((item,index)=>{
                                return(
                                    <Grid item xs={Number(field.xs)} key={index}>
                                        <Checkbox value={item}>{item}</Checkbox>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    }
                </CheckboxGroup>
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}