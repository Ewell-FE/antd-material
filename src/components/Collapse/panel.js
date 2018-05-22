import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import _ from 'lodash';
import Collapse from '@material-ui/core/Collapse';
import Icon from '../Icon'

const styles = (theme) => {
    return {
        item: {
            fontSize:theme.typography.fontSize,
            borderBottom: '1px solid #d9d9d9',
        },
        disabled:{
            cursor: 'not-allowed !important',
            color: theme.disabled.color + '!important',
        },
        header: {
            lineHeight: '22px',
            padding: '12px 0 12px 40px',
            color: theme.palette.text.primary,
            cursor: 'pointer',
            position: 'relative',
        },
        arrow: {
            fontSize:'16px',
            position: 'absolute',
            display: 'inline-block',
            lineHeight: '46px',
            verticalAlign: 'top',
            top: '0',
            left: '16px',
            '-webkit-transition': '-webkit-transform .24s',
            transition: 'transform .24s',
        },
        open: {
            transform: 'rotate(90deg)',
        },
        content: {
            overflow: 'hidden',
            color: theme.palette.text.secondary,
            padding: '16px',
            backgroundColor: '#fff',
            borderTop: '1px solid #d9d9d9',
        },
        simpleContent:{
            backgroundColor:'transparent',
            borderTop:'none'
        }
    }
}

@withStyles(styles, {name: 'MuiPanelAnt'})
class app extends Component {

    setOpen(){
        const {accordion,activeKey,panelKey} = this.props
        if(accordion){
            return activeKey === panelKey
        }else{
            return _.indexOf(activeKey,panelKey) === -1 ? false : true
        }
    }

    onHandleClick = () =>{
        !this.props.disabled&&this.props.onChange()
    }

    render() {
        const {header, children, classes, className,disabled,bordered,style,showArrow} = this.props
       let open = this.setOpen()
        return (
            <div className={classnames(classes.item, className)} style={style}>
                <div className={classnames(classes.header,disabled&&classes.disabled)}
                     onClick={this.onHandleClick}>
                    {showArrow !== false && <Icon type='angle-right' className={classnames(classes.arrow, open && classes.open)}/>}
                    {header}
                </div>
                <Collapse in={open}>
                    <div className={classnames(classes.content,bordered === false&&classes.simpleContent)}>
                        {children}
                    </div>
                </Collapse>
            </div>
        )
    }
}

app.propsTypes = {
    header:PropTypes.node, //头部节点
    children:PropTypes.node, //内容
    style:PropTypes.object, //行内样式
    className:PropTypes.string, //类名
    disabled:PropTypes.bool, //是否禁止操作
    bordered:PropTypes.bool, //边框
    key:PropTypes.string, //唯一Key值
    showArrow:PropTypes.bool, //是否隐藏头部图标
}

export default app