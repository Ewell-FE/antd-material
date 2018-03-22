import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import 'formbase/dist/formbase.min.css'
import 'react-select/dist/react-select.css'
import "../view/style.less"
import BaseModal from '../component/BaseModal'
import RoleModal from '../component/roleModal'
import {Input} from '@/components'
import Button from 'material-ui/Button';
import Spin from '@/components/spin'
import {PagingState, DataTypeProvider, CustomPaging} from '@devexpress/dx-react-grid';
import {Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-material-ui';
import classzz from '@/classes'


import 'ztree/js/jquery-1.4.4.min'
import 'ztree/js/jquery.ztree.core'
import 'ztree/css/zTreeStyle/zTreeStyle.css'
const styles = theme => ({
    primary: classzz.Button.primary,
    root: {
        width: '100%',
        boxShadow: 'none'
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});
//树节点的字体颜色
function getFont(treeId, node) {
    return node.font ? node.font : {};
}
const setting = {
    view: {
        showTitle:false,
        fontCss: getFont,
    },
    data: {
        simpleData: {
            enable: true
        }
    }
};
@withStyles(styles)
export default class ContentTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            rowsPerPage: 12,
            del: false,
            froze: false,
            unfroze: false,
            reset: false,
            roleModal: false,
            account: '',
            enable: '1',
            rowId: '',
            rowAccount: ''
        }
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    componentWillMount() {
        if (this.props.edit) {
            let condition = this.props.user.tableCondition;
            this.setState({
                page: condition.pageNum,
                account: condition.account,
                enable: condition.enable
            })
        }
    }

    componentDidMount() {
        this.fentchList();
    }

    fentchList = () => {
        this.props.actions.userFentchList({
            enable: this.state.enable,
            account: this.state.account,
            pageNum: this.state.page,
            pageSize: this.state.rowsPerPage
        })
    }
    handleChangePage = (page) => {
        this.setState({page: page + 1}, () => {
            this.fentchList();
        })
    };
    handleChangeSelectType = (e) => {
        this.setState({enable: e.target.value}, () => {
            this.fentchList();
        })

    }
    handleChangeSearch = (e) => {
        this.setState({account: e.target.value})
    }
    handleKeyDown = (e) => {
        if (e && e.keyCode === 13) {
            this.setState({page: 1}, () => {
                this.fentchList();
            })
        }

    }

    handleOpenRoleView = (item) => {
        this.setState({roleModal: true},()=>{
            this.props.actions.userViewRole({
                userId: item.id
            }, () => {
                const {roleresult} = this.props.user
                $.fn.zTree.init($(".roletree ul"), setting, roleresult.tree || []);
                $("#roleMoadl .content .detail").mCustomScrollbar({
                    scrollInertia: 250,
                    axis:"xy",
                    theme: 'minimal-dark'
                });
            })
        })
    }
    handleResetPassword = (item) => {
        this.setState({reset: true, rowId: item.id})
    }
    handleFroze = (item) => {
        this.setState({froze: true, rowId: item.id, rowAccount: item.account})
    }
    handleUnfroze = (item) => {
        this.setState({unfroze: true, rowId: item.id, rowAccount: item.account})
    }
    handleDeleteUser = (item) => {
        this.setState({del: true, rowId: item.id})
    }
    handleEditUser = (item) => {
        this.props.actions.userSaveEditId(item.id);
        this.props.handleEditUser();
        this.props.actions.userEditGetCurrentUser({id: item.id})
        this.props.actions.userEditGetRole({userId: item.id},()=>{
            $("#userComponent .detail .treebox").mCustomScrollbar({
                scrollInertia: 250,
                axis:"xy",
                theme: 'minimal-dark'
            });
        })
        this.props.actions.userSaveTableCondition(
            {
                enable: this.state.enable,
                account: this.state.account,
                pageNum: this.state.page,
                pageSize: this.state.rowsPerPage
            }
        )
    }

    onClear(){
        this.setState({account: ''})
        this.props.actions.userFentchList({
            enable: this.state.enable,
            account: '',
            pageNum: this.state.page,
            pageSize: this.state.rowsPerPage
        })
    }
    onHandleSearch(){
        this.props.actions.userFentchList({
            enable: this.state.enable,
            account: this.state.account,
            pageNum: this.state.page,
            pageSize: this.state.rowsPerPage
        })
    }
    render() {
        const {classes, handleAddUser, user} = this.props;
        const {tablelist, roleresult, fetching, modalfetching} = user
        const {del, froze, unfroze, reset, roleModal, rowId, rowsPerPage, page, enable, account, rowAccount} = this.state;
        if (tablelist.data) {
            tablelist.data.forEach((item, i) => {
                item.order = (this.state.page - 1) * this.state.rowsPerPage + i + 1
            })
        }
        //用户信息
        const UserDetail = props => {
            return (
                <DataTypeProvider
                    formatterComponent={({row}) => {
                        return (
                            <div>
                                <p>{row.userName}</p>
                                <p className="des"><span>{row.phone}</span><span
                                    className="line">|</span><span>{row.email}</span></p>
                            </div>

                        )
                    }}
                    {...props}
                />
            )
        }
        //用户/权限
        const ViewUserRole = props => {
            return (
                <DataTypeProvider
                    formatterComponent={({row}) => {
                        return (
                            <p className="operate">
                                <span onClick={this.handleOpenRoleView.bind(this, row)}>查看</span>
                            </p>

                        )
                    }}
                    {...props}
                />
            )
        }
        //操作
        const CurrencyTypeProvider = props => (
            <DataTypeProvider
                formatterComponent={({row}) => {
                    return (
                        row.enable === '1' ?
                            <p className="operate">
                                {AuthorityComponent.default(() => {
                                    return (
                                        <span onClick={this.handleEditUser.bind(this, row)}>编辑</span>
                                    )
                                }, 'authority_user_edit')}
                                {AuthorityComponent.default(() => {
                                    return (
                                        <span onClick={this.handleResetPassword.bind(this, row)}>重置密码</span>
                                    )
                                }, 'authority_user_resetPassword')}
                                {AuthorityComponent.default(() => {
                                    return (
                                        <span onClick={this.handleDeleteUser.bind(this, row)}>删除</span>
                                    )
                                }, 'authority_user_delete')}
                                {AuthorityComponent.default(() => {
                                    return (
                                        <span onClick={this.handleFroze.bind(this, row)}>冻结</span>
                                    )
                                }, 'authority_user_freeze')}
                            </p> :
                            <p className="operate">
                                {AuthorityComponent.default(() => {
                                    return (
                                        <span onClick={this.handleDeleteUser.bind(this, row)}>删除</span>
                                    )
                                }, 'authority_user_delete')}
                                {AuthorityComponent.default(() => {
                                    return (
                                        <span onClick={this.handleUnfroze.bind(this, row)}>解冻</span>
                                    )
                                }, 'authority_user_unfreeze')}
                            </p>
                    )
                }}
                {...props}
            />
        );
        const TableComponent = (props) => (
            <Grid
                rows={props.rows}
                columns={[
                    {name: 'order', title: '序号'},
                    {name: 'userName', title: '姓名'},
                    {name: 'account', title: '账户名'},
                    {name: 'remark', title: '描述'},
                    {name: 'createTime', title: '创建时间'},
                    {name: 'aaa', title: '角色/权限'},
                    {name: 'bbb', title: '操作'},
                ]}>
                <PagingState
                    currentPage={page - 1}
                    onCurrentPageChange={this.handleChangePage}
                    pageSize={rowsPerPage}
                />
                <CustomPaging
                    totalCount={tablelist.total ? tablelist.total : 0}
                />
                <UserDetail
                    for={['userName']}
                />
                <ViewUserRole
                    for={['aaa']}
                />
                <CurrencyTypeProvider
                    for={['bbb']}
                />
                <Table  messages={{noData: "暂无数据！"}} style={{fontSize:"12px"}}/>
                <TableHeaderRow/>
                <PagingPanel messages={{
                    info: function info(_ref) {
                        var from = _ref.from,
                            to = _ref.to,
                            count = _ref.count;
                        return '' + from + (from < to ? '-' + to : '') + ' 共' + count + '条';
                    }
                }}/>
            </Grid>
        );
        return (
            <Spin loading={fetching}>
                <div id="table" className='clearfix in'>
                    <div id="tool">
                        <Input placeholder="请输入账户名" id="account" name="account" value={account}
                               onChange={(e) => this.handleChangeSearch(e)}  onKeyDown={(e) => this.handleKeyDown(e)}
                               iconr="fa fa-search" iconclear="fa fa-times-circle"
                               onSearch={()=>this.onHandleSearch()}
                               onClear={()=>this.onClear()} style={{width: 200}}/>
                        <select className="select" id="enable" name="enable" value={enable}
                                onChange={(e) => this.handleChangeSelectType(e)}>
                            <option value="1">正常用户</option>
                            <option value="0">冻结用户</option>
                        </select>
                        {AuthorityComponent.default(() => {
                            return (
                                <Button id="add" onClick={() => handleAddUser()}
                                        className={classes.primary}>
                                    <i>+</i>
                                    <span style={{marginLeft: "11.9px"}}>新增</span></Button>
                            )
                        }, 'authority_user_add')}
                    </div>
                    <div id="content">
                        <Paper className={classes.root}>
                            <TableComponent rows={tablelist.data ? tablelist.data : []}/>
                        </Paper>
                    </div>
                    <BaseModal action={this.props.actions.userDeleteUser}
                               rowId={rowId}
                               open={del}
                               handleClose={() => this.setState({del: false})}
                               fentchList={this.fentchList}
                    >
                        <span className="bloder">确认要删除该用户吗？</span>
                        <span className="red">删除后不可恢复</span>
                    </BaseModal>
                    <BaseModal enable="0"
                               action={this.props.actions.userFrozeUser}
                               rowId={rowId}
                               account={rowAccount}
                               open={froze}
                               handleClose={() => this.setState({froze: false})}
                               fentchList={this.fentchList}
                    >
                        <span className="bloder">确认要冻结该用户吗？</span>
                    </BaseModal>
                    <BaseModal enable="1"
                               action={this.props.actions.userUnfrozeUser}
                               rowId={rowId}
                               account={rowAccount}
                               open={unfroze}
                               handleClose={() => this.setState({unfroze: false})}
                               fentchList={this.fentchList}
                    >
                        <span className="bloder">确认要解冻该用户吗？</span>
                    </BaseModal>
                    <BaseModal
                        action={this.props.actions.userResetPassword}
                        rowId={rowId}
                        open={reset}
                        handleClose={() => this.setState({reset: false})}
                        fentchList={this.fentchList}
                    >
                        <span className="bloder">恢复初始密码</span>
                        <span className="gray">初始密码为：000000</span>
                    </BaseModal>
                    <RoleModal fetching={modalfetching} open={roleModal}
                               handleClose={() => this.setState({roleModal: false})} roles={roleresult.roles || {}}
                               data={roleresult.tree || []}></RoleModal>
                </div>
            </Spin>
        )
    }
}

