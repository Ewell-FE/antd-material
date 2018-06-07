import React, {Component} from 'react'
import Upload from '@/components/Upload'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'
@withStyles(styles, {name: 'MuiFormCascaderAnt'})
export default class renderDragger extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','classes','options','button'])
        let childButton=Array.isArray(field.fileList)&&field.childNum&&(field.fileList.length >= field.childNum) ? null : field.button;
        let inputValue={}
        if(field.input.value){
            inputValue.defaultFileList=[...field.input.value]
        }

        return (
            <div className={classes[field.layout]}>
                {field.label &&
                <label style={{width:field.labelWidth}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="input" style={{width:field.wrapperWidth}}>
                    <div className="clearfix">
                        <Upload
                            id={`__${field.input.name}__`}
                            {...otherField}
                            {...inputValue}
                            className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}
                            inputChange={field.input.onChange}
                        >
                            {childButton}
                        </Upload>
                    </div>
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}