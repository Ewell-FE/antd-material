import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import _ from 'lodash';

const styles = (theme) => {
    let fontSize = theme.typography.fontSize
    return {
        root:{
            fontSize:fontSize,
            backgroundColor: '#fafafa',
            borderRadius: '4px',
            border: '1px solid #d9d9d9',
            borderBottom:'none',
            textAlign:'left'
        },
        noBorder:{
            border: 'none',
            backgroundColor:'transparent'
        }
    }
}

@withStyles(styles, {name: 'MuiCollapseAnt'})
class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey:props.activeKey || props.defaultActiveKey
        }
    }
    static defaultProps = {
        bordered:true
    }
    componentDidMount(){
        //判断没有初始值的时候，初始状态，单选
        if(!this.state.activeKey){
            if(this.props.accordion){
                this.setState({
                    activeKey:''
                })
            }else{
                this.setState({
                    activeKey:[]
                })
            }
        }
    }
    onHandleChoose(obj){
        let activeKey = _.has(this.props,'activeKey') ? this.props.activeKey : this.state.activeKey
        let keys,_this=this
        if(!this.props.accordion){
            //打开多个的处理
            if(_.indexOf(activeKey,obj.key) !== -1){
                keys = _.remove(activeKey,function (key) {
                    return key !== obj.key
                })
            }else{
                keys = activeKey
                keys.push(obj.key)
            }
        }else{
            keys = obj.key === activeKey ? '' : obj.key
        }
        let open=()=>{
            if(!_.has(_this.props,'activeKey')){
                _this.setState({
                    activeKey:keys
                })
            }
            _this.props.onChange&&_this.props.onChange(keys)
        }
        if(this.props.openPanel){
            this.props.openPanel(obj.key).then(()=>open())
        }else {
            open()
        }



    }
    render() {
        const {classes,className,children,accordion,activeKey,disabled,bordered,style} = this.props
        let keys = _.has(this.props,'activeKey') ? activeKey : this.state.activeKey
        return (
            <div className={classnames(classes.root,className,bordered === false&&classes.noBorder)} style={style}>
                {React.Children && React.Children.map(children, (child, i)=> {
                    if((typeof child === 'object')||(typeof child === 'function')){
                        return React.cloneElement(child, {
                            accordion:accordion,
                            activeKey:keys,
                            bordered:bordered,
                            disabled:disabled || (child && child.props && child.props.disabled),
                            panelKey:child&&child.key,
                            onChange:()=>this.onHandleChoose(child)
                        })
                    }else {
                        return null
                    }

                })}
            </div>
        )
    }
}

app.propsTypes = {
    style:PropTypes.object, //行内样式
    className:PropTypes.string, //类名
    children:PropTypes.node, //子节点
    accordion:PropTypes.bool, //是否只允许同时打开一个，默认为false
    activeKey:PropTypes.array || PropTypes.string, //打开的手风琴key值
    defaultActiveKey:PropTypes.array || PropTypes.string, //打开的手风琴key值(默认)
    disabled:PropTypes.bool, //是否禁止操作
    bordered:PropTypes.bool, //手风琴是否有border
    onChange:PropTypes.func, //操作改变函数的回调函数
}

export default app