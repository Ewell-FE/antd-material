import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';
import {withStyles} from 'material-ui/styles';
import Button from '@/components/Button';
import Icon from '@/components/Icon'
import Modal from './index';
import {MuiThemeProvider} from 'material-ui/styles';
import style from '@/components/Style'
import classnames from 'classnames'

const styles = theme => {
    return{
    success: {
        color:'#52c41a'
    },
    warn: {
        color: '#faad14'
    },
    info: {
        color: '#1890ff'
    },
    error: {
        color: '#f5222d'
    },
    confirm:{
        color: '#faad14'
    },
    confirmIcon:{
        fontSize: '22px',
        marginRight: '16px',
        float: 'left',
        lineHeight:1
        },
    confirmTitle:{
        color: 'rgba(0,0,0,.85)',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '22px',
        display: 'block',
        overflow: 'auto'
    },
    confirmContent:{
        marginLeft: '38px',
        fontSize: '14px',
        color: 'rgba(0,0,0,.65)',
        marginTop: '8px'
    },
    confirmBtns:{
        marginTop: '24px',
        marginBottom:'10px',
        float: 'right'
    }
}};
const IS_REACT_16 = !!ReactDOM.createPortal;
@withStyles(styles, {name: 'MuiConfirmModalAnt'})
export class ConfirmModal extends Component {
    static defaultProps={
        iconType:'question-circle',
        okType:'Primary',
        okText:'ok',
        cancelText:'cancel',
        width:416,
        mask:true,
        maskClosable:false,
    }
    render(){
        const {classes,afterClose,visible,title,content,close,iconType,type,okType,okText,cancelText,mask,maskClosable,width} = this.props;
        const okCancel = ('okCancel' in this.props) ? this.props.okCancel : true;

        const cancelButton = okCancel && (
                <Button onClick={close}>
                    {cancelText}
                </Button>
            );

        return (
            <MuiThemeProvider theme={style.use('theme')}>
                <Modal
                    title=""
                    header={null}
                    footer={null}
                    visible={visible}
                    width={width}
                    onCancel={close}
                    afterClose={afterClose}
                    mask={mask}
                    maskClosable={maskClosable}
                    closable={false}
                >
                    <div>
                        <span className={classnames(classes.confirmIcon,classes[type])}><Icon type={iconType} /></span>
                        <span className={classes.confirmTitle}>{title}</span>
                        <div className={classes.confirmContent}>{content}</div>
                    </div>
                    <div className={classes.confirmBtns}>
                        {cancelButton}
                        <Button  type={okType} onClick={close} >
                            {okText}
                        </Button>
                    </div>
                </Modal>
            </MuiThemeProvider>
        );
    }
}
export default function confirm(config) {
    let div = document.createElement('div');
    document.body.appendChild(div);

    function close(...args) {
        if (IS_REACT_16) {
            render({ ...config, close, visible: false, afterClose: destroy.bind(this, ...args) });
        } else {
            destroy(...args);
        }
    }

    function destroy(...args) {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }

    function render(props) {
        ReactDOM.render(<ConfirmModal {...props} />, div);
    }

    render({ ...config, visible: true, close });

    return {
        destroy: close,
    };
}