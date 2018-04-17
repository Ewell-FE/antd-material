import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import {CircularProgress} from 'material-ui/Progress';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
const styles = theme => ({
    yhSwitch: {
        display: 'inline-block',
        position: 'relative',
    },
    yhUnChecked: {
        position: 'absolute',
        right: 2,
        top: 14,
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    },
    yhChecked: {
        position: 'absolute',
        left: 10,
        top: 14,
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    },
    yhLoading: {
        display: 'inline-block',
        borderRadius: '50%',
        backgroundColor: '#fff',
        width: 18,
        height: 18,
        position: 'relative',
        '&>div>svg': {
            position: 'absolute',
            left: 0,
            top: 0,
        }
    },
    root: {
        width: 44,
        height: 44,
    },
    default: {
        transform: 'translateX(-8px)',
        color: '#fff',
        '& + $bar': {
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            opacity: 1
        }
    },
    checked: {
        color: '#fff',
        transform: 'translateX(14px)',
        '& + $bar': {
            backgroundColor: theme.colors.primary,
            opacity: 1
        }
    },
    disabled: {
        '& + $bar': {
            opacity: 0.5
        }
    },
    icon: {
        width: 18,
        height: 18
    },
    bar: {
        width: 44,
        height: 22,
        borderRadius: 100,
        marginTop: -9,
    },
    root1:{
        width: 32,
        height: 18,
    },
    bar1:{
        width: 32,
        height: 18,
    },
    icon1:{
        width: 14,
        height: 14
    },
    default1:{
        width: '32px',
        height: '18px',
        top: '0',
        transform: 'translateX(-8px)',
    },
    checked1: {
        transform: 'translateX(6px)',
    },
    yhChecked1:{
      fontSize:'12px',
        left: 2,
        top: 3,
    },
    yhUnChecked1:{
        fontSize:'12px',
        right: 2,
        top: 3,
    }
})

export class SimpleSwitch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.defaultChecked || false
        }
    }

    componentDidMount() {
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.input))
    }

    handleChange(checked) {
        if (this.props.checked !== undefined) {
            this.props.onChange&&this.props.onChange(!checked)
        } else {
            this.setState({
                checked: !checked
            })
        }

    }

    onChangeCheck = event => {
        if (this.props.checked !== undefined) {
            this.props.onChange&&this.props.onChange(event.target.checked)
        } else {
            this.setState({checked: event.target.checked});
        }
    }

    render() {
        const {classes, checked, loading,size} = this.props
        const props = {}, icons = {}, switchClass = {}
        Object.assign(switchClass, {
            'root': classNames(classes.root,size === 'small' ? classes.root1 : ''),
            'bar': classNames(classes.bar,size === 'small' ? classes.bar1 : ''),
            'default':classNames(classes.default,size === 'small' ? classes.default1 : ''),
            'icon': classNames(classes.icon,size === 'small' ? classes.icon1 : ''),
            'checked':classNames(classes.checked,size === 'small' ? classes.checked1 : ''),
            'disabled': classes.disabled
        })
        if (loading) {
            Object.assign(icons, {
                'icon': <span className={classNames(classes.yhLoading,size==='small' ? classes.icon1:'')}><CircularProgress size={14}/></span>,
                'checkedIcon': <span className={classNames(classes.yhLoading,size==='small' ? classes.icon1:'')}><CircularProgress size={14}/></span>
            })
        }
        for (let key  in this.props) {
            if (key !== 'loading' && key !== 'checkedChildren' && key !== 'unCheckedChildren' && key !== 'classes') {
                Object.assign(props, {
                    [`${key}`]: this.props[key]
                })
            }
        }
        let checkValue = checked !== undefined ? checked : this.state.checked
        if (this.props.checkedChildren || this.props.unCheckedChildren) {
            return (
                <div className={classes.yhSwitch}>
                    <Switch
                        checked={checkValue}
                        disableRipple
                        inputRef={ref=>this.input = ref}
                        {...icons}
                        onChange={this.onChangeCheck}
                        classes={{...switchClass}}
                    >
                    </Switch>
                    {
                        checkValue ?
                            <span className={classNames(classes.yhChecked,size === 'small' ? classes.yhChecked1 : '')}
                                  onClick={() => this.handleChange(checkValue)}>
                        {this.props.checkedChildren}
                        </span>
                            :
                            <span className={classNames(classes.yhUnChecked,size === 'small' ? classes.yhUnChecked1 : '')}
                                  onClick={() => this.handleChange(checkValue)}>
                        {this.props.unCheckedChildren}
                        </span>
                    }
                </div>
            )
        } else {
            return (
                <div className='yh-switch'>
                    <Switch
                        {...props}
                        {...icons}
                        inputRef={ref=>this.input = ref}
                        checked={checkValue}
                        onChange={this.onChangeCheck}
                        disableRipple
                        classes={{...switchClass}}
                    >
                    </Switch>
                </div>
            )
        }
    }
}
SimpleSwitch.propTypes = {
    size: PropTypes.oneOf(['small', 'default']), //大小
    checked:PropTypes.bool, //是否打开
    onChange:PropTypes.func, //改变函数，返回当前状态
    checkedChildren:PropTypes.any, //选中时的内容
    unCheckedChildren:PropTypes.any, //非选中时的内容
    disabled:PropTypes.bool, //是否禁用
    loading:PropTypes.bool, //加载中的开关
    defaultChecked:PropTypes.bool, //初始是否选中
}
export default withStyles(styles)(SimpleSwitch);

