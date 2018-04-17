import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import Slide from 'material-ui/transitions/Slide';
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
    yhAlertBox: {
        position: 'fixed',
        top: '20px',
        width: '100%',
        textAlign: 'center',
        zIndex: '100',
        pointerEvents: 'none'
    },
    yhAlert: {
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
    yhAlertIcon: {
        display: 'inline-block',
        lineHeight: '20px',
        marginRight: '8px;'
    },
    yhAlertIconPlus: {
        fontSize: '24px'
    },
    yhAlertCloseIcon: {
        position: 'absolute',
        right: '16px',
        color: 'rgba(0, 0, 0, 0.45)',
        cursor: 'pointer',
        zIndex: '9'
    },
    yhAlertCloseText: {
        color: '#1890ff',
        fontSize: '12px'
    },
    yhAlertGroup: {
        position: 'relative',
        height: '24px',
        lineHeight: '24px',
        verticalAlign: 'top',
        display: 'inline-block'
    },

    yhAlertGroupP: {
        fontSize: '14px',
        margin: '0',
        color: 'rgba(0, 0, 0, 0.85)',
        textAlign: 'justify'
    },
    yhAlertPlus: {
        fontSize: '16px'

    },
    yhAlertDescription: {
        margin: '0',
        color: 'rgba(0, 0, 0, 0.65)'
    },
    descriptionLeft: {
        marginLeft: '28px',
    },
    yhAlertBanner: {
        position: 'fixed',
        top: '0',
        left: '50%',
        transform:'translateX(-50%)',
        zIndex: '99999'
    }
}
};
let Icon = {
    'success': 'fa-check-circle',
    'warn': 'fa-exclamation-circle',
    'info': 'fa-info-circle',
    'error': 'fa-times-circle'
}
let IconLarge = {
    'success': 'fa-check-circle-o',
    'warn': 'fa-exclamation-circle',
    'info': 'fa-info-circle',
    'error': 'fa-times-circle-o'
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
        return <div className={classnames(classes['yhAlertIcon'], description ? classes['yhAlertIconPlus'] : '')}>
            <i className={classnames('fa', description ? IconLarge[type] : Icon[type], classes[type])}
               aria-hidden="true">
            </i>
        </div>
    }

    render() {
        const {inFlag, initFlag}=this.state;
        const {classes, type = 'warn', message, showIcon, description, closable, closeText, banner,affix,width} = this.props;
        let bannerFlag = banner ? true : false;
        const wrapperClassName = classnames(classes['yhAlert'],classes[type + 'Bg'],{
            [classes['yhAlertBanner']]: bannerFlag
        });
        const wrapperStyle=width?{width:`${width}px`}:{};
        const messageClassName=classnames(classes['yhAlertGroupP'], {
            [classes['yhAlertPlus']]:description
        });
        const descriptionClassName=classnames(classes['yhAlertDescription'],{
            [classes['descriptionLeft']]:showIcon
        });
        const alert=(
            <div className={wrapperClassName} style={wrapperStyle}>
                {closable ? <div className={classes["yhAlertCloseIcon"]} onClick={()=>this.onClose()}>
                    <i className="fa fa-times"></i></div> : ''}
                {closeText ? <div className={classes["yhAlertCloseIcon"]} onClick={()=>this.onClose()}>
                    <span className={classes["yhAlertCloseText"]}>{closeText}</span></div> : ''}
                {
                    showIcon ? this.getIcon(classes, description, type)
                        :
                        bannerFlag && (showIcon !== false) ? this.getIcon(classes, description, type) : ''
                }
                <div className={classes["yhAlertGroup"]}>
                    <p className={messageClassName}>{message}</p>
                </div>
                {
                    description ?
                        <p className={descriptionClassName}>{description}</p> : ''
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



