import React, {Component} from "react";
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Progress from '../Progress';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import './index.less'
import './test.css'

const styles = theme => {
    return {
        root:{
            fontSize:'14px',
            color: 'fade(#000, 45%)',
            position: 'absolute',
            top:'2px',
        }
    }
};
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
const previewFile = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(file);
};

const extname = (url) => {
    if (!url) {
        return '';
    }
    const temp = url.split('/');
    const filename = temp[temp.length - 1];
    const filenameWithoutSuffix = filename.split(/\#|\?/)[0];
    return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

const isImageUrl = (url)=> {
    const extension = extname(url);
    if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg)$/.test(extension)) {
        return true;
    } else if (/^data:/.test(url)) { // other file types of base64
        return false;
    } else if (extension) { // other file types which have extension
        return false;
    }
    return true;
};
@withStyles(styles, {name: 'MuiUploadListAnt'})
export default class UploadList extends React.Component{
    static defaultProps = {
        listType: 'text',  // or picture
        progressAttr: {
            strokeWidth: 2,
            showInfo: false,
        },
        prefixCls: 'yh-upload',
        showRemoveIcon: true,
        showPreviewIcon: true,
    };

    handleClose = (file) => {
        const { onRemove } = this.props;
        if (onRemove) {
            onRemove(file);
        }
    }

    handlePreview = (file, e) => {
        const { onPreview } = this.props;
        if (!onPreview) {
            return;
        }
        e.preventDefault();
        return onPreview(file);
    }

    componentDidUpdate() {
        if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
            return;
        }
        (this.props.items || []).forEach(file => {
            if (typeof document === 'undefined' ||
                typeof window === 'undefined' ||
                !window.FileReader || !window.File ||
                !file.originFileObj ||
                file.thumbUrl !== undefined) {
                return;
            }
            /*eslint-disable */
            file.thumbUrl = '';
            /*eslint-enable */
            previewFile(file.originFileObj, (previewDataUrl) => {
                /*eslint-disable */
                file.thumbUrl = previewDataUrl;
                /*eslint-enable */
                this.forceUpdate();
            });
        });
    }

    render() {
        const {classes, prefixCls, items = [], listType, showPreviewIcon, showRemoveIcon } = this.props;
        const list = items.map(file => {
            let progress,icon;

            //icon = <Icon type={file.status === 'uploading' ? 'spinner' : 'paperclip'} />;
            icon= file.status === 'uploading'? <CircularProgress  size={20} style={{ color: grey[400] }} classes={{root:classes.root}} />:<Icon type='paperclip' />
            if (listType === 'picture' || listType === 'picture-card') {
                if (listType === 'picture-card' && file.status === 'uploading') {
                    icon = <div className={`${prefixCls}-list-item-uploading-text`}>uploading</div>;
                } else if (!file.thumbUrl && !file.url) {
                    icon = <Icon className={`${prefixCls}-list-item-thumbnail`} type="picture" />;
                } else {
                    let thumbnail = isImageUrl(file.thumbUrl || file.url)
                        ? <img src={file.thumbUrl || file.url} alt={file.name} />
                        : <Icon type="file" className={`${prefixCls}-list-item-icon`} />;
                    icon = (
                        <a
                            className={`${prefixCls}-list-item-thumbnail`}
                            onClick={e => this.handlePreview(file, e)}
                            href={file.url || file.thumbUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {thumbnail}
                        </a>
                    );
                }
            }

            if (file.status === 'uploading') {
                // show loading icon if upload progress listener is disabled
                const loadingProgress = ('percent' in file) ? (
                    <Progress type="line" {...this.props.progressAttr} percent={file.percent} />
                ) : null;

                progress = (
                    <div className={`${prefixCls}-list-item-progress`} key="progress">
                        {loadingProgress}
                    </div>
                );
            }
            const infoUploadingClass = classNames({
                [`${prefixCls}-list-item`]: true,
                [`${prefixCls}-list-item-${file.status}`]: true,
            });
            const preview = file.url ? (
                <a
                    {...file.linkProps}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${prefixCls}-list-item-name`}
                    onClick={e => this.handlePreview(file, e)}
                    title={file.name}
                >
                    {file.name}
                </a>
            ) : (
                <span
                    className={`${prefixCls}-list-item-name`}
                    onClick={e => this.handlePreview(file, e)}
                    title={file.name}
                >
          {file.name}
        </span>
            );
            const style = {
                pointerEvents: 'none',
                opacity: 0.5,
            };
            const previewIcon = showPreviewIcon ? (
                <a
                    href={file.url || file.thumbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={(file.url || file.thumbUrl) ? undefined : style}
                    onClick={e => this.handlePreview(file, e)}
                >
                    <Icon type="eye" />
                </a>
            ) : null;
            const removeIcon = showRemoveIcon ? (
                <Icon type="trash"  onClick={() => this.handleClose(file)} />
            ) : null;
            const removeIconCross = showRemoveIcon ? (
                <Icon type="times"  onClick={() => this.handleClose(file)} />
            ) : null;
            const actions = (listType === 'picture-card' && file.status !== 'uploading')
                ? <span className={`${prefixCls}-list-item-actions`}>{previewIcon}{removeIcon}</span>
                : removeIconCross;
            let message;
            if (file.response && typeof file.response === 'string') {
                message = file.response;
            } else {
                message = (file.error && file.error.statusText) || '上传失败';
            }
            const iconAndPreview = (file.status === 'error')
                ? <Tooltip title={message}><span>{icon}{preview}</span></Tooltip>
                : <span>{icon}{preview}</span>;

            return (
                <div className={infoUploadingClass} key={file.uid}>
                    <div className={`${prefixCls}-list-item-info`}>
                        {iconAndPreview}
                    </div>
                    {actions}
                    {progress}
                </div>
            );
        });
        const listClassNames = classNames({
            [`${prefixCls}-list`]: true,
            [`${prefixCls}-list-${listType}`]: true,
        });

        return (
            <div className={listClassNames}>
                {list}
            </div>
        );
    }
}
