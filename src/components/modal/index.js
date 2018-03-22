import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import {Modal } from 'material-ui';
import './style.less'
import classzz from '@/classes'
const styles = theme => ({
    primary: classzz.Button.primary,
    modalCancel:classzz.Button.modalCancel
});
@withStyles(styles)
export default class Spin extends Component {

    render() {
        const {classes} = this.props
        return (
            <Modal open={this.props.open} onClose={()=>this.props.onModalClose()}>
                <div id="modal">
                    <div className="modalHeader">提示<span className="close" onClick={()=>this.props.onClose()}>×</span></div>
                    <div className="modalContent">
                        {this.props.modalMsg}
                    </div>
                    <div className="modalFooter">
                        <Button className={classes.primary} onClick={()=>this.props.onClose()}>确定</Button>
                    </div>
                </div>
            </Modal>
        )
    }
}
