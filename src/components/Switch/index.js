import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import './style.less'
import {CircularProgress} from 'material-ui/Progress';
const styles = theme =>({
        root: {
            width:  44,
            height:44,
        },
        default: {
            transform: 'translateX(-8px)',
            color: '#fff',
            '& + $bar': {
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                opacity:1
            }
        },
        checked: {
            color: '#fff',
            transform: 'translateX(14px)',
            '& + $bar': {
                backgroundColor: theme.colors.primary,
                opacity:1
            }
        },
        disabled:{
            '& + $bar': {
                opacity:0.5
            }
        },
        icon: {
            width:18,
            height:18
        },
        bar: {
            width: 44,
            height: 22,
            borderRadius: 100,
            marginTop: -9,
        }
})
@withStyles(styles,'MuiSwitch')
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }

    }


    handleChange(checked) {
        if (this.props.onChange) {
            this.props.onChange(!checked)
        } else {
            this.setState({
                checked: !checked
            })
        }

    }

    onChangeCheck = event => {
        if (this.props.onChange) {
            this.props.onChange(event.target.checked)
        } else {
            this.setState({checked: event.target.checked});
        }
    }
    //默认没有icon
    onDefaultChange=event =>{
        if (this.props.onChange) {
            this.props.onChange(event.target.checked)
        }
    }
    render() {
        const {classes, checked,loading,size} = this.props
        const props = {},icons = {}
        if(loading){
            Object.assign(icons,{
                'icon':<span className="yh-loading"><CircularProgress size={14} /></span>,
                'checkedIcon':<span className="yh-loading"><CircularProgress size={14} /></span>
            })
        }
        for(let key  in this.props){
            if(key !== 'loading'){
                Object.assign(props,{
                    [`${key}`]:this.props[key]
                })
            }
        }
        if (props.checkedChildren || props.unCheckedChildren) {
            let checkValue = checked ? checked : this.state.checked
            return (
                <div className='yh-switch' >
                    <Switch
                        checked={checkValue}
                        disableRipple
                        {...icons}
                        onChange={this.onChangeCheck}
                        classes={{...classes}}>
                    </Switch>
                    {
                        checkValue ?
                            <span className="yh-checked"
                                  onClick={() => this.handleChange(checkValue)}>
                        {props.checkedChildren}
                        </span>
                            :
                            <span className="yh-unChecked"
                                  onClick={() => this.handleChange(checkValue)}>
                        {props.unCheckedChildren}
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
                        onChange={this.onDefaultChange}
                        disableRipple
                        classes={{...classes}}>
                    </Switch>
                </div>
            )
        }
    }
}

