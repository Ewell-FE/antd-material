import React, {Component} from 'react'
import Upload from '../Upload'
import Icon from '../Icon'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import styles from './style'
const Dragger = Upload.Dragger;

@withStyles(styles, {name: 'MuiFormCascaderAnt'})
export default class renderDragger extends Component {
    render() {
        const {classes, field, isError, isWarn} = this.props
        let otherField = omit(field, ['input', 'labelWidth', 'wrapperWidth', 'meta', 'layout', 'label','classes','options'])
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
                    <Dragger
                        id={`__${field.input.name}__`}
                        {...otherField}
                        {...inputValue}
                        className={classnames(field.className, classes.inputError ,{'error': isError}, {'warn': isWarn})}
                        inputChange={field.input.onChange}
                    >
                        <p className="yh-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="yh-upload-text">Click or drag file to this area to upload</p>
                        <p className="yh-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                    </Dragger>
                    {isError && <div className={classnames(classes.errorInfo,classes.error)}>{field.meta.error}</div>}
                    {isWarn && <div className={classnames(classes.errorInfo,classes.warn)}>{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}