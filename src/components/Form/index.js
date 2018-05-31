/**
 * Created by lilei on 2018/1/31.
 */
import React, {Component} from 'react'
import {reduxForm, Field, Form} from 'redux-form'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js';
import Input from './input'
import Select from './select'
import Mention from './mention'
import Checkbox from './check'
import Radio from './radio'
import Rate from './rate'
import CheckboxGroup from './checkGroup'
import RadioGroup from './radioGroup'
import RadioButton from './radioButton'
import Cascader from './cascader'
import Switch from './switch'
import Slider from './slider'

//渲染field组件
let FieldHtml = (field)=> {
    var isError = field.meta.touched && field.meta.error
    var isWarn = field.meta.touched && field.meta.warning
    if (field.render) {
        let otherField = omit(field, ['labelWidth', 'wrapperWidth', 'layout', 'render'])
        return (
            <field.render field={otherField}/>
        )
    }

    switch (field.type){
        case 'select':return ( <Select field={field} isError={isError} isWarn={isWarn}/>)
        case 'mention':return(<Mention field={field} isError={isError} isWarn={isWarn}/>)
        case 'check':return(<Checkbox field={field} isError={isError} isWarn={isWarn}/>)
        case 'checkgroup':return(<CheckboxGroup field={field} isError={isError} isWarn={isWarn}/>)
        case 'radio':return(<Radio field={field} isError={isError} isWarn={isWarn}/>)
        case 'radiogroup':return(<RadioGroup field={field} isError={isError} isWarn={isWarn}/>)
        case 'radiobutton':return(<RadioButton field={field} isError={isError} isWarn={isWarn}/>)
        case 'rate':return(<Rate field={field} isError={isError} isWarn={isWarn}/>)
        case 'cascader':return(<Cascader field={field} isError={isError} isWarn={isWarn}/>)
        case 'switch':return(<Switch field={field} isError={isError} isWarn={isWarn}/>)
        case 'slider':return(<Slider field={field} isError={isError} isWarn={isWarn}/>)
        default:return (<Input field={field} isError={isError} isWarn={isWarn}/>)
    }
}
//field.layout 可选值：[ vertical , inline , horizontal ,grid] 默认为inline
const renderField = (field) => {
    if (field.layout === 'grid') {
        return (
            <Grid item xs={field.span}>
                <FieldHtml {...field}/>
            </Grid>
        )
    }
    return (
        <FieldHtml  {...field}/>
    )
}

const required = value => ((Array.isArray(value)&&!value.length)?'必填项':value ? undefined : '必填项')
const RenderFields = (props)=> {
    let validates = []
    if (props.required) {
        validates.push(required)
    }
    if (props.validate) {
        validates = validates.concat(props.validate)
    }

    return (
        <Field {...props} component={renderField} validate={validates}/>
    )
}

let GridBox = (props)=> {
    if (props.layout === 'grid') {
        return (
            <div style={{flexGrow:1}}>
                <Grid container spacing={24}>
                    {props.children}
                </Grid>
            </div>
        )
    }
    return props.children

}

const styles = theme => {
    return {
        root: {
            "& button": {
                "verticalAlign": "top"
            }
        }
    }
};
@withStyles(styles, {name: 'MuiFormAnt'})
export class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    static defaultProps = {
        layout: 'inline'
    }

    handleSubmit(values) {
        this.props.Submit(values)
    }

    render() {
        const {classes} =this.props
        return (
            <Form className={classes.root} onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <GridBox {...this.props}>
                    {this.props.fields && this.props.fields.map((item, i)=> {
                        return (
                            <RenderFields key={i} {...item}
                                          layout={this.props.layout}
                                          labelWidth={item.labelWidth ||　this.props.labelWidth}
                                          wrapperWidth={item.wrapperWidth || this.props.wrapperWidth}
                            />
                        )
                    })}
                    {this.props.children}
                </GridBox>
            </Form>
        )
    }
}

Input.propTypes = {
    layout: PropTypes.oneOf(['inline', 'vertical', 'horizontal', 'grid'])
};
export default reduxForm({enableReinitialize: true})(FormComponent)