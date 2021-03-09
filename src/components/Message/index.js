import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Icon from '../Icon';
import Slide from '@material-ui/core/Slide';
import style from '../Style'
import classnames from 'classnames'
import _ from 'lodash'
const styles = theme => {
    return {
        message: {
            "position": "relative",
            "display": "inline-block",
            "borderRadius": "4px",
            "box-shadow": "0 2px 8px rgba(0, 0, 0, 0.2)",
            "padding": "10px 12px",
            "box-sizing": "border-box",
            "overflow": "hidden",
            "height": "40px",
        },
        successMessage:{
            "backgroundColor": "#fff",
        },
        warnMessage:{
            "backgroundColor": "#fff",
        },
        infoMessage:{
            "backgroundColor": "#fff",
        },
        errorMessage:{
            "backgroundColor": "#fff",
        },
        messageIcon: {
            "position": "absolute",
            "left": "0",
            "top": "0",
            "text-align": "center",
            "line-height": "40px",
            "margin-left": "10px",
        },
        messageGroup: {
            "margin-left": "15px",
            "position": "relative",
            "height": "20px",
            "align-items": "center"
        },
        success: {
            color: theme.colors.success
        },
        warn: {
            color: theme.colors.warning
        },
        info: {
            color: theme.colors.info
        },
        error: {
            color: theme.colors.error
        }
    }
}
let Icons = {
    'success': 'check-circle',
    'warn': 'exclamation-circle',
    'info': 'info-circle',
    'error': 'times-circle'
}
let box = null;
let emptyBox = null;
let index = 0;
let div = {};

@withStyles(styles, {name: 'MuiMessageAnt'})
export class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: props.index
        }
    }

    componentDidMount() {
        let that = this
        let timer = this.props.timer || 2000
        let callback = this.props.callback
        if (_.isFunction(timer)) {
            callback = timer
            timer = 2000
        }
        setTimeout(function () {
            let key = that.state.key
            box.removeChild(div[key])
            delete div[key]
            if (_.isEqual(div, {})) {
                document.body.removeChild(emptyBox);
                box = null;
            }
            callback && callback()
        }, timer)
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classnames(classes.message,classes[`${this.props.type}Message`])}>
                <div className={classes.messageIcon}>
                    <Icon type={Icons[this.props.type]} className={classes[this.props.type]}/>
                </div>
                <div className={classes.messageGroup}><span>{this.props.msg}</span></div>
            </div>
        )
    }
}

const styles2 = theme => {
    return {
        root: {
            "position": "fixed",
            "top": "20px",
            "width": "100%",
            "textAlign": "center",
            "zIndex": "1301",
            "pointerEvents": "none"
        }
    }
}
@withStyles(styles2, {name: 'MuiMessageBoxAnt'})
export class BoxMsg extends Component {
    componentDidMount() {
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.message))
    }
    render() {
        return (
            <div ref={ref=>this.message =ref} className={this.props.classes.root}>

            </div>
        )
    }
}
let show = function (options) {
    let defaultOptions = {
        type: 'success',
        index: ++index
    }
    Object.assign(defaultOptions, options || {})
    const renderMessage = ()=>{
        let messageBox = document.createElement('div')
        box.appendChild(messageBox);
        div[index] = messageBox
        ReactDOM.render(
            <Slide direction="down" in={true}>
                <div>
                    <MuiThemeProvider theme={style.theme}>
                        <Message {...defaultOptions}/>
                    </MuiThemeProvider>
                </div>
            </Slide>, messageBox);
    }
    if (!box) {
        emptyBox = document.createElement('div')
        document.body.appendChild(emptyBox);
        ReactDOM.render(<MuiThemeProvider theme={style.theme}>
            <BoxMsg withRef={(dom)=>{box=dom}}/>
        </MuiThemeProvider>, emptyBox,()=>renderMessage());
    }else{
        renderMessage()
    }
}
export default {
    success: function (str, timer, callback) {
        show({msg: str, type: 'success', timer, callback})
    },
    warn: function (str, timer, callback) {
        show({msg: str, type: 'warn', timer, callback})
    },
    warning: function (str, timer, callback) {
        show({msg: str, type: 'warn', timer, callback})
    },
    info: function (str, timer, callback) {
        show({msg: str, type: 'info', timer, callback})
    },
    error: function (str, timer, callback) {
        show({msg: str, type: 'error', timer, callback})
    },
    show: show
}

