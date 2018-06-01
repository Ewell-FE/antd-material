import React, {Component} from 'react'
import Switch from '../Switch'
// import Switch from '@material-ui/core/Switch';
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'
@withStyles(styles, {name: 'MuiFormSwitchAnt'})
export default class renderSwitch extends Component {
    state={
        checked:false
    }
    onChange(){
        this.setState({checked:!this.state.checked})
    }
    render() {
        const {classes, field, isError, isWarn} = this.props
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','type'])

        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    <Switch
                        id={`__${field.input.name}__`}
                        {...otherField}
                        onChange={field.input.onChange}
                        className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}/>
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}