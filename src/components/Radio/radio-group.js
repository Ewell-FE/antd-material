import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from './index'

const styles = theme => {
    return {
        root: {
            display:'inline-block'
        },
        radioGroup:{
            display:'inline-block'
        }
    }
};
@withStyles(styles, {name: 'MuiRadioGroupAnt'})
export default class app extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:this.props.value || this.props.defaultValue
        }
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({ value: nextProps.value });
        }
    }
    onHandleChange = e =>{
        this.props.onChange&&this.props.onChange(e)
        if(!_.has(this.props,'value')){
            this.setState({
                value:e.target.value
            })
        }
    }

    render() {
        const {classes,value,children,style,name,disabled,size,options,className,renderOtherChild}= this.props
        return (
            <div className={classnames(classes.root,className)} style={style}>
                {
                    options ?
                        <RadioGroup
                            name={name}
                            className={classes.radioGroup}
                            value={(value || this.state.value)+''}
                            onChange={this.onHandleChange}
                        >
                            {
                                options.map((item, i) => {
                                    return (
                                        <Radio {...item} disabled={disabled || item.disabled}  value={item.value} key={i}>{item.label}{renderOtherChild?renderOtherChild(item.value||item):''}</Radio>
                                    )
                                })
                            }
                        </RadioGroup>
                        : <RadioGroup
                            name={name}
                            className={classes.radioGroup}
                            value={(value || this.state.value)+''}
                            onChange={this.onHandleChange}>
                            {React.Children.map(children, (child, i)=> {
                                if (!child){return null}
                                return React.cloneElement(child, {
                                    disabled:disabled || child.props.disabled,
                                    size:size
                                })
                        })}
                        </RadioGroup>
                }
            </div>
        )
    }
}
app.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.any,
    size: PropTypes.oneOf(['small', 'large']), //大小 只对button的有用
    disabled:PropTypes.bool, //全局是否可选
    defaultValue:PropTypes.any,
    style:PropTypes.object,
    options:PropTypes.array, //配置项
    name:PropTypes.string // input的name
};
