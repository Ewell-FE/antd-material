import React, {Component} from 'react'
import './style.less'
import classnames from 'classnames'

export default class Input extends Component {
    static defaultProps = {
        prefixcls: 'input',
        type: 'text',
        disabled: false
    }

    onClearValue(e){
        this.refs.inputValue.value = ''
        if(this.props.onClear){
            this.props.onClear()
        }
    }
    onSearch(e){
        if(this.props.onSearch){
            this.props.onSearch()
        }
    }

    render() {
        const props = this.props
        let className = classnames(props.prefixcls, props.className, props.clazz, {'icon-l': props.iconl},{'icon-c': props.iconclear},{'icon-c': props.iconclear&&props.iconr}, {'icon-r': props.iconr ||props.iconclear})
        let inputProps = {}
        //排除清除函数回掉的影响
        for(let key in props){
            if(key !== 'onClear' && key !== 'onSearch'){
               Object.assign(inputProps,{
                   [`${key}`]:props[key]
               })
            }
        }
        if (props.type === 'textarea') {
            return <textarea {...inputProps}
                             className={className}></textarea>
        }
        if (props.iconl || props.iconr) {
                let str  = props.iconr ? 'input-suffix-clear-icon' : 'input-suffix-clear'
                return (
                    <span className="input-icon-wrapper"
                          style={{width: props.style.width, height: props.style.height}}>
                    <input type="text" ref='inputValue' {...inputProps} className={className}/>
                        {props.iconl && <span className="input-suffix-L"><i className={props.iconl}></i></span>}
                        {props.iconr && <span className="input-suffix-R"><i className={props.iconr} onClick={(e)=>this.onSearch(e)}></i></span>}
                        {props.iconclear && props.value && <span className={str}><i  onClick={(e)=>this.onClearValue(e)}  className={props.iconclear}></i></span>}

            </span>
                )
        }
        if (props.iconclear) {
            return (
                <span className="input-icon-wrapper"
                      style={{width: props.style.width, height: props.style.height}}>
                    <input ref='inputValue' type="text" {...inputProps} className={className}/>
                    {props.iconclear && props.value && <span className="input-suffix-clear"><i onClick={(e)=>this.onClearValue(e)} className={props.iconclear}></i></span>}
            </span>
            )

        }
        if (props.readOnly || props.readOnly === 'readOnly' || props.readOnly === 'true') {
            return <input type="text" {...inputProps} className={`${className} readonly`}/>
        }
        return <input type="text" {...inputProps} className={className}/>
    }
}
