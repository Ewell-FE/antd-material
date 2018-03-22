import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withStyles} from 'material-ui/styles';
import * as actions from '../actions'
import {Modal, Button} from 'material-ui';
import {Input} from '@/components'
import {TableCell} from 'material-ui/Table';
import classzz from '@/classes'
import Message from '@/components/Message'
import "./style.less"
import {PagingState, CustomPaging, EditingState} from '@devexpress/dx-react-grid';
import Spin from '@/components/spin'
import {
    Grid,
    Table,
    TableHeaderRow,
    PagingPanel,
    TableEditRow,
    TableEditColumn
} from '@devexpress/dx-react-grid-material-ui';

const errorMs = ['只能包含汉字、数字、英文且30个字节', '只能包含数字、英文且50个字节', '必填项']
const styles = theme => ({primary: classzz.Button.primary, root: {margin: '0 10px'}});

@withStyles(styles)
class App extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            page: 0,
            rowsPerPage: 12,
            editType: [],
            editContent: {},
            delVisible: null,
            editingRowIds: [],
            errorObj: {},
            cancel: false,
            account: '',
            visible: false,
            msg: '',
            type: '-1'
        }
    }

    componentDidMount() {
        this.props.actions.dictionaryListGet({pageNum: 1, pageSize: this.state.rowsPerPage})
        this.props.actions.dictionaryTypeListGet()
    }

    //分页
    handleChangePage(page) {
        this.setState({page});
        this.props.actions.dictionaryListGet({
            pageNum: page + 1,
            pageSize: this.state.rowsPerPage,
            keyword: this.state.account,
            type: this.state.type !== '-1' ? this.state.type : ""})
    };

    //搜索
    onSearch(e) {
        if (e && e.keyCode === 13) {
            this.setState({page: 0}, () => {
                this.props.actions.dictionaryListGet({
                    pageNum: 1,
                    pageSize: this.state.rowsPerPage,
                    keyword: this.state.account,
                    type: this.state.type !== '-1' ? this.state.type : ""
                })
            })
        }
    }

    //搜索input框改变
    handleChangeSearch = (e) => {
        this.setState({account: e.target.value})
    }


    onClear(){
        this.setState({account: ''})
        this.props.actions.dictionaryListGet({
            pageNum: 1,
            pageSize: this.state.rowsPerPage,
            keyword: '',
            type: this.state.type !== '-1' ? this.state.type : ""
        })
    }
    onHandleSearch(){
        this.props.actions.dictionaryListGet({
            pageNum: 1,
            pageSize: this.state.rowsPerPage,
            keyword: this.state.account,
            type: this.state.type !== '-1' ? this.state.type : ""
        })
    }

    //根据类型搜索
    onSelectForType(e) {
        this.setState({type: e.target.value}, ()=> {
            this.props.actions.dictionaryListGet({
                pageNum: 1,
                pageSize: this.state.rowsPerPage,
                keyword: this.state.account,
                type: this.state.type !== '-1' ? this.state.type : ""
            })
        })

    }

    //添加一项数据
    onAddNewField() {
        this.setState({
            editingRowIds: ['-1']
        })
    }

    //取消操作
    onCalcelOperation() {
        if (this.state.editingRowIds[0] !== '-1' && this.state.errorObj.show) {
            this.props.actions.dictionaryListGet({pageNum: this.state.page + 1, pageSize: this.state.rowsPerPage})
        }
        this.setState({
            editingRowIds: [],
            errorObj: {}
        })
    }

    //确认删除
    onModalDeleteSave() {
        this.props.actions.dictionaryListDelGet({id: this.state.delVisible}, (result) => {
            if (result.httpCode === 400) {
                Message.warn(result.data)
            } else {
                this.setState({
                    delVisible: null
                })
                Message.success("删除成功")
                this.props.actions.dictionaryListGet({
                    pageNum: this.state.page + 1,
                    pageSize: this.state.rowsPerPage,
                    keyword: this.state.account,
                    type: this.state.type !== '-1' ? this.state.type : ""
                })
            }

        })
    }

    //取消删除
    onModalClose() {
        this.setState({
            delVisible: null
        })
    }

    //table数据操作展示
    onAddOrNot() {
        const {setList} = this.props.dictionary
        let tableData = setList
        //如果是新增，就添加一条数据
        if (this.state.editingRowIds[0] && this.state.editingRowIds[0] === "-1") {
            let flag = true
            tableData.data.forEach((item, i) => {
                if (item.id === "-1") {
                    flag = false
                }
            })
            if (flag) {
                tableData.data.unshift({id: '-1', code: '', codeText: '', type: ''})
                tableData.total = tableData.total + 1
            }

        } else {
            //如果没有了新增，要删除新增的一条数据
            if (tableData.data.length) {
                tableData.data.forEach((item, i) => {
                    if (item.id === '-1') {
                        tableData.data.splice(i, 1)
                        tableData.total = tableData.total + 1
                    }
                })
            }
        }

        //每条数据添加一个order(序号)，input框值改变的时候这里的数据要更改
        if (tableData.data) {
            tableData.data.forEach((item, i) => {
                item.order = this.state.page * this.state.rowsPerPage + i + 1
                if (this.state.errorObj.show && String(this.state.errorObj.show) === String(item.id)) {
                    Object.assign(item, this.state.errorObj.value)
                }
            })
        }
        return tableData
    }

    //提交+验证
    commitChanges = ({added, changed, deleted}) => {
        if (deleted && deleted[0]) {
            this.setState({
                delVisible: deleted[0],
                editingRowIds: [],
            })
        }
        if (changed) {
            let obj = {}
            let regLength = [/^[\u4e00-\u9fa5_a-zA-Z_0-9]{1,30}$/, /^[0-9_a-zA-Z_]{1,50}$/, /^[a-zA-Z]{1,100}$/]
            let testList = ['codeText', 'code', 'type']
            let errObj = this.state.errorObj
            const {setList} = this.props.dictionary
            for (let key in changed) {
                //拷贝一份基本参数
                setList.data.forEach((item) => {
                    if (String(key) === String(item.id)) {
                        Object.assign(obj, {
                            'code': item.code,
                            'codeText': item.codeText,
                            'type': item.type
                        })
                    }
                })
                //新增的验证
                if (key === '-1') {
                    this.onCheckAdd(errObj, obj, changed, regLength, testList, key)
                } else {
                    //编辑的校验
                    this.onCheckEdit(errObj, obj, changed, regLength, testList, key)
                }
                if (!errObj.code && !errObj.codeText && !errObj.type) {
                    delete errObj.id
                    errObj.show = null
                }else{
                    errObj.show = errObj.id
                }
                errObj.value = changed[`${key}`] ? changed[`${key}`] : null
                // errObj.show = changed[`${key}`] ? key : null
            }
            this.setState({
                errorObj: errObj
            })

            // 校验通过就提交
            this.onFetchValue(errObj, changed, obj)
        }
    };

    //新增校验
    onCheckAdd(errObj, obj, changed, regLength, testList, key) {
        const {setList} = this.props.dictionary
        Object.assign(obj, {
            ...changed['-1']
        })
        let mesg = changed[`${key}`]
        if (mesg) {
            testList.forEach((item, i) => {
                if (mesg[`${item}`] !== undefined) {
                    if (!(regLength[i].test(mesg[`${item}`]))) {
                        Object.assign(errObj, {
                            [`${item}`]: errorMs[i],
                            'id': key
                        })
                    } else {
                        delete errObj[`${item}`]
                    }
                } else {
                    setList.data.forEach((val) => {
                        if (String(val.id) === '-1') {
                            if (!val[`${item}`]) {
                                Object.assign(errObj, {
                                    [`${item}`]: errorMs[i],
                                    'id': key
                                })
                            }
                        }
                    })
                }
            })
        } else {
            setList.data.forEach((val) => {
                if (String(val.id) === '-1') {
                    if (!val.code) {
                        Object.assign(errObj, {
                            code: errorMs[1],
                            'id': '-1'
                        })
                    }
                    if (!val.codeText) {
                        Object.assign(errObj, {
                            codeText: errorMs[0],
                            'id': '-1'
                        })
                    }
                    if (!val.type) {
                        Object.assign(errObj, {
                            type: errorMs[2],
                            'id': '-1'
                        })
                    }
                }
            })
        }
        return {obj, errObj}
    }

    //编辑校验
    onCheckEdit(errObj, obj, changed, regLength, testList, key) {
        Object.assign(obj, {
            id: key,
            ...changed[`${key}`]
        })
        if (changed[`${key}`]) {
            let temObj = changed[`${key}`]
            testList.forEach((item, i) => {
                if (temObj[`${item}`] !== undefined) {
                    if (!(regLength[i].test(temObj[`${item}`]))) {
                        Object.assign(errObj, {
                            [`${item}`]: errorMs[i],
                            'id': key,
                            [`${item}1`]: temObj[`${item}`]
                        })
                    } else {
                        delete errObj[`${item}`]
                    }
                }
            })
        }
        return {obj, errObj}
    }

    //提交接口调用
    onFetchValue(errObj, changed, obj) {
        if (!errObj.id) {
            for (let key in changed) {
                if (changed[`${key}`]) {
                    this.props.actions.dictionaryListUpdateGet(obj, (result) => {
                        if (result.httpCode === 400) {
                            let msg = '字典名称或字典标识重复，请重新输入'
                            Message.warn(msg)
                        } else {
                            this.setState({
                                errorObj: {},
                                editingRowIds: []
                            })
                            Message.success("操作成功")
                            this.props.actions.dictionaryListGet({
                                pageNum: this.state.page + 1,
                                pageSize: this.state.rowsPerPage,
                                keyword: this.state.account,
                                type: this.state.type !== '-1' ? this.state.type : ""
                            })
                        }
                    })
                } else {
                    this.setState({
                        errorObj: {},
                        editingRowIds: []
                    })
                }
            }
        }else{
            this.setState({
                editingRowIds: [String(errObj.id)]
            })
        }
    }

    //编辑添加
    changeEditingRowIds(editingRowIds){
        //确保页面只有一条数据操作
        let str = editingRowIds.pop()
        setTimeout(()=>{
            this.setState({editingRowIds: [str]});
        },50)
    }

    render() {
        const {classes} = this.props
        let that = this
        const {editingRowIds, account} = this.state
        let tableData = this.onAddOrNot()
        const {fetching, typeList, delLoading} = this.props.dictionary
        //编辑行
        const EditRow = props => {
            if (props.children.length > 0) {
                let first = props.children[0]
                props.children.splice(0, 1)
                props.children.push(first)
                props.children[0] = <TableCell key={'data_order'}>{props.row.order}</TableCell>
            }
            return (
                <Table.Row {...props}>
                </Table.Row>
            )
        }

        //编辑单元格
        const EditCell = (props) => {
            // const {typeList} = this.props.dictionary
            if (props.column.name !== 'order' && props.column.name !== 'operation') {
                let flag = this.state.errorObj.id
                return (
                    <TableCell className='edit-cell'>
                        <div className="input-cell">
                            {props.column.name !== 'type' ?
                                <Input placeholder='请输入' onChange={(e) => props.onValueChange(e.target.value)}
                                       value={props.value}/>
                                :
                                <select placeholder='请输入' onChange={(e) => props.onValueChange(e.target.value)}
                                        value={props.value}>
                                    <option key={'-1'} value='-1'>类型选择</option>
                                    {
                                        typeList.data ?
                                            typeList.data.map((item, i)=> {
                                                return (
                                                    <option key={i} value={item}>{item}</option>
                                                )
                                            })
                                            : null
                                    }
                                </select>}
                            {
                                this.state.errorObj[`${props.column.name}`] ?
                                    <p className='error-message'>{this.state.errorObj[`${props.column.name}`]}</p>
                                    : (flag ? <p className='default-msg'>默认</p> : null)
                            }


                        </div>
                    </TableCell>
                )

            }
        };

        const getRowId = row => row.id;

        //定义行
        const tabRow = (props) => {
            if (props.children.length > 0) {
                let first = props.children[0]
                props.children.splice(0, 1)
                props.children.push(first)
            }
            return (
                <Table.Row {...props}>
                </Table.Row>
            )
        }

        //定义头
        const tabHeader = (props) => {
            if (props.children.length > 0) {
                let first = props.children[0]
                props.children.splice(0, 1)
                props.children.push(first)
                props.children.splice(props.children.length - 1, 1, <Table.Cell key='data-operation'>操作</Table.Cell>)
            }
            return (
                <Table.Row {...props}>
                </Table.Row>
            )
        }

        //定义操作按钮
        const EditButtonComonent = (props) => {
            if (props.id === 'edit') {
                return (
                    <span>
                             {AuthorityComponent.default(()=> {
                                 return (<span className='operate' onClick={props.onExecute}>编辑</span>)
                             }, 'authority_dictionary_edit')}
                        </span>
                )
            } else if (props.id === 'delete') {
                return (
                    <span>
                {AuthorityComponent.default(()=> {
                    return (<span className='operate' onClick={props.onExecute}>删除</span>)
                }, 'authority_dictionary_delete')}
                </span>)
            } else if (props.id === 'commit') {
                return (<span className='operate' onClick={props.onExecute}>确定</span>)
            } else {
                return (<span className='operate' onClick={() => that.onCalcelOperation()}>取消</span>)
            }
        }

        //表格定义
        const TableComponent = (props) => (
            <Grid
                rows={props.rows}
                columns={[
                    {name: 'order', title: '序号'},
                    {name: 'codeText', title: '字典名称'},
                    {name: 'code', title: '字典标识'},
                    {name: 'type', title: '类型'}]}
                getRowId={getRowId}>

                <PagingState
                    currentPage={this.state.page}
                    onCurrentPageChange={(page) => this.handleChangePage(page)}
                    pageSize={this.state.rowsPerPage}
                />

                <CustomPaging
                    totalCount={tableData.total ? tableData.total : 0}
                />
                <PagingPanel messages={{
                    info: function info(_ref) {
                        var from = _ref.from,
                            to = _ref.to,
                            count = _ref.count;
                        return '' + from + (from < to ? '-' + to : '') + ' 共' + count + '条';
                    }
                }}/>
                <Table rowComponent={tabRow} messages={{noData:"暂无数据！"}}/>
                <EditingState
                    editingRowIds={editingRowIds}
                    onEditingRowIdsChange={(p) => this.changeEditingRowIds(p)}
                    onCommitChanges={(obj) => this.commitChanges(obj)}
                />

                <TableEditRow
                    rowComponent={EditRow}
                    cellComponent={EditCell}
                />
                <TableEditColumn
                    showEditCommand
                    showDeleteCommand
                    commandComponent={EditButtonComonent}
                />
                <TableHeaderRow rowComponent={tabHeader}/>
            </Grid>
        );

        return (
            <div id="dictionary" className="clearfix">
                <Spin loading={fetching}>
                    <header>
                        {AuthorityComponent.default(()=> {
                            return (
                                <Button onClick={() => this.onAddNewField()}
                                        disabled={this.state.editType.indexOf('add') !== -1 ? true : false}
                                        className={classes.primary}><i className="add_dictionary">+</i>
                                    <span style={{marginLeft:"11.9px"}}>新增</span></Button>
                            )
                        }, 'authority_dictionary_add')}
                        <Input placeholder="请输入字典名称或字典标识" iconr="fa fa-search"
                               value={account} onChange={(e) => this.handleChangeSearch(e)}
                               onKeyDown={(e) => this.onSearch(e)}
                               iconclear="fa fa-times-circle"
                               onSearch={()=>this.onHandleSearch()}
                               onClear={()=>this.onClear()}
                               style={{width: 250}}/>
                        <select onChange={(e) => this.onSelectForType(e)} value={this.state.type}>
                            <option key={'-1'} value='-1'>类型选择</option>
                            {
                                typeList.data ?
                                    typeList.data.map((item, i)=> {
                                        return (
                                            <option key={i} value={item}>{item}</option>
                                        )
                                    })
                                    : null
                            }
                        </select>
                    </header>
                    <div style={{background: '#fff'}} className="dictionaryTable">
                        <TableComponent rows={tableData.data ? tableData.data : []}/>
                        <Modal open={this.state.delVisible ? true : false} onClose={() => this.onModalClose()}>
                            <div id="myModal">
                                <Spin loading={delLoading}>
                                    <div className="modalHeader">提示
                                        <i className="close fa fa-close" onClick={() => this.onModalClose()}></i>
                                    </div>
                                    <div className="modalContent">
                                        <div className="modalContentMsg">确认要删除该数据吗？</div>
                                        <div className="modalContentWarn">删除后不可恢复</div>
                                    </div>
                                </Spin>
                                <div className="modalFooter">
                                    <Button className={classes.modalCancel}
                                            onClick={() => this.onModalClose()}>取消</Button>
                                    <Button className={classes.primary}
                                            onClick={() => this.onModalDeleteSave()}>确定</Button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </Spin>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.dictionary,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
