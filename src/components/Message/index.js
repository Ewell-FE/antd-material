import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withStyles} from 'material-ui/styles';
import Slide from 'material-ui/transitions/Slide';
import './style.less'
import classnames from 'classnames'
import _ from 'lodash'
const styles = theme => ({
    success: {
        color: '#00a854'
    },
    warn: {
        color: '#ffbf00'
    },
    info: {
        color: '#108ee9'
    },
    error: {
        color: '#f04134'
    }
});
let Icon = {
    'success': 'fa-check-circle',
    'warn': 'fa-exclamation-circle',
    'info': 'fa-info-circle',
    'error': 'fa-times-circle'
}
let box = null;
let index = 0;
let div = {};
@withStyles(styles)
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
            //todo:如果
            delete div[key]
            callback && callback()
        }, timer)
    }

    render() {
        const {classes} = this.props
        return (
            <Slide direction="down" in={true}>
                <div className="yh-message">
                    <div className={classnames('yh-message-icon',)}>
                        <i className={classnames('fa',Icon[this.props.type],classes[this.props.type])}
                           aria-hidden="true"></i>
                    </div>
                    <div className="yh-message-group"><p>{this.props.msg}</p></div>
                </div>
            </Slide>
        )
    }
}
let show = function (options) {
    let defaultOptions = {
        type: 'success',
        index: ++index
    }
    Object.assign(defaultOptions, options || {})
    if (!box) {
        box = document.createElement('div')
        box.className = 'yh-message-box'
        document.body.appendChild(box);
    }
    let messageBox = document.createElement('div')
    box.appendChild(messageBox);
    div[index] = messageBox
    ReactDOM.render(<Message {...defaultOptions}/>, messageBox);
}
export default {
    success: function (str, timer, callback) {
        show({msg: str, type: 'success', timer, callback})
    },
    warn: function (str, timer, callback) {
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

