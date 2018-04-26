import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import {CircularProgress} from 'material-ui/Progress';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import _ from 'lodash'
const styles = theme => ({
    root: {
        display: 'inline-block',
        position: 'relative',
    },
    unCheckedIcon: {
        position: 'absolute',
        right: 2,
        top: 14,
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    },
    checkedIcon: {
        position: 'absolute',
        left: 10,
        top: 14,
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    },
    loading: {
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
    defaultRoot: {
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
    defaultChecked: {
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
    smallRoot:{
        width: 32,
        height: 18,
    },
    smallBar:{
        width: 32,
        height: 18,
    },
    smallIcon:{
        width: 14,
        height: 14
    },
    smallDefault:{
        width: '32px',
        height: '18px',
        top: '0',
        transform: 'translateX(-8px)',
    },
    smallChecked: {
        transform: 'translateX(6px)',
    },
    checkedIcons:{
      fontSize:'12px',
        left: 2,
        top: 3,
    },
    unCheckedIcons:{
        fontSize:'12px',
        right: 2,
        top: 3,
    }
})

export class App extends Component {
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
        if (!_.has(this.props,'checked')) {
            this.setState({
                checked: !checked
            })
        }
        this.props.onChange&&this.props.onChange(!checked)

    }

    onChangeCheck = event => {
        if (!_.has(this.props,'checked')) {
            this.setState({checked: event.target.checked});
        }
        this.props.onChange&&this.props.onChange(event.target.checked)

    }

    render() {
        const {classes, checked, loading,size} = this.props
        const icons = {}, switchClass = {}
        const otherProps = _.omit(this.props, ['loading','checkedChildren','unCheckedChildren','classes'])
        Object.assign(switchClass, {
            'root': classNames(classes.defaultRoot,size === 'small'&&classes.smallRoot),
            'bar': classNames(classes.bar,size === 'small'&&classes.smallBar),
            'default':classNames(classes.default,size === 'small'&&classes.smallDefault),
            'icon': classNames(classes.icon,size === 'small'&&classes.smallIcon),
            'checked':classNames(classes.defaultChecked,size === 'small'&&classes.smallChecked),
            'disabled': classes.disabled
        })
        if (loading) {
            Object.assign(icons, {
                'icon': <span className={classNames(classes.loading,size==='small' && classes.smallIcon)}><CircularProgress size={14}/></span>,
                'checkedIcon': <span className={classNames(classes.loading,size==='small' && classes.smallIcon)}><CircularProgress size={14}/></span>
            })
        }
        let checkValue = _.has(this.props,'checked') ? checked : this.state.checked
        if (this.props.checkedChildren || this.props.unCheckedChildren) {
            return (
                <div className={classes.root}>
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
                            <span className={classNames(classes.checkedIcon,size === 'small'&&classes.checkedIcons)}
                                  onClick={() => this.handleChange(checkValue)}>
                        {this.props.checkedChildren}
                        </span>
                            :
                            <span className={classNames(classes.unCheckedIcon,size === 'small'&&classes.unCheckedIcons)}
                                  onClick={() => this.handleChange(checkValue)}>
                        {this.props.unCheckedChildren}
                        </span>
                    }
                </div>
            )
        } else {
            return (
                <div className={classes.root}>
                    <Switch
                        {...otherProps}
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
App.propTypes = {
    size: PropTypes.oneOf(['small', 'default']), //大小
    checked:PropTypes.bool, //是否打开
    onChange:PropTypes.func, //改变函数，返回当前状态
    checkedChildren:PropTypes.any, //选中时的内容
    unCheckedChildren:PropTypes.any, //非选中时的内容
    disabled:PropTypes.bool, //是否禁用
    loading:PropTypes.bool, //加载中的开关
    defaultChecked:PropTypes.bool, //初始是否选中
}
export default withStyles(styles,{name:'MuiSwitchAnt'})(App);

