/**
 * Created by sasha on 2018/4/12.
 */
import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import classnames from 'classnames'
const styles = theme => ({
    denseLi:{
        '&:not(:last-child)':{
            borderBottom:'1px solid #e8e8e8'
        },
        '&:hover':{
            '& ul':{
                display:'inherit',
                transition:'all .3s'
            }
        }
    },
    denseSmall:{
        paddingTop:'8px',
        paddingBottom:'8px'
    },
    denseDefault:{
        paddingTop:'12px',
        paddingBottom:'12px'
    },
    denseLarge:{
        paddingTop:'16px',
        paddingBottom:'16px'
    },
    horizontal:{
        display:'flex',
        flex:1,
    },
    vertical:{
        display:'flex',
        width:'100%',
        marginBottom:'16px'
    },
    denseTextHorizontal:{
        '& h3':{
            fontSize:'14px !important'
        }
    },
    denseTextVertical:{
        '& h3':{
            fontSize:'16px !important',
            marginBottom:'16px'
        }
    },
    contentHorizontal:{
        justifyContent: 'flex-end',
        paddingRight: '48px'
    },
    contentVertical:{
        paddingLeft:'56px',
        marginBottom:'16px'

    },
    action:{
        display:'flex',
        paddingRight:'8px',
        cursor:'pointer',
        '& a':{
            color: '#1890ff',
        },
        '& li':{
            position:'relative',
            padding:'0 8px'
        }
    },
    actionVertical:{
        paddingLeft:'48px',
        marginBottom:'16px'
    },
    paddingLeftNone:{
        paddingLeft:0,
    },
    actionUl:{
        display: 'none',
        position: 'absolute',
        right: '-8px',
        '-webkit-animation': 'fadeInRightBig 0.3s',
        animation: 'fadeInRightBig 0.3s',
        '& li':{
            padding:0,
            backgroundColor: '#666',
            opacity: '0.95',
            '& a':{
                color: '#fff',
            },
            '& .operate':{
                display: 'inline-block',
                padding: '8px 16px',
            }
        }
    },
    '@keyframes fadeInRightBig': {
        '0%': {
            opacity: 0,
            transform: 'translate3d(2000px, 0, 0)'
        },
        '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        },
    },

});
@withStyles(styles, {name: 'MuiListItemAnt'})
export default class ListItemMeta extends Component {
    render() {
        const {classes, description,avatar,title,content,actions,extra,actionLeft=false,style={}} = this.props;
        const size=this.props.size;
        const itemLayout=this.props.itemLayout;
        const dense=classnames(classes.denseLi, {
            [classes['denseSmall']]:size==='small',
            [classes['denseDefault']]:size==='default',
            [classes['denseLarge']]:size==='large'
        });
        const titleLayout=classnames('', {
            [classes['vertical']]:itemLayout==='vertical',
            [classes['horizontal']]:itemLayout==='horizontal',
        });
        const text=classnames('',{
            [classes['denseTextHorizontal']]:itemLayout==='horizontal',
            [classes['denseTextVertical']]:itemLayout==='vertical',

        })
        const contentLayout=classnames('', {
            [classes['vertical']]:itemLayout==='vertical',
            [classes['horizontal']]:itemLayout==='horizontal',
            [classes['contentHorizontal']]:itemLayout==='horizontal',
            [classes['contentVertical']]:itemLayout==='vertical',
            [classes['paddingLeftNone']]:!avatar,

        });
        const actionlayout=classnames(classes.action, {
            [classes['vertical']]:itemLayout==='vertical',
            [classes['actionVertical']]:itemLayout==='vertical',
            [classes['paddingLeftNone']]:!avatar,
            [classes['actionUl']]:actionLeft,
        });

        return (
            <ListItem classes={{dense}}>
                <div style={{display:'flex',flexFlow:'wrap',alignItems: 'center',width: '100%',...style}}>
                    <div className={titleLayout}>
                        {
                            avatar&&<ListItemAvatar>{avatar}</ListItemAvatar>
                        }
                        <ListItemText
                            primary={title}
                            secondary={description?description:''}
                            classes={{dense:text}}
                        />
                    </div>
                    {
                        content&&<div className={contentLayout}>{content}</div>
                    }

                    {Array.isArray(actions)?(
                        <ul className={actionlayout}>
                            {
                                actions.map(
                                    (item,index)=>{
                                        return (
                                            <li key={index}>
                                                {
                                                    React.cloneElement(
                                                        item,
                                                        {
                                                            className:'operate',
                                                        }
                                                    )
                                                }
                                            </li>
                                        )
                                    })
                            }
                        </ul>
                    ):''}
                </div>
                {
                    extra&&<div style={{marginLeft:'58px'}}>{extra}</div>
                }
            </ListItem>
        )

    }
}
ListItemMeta.propTypes = {
    size: PropTypes.oneOf(['small', 'default','large']), //List大小类型
    actions:PropTypes.array, //action数组
    avatar:PropTypes.any, //头像信息
    title:PropTypes.any,//主要信息
    description:PropTypes.any,//辅助信息
    content:PropTypes.any,//主要内容
    extra:PropTypes.any,//额外内容
}