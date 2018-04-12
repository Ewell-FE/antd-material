/**
 * Created by sasha on 2018/4/10.
 */
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
} from 'material-ui/List';
import Pagination from '@/components/Pagination'

import classnames from 'classnames'
const styles = theme => ({
    dense: {
        background:'#fff',
    },
    root:{
        fontSize: '14px',
        lineHeight: '1.5',
        color: 'rgba(0,0,0,.65)'
    },
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
    bordered:{
        borderRadius: '4px',
        border:'1px solid #d9d9d9'
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
export class ListItemMeta extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes,itemLayout="horizontal",size="default", description,avatar,title,content,actions,extra} = this.props;
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
@withStyles(styles, {name: 'MuiListAnt'})
export default class MuiList extends Component {
    constructor(props) {
        super(props);
        let pagination = props.pagination||{}
        let pageSize = pagination.defaultPageSize || pagination.pageSize || 5
        this.state = {
            page: pagination.defaultCurrent || pagination.current || 1,
            rowsPerPage: pageSize,
        }
    }
    //切换当前页
    handleChangePage = (page) => {
        let pagination = this.props.pagination || {}
        pagination.onChange && pagination.onChange(page)
        this.setState({page});
    };
    //判断当前页有多少条数据
    dealCurrentData() {
        let arr = []
        const {page, rowsPerPage} = this.state
        const {dataSource} = this.props;
        let defaultPagation = {}
        Object.assign(defaultPagation, {
            total: dataSource.length,
            defaultCurrent: page,
            defaultPageSize: rowsPerPage,
            onChange: this.handleChangePage
        })
        let pagination = this.props.pagination || defaultPagation
        let sortPage = (pagination.total === dataSource.length) ? true : false
        if (sortPage) {
            arr = _.slice(dataSource, rowsPerPage * (page - 1), rowsPerPage * page)
        } else {
            arr = dataSource
        }
        return {arr: arr, pagination: pagination}
    }
    render() {
        const { classes,dataSource,renderItem,bordered,header,footer,loadMore,pagination } = this.props;
        let data;
        if(pagination&&pagination.total>pagination.pageSize){
            data = this.dealCurrentData().arr
        }else{
            data=dataSource
        }

        return (
            <div style={{width: '100%'}}>
                <List classes={{dense:classes.dense,root:classes.root}} dense={true} className={bordered?classnames(classes['bordered']):''}>
                    {
                        header?
                            <ListItem>
                                {header}
                            </ListItem>:''
                    }
                    {
                        data.map((item,index)=>renderItem(item,index))
                    }
                    {
                        footer?
                            <ListItem>
                                {footer}
                            </ListItem>:''
                    }
                </List>
                {loadMore}
                {pagination?<div style={{textAlign:'right'}}><Pagination
                    {...this.dealCurrentData().pagination}
                    onChange={(page) => this.handleChangePage(page)}
                /></div>:''}
            </div>
        )

    }
}



