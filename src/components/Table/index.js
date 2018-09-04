import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from 'rc-table';
import './index.css';
import classNames from 'classnames';
import omit from 'omit.js';
import LocaleReceiver from '../LocaleProvider/LocaleReceiver'
import Pagination from '../Pagination'
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import _ from 'lodash'
const styles = theme => {
    return {
        root: {
            color: 'rgba(0, 0, 0, 0.65)'
        },
        Pagination: {
            textAlign: 'right',
            marginTop: '10px'
        }
    }
}

export class SimpleTable extends Component {

    state = {
        checkedAll: false,
        selectedRowKeys: {}
    }

    static defaultProps = {
        prefixCls: 'yh-table',
        defaultExpandKey: [],
        dataSource: [],
        columns: [],
        rowSelectionNum: 0,
        defaultPagination: {
            defaultCurrent: 1,
            defaultPageSize: 10,
            total: 0
        },
        sortColumn: null,
        sortOrder: null,
    }

    renderPagination = (data) => {
        if (this.props.pagination === false || data.length === 0) {
            return null
        }
        let pagination = Object.assign({}, {
            total: data.length
        }, this.props.pagination)
        let PaginationConfig = Object.assign({}, this.props.defaultPagination, pagination)

        return (
            <Pagination {...PaginationConfig} className={this.props.classes.Pagination}/>
        )
    }

    getRecordKey = (record, index) => {
        const rowKey = this.props.rowKey;
        const recordKey = (typeof rowKey === 'function') ?
            rowKey(record, index) : record[rowKey]
        return recordKey === undefined ? index : recordKey;
    }

    getDisabledSelection=()=>{
        let rowSelection = this.props.rowSelection
        let data = this.props.data || this.props.dataSource || [],list=[]
        this.filterData(data).forEach((item,index)=>{
            let disabled = rowSelection.getCheckboxProps&&rowSelection.getCheckboxProps(item,index).disabled||false
            if(!disabled){
                list.push(item)
            }
        })
        return list.length
    }

    selectAll = (e) => {
        let rowSelection = this.props.rowSelection
        let data = this.props.data || this.props.dataSource || []
        let selectedRowKeys = {}
        if (e.target.checked) {
            data.forEach((record, index) => {
                let key = this.getRecordKey(record, index)
                let disabled = rowSelection.getCheckboxProps&&rowSelection.getCheckboxProps(record,index).disabled||false
                if(!disabled){
                    selectedRowKeys[key] = record
                }
            })
        }
        let selectCount = Object.keys(selectedRowKeys).length
        let checkedAll = selectCount === this.getDisabledSelection()
        let indeterminate = selectCount > 0 && !checkedAll
        this.setState({selectedRowKeys, checkedAll: e.target.checked,indeterminate},()=>{
            rowSelection.onChange && rowSelection.onChange(Object.keys(selectedRowKeys), Object.values(selectedRowKeys))
        })

    }
    select = (checked, key, record) => {
        let data = this.props.data || this.props.dataSource || []
        let rowSelection = this.props.rowSelection
        let selectedRowKeys = this.state.selectedRowKeys
        if (checked) {
            selectedRowKeys[key] = record
        } else {
            delete selectedRowKeys[key]
        }
        let selectCount = Object.keys(selectedRowKeys).length
        let checkedAll = selectCount === this.getDisabledSelection()
        let indeterminate = selectCount > 0 && !checkedAll

        this.setState({
            selectedRowKeys,
            checkedAll,
            indeterminate
        }, () => {
            rowSelection.onChange && rowSelection.onChange(Object.keys(selectedRowKeys), Object.values(selectedRowKeys))
        })
    }
    renderColumnsDropdown=(columns)=> {
        const { prefixCls } = this.props;
        const {sortOrder,sortColumn}=this.state;
        return columns.map((item,i)=>{
            let column = { ...item };
            let key = column.key || column.dataIndex || i;
            let sortButton;
            if (column.sorter) {
                column.className = classNames(column.className, {
                    [`${prefixCls}-column-sort`]: sortOrder,
                });
                const isColumn=sortColumn&&(sortColumn.key===column.key)
                const isAscend = isColumn&&sortOrder === 'ascend';
                const isDescend = isColumn&&sortOrder === 'descend';
                sortButton = (
                    <div className={`${prefixCls}-column-sorter`}>
                        <span
                            className={`${prefixCls}-column-sorter-up ${isAscend ? 'on' : 'off'}`}
                            title="↑"
                            onClick={() => this.toggleSortOrder('ascend', column)}
                        >
                            <Icon type="caret-up" />
                        </span>
                        <span
                            className={`${prefixCls}-column-sorter-down ${isDescend ? 'on' : 'off'}`}
                            title="↓"
                            onClick={() => this.toggleSortOrder('descend', column)}
                        >
                            <Icon type="caret-down" />
                        </span>
                    </div>
                );
            }
            column.title = (
                <span key={key}>
                    {column.title}
                    {sortButton}
                </span>
            );
            if (sortButton) {
                column.className = classNames(`${prefixCls}-column-has-filters`, column.className);
            }
            return column;
        })
    }
    toggleSortOrder(order, column) {
        let { sortColumn, sortOrder } = this.state;
        // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题
        if (!sortColumn) {  // 当前列未排序
            sortOrder = order;
            sortColumn = column;
        } else {                      // 当前列已排序
            if (sortOrder === order&&(sortColumn.key===column.key)) {  // 切换为未排序状态
                sortOrder = '';
                sortColumn = null;
            } else {                    // 切换为排序状态
                sortOrder = order;
                sortColumn = column;
            }
        }
        this.setState({
            sortOrder,
            sortColumn,
        })
    }
    getSorterFn() {
        const { sortOrder, sortColumn } = this.state;
        if (!sortOrder || !sortColumn ||
            typeof sortColumn.sorter !== 'function') {
            return;
        }

        return (a, b) => {
            let result = (sortColumn.sorter)(a, b);
            if (result !== 0) {
                return (sortOrder === 'descend') ? -result : result;
            }
            return 0;
        };
    }
    getLocalData(dataSource) {
        let data = dataSource || [];
        // 优化本地排序
        data = data.slice(0);
        const sorterFn = this.getSorterFn();
        if (sorterFn) {
            data = data.sort((a,b)=>sorterFn(a,b));
        }
        return data;
    }
    filterData = (_data) => {
        let data=this.getLocalData(_data)
        if(this.props.pagination){
            let PaginationConfig = this.props.pagination || this.props.defaultPagination
            let pageSize = PaginationConfig.pageSize || PaginationConfig.defaultPageSize
            let current = PaginationConfig.current || PaginationConfig.defaultCurrent
            if (data.length > pageSize) {
                return data.slice((current - 1) * pageSize, current * pageSize)
            }
        }
        return data
    }
    filterColumns = (_columns) => {
        let props = this.props
        let columns=this.renderColumnsDropdown(_columns)
        if (!props.rowSelection) {
            return columns
        }
        let rowSelection = props.rowSelection
        let newColumns = columns.map(function (item) {
            return item
        })
        let data = props.data || props.dataSource || []
        const checkboxAllDisabled = rowSelection.getCheckboxProps&&data.every((item, index) => rowSelection.getCheckboxProps(item, index).disabled)||false;
        newColumns.splice(this.props.rowSelectionNum, 0, {
            title: <Checkbox checked={this.state.checkedAll} onChange={this.selectAll}
                             indeterminate={this.state.indeterminate} disabled={checkboxAllDisabled}/>,
            key: '__all__',
            fixed: rowSelection.fixed,
            width: rowSelection.columnWidth || '60px',
            render: (value, record, index) => {
                let key = this.getRecordKey(record, index)
                let checkboxProps = rowSelection.getCheckboxProps&&rowSelection.getCheckboxProps(record,index)||{}
                return (
                    <Checkbox checked={!!this.state.selectedRowKeys[key]} {...checkboxProps}  onChange={(e) => {
                        this.select(e.target.checked, key, record)
                    }}/>
                )
            }
        })
        return newColumns
    }
    renderTable = (context) => {
        const props = this.props
        const {classes, prefixCls, showHeader} = this.props
        let otherProps = omit(props, ['noData', 'dataSource', 'pagination', 'rowSelection', 'columns'])
        let data = props.data || props.dataSource || []
        const classString = classNames({
            [`${prefixCls}-${this.props.size}`]: true,
            [`${prefixCls}-bordered`]: this.props.bordered,
            [`${prefixCls}-empty`]: !data.length,
            [`${prefixCls}-without-column-header`]: !showHeader,
        });
        return (
            <div>
                <Table className={classNames(classes.root, classString)} {...otherProps} noData={context.noData}
                       columns={this.filterColumns(props.columns)}
                       data={this.filterData(data)}/>
                {this.renderPagination(data)}
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        //切换分页清空table和分页状态
        if (nextProps.pagination && nextProps.pagination.current !== this.props.pagination.current) {
            this.setState({
                selectedRowKeys: {},
                checkedAll: false,
                indeterminate: false
            })
        }
        //改变选中项
        if (nextProps.rowSelection && nextProps.rowSelection.selectedRowKeys !== this.props.rowSelection.selectedRowKeys) {
            let data = this.props.data || this.props.dataSource || []
            let selectCount = nextProps.rowSelection.selectedRowKeys.length
            let checkedAll = selectCount === this.getDisabledSelection()&&data.length
            let indeterminate = selectCount > 0 && !checkedAll
            this.setState({
                selectedRowKeys: this.getSelectedRowkeys(nextProps.rowSelection,nextProps.rowSelection.selectedRowKeys),
                checkedAll,
                indeterminate
            })
        }
    }

    //把外部的数组改成对象
    getSelectedRowkeys =(rowSelection,arr)=>{
        let obj = {}
        let data = this.props.data || this.props.dataSource || []
        data.forEach((item,index)=>{
            let disabled = rowSelection.getCheckboxProps&&rowSelection.getCheckboxProps(item,index).disabled||false
            if(_.indexOf(arr,item[this.props.rowKey]) !== -1&&!disabled){
                Object.assign(obj,{
                    [item[this.props.rowKey]]:item
                })
            }
        })
        return obj
    }

    render() {
        return (
            <LocaleReceiver
                componentName="Table">
                {this.renderTable}
            </LocaleReceiver>
        )
    }
}

SimpleTable.propTypes = {
    size: PropTypes.oneOf(['default', 'middle', 'small']),
    bordered: PropTypes.bool
};

export default withStyles(styles, {name: 'MuiTableAnt'})(SimpleTable);
