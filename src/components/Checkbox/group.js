import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from './checbox';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import _ from 'lodash';
const styles = (theme)=> {
    return {
        root:{

        }
    }
}
@withStyles(styles, {name: 'MuiCheckboxGroupAnt'})
export default class Group extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: props.value || props.defaultValue || []
        }
    }

    static childContextTypes = {
        onChange: PropTypes.func,
        arr: PropTypes.array,
    };
    getChildContext() {
        return {
            onChange: this.onChange,
            arr:_.has(this.props,'value')&&Array.isArray(this.props.value) ? this.props.value : this.state.value
        };
    }
    static defaultProps = {
        defaultValue: [],
        options:[]
    }

    onChange(e,value) {
        //连接一个空数组生成新的数组，避免更改数据源
        let arr = (_.has(this.props,'value') ? (this.props.value||[]) : this.state.value).concat([])
        if(e.target.checked){
            arr.push(value)
        }else{
            _.remove(arr,function (key) {
                return key === value
            })
        }
        if(!_.has(this.props,'value')){
            this.setState({
                value:arr
            })
        }
        this.props.onChange&&this.props.onChange(arr,e.target.checked,value)
    }
    render() {
        const {options,children,style,classes,className,disabled,value}=this.props;
        let arr = _.has(this.props,'value')&&Array.isArray(value) ? value : this.state.value
        return (
            <div style={style} className={classnames(classes.root,className)}>
                {children}
                {
                    options.map((item, index)=> {
                        return <Checkbox
                            key={index}
                            value={item.value || item}
                            onChange={(event)=>this.onChange(event,item.value || item)}
                            checked={_.indexOf(arr,item.value || item) !== -1 ? true : false}
                            disabled={disabled || item.disabled}>
                            {item.label || item}
                        </Checkbox>
                    })
                }
            </div>
        )
    }
}

Group.propTypes = {
    options: PropTypes.array,
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}