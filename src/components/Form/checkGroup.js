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
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label', 'xs','renderOtherChild','childLayout'])
        let input = omit(field.input, ['value'])
        let valueList = Array.isArray(field.input.value) ? field.input.value : []
        otherField = field.xs||field.renderOtherChild ? omit(otherField, ['options']) : otherField;
        let getCheckBox=({item,index,field})=>{
            if(field.childLayout==='horizontal'){
                return <React.Fragment key={item.value}>
                    <Checkbox value={item.value||item} disabled={item.disabled||false}>{item.label||item}</Checkbox>
                    {<div>{field.renderOtherChild&&field.renderOtherChild(item.value||item)}</div>}
                </React.Fragment>
            }else{
                return <React.Fragment key={item.value}>
                    <Checkbox value={item.value||item} disabled={item.disabled||false}>{item.label||item}{field.renderOtherChild&&field.renderOtherChild(item.value||item)}</Checkbox>
                </React.Fragment>
            }

        }
        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    <CheckboxGroup
                        id={`__${field.input.name}__`} {...otherField} {...input} value={valueList}
                        className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}>
                        {
                            field.xs ?Array.isArray(field.options) &&
                            <Grid container spacing={0}>
                                {field.options.map((item, index)=> {
                                    return (
                                        <Grid item xs={Number(field.xs)} key={index}>
                                            {getCheckBox({item,index,field})}
                                        </Grid>
                                    )
                                })}
                            </Grid>:
                                field.renderOtherChild && Array.isArray(field.options) && field.options.map((item, index)=> {
                                return getCheckBox({item,index,field})
                            })
                        }

                    </CheckboxGroup>
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}