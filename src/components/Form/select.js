import React, {Component} from 'react'
import Select from '../Select'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'
const { Option, OptGroup } = Select;

@withStyles(styles, {name: 'MuiFormSelectAnt'})
export default class renderInput extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        let inputs = omit(field.input,['onBlur','onDragStart','onDrop','onFocus'])
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','classes','options'])
        let select;
        if(field.OptGroup){
            select=<Select
                id={`__${field.input.name}__`}
                {...inputs}
                {...otherField}
                className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}
                >
                {
                    Array.isArray(Object.keys(field.OptGroup))&&Object.keys(field.OptGroup).map((item,key)=>{
                        return(
                            <OptGroup value={item} label={item} key={key}>
                                {
                                    field.OptGroup[item].map((it,index)=><Option value={it.value} key={index}>{it.label}</Option>)
                                }
                            </OptGroup>
                        )
                    })
                }
                </Select>
        }else {
            select=<Select
                id={`__${field.input.name}__`}
                {...inputs}
                {...otherField}
                className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}
                options={field.options || []}/>
        }
        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    {select}
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}