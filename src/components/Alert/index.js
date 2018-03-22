import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import {Modal} from 'material-ui';
import './style.less'
import classzz from '@/classes'
const styles = theme => ({
    primary: classzz.Button.primary,
    modalCancel: classzz.Button.modalCancel,
});
let div;
@withStyles(styles)
export class Alert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: props.open
        }
    }

    componentDidMount() {

    }

    close() {
        this.setState({open: false})
        document.body.removeChild(div)
    }

    ok() {
        this.close()
        this.props.ok && this.props.ok()
    }

    render() {
        const {classes} = this.props
        return (
            <Modal open={this.state.open} onClose={()=>this.close()}>
                <div className="yh-alert">
                    <div className="modalHeader">提示<span className="close" onClick={()=>this.close()}>×</span>
                    </div>
                    <div className="modalContent">
                        {this.props.msg}
                    </div>
                    <div className="modalFooter">
                        <Button className={classes.primary} onClick={()=>this.ok()}>确定</Button>
                    </div>
                </div>
            </Modal>
        )
    }
}
let show = function (options) {
    let defaultOptions = {
        open: true
    }
    Object.assign(defaultOptions, options || {})
    div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Alert {...defaultOptions}/>, div);
}
export default {
    success: function (str, callback) {
        show({msg: str, ok: callback})
    }
}

