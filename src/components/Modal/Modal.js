import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import Button from '@/components/Button';
import {Modal} from 'material-ui';
import Icon from '../Icon'
import grey from 'material-ui/colors/grey';
import classnames from 'classnames';
import { CircularProgress } from 'material-ui/Progress';
const styles = theme => ({
    modal:{
        color: 'rgba(0,0,0,.65)',
        listStyle: 'none',
        position: 'relative',
        top:'100px',
        width: 'auto',
        margin: '0 auto',
        outline: 'none'
    },
    modalContent:{
        position: 'relative',
        backgroundColor: '#fff',
        border: '0',
        borderRadius: '4px',
        backgroundClip: 'padding-box',
        boxShadow: '0 4px 12px rgba(0,0,0,.15)',
        overflow:'auto'
    },
    modalHeader:{
        padding: '16px 24px',
        borderRadius: '4px 4px 0 0',
        background: '#fff',
        color: 'rgba(0,0,0,.65)',
        borderBottom: '1px solid #e8e8e8',
    },
    modalTitle:{
        margin: '0',
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: '500',
        color: 'rgba(0,0,0,.85)'
    },
    modalClose:{
        cursor: 'pointer',
        position: 'absolute',
        right: '0',
        top: '0',
        color: 'rgba(0,0,0,.45)',
        display: 'block',
        verticalAlign: 'baseline',
        textAlign: 'center',
        width: '56px',
        height: '56px',
        lineHeight: '56px',
        fontSize: '16px'
    },
    modalBody:{
        padding: '24px',
        fontSize: '14px',
        lineHeight: '1.5',
        wordWrap: 'break-word'
    },
    modalFooter:{
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign:'right',
        borderRadius: '0 0 4px 4px'
    },
    root:{
        alignItems: 'center',
        justifyContent: 'center',
        '& .modal':{
            top:0
        }
    }
});
@withStyles(styles, {name: 'MuiModalAnt'})
export default class modal extends Component {
    static defaultProps={
        title:'title',
        okText:'ok',
        okType:'Primary',
        cancelText:'cancel',
        width:520,
        mask:true,
        maskClosable:true,
        closable:true,
        confirmLoading:false,
        style:{},
        verticalAlign:false,
        wrapClassName:'',
        getContainer:() => document.body,
        bodyStyle:{},
        destroyOnClose:false
    }
    componentWillReceiveProps(nextProps) {
        if('visible' in nextProps){
            if(!nextProps.visible&&('afterClose' in nextProps)) {
                nextProps.afterClose()
            }
        }
    }
    render() {
        const {classes,visible,onCancel,children,title,okText,cancelText,width,mask,maskClosable,onOk,header,footer,closable,confirmLoading,verticalAlign,wrapClassName,getContainer,bodyStyle,okType}= this.props
        const defaultFooter=(
            <div>
                <Button onClick={onCancel}>{cancelText}</Button>
                <Button type={okType} onClick={onOk}>{confirmLoading&&<CircularProgress className={classes.progress} size={16} style={{ color: grey[50] }}/>}{okText}</Button>
            </div>);
        let modalFooter;
        if(!footer){
            modalFooter=defaultFooter;
        }else{
            modalFooter=(<div>
                {
                    footer.map((item)=>{
                        return item
                    })
                }
            </div>)
        }
        let style=verticalAlign?Object.assign({},this.props.style,{top:0}):this.props.style;
        const modalStyle=Object.assign({width:width+'px'},style);
        const wrapClass=classnames(classes.modal,wrapClassName);
        const root=classnames({
            [classes['root']]:verticalAlign
        });
        return (
            <Modal
                open={visible}
                onClose={onCancel}
                hideBackdrop={!mask}
                disableBackdropClick={!maskClosable}
                classes={{root}}
                container={getContainer}
            >
                <div className={wrapClass} style={modalStyle}>
                    <div className={classes.modalContent}>
                        {header!==null&&
                        <div className={classes.modalHeader}>
                            <div className={classes.modalTitle}>{title}</div>
                            {closable&&<span className={classes.modalClose} onClick={onCancel}><Icon type="times" /></span>}
                        </div>
                        }
                        <div className={classes.modalBody} style={bodyStyle}>
                            {
                                Array.isArray(children)?children.map(function (child) {
                                    return child
                                }):children
                            }
                        </div>
                        {footer!==null&&(<div className={classes.modalFooter}>{modalFooter}</div>)}
                    </div>
                </div>
            </Modal>
        )
    }
}
