import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Modal } from '@material-ui/core';
import Icon from '../Icon'
import classnames from 'classnames';
import LocaleReceiver from '../LocaleProvider/LocaleReceiver'
const styles = theme => ({
    modal: {
        color: 'rgba(0,0,0,.65)',
        listStyle: 'none',
        position: 'relative',
        top: '100px',
        width: 'auto',
        margin: '0 auto',
        outline: 'none'
    },
    modalContent: {
        position: 'relative',
        backgroundColor: '#fff',
        border: '0',
        borderRadius: '4px',
        backgroundClip: 'padding-box',
        boxShadow: '0 4px 12px rgba(0,0,0,.15)',
        overflow: 'auto'
    },
    modalHeader: {
        padding: '16px 24px',
        borderRadius: '4px 4px 0 0',
        background: '#fff',
        color: 'rgba(0,0,0,.65)',
        borderBottom: '1px solid #e8e8e8',
    },
    modalTitle: {
        margin: '0',
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: '500',
        color: 'rgba(0,0,0,.85)'
    },
    modalClose: {
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
    modalBody: {
        padding: '24px',
        fontSize: '14px',
        lineHeight: '1.5',
        wordWrap: 'break-word'
    },
    modalFooter: {
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'right',
        borderRadius: '0 0 4px 4px'
    },
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        '& .modal': {
            top: 0
        }
    }
});
@withStyles(styles, { name: 'MuiModalAnt' })
export default class modal extends Component {
    static defaultProps = {
        visible: false,
        title: 'title',
        // okText: 'ok',
        okType: 'Primary',
        // cancelText: 'cancel',
        width: 520,
        mask: true,
        maskClosable: true,
        closable: true,
        confirmLoading: false,
        style: {},
        verticalAlign: false,
        wrapClassName: '',
        getContainer: () => document.body,
        bodyStyle: {},
        destroyOnClose: false,
        onCancel: () => { },
        onOk: () => { },
        onRendered: () => { }
    }
    componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            if (!nextProps.visible && ('afterClose' in nextProps)) {
                nextProps.afterClose()
            }
        }
    }
    renderModal = (locale) => {
        const { classes, visible, onClose, onCancel, children, title, okText, cancelText, width, mask, maskClosable, onOk, header, footer, closable, confirmLoading, verticalAlign, wrapClassName, getContainer, bodyStyle, okType, onRendered,disableEscapeKeyDown,rootClassName,okDisabled } = this.props
        const defaultFooter = (
            <div>
                <Button type={okType} disabled={okDisabled} onClick={onOk} loading={confirmLoading}>{okText || locale.okText}</Button>
                <Button onClick={onCancel}>{cancelText || locale.cancelText}</Button>
            </div>);
        let modalFooter;
        if (!footer) {
            modalFooter = defaultFooter;
        } else {
            modalFooter = (<div>
                {
                    footer.map((item) => {
                        return item
                    })
                }
            </div>)
        }
        let style = verticalAlign ? Object.assign({}, this.props.style, { top: 0 }) : this.props.style;
        const modalStyle = Object.assign({ width: _.isNumber(width)?width + 'px': width}, style);
        const wrapClass = classnames(classes.modal, wrapClassName);
        const root = classnames({
            [classes['root']]: verticalAlign
        },rootClassName);
        return (
            <Modal
                open={visible}
                onClose={onClose||onCancel}
                hideBackdrop={!mask}
                disableBackdropClick={!maskClosable}
                classes={{ root }}
                container={getContainer}
                disableEscapeKeyDown={disableEscapeKeyDown}
                onRendered={onRendered}
            >
                <div className={wrapClass} style={modalStyle}>
                    <div className={classes.modalContent}>
                        {header !== null &&
                            <div className={classes.modalHeader}>
                                <div className={classes.modalTitle}>{title}</div>
                            </div>
                        }
                        {closable && <span className={classes.modalClose} onClick={onCancel}><Icon type="times" /></span>}
                        <div className={classes.modalBody} style={bodyStyle}>
                            {
                                Array.isArray(children) ? children.map(function (child) {
                                    return child
                                }) : children
                            }
                        </div>
                        {footer !== null && (<div className={classes.modalFooter}>{modalFooter}</div>)}
                    </div>
                </div>
            </Modal>
        )
    }

    render() {
        return (
            <LocaleReceiver componentName="Modal">
                {this.renderModal}
            </LocaleReceiver>
        )
    }
}
modal.propTypes = {
    title: PropTypes.any,//标题
    okText: PropTypes.string,//确认按钮文字
    okType: PropTypes.string,//确认按钮类型
    cancelText: PropTypes.string,//取消按钮文字
    width: PropTypes.any,//宽度
    mask: PropTypes.bool,//是否展示遮罩
    maskClosable: PropTypes.bool,//点击蒙层是否允许关闭
    closable: PropTypes.bool,//是否显示右上角的关闭按钮
    confirmLoading: PropTypes.bool,//确定按钮 loading
    style: PropTypes.object,//可用于设置浮层的样式，调整浮层位置等
    verticalAlign: PropTypes.bool,//是否垂直居中
    wrapClassName: PropTypes.string,//对话框外层容器的类名
    rootClassName: PropTypes.string,//对话框最外层容器的类名
    getContainer: PropTypes.func,//指定 Modal 挂载的 HTML 节点
    bodyStyle: PropTypes.object,//Modal body 样式
    destroyOnClose: PropTypes.bool,//关闭时销毁 Modal 里的子元素
    afterClose: PropTypes.func,//Modal 完全关闭后的回调
    header: PropTypes.any,//头部内容，当不需要头部标题，可以设为 header={null}
    footer: PropTypes.any,//底部内容，当不需要默认底部按钮时，可以设为 footer={null}
    visible: PropTypes.bool,//对话框是否可见
    onCancel: PropTypes.func,//点击遮罩层或右上角叉或取消按钮的回调
    onOk: PropTypes.func,//点击确定回调,
    onRendered: PropTypes.func,//Modal中子元素被挂载后触发回调
    okDisabled: PropTypes.bool,//确认按钮是否可以点击
}
