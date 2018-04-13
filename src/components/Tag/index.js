import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classnames from 'classnames'

const styles = theme => {
    let tagColor = theme.colors.normal
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
            cursor: 'pointer'
        },
        span: {
            width: '100%',
            display: 'inline-block',
            padding: '0 10px',

        },
        disabled: {
            cursor: 'not-allowed'
        }
    }
};

@withStyles(styles, {name: 'MuiTag-ant'})
export default class app extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true,//点击关闭时不显示
            arr:[],//标签数量
        }
    }

    static defaultProps = {
        type: 'Default'
    }

    onClose = (e, disabled) => {
        if (disabled) {
            return
        } else {
            this.setState({
                isShow: false
            }, () => {
                this.props.afterClose(e)
            })
        }
    }

    getCont = () => {
        const {classes, closable, onClose, disabled} = this.props
        if (closable) {
            if (this.state.isShow) {
                return (
                    <div
                        className={classnames(classes.root, disabled && classes.disabled)}

                    >
                        <span className={classes.span}>{this.props.children} &nbsp;
                            <i className="fa fa-close" aria-hidden="true"
                               onClick={(e) => this.onClose(e, disabled)}></i>
                        </span>
                    </div>
                )
            }
        } else {
            return (
                <div
                    className={classnames(classes.root)}
                >
                <span className={classes.span}>{this.props.children}
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
};
