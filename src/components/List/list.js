/**
 * Created by sasha on 2018/4/13.
 */
import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Pagination from '../Pagination'
import PropTypes from 'prop-types';
import classnames from 'classnames'
const styles = theme => ({
    dense: {
        background:'#fff',
    },
    root:{
        padding:0,
        fontSize: '14px',
        lineHeight: '1.5'
    },
    bordered:{
        borderRadius: '4px',
        border:'1px solid #d9d9d9'
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
});

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
    getChildContext(){
        return {
            list:{
                size:this.props.size||'default',
                itemLayout:this.props.itemLayout||'horizontal'
            }
        }
    }
    static childContextTypes = {
        list: PropTypes.object,
    };
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
        const { classes,dataSource,renderItem,bordered,header,footer,loadMore,pagination,size='default' } = this.props;
        let data;
        if(pagination&&pagination.total>pagination.pageSize){
            data = this.dealCurrentData().arr
        }else{
            data=dataSource
        }
        const dense=classnames(classes.denseLi, {
            [classes['denseSmall']]:size==='small',
            [classes['denseDefault']]:size==='default',
            [classes['denseLarge']]:size==='large'
        });
        return (
            <div style={{width: '100%'}}>
                <List classes={{dense:classes.dense,root:classes.root}} dense={true} className={bordered?classnames(classes['bordered']):''}>
                    {
                        header&&<ListItem  classes={{dense}}>{header}</ListItem>
                    }
                    {
                        data.map((item,index)=>renderItem(item,index))
                    }
                    {
                        footer&&<ListItem  classes={{dense}}>{footer}</ListItem>
                    }
                </List>
                {loadMore}
                {pagination&&<div style={{textAlign:'right',marginTop:'10px'}}><Pagination
                    {...this.dealCurrentData().pagination}
                    onChange={(page) => this.handleChangePage(page)}
                /></div>}
            </div>
        )

    }
}
MuiList.propTypes = {
    dataSource:PropTypes.array,//数据源
    size: PropTypes.oneOf(['small', 'default','large']), //List大小类型
    bordered:PropTypes.bool, //是否有边框
    header:PropTypes.any, //头部信息
    footer:PropTypes.any,//底部信息
    renderItem:PropTypes.func,//渲染列表函数
    itemLayout:PropTypes.oneOf(['vertical','horizontal']),//列表内容布局
    loadMore:PropTypes.any,//加载更多
}