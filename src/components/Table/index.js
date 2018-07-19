import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '../Pagination';
import Checkbox from '../Checkbox';
import _ from 'lodash'
import classNames from 'classnames';

const styles = theme => {
    let activeColor = theme.radio.primary,
        fontColor = theme.palette.text.primary,
        fontSize = theme.typography.fontSize
    return ({
        root: {
            overflow: 'hidden'
        },
        table: {
            minWidth: '80%',
            borderRadius: '4px 4px 0 0',
            borderCollapse: 'inherit',
            fontSize:fontSize,
        },
        head: {
            background: theme.table.tableHead
        },
        headTh: {
            color: fontColor,
            borderBottom: '1px solid #e8e8e8',
            fontSize: 14,
            padding:'0 10px 0 24px'
        },
        bodyTr: {
            height: 54,
            color: fontColor,
            '&:hover': {
                background: theme.table.hovering
            }
        },
        selectBox: {
            width: '60px',
            padding: 0,
            paddingLeft:'15px',
            '& label':{
                marginTop:'-4px',
                cursor: 'pointer',
                '& span':{
                    width:'18px',
                    height:'18px'
                }
            },

        },
        bodyTd: {
            borderBottom: '1px solid #e8e8e8',
            color: fontColor,
            fontSize:fontSize,
            padding:'0 10px 0 24px',
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
            float: 'right',
            marginTop:10
        },
        activeText: {
            // color: activeColor,
            '& a':{
                color:activeColor
            }
        },
        hideExpand: {
            display: 'none'
        },
        showChildTr:{
            backgroundColor:'#fbfbfb',
            '&:hover':{
                background: '#fbfbfb'
            }
        },
        expandParentTd: {
            position: 'relative',
            '&>i': {
                position: 'absolute',
                cursor: 'pointer',
                left: 2,
                fontSize: 18,
                top: '50%',
                marginTop:'-9px'
            }
        },
        checkedSecondary: {
            color: activeColor
        },
        default: {
            color: 'rgba(0, 0, 0, 0.54)'
        }
    });
}

export class SimpleTable extends Component {
    constructor(props) {
        super(props)
        let rowSelection = props.rowSelection || {}
        let pagination = props.pagination || {}
        let pageSize = pagination === false ? 0 : (pagination.pageSize || pagination.defaultPageSize || 5)
        this.state = {
            page: pagination.current || pagination.defaultCurrent || 1,
            rowsPerPage: pageSize,
            selectedRowKeys: rowSelection.selectedRowKeys || [],
            expandKey: props.expandKey || props.defaultExpandKey

        }
    }
    static defaultProps={
        defaultExpandKey:[],
        dataSource:[],
        columns:[],
        rowSelectionNum:0
    }

    //切换当前页
    handleChangePage = (page) => {
        let pagination = this.props.pagination || {}
        pagination.onChange && pagination.onChange(page)
        !pagination.current && this.setState({page});
    };

    //切换每页的展示数据数目
    handleChangeRowsPerPage = (current, pageSize) => {
        let pagination = this.props.pagination || {}
        pagination.onShowSizeChange && pagination.onShowSizeChange(current, pageSize)
        !pagination.pageSize && this.setState({rowsPerPage: pageSize, page: current});
    };

    //选择全部
    onSelectAllClick(e, arr) {
        const {rowKey} = this.props;
        let rowSelection = this.props.rowSelection || {}
        let selectedRowKeys = rowSelection.selectedRowKeys || this.state.selectedRowKeys
        if (e.target.checked) {
            //添加未选择的
            arr.forEach((item, i) => {
                if (_.indexOf(selectedRowKeys, item[`${rowKey}`]) === -1) {
                    selectedRowKeys.push(item[`${rowKey}`])
                }
            })
        } else {
            //删除已选的
            arr.forEach((item, i) => {
                if (_.indexOf(selectedRowKeys, item[`${rowKey}`]) !== -1) {
                    selectedRowKeys = _.remove(selectedRowKeys, function (n) {
                        return item[`${rowKey}`] !== n
                    });
                }
            })
        }
        !rowSelection.selectedRowKeys&&this.setState({selectedRowKeys: selectedRowKeys})
        rowSelection.onChange && rowSelection.onChange(selectedRowKeys)
    }


    //选择一条
    onSelectOne(e, key) {
        const {rowSelection} = this.props
        let rowSelections = rowSelection || {}
        let selectedRowKeys = rowSelections.selectedRowKeys || this.state.selectedRowKeys
        if (e.target.checked) {
            selectedRowKeys.push(key)
        } else {
            selectedRowKeys = _.remove(selectedRowKeys, function (k) {
                return key !== k;
            });
        }
        !rowSelections.selectedRowKeys && this.setState({selectedRowKeys: selectedRowKeys})
        rowSelections.onChange && rowSelections.onChange(selectedRowKeys)
    }

    //判断当前页有多少条数据
    dealCurrentData() {
        const {dataSource,pagination} = this.props;
        let paginations =pagination || {}
        let arr = [],page =  paginations.current || this.state.page, rowsPerPage = paginations.pageSize || this.state.rowsPerPage;
        let defaultPagation = {}
        Object.assign(defaultPagation, {
            total: dataSource.length,
            defaultCurrent: page,
            defaultPageSize: rowsPerPage,
            onChange: this.handleChangePage
        })
        defaultPagation = pagination || defaultPagation
        if (pagination !== false && defaultPagation.total === dataSource.length) {
            arr = _.slice(dataSource, rowsPerPage * (page - 1), rowsPerPage * page)
        } else {
            arr = dataSource
        }
        return {arr: arr, pagination: defaultPagation}
    }

    //判断当前页头部的复选框是什么样的状态
    dealCheckBoxType(arr, values) {
        const {rowKey} = this.props;
        let list = [], type = 0
        arr.forEach((item, i) => {
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
    onExpand(key, record) {
        let list = this.props.expandKey || this.state.expandKey
        if (_.indexOf(list, key) === -1) {
            list.push(key)
        } else {
            list = _.remove(list, function (n) {
                return key !== n
            });
        }
        this.props.onExpand && this.props.onExpand(list, record)
        if (this.props.expandKey === undefined) {
            this.setState({
                expandKey: list
            })
        }
    }



    //是否有孩子
    loopChildren(arr, data, obj, level) {
        const {classes, columns, rowKey,expandedRowRender,rowSelectionNum} = this.props;
        const expandKey = this.props.expandKey || this.state.expandKey
        let rowSelection = this.props.rowSelection
        data.forEach((n, j) => {
            let showChild = classNames(classes.bodyTr, 'table-level-' + level)
            let expandTableRow = expandedRowRender &&expandedRowRender(n)

            //判断是否有孩子
            if (_.indexOf(expandKey, obj[`${rowKey}`]) === -1&&level > 0) {
                showChild = classNames(showChild,classes.hideExpand)
            }
            let list = []
            columns.forEach((item, i) => {
                let ele = ''
                let expandClass = classes.bodyTd
                if (i === 0 && (n.children || expandTableRow)) {
                    expandClass = classNames(expandClass, classes.expandParentTd)
                    let str = "fa fa-plus-square-o"
                    if (_.indexOf(expandKey, n[`${rowKey}`]) !== -1) {
                        str = 'fa fa-minus-square-o'
                    }
                    ele = <i onClick={() => this.onExpand(n[`${rowKey}`], n)} className={str} aria-hidden="true"> </i>
                }
                if (item.render) {
                    list.push(<TableCell  className={classNames(expandClass, classes.activeText)}
                                          key={item.key}>{ele} {item.render(n[item.dataIndex] || undefined, n, arr.length)}</TableCell>)

                } else {
                    list.push( <TableCell className={expandClass}
                                      key={item.key}>{ele} {n[item.dataIndex]}</TableCell>)

                }

            })
            if(rowSelection){
                list.splice(rowSelectionNum,0,
                    <TableCell className={classes.selectBox} padding='checkbox' key='-1'>
                        <Checkbox
                            disableRipple
                            checked={_.indexOf(rowSelection.selectedRowKeys, n[`${rowKey}`]) > -1 ? true : false}
                            onChange={(e) => this.onSelectOne(e, n[`${rowKey}`])}/>
                    </TableCell>)
            }
            arr.push((<TableRow  key={n[`${rowKey}`]} className={showChild}>
                {list}
                </TableRow>))
            if (n.children) {
                //有孩子继续循环
                this.loopChildren(arr, n.children, n, level + 1)
            }
            if(expandTableRow){
                //是否有扩展项（自定义内容）
                if (_.indexOf(expandKey, n.key) === -1) {
                    showChild = classNames(showChild,classes.hideExpand)
                }
                arr.push(
                    <TableRow  key={n.key + "expand"} className={classNames(classes.showChildTr,showChild)}>
                        <td> </td>
                        <td colSpan={columns.length-2 ? columns.length-2 : 1}>
                            {expandTableRow}
                        </td>
                        <td> </td>
                    </TableRow>
                )
            }
        })
        return arr
    }

    render() {
        const {classes, columns,pagination,rowSelection,rowSelectionNum} = this.props;
        let tableObj = this.dealCurrentData()
        let type = rowSelection ? this.dealCheckBoxType(tableObj.arr, rowSelection.selectedRowKeys) : 0
            let list = []
            columns.forEach((item, i) => {
                list.push(<TableCell className={classes.headTh} key={item.key}>{item.title}</TableCell>)

            })
            if(rowSelection){
                list.splice(rowSelectionNum,0,<TableCell className={classes.selectBox} padding='checkbox' key='0'>
                    <Checkbox
                        disableRipple
                        indeterminate={type === 1 ? true : false}
                        checked={type === 2 ? true : false}
                        onChange={(e) => this.onSelectAllClick(e, tableObj.arr)}
                    />
                </TableCell>)
            }
        return (
            <div className={classes.root}>
                <Table className={classes.table}>
                    <TableHead className={classes.head}>
                        <TableRow>
                            {/*{*/}
                                {/*rowSelection && <TableCell className={classes.selectBox} padding='checkbox'>*/}
                                    {/*<Checkbox*/}
                                        {/*disableRipple*/}
                                        {/*indeterminate={type === 1 ? true : false}*/}
                                        {/*checked={type === 2 ? true : false}*/}
                                        {/*onChange={(e) => this.onSelectAllClick(e, tableObj.arr)}*/}
                                    {/*/>*/}
                                {/*</TableCell>*/}
                            {/*}*/}
                            {/*{*/}
                                {/*columns.map((item, i) => {*/}
                                    {/*return <TableCell className={classes.headTh} key={item.key}>{item.title}</TableCell>*/}

                                {/*})*/}
                            {/*}*/}
                            {list}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.loopChildren([], tableObj.arr, {}, 0, 0)
                        }
                    </TableBody>

                </Table>
                {
                    !tableObj.arr.length &&<p className={classes.noData}>暂无数据!!!</p>
                }
                {
                    (pagination !== false && tableObj.arr.length > 0) &&
                    <div className={classes.tablePagination}>
                        <Pagination {...tableObj['pagination']}
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
    pagination: PropTypes.any, //分页信息 为false时不显示分页
    rowSelection: PropTypes.object, //复选框信息
    columns: PropTypes.array, //定义的列
    dataSource: PropTypes.array, //数据
    onExpand: PropTypes.func, //点击展开项
    expandKey: PropTypes.array, //展开项
    defaultExpandKey: PropTypes.array, //默认展开项
    expandedRowRender:PropTypes.func, //展开项
    rowSelectionNum:PropTypes.number
};

export default withStyles(styles,{name:'MuiTableAnt'})(SimpleTable);
