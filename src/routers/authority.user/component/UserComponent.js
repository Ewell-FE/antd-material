import React, {Component} from 'react'
import 'ztree/js/jquery-1.4.4.min'
import 'ztree/js/jquery.ztree.core'
import 'ztree/js/jquery.ztree.excheck'
import 'ztree/css/zTreeStyle/zTreeStyle.css'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'
import 'jquery-mousewheel'
import 'malihu-custom-scrollbar-plugin'
import 'formbase/dist/formbase.min.css'
import 'react-select/dist/react-select.css'
import "../view/style.less"
import {withStyles} from 'material-ui/styles';
import Tabs, {Tab} from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import TabContainer from './TabContainer'
import AddRole from './AddRole'
import {Form} from '@/components'
import Spin from '@/components/spin'
import ModalInfo from '@/components/modal'
import classzz from '@/classes'
const styles = theme => ({
    tabs: {
        background: '#FFF'
    },
    buttonSave: classzz.Button.primary,
    buttonCancel: classzz.Button.modalCancel,
});

function getLength(s) {
    var str = s || '';
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128)
            realLength += 1;
        else
            realLength += 2;
    }
    return realLength;
}

const accountLength = value => (getLength(value) < 3 ? '用户名过短' : getLength(value) > 15 ? '用户名过长' : undefined);
const passwordLength = value => (getLength(value) < 4 ? '密码过短' : getLength(value) > 15 ? getLength(value) === 24 ? undefined : '密码过长' : undefined);
const isEmail = value => (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value) ? '格式不正确' : undefined);
const isPhone = value => (!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(value) ? '格式不正确' : undefined);
const markLength = value => (getLength(value) > 200 ? '内容过长' : undefined);
let scrollbar = function () {
    $(".treebox").mCustomScrollbar({
        scrollInertia: 250,
        theme: 'minimal-dark'
    });
}
@withStyles(styles)
class UserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roleSelect: [],
            initialFlag: true,
            value: 0,
            tree: [],
            addRoleOpen: false,
            minHeight: 0,
            prompt: false,
            promptMessage: ''
        }
        this.Submit = this.Submit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if ((this.props.user.editGetRole !== nextProps.user.editGetRole) && Array.isArray(nextProps.user.editGetRole)) {
            this.setState({roleSelect: nextProps.user.editGetRole})
        }
    }

    Submit(values) {
        this.setState({tree: this.filterCheckNodes()})
        let formP = {...values, "enable": 1}
        let roles = this.state.roleSelect;
        let trees = [...this.filterCheckNodes()];
        let id = null;
        if (this.props.edit) {
            id = this.props.user.editId.result;
        }
        if (this.props.edit && this.state.initialFlag) {
            trees.push([this.props.user.editGetTree.rootNode]);
        } else {
            trees.push([this.props.user.addUserTree.rootNode]);
        }
        this.props.actions.userSaveUser({
            form: formP,
            roles: roles,
            trees: trees,
            id: id
        }, () => {
            this.handleCancel();
        }, (message) => {
            this.setState({prompt: true, promptMessage: message})
        });
    }

    filterCheckNodes = () => {
        const id = this.state.value;
        let tree = [];
        if (this.props.edit && this.state.initialFlag) {
            tree = this.props.user.editGetTree.tree;
        } else {
            tree = this.props.user.addUserTree.tree;
        }
        if (tree && (tree.length !== 0)) {
            var treeObj = $.fn.zTree.getZTreeObj(id);
            var nodes = treeObj.getCheckedNodes(true);
            var arr = [...tree]
            var select = [];
            nodes.forEach((item) => {
                select.push(item.id)
            })
            arr[id].forEach((item, index) => {
                if (select.indexOf(item['id']) !== -1) {
                    arr[id][index]['checked'] = true
                } else {
                    arr[id][index]['checked'] = false
                }
            })
            return arr;
        } else {
            return [];
        }

    }
    handleChange = (event, value) => {
        this.setState({tree: this.filterCheckNodes()})
        this.setState({value},scrollbar);
    };

    handleRoleChange(item) {
        let arr = [...this.state.roleSelect];
        let index = arr.indexOf(item.id);
        if (index === -1) {
            arr.push(item.id)
        } else {
            arr.splice(index, 1)
        }
        this.setState({roleSelect: arr}, () => {
            let arr = []
            this.state.roleSelect.forEach((item) => {
                arr.push({
                    'roleId': item
                })
            })
            this.props.actions.userAddUserTree(
                {list: arr},()=>{
                    $("#userComponent .detail .treebox").mCustomScrollbar({
                        scrollInertia: 250,
                        axis:"xy",
                        theme: 'minimal-dark'
                    });
                }
            );
        });
        this.setState({value: 0, initialFlag: false});
    }

    handleCancel() {
        this.setState({roleSelect: [], tree: [], initialFlag: true, value: 0});
        this.props.actions.userDelUserTree({});
        this.props.actions.userDelCurrentUser();
        this.props.handleCancel();
    }

    componentDidMount() {
        this.setState({
            minHeight: document.body.offsetHeight - 163
        })
        $(".left .detail,.middle .detailContent").mCustomScrollbar({
            scrollInertia: 250,
            theme: 'minimal-dark'
        });
    }

    render() {
        const {classes, edit, user} = this.props
        const {rolelist, addUserTree, editGetTree, readRoleTree, editGetCurrentUser, fetching, modalfetching} = user
        const {roleSelect, value, addRoleOpen, initialFlag, prompt, promptMessage} = this.state
        const initialvalues = {account: '', password: '', userName: '', phone: '', email: '', remark: ''}
        let tree = [];
        if (edit && initialFlag) {
            tree = editGetTree.tree;
        } else {
            tree = addUserTree.tree;
        }

        return (
            <Spin loading={fetching} wrapperStyle={true}>
                <div id="userComponent" className='clearfix in'>
                    <header>
                        <h3>{edit ? '编辑用户' : '新增用户'}
                            <span className="right">
                           <Button
                               className={classes.buttonCancel}
                               onClick={() => {
                                   this.handleCancel();
                               }}
                           >
                            取消
                        </Button>
                        <Button style={{marginLeft:"10px"}}
                            type="submit"
                            className={classes.buttonSave}
                            onClick={
                                () => this.refs.userForm.submit()
                            }
                        >
                            保存
                        </Button>
                        </span>
                        </h3>
                    </header>
                    <div className="left">
                        <div className="title">用户信息</div>
                        <div className="detail" style={{height: this.state.minHeight, overflow: 'auto'}}>
                            <Form form='userForm' initialValues={edit ? editGetCurrentUser : initialvalues}
                                  Submit={(values) => this.Submit(values)} ref="userForm"
                                  fields={[{
                                      name: "account",
                                      label: "账户名",
                                      required: true,
                                      disabled: edit,
                                      validate: accountLength
                                  }, {
                                      name: "password",
                                      label: "密码",
                                      required: true,
                                      disabled: edit,
                                      type: "password",
                                      validate: passwordLength
                                  }, {
                                      name: "userName",
                                      label: "姓名",
                                      required: true
                                  }, {
                                      name: "phone",
                                      label: "电话",
                                      required: true,
                                      validate: isPhone
                                  }, {
                                      name: "email",
                                      label: "邮箱",
                                      required: true,
                                      validate: isEmail
                                  }, {
                                      name: "remark",
                                      label: "用户描述",
                                      type: 'textarea',
                                      rows: '5',
                                      validate: markLength
                                  }]}>
                            </Form>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="title">角色<span>(可多选)</span></div>
                        <div className="detail">
                            <div id="detailContent"  style={{height: this.state.minHeight-50, overflow: 'auto'}}>
                                {
                                    rolelist.data ? rolelist.data.map((item, i) => {
                                        return (
                                            <div key={i} id={item.roleName}
                                                 className={roleSelect.indexOf(item.id) === -1 ? "item" : "item active"}
                                                 onClick={this.handleRoleChange.bind(this, item)}>{item.roleName}</div>
                                        )
                                    }) : ''
                                }
                            </div>
                            {AuthorityComponent.default(() => {
                                return (
                                    <div className="addrole" onClick={()=>{
                                        this.setState({addRoleOpen:true});
                                        this.props.actions.userReadRoleTree({})}}>
                                        <span>+</span>新增</div>
                                )
                            }, "authority_user_newRole")}
                        </div>
                    </div>
                    <div className="content">
                        <div className="title" >权限</div>
                        <div className='detail' style={{padding:'0 20px'}}>
                                    <Tabs
                                value={value}
                                onChange={this.handleChange}
                                indicatorColor="#319FCE"
                                textColor="primary"
                                // scrollable={tree ? true : false}
                                className={classes.tabs}
                            >
                                {
                                    tree ?
                                        tree.map((item, i) => {
                                            return (
                                                <Tab key={i} label={item[0].name}/>
                                            )
                                        })
                                        : ''
                                }
                            </Tabs>
                            {
                                tree ?
                                    tree.map((item, i) => {
                                        return (
                                            <div key={i}>
                                                {(value === i) && <div className="treebox" style={{
                                                    height: this.state.minHeight - 120,
                                                    overflow: 'auto'
                                                }}>
                                                    <TabContainer id={i} zNodes={item}></TabContainer>
                                                </div>}
                                            </div>
                                        )

                                    })
                                    : ''
                            }
                        </div>
                    </div>
                    <AddRole
                        open={addRoleOpen}
                        fetching={modalfetching}
                        handleClose={() => {
                            this.setState({addRoleOpen: false})
                        }}
                        message={(message) => {
                            this.setState({prompt: true, promptMessage: message})
                        }}
                        action={this.props.actions.userAddRole}
                        trees={readRoleTree}
                        roleForm={this.props.roleForm}
                    >
                    </AddRole>
                    <ModalInfo open={prompt} modalMsg={promptMessage}
                               onClose={() => this.setState({prompt: false, promptMessage: ''})}/>
                </div>
            </Spin>
        )
    }
}

export default UserComponent

