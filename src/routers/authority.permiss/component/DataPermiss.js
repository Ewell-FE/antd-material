/**
 * Created by czh on 2016/11/16.
 */
import React, {Component} from 'react';
import Button from 'material-ui/Button';
import {Modal, Table} from 'material-ui';
import {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import classzz from '@/classes'
import {withStyles} from 'material-ui/styles';
import 'jquery'
import Spin from '@/components/spin'
import Message from '@/components/Message'

const styles = theme => ({
    primary: classzz.Button.primary,
    modalCancel: classzz.Button.modalCancel,
    addDataAuthBtn: {
        color: 'rgba(0,0,0,0.65)',
        background: '#fff',
        float: 'right',
        marginRight: '20px',
        marginTop: '5px'
    },
    addNoBtn: {
        color: 'rgba(0,0,0,0.65)',
        background: '#DFDFDF',
        float: 'right',
        marginRight: '20px',
        marginTop: '5px',
        cursor: "not-allowed"
    }
});

@withStyles(styles)
class DataPermiss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delVisible: false,
            dataPermissList: [],
            sort: '',
            row: ''
        };
    }

    //type: 1,//0:新增,1测试（测试）2点击测试之后成功（编辑，删除）3点击测试之后失败（取消，确定）4编辑（取消，确定）
    componentDidMount() {
        //数据权限列表
        if (this.props.menuId) {
            this.props.actions.getPermissDataAuthListSetParam({menuId: this.props.menuId}, (list) => {
                let authList = this.getDataAuthList(list, this.state.dataPermissList)
                this.setState({dataPermissList: authList})
            })
        } else {
            this.props.actions.getPermissDataAuthList([])
            this.setState({dataPermissList: []})
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.menuId && nextProps.menuId !== this.props.menuId) {
            this.props.actions.getPermissDataAuthListSetParam({menuId: nextProps.menuId}, (list) => {
                let authList = this.getDataAuthList(list, this.state.dataPermissList)
                this.setState({dataPermissList: authList})
            })
        }
        if (nextProps.menuId === "" && nextProps.menuId !== this.props.menuId) {
            this.props.actions.getPermissDataAuthList([])
            this.setState({dataPermissList: []})
        }
    }

    getDataAuthList(data, data1) {
        let result1 = []
        data.forEach((item, i) => {
            var flag = false;
            data1.forEach((item1, j) => {
                if (item1.paramValue) {
                    if (item.paramValue === item1.paramValue) {
                        result1.push(item1);
                        if (data1[j + 1]) {
                            if (data1[j + 1].expanded) {
                                result1.push(data1[j + 1])
                            }
                            if (data1[j + 1].errMsg) {
                                result1.push(data1)
                            }
                        }
                        flag = true
                    }
                }
            })
            if (!flag) {
                if (item.add) {
                    result1.push({...item, type: 0})
                } else {
                    result1.push({...item, type: 1})
                }
            }
        })
        return result1;
    }

    //关闭弹窗
    onModalClose() {
        this.setState({delVisible: false})
    }

    //新增
    onAddedRows() {
        let result = this.props.data.dataAuthList
        let resultData = [];
        if (result[0]) {
            if (!result[0].add) {
                result.unshift({add: 1, order: 1, type: 0})
            }
        } else {
            result.unshift({add: 1, order: 1, type: 0})
        }

        this.state.dataPermissList.forEach((item) => {
            if (item.type === 4) {
                resultData.push({...item, type: 1})
            } else {
                resultData.push(item)
            }
        })
        let authList = this.getDataAuthList(result, resultData)
        this.setState({dataPermissList: authList})
    }

    //测试
    onDataAuthTest(row, rowId) {
        let dataPerList = this.state.dataPermissList
        this.props.actions.getPermissDataAuthTest({params: {paramValue: row.paramValue}, load: true}, (list) => {
            this.props.actions.getPermissDataAuthListSetParam({menuId: this.props.menuId}, (dataList) => {
                if (typeof(list.data) === 'string') {
                    dataPerList.splice(rowId, 1, {...row, type: 3}, {expanded: true, data: list.data})
                } else {
                    dataPerList.splice(rowId, 1, {...row, type: 2}, {expanded: true, data: list.data})
                }
                let authList = this.getDataAuthList(dataList, dataPerList)
                this.setState({dataPermissList: authList})
            })
        })
    }

    //编辑
    onDataAuthEdit(row, rowId) {
        let result = this.state.dataPermissList
        let dataListResult = this.props.data.dataAuthList
        let resultData = [];
        if (result[0]) {//删除新增的
            if (result[0].add) {
                result.splice(0, 1)
                result.splice(rowId - 1, 2, {...row, type: 4})
            } else if (result[0].addError) {
                result.splice(0, 2)
                result.splice(rowId - 2, 2, {...row, type: 4})
            } else {
                result.splice(rowId, 2, {...row, type: 4})
            }
        }
        if (dataListResult[0]) {//删除新增的(this.props.data.dataAuthList)
            if (dataListResult[0].add) {
                dataListResult.splice(0, 1)
            } else if (dataListResult[0].addError) {
                dataListResult.splice(0, 2)
            }
        }
        result.forEach((item, i) => {
            if (item.type === 4) {
                if (item.id === row.id) {
                    resultData.push({...item, type: 4})
                } else {
                    resultData.push({...item, type: 1})
                }
            } else {
                resultData.push(item)
            }
        })
        let authList = this.getDataAuthList(dataListResult, resultData)
        this.setState({dataPermissList: authList})
    }

    //取消（删除）
    onDataAuthCancel(row, rowId) {
        let result = this.state.dataPermissList;
        if (row.type === 0) {//新增
            if (result[rowId + 1]) {
                if (result[rowId + 1].errMsg) {
                    result.splice(rowId, 2)
                } else {
                    result.splice(rowId, 1)
                }
            } else {
                result.splice(rowId, 1)
            }
            this.setState({dataPermissList: result})
        } else if (row.type === 2 || row.type === 1) {//删除（测试成功和测试的）
            this.setState({delVisible: true, dataPermissList: result, sort: rowId, row: row})
        } else if (row.type === 3) {//测试失败的取消(删除)
            if (row.addError) {//新增
                result.splice(rowId, 2)
                this.setState({dataPermissList: result})
            } else {//编辑后测试失败--删除
                this.setState({delVisible: true, dataPermissList: result, sort: rowId, row: row})
            }
        } else {//编辑的取消
            result.splice(rowId, 1, {...row, type: 1})
            this.setState({dataPermissList: result})
        }
    }

    //保存
    onDataAuthSave(row, i) {
        let result = this.state.dataPermissList;
        let nameInpVal = $('.nameInpVal' + i).val()
        let interFaceInpVal = $('.interFaceInpVal' + i).val()
        if (result[i + 1]) {//删除校验信息
            if (result[i + 1].errMsg) {
                result.splice(i + 1, 1)
            }
        }
        if (result[i + 1]) {//删除测试接口的错误信息
            if (result[i + 1].expanded) {
                result.splice(i + 1, 1)
            }
        }
        let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\\/])+$/ //ip地址校验
        let regLength = /^[\u4e00-\u9fa5_a-zA-Z_]{1,30}$/
        //校验
        if (nameInpVal === "" && interFaceInpVal === "") {
            result.splice(i + 1, 0, {errMsg: {error1: '必填项', error2: '必填项'}})
            this.setState({dataPermissList: result})
        } else if (nameInpVal === "" && interFaceInpVal !== "") {
            if (!(reg.test(interFaceInpVal))) {
                result.splice(i + 1, 0, {errMsg: {error1: '必填项', error2: '接口不是正确的url地址'}})
            } else {
                result.splice(i + 1, 0, {errMsg: {error1: '必填项'}})
            }
            this.setState({dataPermissList: result})
        } else if (nameInpVal !== "" && interFaceInpVal === "") {
            if (!(regLength.test(nameInpVal))) {
                result.splice(i + 1, 0, {errMsg: {error1: '只能包含汉字,英文且30个字节', error2: '必填项'}})
            } else {
                result.splice(i + 1, 0, {errMsg: {error2: '必填项'}})
            }
            this.setState({dataPermissList: result})
        } else if (nameInpVal !== "" && interFaceInpVal !== "") {
            if (!(regLength.test(nameInpVal)) && reg.test(interFaceInpVal)) {
                result.splice(i + 1, 0, {errMsg: {error1: '只能包含汉字,英文且30个字节'}})
                this.setState({dataPermissList: result})
            } else if (regLength.test(nameInpVal) && !(reg.test(interFaceInpVal))) {
                result.splice(i + 1, 0, {errMsg: {error2: '接口不是正确的url地址'}})
                this.setState({dataPermissList: result})
            } else if (!(regLength.test(nameInpVal)) && !(reg.test(interFaceInpVal))) {
                result.splice(i + 1, 0, {errMsg: {error1: '只能包含汉字,英文且30个字节', error2: '接口不是正确的url地址'}})
                this.setState({dataPermissList: result})
            } else {//保存---新增，编辑，测试失败的保存
                if (this.props.menuId) {
                    this.props.actions.getPermissDataAuthTest({params: {paramValue: interFaceInpVal}}, (list) => {//测试接口是否可以调用
                        if (typeof(list.data) === 'string') {//测试失败
                            if (row.type === 0) {//新增
                                result.splice(i, 1, {
                                    paramKey: nameInpVal,
                                    paramValue: interFaceInpVal,
                                    type: 3,
                                    addError: true
                                }, {expanded: true, data: list.data})
                            } else {
                                result.splice(i, 1, {
                                    ...row,
                                    paramKey: nameInpVal,
                                    paramValue: interFaceInpVal,
                                    type: 3
                                }, {expanded: true, data: list.data})
                            }
                            this.setState({dataPermissList: result})
                        } else {
                            let dataList = this.props.data.dataAuthList
                            if (dataList[0]) {//删除新增数据（自己添加的）
                                if (dataList[0].add) {
                                    dataList.splice(0, 1)
                                }
                            }
                            let params = {};
                            let dataListResult = [];
                            if (row.id) {//3，4
                                dataList.forEach((item) => {
                                    if (item.id === row.id) {
                                        dataListResult.push({
                                            paramKey: nameInpVal,
                                            paramValue: interFaceInpVal,
                                            menuId: this.props.menuId
                                        })
                                    } else {
                                        dataListResult.push({
                                            paramKey: item.paramKey,
                                            paramValue: item.paramValue,
                                            menuId: this.props.menuId
                                        })
                                    }
                                })
                                params = {list: dataListResult}
                            } else {//新增
                                dataListResult = [{
                                    paramKey: nameInpVal,
                                    paramValue: interFaceInpVal,
                                    menuId: this.props.menuId
                                }];
                                dataList.forEach((item) => {
                                    dataListResult.push({
                                        paramKey: item.paramKey,
                                        paramValue: item.paramValue,
                                        menuId: this.props.menuId
                                    })
                                })
                                params = {list: dataListResult}
                            }
                            this.props.actions.getPermissDataAuthAdd(params, (msg) => {
                                if(msg.httpCode === 400){
                                    result.splice(i + 1, 0, {errMsg: {error2: msg.data}})
                                }else{
                                    this.props.actions.getPermissDataAuthListSetParam({menuId: this.props.menuId}, (dataList) => {
                                        let msg = '编辑成功！'
                                        if (row.type === 3) {//测试失败
                                            result.splice(i, 2, {
                                                ...row,
                                                paramKey: nameInpVal,
                                                paramValue: interFaceInpVal,
                                                type: 1
                                            })
                                        } else if (row.type === 4) {
                                            result.splice(i, 1, {
                                                ...row,
                                                paramKey: nameInpVal,
                                                paramValue: interFaceInpVal,
                                                type: 1
                                            })
                                        } else {
                                            result.splice(i, 1)
                                            msg = '新增成功！'
                                        }
                                        let authList = this.getDataAuthList(dataList, result)
                                        Message.success(msg)
                                        this.setState({dataPermissList: authList})
                                    })
                                }
                            })
                        }
                    })
                } else {
                    this.setState({dataPermissList: []})
                    Message.info("页面信息没保存")
                }
            }
        }
    }

    //删除
    onModalDeleteSave() {
        this.props.actions.getPermissDataAuthDel({id: this.state.row.id}, (data) => {
            this.props.actions.getPermissDataAuthListSetParam({menuId: this.props.menuId}, (list) => {//刷新
                let result = this.state.dataPermissList
                if (result.length !== this.state.sort) {//判断是否有扩展项
                    result.splice(this.state.sort, 2)
                } else {
                    result.splice(this.state.sort, 1)
                }
                let authList = this.getDataAuthList(list, result)
                this.setState({delVisible: false, dataPermissList: authList, visible: true})
                Message.success("删除成功")
            })
        })
    }

    render() {
        const {classes} = this.props;
        const {dataPermissList} = this.state;
        return (
            <div className="dataAuth">
                <Spin loading={this.props.data.dataAuthLoad}>
                    <div className="contentTitle">数据权限
                        {dataPermissList[0] ?
                            dataPermissList[0].add || dataPermissList[0].addError ?
                                AuthorityComponent.default(() => {
                                    return (
                                        <Button className={classes.addNoBtn}>新增数据权限</Button>
                                    )
                                }, 'authority_permiss_addData') :
                                AuthorityComponent.default(() => {
                                    return (
                                        <Button className={classes.addDataAuthBtn} onClick={() => this.onAddedRows()}>新增数据权限</Button>
                                    )
                                }, 'authority_permiss_addData')
                            :
                            AuthorityComponent.default(() => {
                                return (
                                    <Button className={classes.addDataAuthBtn}
                                            onClick={() => this.onAddedRows()}>新增数据权限</Button>
                                )
                            }, 'authority_permiss_addData')
                        }
                    </div>
                    <div style={{background: '#fff'}} className="dataAuthTable">
                        <Table className="opreationAuthTable">
                            <TableHead>
                                <TableRow>
                                    <TableCell>数据权限名</TableCell>
                                    <TableCell>接口</TableCell>
                                    <TableCell>操作</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dataPermissList.length > 0 ?
                                    dataPermissList.map((row, i) => {
                                        if (row.expanded) {
                                            return (
                                                <TableRow className="expandRow" key={"expandRow" + i}>
                                                    <TableCell colSpan="3"
                                                               className={typeof(row.data) === 'string' ? "errMsg" : ""}>
                                                        {typeof(row.data) === 'string' ?
                                                            <div key={'expandError'}
                                                                 className="errMsg">{row.data}</div> :
                                                            row.data.map((item, j) => {
                                                                return (
                                                                    <div key={'expand' + j}
                                                                         className="changShang">{item.name + "(" + item.key + ")"}</div>
                                                                )
                                                            })}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        } else if (row.add) {
                                            return (
                                                <TableRow key={"add" + i}>
                                                    <TableCell><input placeholder="请输入"
                                                                      className={"nameInpVal" + i}/></TableCell>
                                                    <TableCell><input placeholder="请输入"
                                                                      className={"interFaceInpVal" + i}/></TableCell>
                                                    <TableCell className='action'>
                                                        <span style={{marginRight: '5px'}}
                                                              onClick={(e) => this.onDataAuthSave(row, i)}>确定</span>
                                                        <span onClick={() => this.onDataAuthCancel(row, i)}>取消</span>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        } else if (row.errMsg) {
                                            return (
                                                <TableRow className="expandRow" key={"errMsg" + i}>
                                                    <TableCell
                                                        className="errMsg">{row.errMsg.error1 ? row.errMsg.error1 : ''}</TableCell>
                                                    <TableCell
                                                        className="errMsg">{row.errMsg.error2 ? row.errMsg.error2 : ''}</TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            )
                                        } else {
                                            return (
                                                <TableRow key={i}>
                                                    {row.type === 3 || row.type === 4 ?
                                                        <TableCell><input placeholder="请输入" defaultValue={row.paramKey}
                                                                          className={"nameInpVal" + i}/></TableCell> :
                                                        <TableCell>{row.paramKey}</TableCell>
                                                    }
                                                    {row.type === 3 || row.type === 4 ?
                                                        <TableCell><input placeholder="请输入"
                                                                          defaultValue={row.paramValue}
                                                                          className={"interFaceInpVal" + i}/></TableCell> :
                                                        <TableCell>{row.paramValue}</TableCell>
                                                    }
                                                    {row.type === 3 || row.type === 4 ?
                                                        <TableCell className='action'>
                                                            <span style={{marginRight: '5px'}} onClick={(e) => this.onDataAuthSave(row, i)}>确定</span>
                                                            <span
                                                                onClick={() => this.onDataAuthCancel(row, i)}>取消</span>
                                                        </TableCell>
                                                        : row.type === 2 ?
                                                            <TableCell className='action'>
                                                                {AuthorityComponent.default(() => {
                                                                    return (
                                                                        <span style={{marginRight: '5px'}}
                                                                              onClick={() => this.onDataAuthEdit(row, i)}>编辑</span>
                                                                    )
                                                                }, 'authority_permiss_editData')}
                                                                {AuthorityComponent.default(() => {
                                                                    return (
                                                                        <span onClick={() => this.onDataAuthCancel(row, i)}>删除</span>
                                                                    )
                                                                }, 'authority_permiss_deleteData')}
                                                            </TableCell> :
                                                            <TableCell className='action'>
                                                                <span style={{marginRight: '5px'}} onClick={() => this.onDataAuthTest(row, i)}>测试</span>
                                                                {AuthorityComponent.default(() => {
                                                                    return (
                                                                        <span onClick={() => this.onDataAuthCancel(row, i)}>删除</span>
                                                                    )
                                                                }, 'authority_permiss_deleteData')}
                                                            </TableCell>
                                                    }
                                                </TableRow>
                                            )
                                        }
                                    }) : <TableRow><TableCell colSpan="4" style={{textAlign: "center",fontSize:'12px'}}>暂无数据</TableCell></TableRow>}
                            </TableBody>
                        </Table>
                        <Modal open={this.state.delVisible} onClose={() => this.onModalClose()}>
                            <div id="myModal">
                                <Spin loading={this.props.data.dataAuthLoad} wrapperStyle={true}>
                                    <div className="modalHeader">提示
                                        <i className="close fa fa-close" onClick={() => this.onModalClose()}></i>
                                    </div>
                                    <div className="modalContent">
                                        <div className="modalContentMsg">确认要删除该权限吗？</div>
                                        <div className="modalContentWarn">删除后不可恢复</div>
                                    </div>
                                    <div className="modalFooter">
                                        <Button className={classes.modalCancel}
                                                onClick={() => this.onModalClose()}>取消</Button>
                                        <Button className={classes.primary}
                                                onClick={() => this.onModalDeleteSave()}>确定</Button>
                                    </div>
                                </Spin>
                            </div>
                        </Modal>
                    </div>
                </Spin>
            </div>
        );
    }
}

export default DataPermiss


