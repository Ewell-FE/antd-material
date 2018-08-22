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
        }
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

    selectAll = (e) => {
        let selectedRowKeys = {}
        if (e.target.checked) {
            let data = this.props.data || this.props.dataSource || []
            data.forEach((record, index) => {
                let key = this.getRecordKey(record, index)
                selectedRowKeys[key] = record
            })
        }
        this.setState({selectedRowKeys, checkedAll: e.target.checked})

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
        let checkedAll = selectCount === this.filterData(data).length
        let indeterminate = selectCount > 0 && !checkedAll

        this.setState({
            selectedRowKeys,
            checkedAll,
            indeterminate
        }, () => {
            rowSelection.onChange && rowSelection.onChange(Object.keys(selectedRowKeys), Object.values(selectedRowKeys))
        })
    }

    filterColumns = (columns) => {
        let props = this.props
        if (!props.rowSelection) {
            return columns
        }
        let rowSelection = props.rowSelection
        let newColumns = columns.map(function (item) {
            return item
        })

        newColumns.splice(this.props.rowSelectionNum, 0, {
            title: <Checkbox checked={this.state.checkedAll} onChange={this.selectAll}
                             indeterminate={this.state.indeterminate}/>,
            key: '__all__',
            fixed: rowSelection.fixed,
            width: rowSelection.columnWidth || '60px',
            render: (value, record, index) => {
                let key = this.getRecordKey(record, index)
                return (
                    <Checkbox checked={!!this.state.selectedRowKeys[key]} onChange={(e) => {
                        this.select(e.target.checked, key, record)
                    }}/>
                )
            }
        })
        return newColumns
    }

    filterData = (data) => {
        let PaginationConfig = this.props.pagination || this.props.defaultPagination
        let pageSize = PaginationConfig.pageSize || PaginationConfig.defaultPageSize
        let current = PaginationConfig.current || PaginationConfig.defaultCurrent
        if (data.length > pageSize) {
            return data.slice((current - 1) * pageSize, current * pageSize)
        }
        return data
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
