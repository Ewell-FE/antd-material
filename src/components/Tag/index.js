import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classnames from 'classnames'
import CheckableTag from './CheckableTag'

const styles = theme => {
    return {
        outer: {
            display: 'inline-block'
        },
        root: {
            background: theme.palette.grey[50],
            border: '1px solid #d9d9d9',
            height: '22px',
            textAlign: 'center',
            lineHeight: '20px',
            fontSize: '12px',
            color: 'rgba(0,0,0,.65)',
            borderRadius: '2px',
            display: 'inline-block',
            margin: '0 5px',
            cursor: 'pointer',
            verticalAlign: 'middle',
            marginRight: '10px',
            boxSizing: 'border-box'

        },
        red: {
            color: '#f5222d',
            background: '#fff1f0',
            borderColor: '#ffa39e'
        },
        green: {
            color: '#52c41a',
            background: '#f6ffed',
            borderColor: '#b7eb8f'
        },
        blue: {
            color: '#1890ff',
            background: '#e6f7ff',
            borderColor: '#91d5ff',
        },
        orange: {
            color: '#fa8c16',
            background: '#fff7e6',
            borderColor: '#ffd591'
        },
        span: {
            width: '100%',
            display: 'inline-block',
            padding: '0 10px',

        },
        disabled: {
            cursor: 'not-allowed'
        },
        checked: {
            background: '#1890ff',
            color: '#fff',
            marginRight: '10px',
            border: 'none',
            lineHeight: '22px'
        },
        unchecked: {
            background: 'none',
            border: 'none',
            lineHeight: '22px'
        }
    }
};

@withStyles(styles, {name: 'MuiTag-ant'})
export default class app extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true,//点击关闭时不显示
            arr: [],//标签数量
        }
    }

    onClose = (e, disabled) => {
        e.stopPropagation()
        if (disabled) {
            return
        } else {
            this.setState({
                isShow: false
            }, () => {
                this.props.afterClose && this.props.afterClose(e)
            })
        }
    }

    onClick = (e) => {
        if ('checked' in (this.props)) {
            this.onChange()
        } else {
            this.props.onClick && this.props.onClick()
        }
    }

    onChange = () => {
        const {checked, onChange} = this.props;
        if (onChange) {
            onChange(!checked);
        }
    }


    getCont = () => {
        const {classes, closable, disabled, color, checked} = this.props
        const disabledCls = classnames({
            [classes[`disabled`]]: disabled === true,
        });
        const checkedCls = classnames({
            [classes[`checked`]]: checked && checked === true,
            [classes[`unchecked`]]: checked && checked === false,
        });
        if (closable) {
            if (this.state.isShow) {
                return (
                    <div
                        className={classnames(classes.root, classes[color], disabledCls, checkedCls)}
                        onClick={(e) => this.onClick(e)}
                    >
                        <span className={classnames(classes.span)}>{this.props.children} &nbsp;
                            <i className="fa fa-close" aria-hidden="true"
                               onClick={(e) => this.onClose(e, disabled)}></i>
                        </span>
                    </div>
                )
            }
        } else {
            return (
                <div
                    className={classnames(classes.root, classes[color], disabledCls, checkedCls)}
                    onClick={(e) => this.onClick(e)}
                >
                <span className={classnames(classes.span)}>{this.props.children}
                    </span>
                </div>
            )
        }
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.outer}>
                {
                    this.getCont()
                }
            </div>
        )
    }
}

app.propTypes = {
    closable: PropTypes.bool,//控制是否可以关闭
    disabled: PropTypes.bool,//是否禁止关闭
    afterClose: PropTypes.func,//关闭之后的回调
    color: PropTypes.string,//自定义颜色
    onClick: PropTypes.func,//点击
    onChange: PropTypes.func,//操作选中状态
    checked: PropTypes.bool,//选中状态
};

app.CheckableTag = CheckableTag
