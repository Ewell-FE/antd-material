/**
 * Created by lilei on 2018/1/31.
 */
import React, {Component} from 'react'
import {reduxForm, Field, Form} from 'redux-form'
import Input from '@/components/Input'
import classnames from 'classnames'
import Grid from 'material-ui/Grid';
import './style.less'

//渲染field组件
let FieldHtml = (field)=> {
    var isError = field.meta.touched && field.meta.error
    var isWarn = field.meta.touched && field.meta.warning
    if(field.readOnly === true){
        return (
            <div className={field.layout}>
                {field.label &&
                <label style={{width:field.labelcol}} htmlFor={`__${field.input.name}__`}>{field.label}:</label>}
                <div className="yh-input" style={{lineHeight:"32px"}}>
                    {field.val[field.input.name]?field.val[field.input.name]:''}
                    {/*<span style={{verticalAlign: 'baseline-middle'}}></span>*/}
                </div>
            </div>
        )
    }else if(field.type === 'select'){
        return (
            <div className={field.layout}>
                {field.label &&
                <label style={{width:field.labelcol}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="yh-input" style={{width:field.wrappercol}}><select
                    id={`__${field.input.name}__`} {...field} {...field.input} style={{width:field.wrappercol,height:"32px"}}
                    clazz={classnames(field.className, {error: isError}, {warn: isWarn})}>
                    <option value="请选择">请选择</option>
                    {field.options.map(item=>{
                        return (
                            <option value={item} key={item}>{item}</option>
                        )
                    })}
                </select>
                    {isError && <div className="errorRequired">{field.meta.error}</div>}
                    {isWarn && <div className="warnRequired">{field.meta.warning}</div>}
                </div>
            </div>
        )
    }else{
        return (
            <div className={field.layout}>
                {field.label &&
                <label style={{width:field.labelcol}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="yh-input" style={{width:field.wrappercol}}><Input
                    id={`__${field.input.name}__`} {...field} {...field.input}
                    clazz={classnames(field.className, {error: isError}, {warn: isWarn})}/>
                    {isError && <div className="errorRequired">{field.meta.error}</div>}
                    {isWarn && <div className="warnRequired">{field.meta.warning}</div>}
                </div>
            </div>
        )
    }
}
//field.layout 可选值：[ field , inline , horizontal ,grid] 默认为field
const renderField = (field) => {
    if (field.layout === 'grid') {
        return (
            <Grid item xs={field.span} >
                <FieldHtml {...field}/>
            </Grid>
        )
    }
    return (
        <FieldHtml  {...field}/>
    )
}

const required = value => (value ? undefined : '必填项')
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

export class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    static defaultProps = {
        layout: 'field'
    }

    handleSubmit(values) {
        this.props.Submit(values)
    }

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <GridBox {...this.props}>
                    {this.props.fields && this.props.fields.map((item, i)=> {
                        return (
                            <RenderFields key={i} {...item}
                                          layout={this.props.layout}
                                          labelcol={this.props.labelCol}
                                          wrappercol={this.props.wrapperCol}
                            />
                        )
                    })}
                    {this.props.children}
                </GridBox>
            </Form>
        )
    }
}
export default reduxForm({enableReinitialize: true})(FormComponent)