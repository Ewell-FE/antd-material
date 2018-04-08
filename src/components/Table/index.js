import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Pagination from '@/components/Pagination';
import Checkbox from 'material-ui/Checkbox';
import _ from 'lodash'
const styles = theme => {
    let activeColor = theme.palette.primary.main,
        fontColor = theme.palette.text.primary
    return ({
        table: {
            minWidth: '100%',
            borderRadius: '4px 4px 0 0',
            borderCollapse: 'inherit'
        },
        head: {
            background: theme.colors.tableHead
        },
        headTh: {
            color: fontColor,
            borderBottom: '1px solid #e8e8e8',
            fontSize: 14,
        },
        bodyTr: {
            height: 54,
            color: fontColor,
            '&:hover': {
                background: theme.colors.hovering
            }
        },
        selectBox: {
            width: '40px',
            padding: '4px'
        },
        bodyTd: {
            borderBottom: '1px solid #e8e8e8',
            color: fontColor,
        },
        noData: {
            textAlign: 'center',
            fontSize: 16,
            lineHeight: '54px',
            margin: 0,
            padding: 0,
            borderBottom: '1px solid #e8e8e8'
        },
        tablePagination: {
            float: 'right'
        },
        activeText: {
            color: activeColor
        },
        checkedColor: {
            color: activeColor
        },
        hideExpand:{
            display:'none'
        },
        expandRow:{
            background: '#fbfbfb'
        },
        expandParentTd:{
            position:'relative',
            '&>i':{
                position:'absolute',
                cursor: 'pointer',
                left:2,
                fontSize:18,
                top:20
            }
        },
        expandTr:{

        }
    });
}

export class SimpleTable extends Component {
    constructor(props) {
        super(props)
        let pagination = props.pagination || {}
        let rowSelection = props.rowSelection || {}
        let {showPagination, dataSource} = props
        let pageSize = showPagination === false ? dataSource.length : (pagination.defaultPageSize || pagination.pageSize || 5)
        this.state = {
            page: pagination.defaultCurrent || pagination.current || 1,
            rowsPerPage: pageSize,
            selectedRowKeys: rowSelection.selectedRowKeys || [],
            expandKey:[]

        }
    }

    //切换当前页
    handleChangePage = (page) => {
        let pagination = this.props.pagination || {}
        pagination.onChange && pagination.onChange(page)
        this.setState({page});
    };

    //切换每页的展示数据数目
    handleChangeRowsPerPage = (current, pageSize) => {
        let pagination = this.props.pagination || {}
        pagination.onShowSizeChange && pagination.onShowSizeChange(current, pageSize)
        this.setState({rowsPerPage: pageSize, page: current});
    };

    //选择全部
    onSelectAllClick(e, checked,arr) {
        let selectedRowKeys = this.state.selectedRowKeys
        const {rowKey} = this.props;
        let rowSelection = this.props.rowSelection || {}
        if (checked) {
            //添加未选择的
            arr.map((item, i) => {
                if(_.indexOf(selectedRowKeys,item[`${rowKey}`]) === -1){
                   selectedRowKeys.push(item[`${rowKey}`])
                }
            })
        }else{
            //删除已选的
            arr.map((item, i) => {
                if(_.indexOf(selectedRowKeys,item[`${rowKey}`]) !== -1){
                    selectedRowKeys = _.remove(selectedRowKeys, function (n) {
                        return item[`${rowKey}`] !== n
                    });
                }
            })
        }
        this.setState({selectedRowKeys: selectedRowKeys})
        rowSelection.onChange && rowSelection.onChange(selectedRowKeys)
    }


    //选择一条
    onSelectOne(e, checked, key) {
        let selectedRowKeys = this.state.selectedRowKeys
        let rowSelection = this.props.rowSelection || {}
        if (checked) {
            selectedRowKeys.push(key)
        } else {
            selectedRowKeys = _.remove(selectedRowKeys, function (n) {
                return key !== n;
            });
        }
        this.setState({selectedRowKeys: selectedRowKeys})
        rowSelection.onChange && rowSelection.onChange(selectedRowKeys)
    }

    //判断当前页有多少条数据
    dealCurrentData() {
        let arr = []
        const {page, rowsPerPage} = this.state
        const {dataSource, showPagination} = this.props;
        let defaultPagation = {}
        Object.assign(defaultPagation, {
            total: dataSource.length,
            defaultCurrent: page,
            defaultPageSize: rowsPerPage,
            onChange: this.handleChangePage
        })
        let pagination = this.props.pagination || defaultPagation
        let sortPage = (pagination.total === dataSource.length) ? true : false
        if (showPagination !== false && sortPage) {
            arr = _.slice(dataSource, rowsPerPage * (page - 1), rowsPerPage * page)
        } else {
            arr = dataSource
        }
        return {arr: arr, pagination: pagination}
    }

//判断当前页头部的复选框是什么样的状态
    dealCheckBoxType(arr, values) {
        const {rowKey} = this.props;
        let list = [], type = 0
        arr.map((item, i) => {
            list.push(item[`${rowKey}`])
        })
        let result = _.difference(list, values)
        if (result.length === list.length) { //一个没选
            type = 0
        } else if (result.length === 0) { //全选
            type = 2
        } else { //选择部分
            type = 1
        }
        return type
    }

 //点击打开扩展项
    onExpand(key){
        let list = this.state.expandKey
        if(_.indexOf(list, key) === -1){
            list.push(key)
        }else{
            list = _.remove(list, function (n) {
                return key !== n
            });
        }
        this.setState({
            expandKey:list
        })

    }

    render() {
        const {classes, columns, showPagination, rowKey} = this.props;
        const {expandKey} = this.state
        let tableObj = this.dealCurrentData()
        let rowSelection = this.props.rowSelection
        let pagination = tableObj.pagination
        let type = rowSelection ? this.dealCheckBoxType(tableObj.arr, rowSelection.selectedRowKeys) : 0
        return (
            <div>
                <Table className={classes.table}>
                    <TableHead className={classes.head}>
                        <TableRow>
                            {
                                rowSelection ?
                                    <TableCell className={classes.selectBox}>
                                        <Checkbox
                                            indeterminate={type === 1 ? true : false}
                                            checked={type === 2 ? true : false}
                                            onChange={(e, checked) => this.onSelectAllClick(e, checked,tableObj.arr)}
                                        />
                                    </TableCell>
                                    : null
                            }
                            {
                                columns.map((item, i) => {
                                    return <TableCell className={classes.headTh} key={item.key}>{item.title}</TableCell>

                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableObj.arr.map((n,j)=>{
                                let list = []
                                list.push(<TableRow key={n.key} className={classes.bodyTr}>
                                    {
                                        rowSelection ?
                                            <TableCell className={classes.selectBox}>
                                                <Checkbox
                                                    checked={_.indexOf(rowSelection.selectedRowKeys, n[`${rowKey}`]) > -1 ? true : false}
                                                    onChange={(e, checked) => this.onSelectOne(e, checked, n[`${rowKey}`])}/>
                                            </TableCell>
                                            : null
                                    }
                                    {
                                        columns.map((item, i) => {
                                            let ele = ''
                                            let expandClass = classes.bodyTd
                                            if(i === 0 && n.children){
                                                        expandClass = expandClass + " " + classes.expandParentTd
                                                        let str = "fa fa-plus-square-o"
                                                if(_.indexOf(expandKey,n[`${rowKey}`]) !== -1){
                                                            str = 'fa fa-minus-square-o'
                                                }
                                                ele =<i  onClick={()=>this.onExpand(n.key)} className={str} aria-hidden="true"></i>
                                            }
                                            if (item.dataIndex) {
                                                if (item.render) {
                                                    return <TableCell className={expandClass}
                                                                      key={item.key}>{ele} {item.render(n[item.dataIndex], n, j)}</TableCell>

                                                } else {
                                                    return <TableCell className={expandClass}
                                                                      key={item.key}>{ele}{n[item.dataIndex]}</TableCell>

                                                }
                                            } else {
                                                if (item.render) {
                                                    return <TableCell
                                                        className={classes.bodyTd + ' ' + classes.activeText}
                                                        key={item.key}>{item.render(null, n, j)}</TableCell>

                                                } else {
                                                    return <TableCell className={classes.bodyTd}
                                                                      key={item.key}> </TableCell>
                                                }
                                            }

                                        })
                                    }
                                </TableRow>)
                                if(n.children){
                                    n.children.map((obj,k)=>{
                                        let showChild = classes.bodyTr + ' ' + classes.expandRow
                                        if(_.indexOf(expandKey,n.key) === -1){
                                            showChild = showChild + " " + classes.hideExpand
                                        }
                                      list.push((<TableRow key={obj.key} className={showChild}>
                                          {
                                              rowSelection ?
                                                  <TableCell className={classes.selectBox}>
                                                      <Checkbox
                                                          checked={_.indexOf(rowSelection.selectedRowKeys, obj[`${rowKey}`]) > -1 ? true : false}
                                                          onChange={(e, checked) => this.onSelectOne(e, checked, obj[`${rowKey}`])}/>
                                                  </TableCell>
                                                  : null
                                          }
                                          {
                                              columns.map((item, i) => {
                                                  if (item.dataIndex) {
                                                      if (item.render) {
                                                          return <TableCell className={classes.bodyTd}
                                                                            key={item.key}>{item.render(obj[item.dataIndex], obj, k)}</TableCell>

                                                      } else {
                                                          return <TableCell className={classes.bodyTd}
                                                                            key={item.key}>{obj[item.dataIndex]}</TableCell>

                                                      }
                                                  } else {
                                                      if (item.render) {
                                                          return <TableCell
                                                              className={classes.bodyTd + ' ' + classes.activeText}
                                                              key={item.key}>{item.render(null, obj, k)}</TableCell>

                                                      } else {
                                                          return <TableCell className={classes.bodyTd}
                                                                            key={item.key}> </TableCell>
                                                      }
                                                  }

                                              })
                                          }
                                      </TableRow>))
                                  })
                                }
                                return list
                            })
                        }
                    </TableBody>

                </Table>
                {
                    !tableObj.arr.length ?
                        <p className={classes.noData}>暂无数据!!!</p>
                        : null
                }
                {
                    showPagination === false ? null :
                        <div className={classes.tablePagination}>
                            <Pagination {...pagination}
                                        onShowSizeChange={(current, pageSize) => this.handleChangeRowsPerPage(current, pageSize)}
                                        onChange={(page) => this.handleChangePage(page)}/>
                        </div>
                }
            </div>
        )
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object,
    rowKey: PropTypes.string.isRequired, //每一行的key值，唯一
    pagination: PropTypes.object, //分页信息
    rowSelection: PropTypes.object, //复选框信息
    columns: PropTypes.array, //定义的列
    dataSource: PropTypes.array, //数据
    showPagination: PropTypes.bool, //是否显示分页
};

export default withStyles(styles)(SimpleTable);
