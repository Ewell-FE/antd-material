/**
 * Created by sasha on 2018/4/12.
 */
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import{
    ListItem,
    ListItemAvatar,
    ListItemText,
} from 'material-ui/List';
import PropTypes from 'prop-types';
import classnames from 'classnames'
const styles = theme => ({
    denseLi:{
        '&:not(:last-child)':{
            borderBottom:'1px solid #e8e8e8'
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
        }
    },
    actionVertical:{
        paddingLeft:'48px',
        marginBottom:'16px'
    },
    paddingLeftNone:{
        paddingLeft:0,
    },
    em:{
        backgroundColor: '#e8e8e8',
        marginTop: '-7px',
        position: 'absolute',
        top: '50%',
        right: '0',
        width: '1px',
        height: '14px'
    }

});
@withStyles(styles, {name: 'ListItemMeta'})
export default class ListItemMeta extends Component {
    constructor(props) {
        super(props);
    }
    static contextTypes = {
        list: PropTypes.object,
    };
    render() {
        const {classes, description,avatar,title,content,actions,extra} = this.props;
        const size=this.context.list.size;
        const itemLayout=this.context.list.itemLayout;
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

        });

        return (
            <ListItem classes={{dense}}>
                <div style={{display:'flex',flexFlow:'wrap',alignItems: 'center',width: '100%'}}>
                    <div className={titleLayout}>
                        {
                            avatar?
                                <ListItemAvatar>
                                    {avatar}
                                </ListItemAvatar>:''
                        }

                        <ListItemText
                            primary={title}
                            secondary={description?description:''}
                            classes={{dense:text}}
                        />
                    </div>
                    {
                        content?<div className={contentLayout}>
                            {
                                content
                            }
                        </div>:''
                    }

                    {Array.isArray(actions)?(
                        <ul className={actionlayout}>
                            {
                                actions.map(
                                    (item,index,arr)=>{
                                        return (
                                            <li key={index} style={{position:'relative',padding:'0 8px'}}>
                                                {item}
                                                {
                                                    index!==arr.length-1?<em className={classes.em}></em>:''
                                                }

                                            </li>
                                        )
                                    })
                            }
                        </ul>
                    ):''}
                </div>
                {
                    extra?<div style={{marginLeft:'58px'}}>{extra}</div>:''
                }
            </ListItem>
        )

    }
}