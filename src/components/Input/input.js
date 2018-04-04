import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import './style.less'
import classnames from 'classnames'


const styles = theme => {
    return {
        root: {
            appearance: "none",
            boxSizing: "border-box",
            width: "100%",
            padding: "4px 11px",
            backgroundColor: "#fff",
            border: "1px solid #d9d9d9",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, .05)",
            borderRadius: "4px",
            outline: "0",
            resize: "vertical",
            transition: "border-color .3s ease"
        },
        readonly:{
            border:0,
            boxShadow:'none'
        },
        disabled:{
            border:0,
            boxShadow:'none'
        },
        error:{
            borderColor:theme.colors.error,
        },
        warning:{
            borderColor:theme.colors.warning,
        },
        success:{
            borderColor:theme.colors.success,
        }
    }
};
@withStyles(styles)
export default class Input extends Component {
    static defaultProps = {
        type: 'text',
        disabled: false
    }

    onClearValue(e) {
        this.refs.inputValue.value = ''
        if (this.props.onClear) {
            this.props.onClear()
        }
    }

    onSearch(e) {
        if (this.props.onSearch) {
            this.props.onSearch()
        }
    }

    render() {
        const props = this.props
        const {classes} = this.props
        let className = classnames(classes.root, props.className, props.clazz, {'icon-l': props.iconl}, {'icon-c': props.iconclear}, {'icon-c': props.iconclear && props.iconr}, {'icon-r': props.iconr || props.iconclear})
        let inputProps = {}
        //排除清除函数回掉的影响
        for (let key in props) {
            if (key !== 'onClear' && key !== 'onSearch') {
                Object.assign(inputProps, {
                    [`${key}`]: props[key]
                })
            }
        }
        if (props.type === 'textarea') {
            return <textarea {...inputProps}
                className={className}></textarea>
        }
        if (props.iconl || props.iconr) {
            let str = props.iconr ? 'input-suffix-clear-icon' : 'input-suffix-clear'
            return (
                <span className="input-icon-wrapper"
                      style={{width: props.style.width, height: props.style.height}}>
                    <input type="text" ref='inputValue' {...inputProps} className={className}/>
                    {props.iconl && <span className="input-suffix-L"><i className={props.iconl}></i></span>}
                    {props.iconr && <span className="input-suffix-R"><i className={props.iconr}
                                                                        onClick={(e)=>this.onSearch(e)}></i></span>}
                    {props.iconclear && props.value && <span className={str}><i onClick={(e)=>this.onClearValue(e)}
                                                                                className={props.iconclear}></i></span>}

            </span>
            )
        }
        if (props.iconclear) {
            return (
                <span className="input-icon-wrapper"
                      style={{width: props.style.width, height: props.style.height}}>
                    <input ref='inputValue' type="text" {...inputProps} className={className}/>
                    {props.iconclear && props.value &&
                    <span className="input-suffix-clear"><i onClick={(e)=>this.onClearValue(e)}
                                                            className={props.iconclear}></i></span>}
            </span>
            )

        }
        if (props.readOnly || props.readOnly === 'readOnly' || props.readOnly === 'true') {
            return <input type="text" {...inputProps} className={`${className} readonly`}/>
        }
        return <input type="text" {...inputProps} className={className}/>
    }
}
