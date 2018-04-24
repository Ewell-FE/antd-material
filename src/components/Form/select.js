import React, { Component } from 'react'

export default class renderInput  extends Component {
    render() {
        const field = this.props
        return (
            <div className={field.layout}>
                {field.label &&
                <label style={{width:field.labelcol}} htmlFor={`__${field.input.name}__`}>{field.required &&
                <span className="required">* </span>}{field.label}:</label>}
                <div className="yh-input" style={{width:field.wrappercol}}><select
                    id={`__${field.input.name}__`} {...field} {...field.input}
                    style={{width:field.wrappercol,height:"32px"}}
                    clazz={classnames(field.className, {error: isError}, {warn: isWarn})}>
                    <option value="请选择">请选择</option>
                    {field.options.map(item=> {
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
    }
}