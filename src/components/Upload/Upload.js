import React from "react";
import RcUpload from 'rc-upload';
import PropTypes from "prop-types";
import classNames from "classnames";
import {withStyles} from '@material-ui/core/styles';
import _ from "lodash";
import UploadList from './UploadList';
import { fileToObject, genPercentAdd, getFileItem, removeFileItem } from './utils';
import LocaleReceiver from '../LocaleProvider/LocaleReceiver'
const styles = theme => {
    return {
        root:{
            '& .yh-upload-list-item-name,& .yh-upload.yh-upload-drag p.yh-upload-drag-icon .fa':{
                color:theme.colors.primary
            },
            '& .yh-upload-list-item-error .yh-upload-list-item-name':{
                color:theme.colors.error
            },
            '& .yh-upload.yh-upload-drag:not(.yh-upload-disabled):hover,& .yh-upload.yh-upload-select-picture-card:hover':{
                borderColor:theme.primary[300]
            }
        }
    }
};
@withStyles(styles, {name: 'MuiUploadAnt'})
export default class Upload extends React.Component {
    static defaultProps = {
        prefixCls: 'yh-upload',
        type: 'select',
        multiple: false,
        action: '',
        data: {},
        accept: '',
        beforeUpload: ()=>{return true},
        showUploadList: true,
        listType: 'text', // or pictrue
        className: '',
        disabled: false,
        supportServerRender: true,
    };


    constructor(props) {
        super(props);
        this.state = {
            fileList: props.fileList || props.defaultFileList || [],
            dragState: 'drop',
        };
    }

    componentWillUnmount() {
        this.clearProgressTimer();
    }

    onStart = (file) => {
        let targetItem;
        let nextFileList = this.state.fileList.concat();
        targetItem = fileToObject(file);
        targetItem.status = 'uploading';
        nextFileList.push(targetItem);
        this.onChange({
            file: targetItem,
            fileList: nextFileList,
        });
        // fix ie progress
        if (!window.FormData) {
            this.autoUpdateProgress(0, targetItem);
        }
    }

    autoUpdateProgress(_, file) {
        const getPercent = genPercentAdd();
        let curPercent = 0;
        this.clearProgressTimer();
        this.progressTimer = setInterval(() => {
            curPercent = getPercent(curPercent);
            this.onProgress({
                percent: curPercent,
            }, file);
        }, 200);
    }

    onSuccess = (response, file) => {
        this.clearProgressTimer();
        try {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
        } catch (e) { /* do nothing */
        }
        let fileList = this.state.fileList;
        let targetItem = getFileItem(file, fileList);
        // removed
        if (!targetItem) {
            return;
        }
        targetItem.status = 'done';
        targetItem.response = response;
        this.onChange({
            file: { ...targetItem },
            fileList,
        });
    }

    onProgress = (e, file) => {
        let fileList = this.state.fileList;
        let targetItem = getFileItem(file, fileList);
        // removed
        if (!targetItem) {
            return;
        }
        targetItem.percent = e.percent;
        this.onChange({
            event: e,
            file: { ...targetItem },
            fileList: this.state.fileList,
        });
    }

    onError = (error, response, file) => {
        this.clearProgressTimer();
        let fileList = this.state.fileList;
        let targetItem = getFileItem(file, fileList);
        // removed
        if (!targetItem) {
            return;
        }
        targetItem.error = error;
        targetItem.response = response;
        targetItem.status = 'error';
        this.onChange({
            file: { ...targetItem },
            fileList,
        });
    }

    handleRemove(file) {
        const { onRemove } = this.props;

        Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(ret => {
            // Prevent removing file
            if (ret === false) {
                return;
            }

            const removedFileList = removeFileItem(file, this.state.fileList);
            if (removedFileList) {
                this.onChange({
                    file,
                    fileList: removedFileList,
                });
            }
        });
    }

    handleManualRemove = (file) => {
        this.upload.abort(file);
        file.status = 'removed'; // eslint-disable-line
        this.handleRemove(file);
    }

    onChange = (info) => {
        if (!('fileList' in this.props)) {
            this.setState({ fileList: info.fileList });
        }

        const { onChange,inputChange,formChange } = this.props;
        if (onChange) {
            onChange(info);
        }
        if (inputChange) {
            inputChange(info.fileList);
        }
        if (formChange) {
            formChange(info);
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('fileList' in nextProps) {
            this.setState({
                fileList: nextProps.fileList || [],
            });
        }
    }

    onFileDrop = (e) => {
        this.setState({
            dragState: e.type,
        });
    }

    beforeUpload = (file, fileList) => {
        if (!this.props.beforeUpload) {
            return true;
        }
        const result = this.props.beforeUpload(file, fileList);
        if (result === false) {
            this.onChange({
                file,
                fileList: _.uniqBy(fileList.concat(this.state.fileList), (item) => item.uid),
            });
            return false;
        } else if (result && result.then) {
            return result;
        }
        return true;
    }

    clearProgressTimer() {
        clearInterval(this.progressTimer);
    }

    saveUpload = (node) => {
        this.upload = node;
    }

    renderUploadList = (locale) => {
        const { showUploadList, listType, onPreview } = this.props;
        const { showRemoveIcon, showPreviewIcon } = showUploadList;
        return (
            <UploadList
                listType={listType}
                items={this.state.fileList}
                onPreview={onPreview}
                onRemove={this.handleManualRemove}
                showRemoveIcon={showRemoveIcon}
                showPreviewIcon={showPreviewIcon}
                locale={{ ...locale, ...this.props.locale }}
            />
        );
    }

    render() {
        const {
            classes,
            prefixCls = '',
            className,
            showUploadList,
            listType,
            type,
            disabled,
            children,
        } = this.props;
        const rcUploadProps = {
            onStart: this.onStart,
            onError: this.onError,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            ...this.props,
            beforeUpload: this.beforeUpload,
        };

        delete rcUploadProps.className;
        const uploadClass=classNames(className,classes['root']);
        const uploadList = showUploadList ? 
                        <LocaleReceiver componentName="Upload">
                            {this.renderUploadList}
                        </LocaleReceiver>: null;
        if (type === 'drag') {
            const dragCls = classNames(prefixCls, {
                [`${prefixCls}-drag`]: true,
                [`${prefixCls}-drag-uploading`]: this.state.fileList.some(file => file.status === 'uploading'),
                [`${prefixCls}-drag-hover`]: this.state.dragState === 'dragover',
                [`${prefixCls}-disabled`]: disabled,
            });
            return (
                <span className={uploadClass}>
                  <div
                      className={dragCls}
                      onDrop={this.onFileDrop}
                      onDragOver={this.onFileDrop}
                      onDragLeave={this.onFileDrop}
                  >
                    <RcUpload {...rcUploadProps} ref={this.saveUpload} className={`${prefixCls}-btn`}>
                      <div className={`${prefixCls}-drag-container`}>
                        {children}
                      </div>
                    </RcUpload>
                  </div>
                  {uploadList}
                </span>
            );
        }

        const uploadButtonCls = classNames(prefixCls, {
            [`${prefixCls}-select`]: true,
            [`${prefixCls}-select-${listType}`]: true,
            [`${prefixCls}-disabled`]: disabled,
        });

        const uploadButton = (
            <div className={uploadButtonCls} style={{ display: children ? '' : 'none' }}>
                <RcUpload {...rcUploadProps} ref={this.saveUpload} />
            </div>
        );
        if (listType === 'picture-card') {
            return (
                <span className={uploadClass}>
                    {uploadList}
                    {uploadButton}
                </span>
            );
        }
        return (
            <span className={uploadClass}>
                {uploadButton}
                {uploadList}
            </span>
        );
    }
}
Upload.propTypes = {
    accept: PropTypes.string, //接受上传的文件类型, 详见 input accept Attribute
    action:PropTypes.string, //必选参数, 上传的地址
    beforeUpload:PropTypes.func, //上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传。注意：IE9 不支持该方法
    customRequest:PropTypes.func, //通过覆盖默认的上传行为，可以自定义自己的上传实现
    data:PropTypes.any, //上传所需参数或返回上传参数的方法
    defaultFileList:PropTypes.array,//默认已经上传的文件列表
    disabled:PropTypes.bool, //是否禁用
    fileList:PropTypes.array,//已经上传的文件列表（受控）
    headers:PropTypes.object,//设置上传的请求头部，IE10 以上有效
    listType:PropTypes.oneOf(['text', 'picture','picture-card']), //上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card
    multiple:PropTypes.bool,//是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。
    name:PropTypes.string,//发到后台的文件参数名
    showUploadList:PropTypes.any,//是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon
    supportServerRender:PropTypes.bool,//服务端渲染时需要打开这个
    withCredentials:PropTypes.bool,//上传请求时是否携带 cookie
    onChange:PropTypes.func,//上传文件改变时的状态
    onPreview:PropTypes.func,//点击文件链接或预览图标时的回调
    onRemove:PropTypes.func,//点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。
}