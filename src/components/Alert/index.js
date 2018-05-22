import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Icon from '../Icon'
import Slide from '@material-ui/core/Slide';
import classnames from 'classnames'
const styles = theme => {
    let {width,success,successBg,warn,warnBg,info,infoBg,error,errorBg}=theme.alert;
    return{
    success: {
        color:theme.colors.success
    },
    successBg: {
        border: `1px solid ${success}`,
        backgroundColor: successBg
    },
    warn: {
        color: theme.colors.warning
    },
    warnBg: {
        border: `1px solid ${warn}`,
        backgroundColor: warnBg
    },
    info: {
        color: theme.colors.info
    },
    infoBg: {
        border: `1px solid ${info}`,
        backgroundColor: infoBg
    },
    error: {
        color: theme.colors.error
    },
    errorBg: {
        border: `1px solid ${error}`,
        backgroundColor: errorBg
    },
    alertBox: {
        position: 'fixed',
        top: '20px',
        width: '100%',
        textAlign: 'center',
        zIndex: '100',
        pointerEvents: 'none'
    },
    alert: {
        position: 'relative',
        width: `${width}%`,
        margin: '0 auto',
        marginBottom: '10px',
        borderRadius: '4px;',
        boxShadow: 'none',
        padding: '10px 12px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        minHeight: '40px',
        textAlign: 'left'
    },
    alertIcon: {
        display: 'inline-block',
        lineHeight: '20px',
        marginRight: '8px;'
    },
    alertIconPlus: {
        fontSize: '24px'
    },
    alertCloseIcon: {
        position: 'absolute',
        right: '16px',
        color: 'rgba(0, 0, 0, 0.45)',
        cursor: 'pointer',
        zIndex: '9'
    },
    alertCloseText: {
        color: '#1890ff',
        fontSize: '12px'
    },
    alertGroup: {
        position: 'relative',
        height: '24px',
        lineHeight: '24px',
        verticalAlign: 'top',
        display: 'inline-block',
        '& p':{
            fontSize: '14px',
            margin: '0',
            color: 'rgba(0, 0, 0, 0.85)',
            textAlign: 'justify'
        }
    },
    alertPlus: {
        fontSize: '16px !important'
    },
    alertDescription: {
        fontSize: '14px',
        margin: '0',
        color: 'rgba(0, 0, 0, 0.65)'
    },
    descriptionLeft: {
        marginLeft: '28px',
    },
    alertBanner: {
        position: 'fixed',
        top: '0',
        left: '50%',
        transform:'translateX(-50%)',
        zIndex: '99999'
    }
}
};
let Icons = {
    'success': 'check-circle',
    'warn': 'exclamation-circle',
    'info': 'info-circle',
    'error': 'times-circle'
}
let IconLarge = {
    'success': 'check-circle-o',
    'warn': 'exclamation-circle',
    'info': 'info-circle',
    'error': 'times-circle-o'
}
@withStyles(styles, {name: 'MuiAlertAnt'})
export default class Alert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inFlag: true,
            initFlag: true
        }
    }
    static defaultProps={
        affix:true
    }
    onClose() {
        let time=this.props.affix?0:1000;
        this.setState({inFlag: false}, ()=> {
            this.props.onClose && this.props.onClose()
            setTimeout(()=> {
                this.setState({initFlag: false}, ()=> {
                    this.props.afterClose && this.props.afterClose()
                });
            }, time)
        })
    }

    getIcon(classes, description, type) {
        return <div className={classnames(classes['alertIcon'], description ? classes['alertIconPlus'] : '')}>
            <Icon type={description ? IconLarge[type] : Icons[type]} className={classnames(classes[type])}/>
        </div>
    }

    render() {
        const {inFlag, initFlag}=this.state;
        const {classes, type = 'warn', message, showIcon, description, closable, closeText, banner,affix,width} = this.props;
        let bannerFlag = banner ? true : false;
        const wrapperClassName = classnames(classes['alert'],classes[type + 'Bg'],{
            [classes['alertBanner']]: bannerFlag
        });
        const wrapperStyle=width?{width:`${width}px`}:{};
        const messageClassName=classnames('', {
            [classes['alertPlus']]:description
        });
        const descriptionClassName=classnames(classes['alertDescription'],{
            [classes['descriptionLeft']]:showIcon
        });
        const alert=(
            <div className={wrapperClassName} style={wrapperStyle}>
                {closable && <div className={classes["alertCloseIcon"]} onClick={()=>this.onClose()}>
                    <Icon type="times" /></div>}
                {closeText && <div className={classes["alertCloseIcon"]} onClick={()=>this.onClose()}>
                    <span className={classes["alertCloseText"]}>{closeText}</span></div>}
                {
                    showIcon ? this.getIcon(classes, description, type)
                        :
                        bannerFlag && (showIcon !== false) ? this.getIcon(classes, description, type) : ''
                }
                <div className={classes["alertGroup"]}>
                    <p className={messageClassName}>{message}</p>
                </div>
                {
                    description &&<p className={descriptionClassName}>{description}</p>
                }
            </div>
        )
        if (initFlag) {
           return affix?alert:(
                <Slide direction="down" in={inFlag} timeout={1000}>
                    {alert}
                </Slide>
            )
        } else {
            return null;
        }

    }
}
Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'warn','info','error']), //提示类型
    message:PropTypes.string, //提示信息
    description:PropTypes.string, //提示辅助信息
    showIcon:PropTypes.bool, //是否显示类型ICON
    closable:PropTypes.bool, //是否显示关闭按钮
    onClose:PropTypes.func,//关闭的回调
    affix:PropTypes.bool, //是否一开始固定提示信息
    closeText:PropTypes.string,//关闭按钮自定义文本
    afterClose:PropTypes.func,//关闭后的回调
    banner:PropTypes.bool, //是否顶部显示提示
    width:PropTypes.number,//提示框大小
}


