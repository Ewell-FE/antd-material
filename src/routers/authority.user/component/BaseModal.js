/**
 * Created by sasha on 2018/1/29.
 */
import React, {Component} from 'react'
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import classzz from '@/classes'
const styles = {
    buttonSave: classzz.Button.primary,
    buttonCancel: classzz.Button.modalCancel,
};
@withStyles(styles)
export default class BaseModal extends Component {
    constructor(props) {
        super(props)
        this.Submit = this.Submit.bind(this)
    }
    Submit() {
        if(this.props.action){
            if(this.props.enable){
                this.props.action({
                    id:this.props.rowId,
                    enable:this.props.enable,
                    account:this.props.account
                },()=>{this.props.handleClose();this.props.fentchList()})
            }else{
                this.props.action({
                    id:this.props.rowId
                },()=>{this.props.handleClose();this.props.fentchList()})
            }
        }else{
            this.props.handleClose()
        }

    }
    render() {
        const { classes,handleClose,type } = this.props
        const children=Array.isArray(this.props.children)?this.props.children:[{...this.props.children}]
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open}
                onClose={this.handleClose}

            >
                <div id="baseMoadl">
                    <div className="modalHeader">提示
                        <i className="close fa fa-close" onClick={()=>handleClose()}></i>
                    </div>
                    <div className="modalBody" style={{paddingTop:'22px'}}>
                        {
                            children.map(function (child,i) {
                                return <p key={i} style={{textAlign:'center'}}>{child}</p>
                            })
                        }
                        {
                            type==='prompt'?'':
                                <div style={{ position: 'relative',textAlign:'center',margin:'20px auto'}}>
                                    <Button style={{marginRight:"20px"}}
                                        className={classes.buttonCancel}
                                        onClick={()=>handleClose()}
                                    >
                                        取消
                                    </Button>
                                    <Button
                                        className={classes.buttonSave}
                                        onClick={()=>this.Submit()}
                                    >
                                        确定
                                    </Button>
                                </div>
                        }

                    </div>

                </div>

            </Modal>

        );
    }
}
