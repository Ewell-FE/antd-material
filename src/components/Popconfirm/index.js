import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Icon from '../Icon'
import style from "../Style";
import Button from '../Button'
import _ from 'lodash'
const styles = theme => ({
    button: {
        marginBottom: theme.spacing.unit * 4,
    },
    typography: {
        margin: theme.spacing.unit * 2,
    },
    popover: {
        pointerEvents: 'none',
    },
    paper:{
        overflowX:'initial',
        overflowY:'initial',
        boxShadow: '0 2px 8px rgba(0,0,0,.15)',
        borderRadius: '4px',
        padding: '12px 16px'
    },
    arrow:{
        background: '#fff',
        width: '8px',
        height: '8px',
        transform: 'rotate(45deg)',
        position: 'absolute',
        bottom: '-4px',
        left: '16px',
        display: 'block',
        borderColor: 'transparent',
        borderStyle: 'solid',
    },
    title:{
        minWidth: '177px',
        margin: 0,
        padding: '4px 0 12px',
        minHeight: '32px',
        color: 'rgba(0,0,0,.85)',
        fontWeight: '500',
    },
    arrowXCenter:{
        left:'50%',
        transform: 'translateX(-50%) rotate(45deg)',

    },
    arrowYCenter:{
        top:'50%',
        transform: 'translateY(-50%) rotate(45deg)',

    },
    arrowXLeft:{
        left:'initial',
        right:'-4px'
    },
    arrowYLeft:{
        right:'initial',
        left:'16px'
    },
    arrowXRight:{
        right:'initial',
        left:'-4px'
    },
    arrowYRight:{
        left:'initial',
        right:'16px'
    },
    arrowXTop:{
        top:'initial',
        bottom:'-4px'
    },
    arrowYTop:{
        bottom:'initial',
        top:'16px'
    },
    arrowXBottom:{
        bottom:'initial',
        top:'-4px'
    },
    arrowYBottom:{
        top:'initial',
        bottom:'16px'
    },
    marginLeft:{
        marginLeft:'-8px'
    },
    marginRight:{
        marginLeft:'8px'
    },
    marginTop:{
        marginTop:'-8px'
    },
    marginBottom:{
        marginTop:'8px'
    },
    icon:{
        color:style.theme.colors.warning,
        fontSize:'16px',
        marginRight:8,
    },
    footer:{
        textAlign:'right',
        marginBottom:4
    }
});
const positions={
    'topLeft':['top','bottom','left','left'],
    'top':['top','bottom','center','center'],
    'topRight':['top','bottom','right','right'],
    'rightTop':['top','top','right','left'],
    'right':['center','center','right','left'],
    'rightBottom':['bottom','bottom','right','left'],
    'bottomRight':['bottom','top','right','right'],
    'bottom':['bottom','top','center','center'],
    'bottomLeft':['bottom','top','left','left'],
    'leftBottom':['bottom','bottom','left','right'],
    'left':['center','center','left','right'],
    'leftTop':['top','top','left','right']
};
@withStyles(styles, {name: 'MuiPopconfirmAnt'})
export default class Popver extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:props.visible || false,
            el:null
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({ visible: nextProps.visible });
        }
    }

    handleSure=(e)=>{
        if(!_.has(this.props,'visible')){
            this.setState({visible:false})
        }
        this.props.onConfirm&&this.props.onConfirm(e)
        this.props.onVisibleChange&&this.props.onVisibleChange(false)
    }

    handleCancel=(e)=>{
        if(!_.has(this.props,'visible')){
             this.setState({visible:false})
        }
        this.props.onCancel&&this.props.onCancel(e)
        this.props.onVisibleChange&&this.props.onVisibleChange(false)
    }

    handleClose=()=>{
        this.setState({visible:false})
        this.props.onVisibleChange&&this.props.onVisibleChange(false)
    }

    handleOpen=()=>{
        this.setState({visible:true})
        this.props.onVisibleChange&&this.props.onVisibleChange(true)
    }

    dom=null;

    render() {
        const {children,classes,placement='top',arrowPointAtCenter,okType,title,okText,cancelText,anchorReference='anchorEl',anchorPosition={'top':200,'left':400}} = this.props;
        const {visible}=this.state
        let palce = 'top'
        arrowPointAtCenter?palce ='top' :palce= placement
        const arrowClassName=classnames(classes['arrow'], {
            [classes['arrowXCenter']]:palce==='top'||palce==='bottom',
            [classes['arrowYCenter']]:palce==='left'||palce==='right',
            [classes['arrowXLeft']]:palce.includes('left'),
            [classes['arrowXRight']]:palce.includes('right'),
            [classes['arrowXTop']]:palce.includes('top'),
            [classes['arrowXBottom']]:palce.includes('bottom'),
            [classes['arrowYLeft']]:palce.includes('Left'),
            [classes['arrowYRight']]:palce.includes('Right'),
            [classes['arrowYTop']]:palce.includes('Top'),
            [classes['arrowYBottom']]:palce.includes('Bottom')
        });
        const paper=classnames(classes['paper'], {
            [classes['marginLeft']]:palce.includes('left'),
            [classes['marginRight']]:palce.includes('right'),
            [classes['marginTop']]:palce.includes('top'),
            [classes['marginBottom']]:palce.includes('bottom'),
        });

        const defaultChildren={
            onClick: this.handleOpen,
        }
        if (typeof (children.type)==='function'){
            Object.assign(defaultChildren,{
                withRef:(dom)=>this.dom=dom,
            })
        }else{
            Object.assign(defaultChildren,{
                ref:(dom)=>this.dom=dom,
            })
        }
        return(
            <div style={{display:'inline-block'}}>
                {
                    React.cloneElement(children, {
                        ...defaultChildren,
                    })
                }
                <Popover
                    open={visible}
                    anchorEl={this.dom}
                    anchorReference={anchorReference}
                    anchorPosition={{ top: anchorPosition.top, left: anchorPosition.left }}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: positions[palce][0],
                        horizontal:positions[palce][2],
                    }}
                    transformOrigin={{
                        vertical: positions[palce][1],
                        horizontal:positions[palce][3],
                    }}
                    classes={{paper}}
                >
                    <div className={arrowClassName}></div>
                    <div className={classes.title}>
                        <Icon type='exclamation-circle' className={classnames(classes.icon)}/>
                        {title}
                    </div>
                    <div className={classes.footer}>
                        <Button size="small" style={{minWidth:36}} onClick={(e)=>this.handleCancel(e)}>{cancelText || 'No'}</Button>
                        <Button type={okType ||"Primary"} size="small" style={{minWidth:36}}  onClick={(e)=>this.handleSure(e)}>{okText || 'Yes'}</Button>
                    </div>
                </Popover>
            </div>

        )

    }
}
Popver.propTypes = {
    placement: PropTypes.oneOf(['topLeft','top','topRight','leftTop','rightTop','left','right',
        'leftBottom','rightBottom','bottomLeft','bottom','bottomRight']), //位置类型
    title:PropTypes.any, //标题
    visible:PropTypes.bool, //是否显示Popover
    arrowPointAtCenter:PropTypes.bool, //是否指向元素中心
}


