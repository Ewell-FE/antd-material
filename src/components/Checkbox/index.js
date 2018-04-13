import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from './checbox';


class Group extends Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.state={
            value:this.props.value || this.props.checkedValue || this.props.defaultValue
        }
    }

    static defaultProps={
        defaultValue:[]
    }

    onChange(e){
        let arr=[...this.state.value];
        e.target.checked?arr.push(e.target.value):arr.splice(arr.findIndex(item => item === e.target.value), 1);
        this.props.onChange && this.props.onChange(arr);
        //redux-form
        !!this.props.input && this.props.input && this.props.input.onChange(arr);
        this.setState({
            value:arr
        })
    }

    componentWillReceiveProps(nextProps){
        if(!this.props.input){
            this.setState({
                value:nextProps.value
            })
        }
    }

    render(){
        const {options}=this.props;
        let checkedvalue=this.state.value || [];
        return (
            <div>
                {
                    options.map((item,index)=>{
                        if(typeof item==='string'){
                            return <Checkbox 
                                        key={item} 
                                        value={item} 
                                        isGroup={true} 
                                        onChange={this.onChange}
                                        checked={checkedvalue.indexOf(item)!==-1}
                                        disabled={this.props.disabled}
                                    >
                                    {item}
                                    </Checkbox>
                        }else{
                            return <Checkbox 
                                        key={item.value} 
                                        value={item.value} 
                                        isGroup={true}
                                        onChange={this.onChange}
                                        checked={checkedvalue.indexOf(item.value)!==-1}
                                        disabled={this.props.disabled || item.disabled}
                                    >
                                    {item.label}
                                    </Checkbox>
                        }
                    })
                }
            </div>
        )
    }
}

Group.propTypes={
    options:PropTypes.array.isRequired,
    defaultValue:PropTypes.array,
    value:PropTypes.array,
    onChange:PropTypes.func,
    disabled:PropTypes.bool
}

export default class App extends Component{
    static Group=Group;
    
    render(){
        let props;
        if(!!this.props.input){//redux-form
            const {onChange,checked}=this.props.input;
            props=Object.assign({},this.props,{
                onChange:onChange,
                checked:checked
            })
        }else{
            props=this.props;
        }
        return (
            <Checkbox {...props} >{this.props.children}</Checkbox>
        )
    }
}

App.propTypes={
    onChange:PropTypes.func,
    defaultChecked:PropTypes.bool,
    checked:PropTypes.bool,
    name:PropTypes.string,
    indeterminate:PropTypes.bool,
    disabled:PropTypes.bool
}
