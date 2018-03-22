import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {withStyles} from 'material-ui/styles';
import {Button, Modal} from 'material-ui';
import {Form} from '@/components'
import classzz from '@/classes'
import 'ztree/js/jquery-1.4.4.min'
import 'ztree/js/jquery.ztree.core'
import 'ztree/css/zTreeStyle/zTreeStyle.css'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'
import 'jquery-mousewheel'
import 'malihu-custom-scrollbar-plugin'
import "./style.less"
import OperaPermissTable from "../component/OperaPermissTable";
import DataPermiss from "../component/DataPermiss";
import Spin from '@/components/spin'
import Message from '@/components/Message'

const styles = theme => ({
    primary: classzz.Button.primary,
    modalCancel: classzz.Button.modalCancel
});
let that;
//1系统，2菜单，3页面
const inpName = {
    '1': ['menuName', 'englishName', 'backstageInterface', 'webInterface', 'permission'],
    '2': ['menuName', 'englishName', 'permission'],
    '3': ['menuName', 'englishName', 'permission']
}
const inpLabel = {
    '1': ['系统名称', '系统英文名', '后端接口', '系统访问路径', '权限码'],
    '2': ['菜单名称', '菜单英文名', '菜单权限码'],
    '3': ['页面名称', '页面英文名', '页面权限码']
}
let regLength = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{1,30}$/;
let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\\/])+$/ //ip地址校验
let regLength1 = /^[a-zA-Z]{1,50}$/;
const maxLength = value => (!(regLength.test(value)) ? '只包含汉字,数字,英文且30个字节' : undefined);
const englishLength = value => (!(regLength1.test(value)) ? '只包含英文50个字节' : undefined);
const englishLength1 = value => (!(regLength1.test(value)) ? '请选择一项' : undefined);
const ipValidate = value => (!(reg.test(value)) ? '请输入正确的ip地址' : undefined);

@withStyles(styles)
class App extends Component {
    constructor(prop) {
        super(prop)
        that = this
        this.state = {
            btnState: 1,//1新增，2编辑
            type: '1',//1系统，2菜单，3页面
            formBtnState: -1,//0:新增（系统）1：不可编辑:2：可编辑 3新增（菜单，页面）
            treeInfo: {},
            menuId: '',//页面ID
            menuName: '',
            rightTitle: '新增系统',
            setting: {
                view: {
                    showIcon: false,
                    showLine: false
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback: {
                    onClick: this.onTreeClick
                }
            },
            delVisible: false,
            authFormErrMsg: "",
            sysOption: [],
            selectOpen:false,
            minHeight:0
        }
        this.onTreeClick = this.onTreeClick.bind(this)
    }

    getData(data) {
        let result = [];
        data.forEach((item) => {
            result.push(item)
        })
        var makeData = function (result) {
            result.forEach((item, i) => {
                if (item.menuBeans.length > 0) {
                    item.children = item.menuBeans
                    item.name = item.menuName
                    makeData(item.menuBeans)
                } else {
                    item.name = item.menuName;
                    item.isParent = false;
                }
            })
        }
        makeData(result)
        return result
    }

    //系统英文名
    getSystemEnglish(treeList,englishName){
        let flag;
        let sysOptResult = [];
        let sysOpt = ["masterData", "bigData", "monitor", "authority", "access", "service"]
        sysOpt.forEach((item) => {
            flag = false;
            treeList.forEach(treeItem => {
                if (item === treeItem.englishName ) {
                    flag = true;
                }
            })
            if (!flag) {
                sysOptResult.push(item)
            }
        })
        if(englishName){
            sysOptResult.push(englishName)
        }
        return sysOptResult;
    }
    componentDidMount() {
        this.props.actions.getPermissAuthFormList({})
        this.getInitTree();
        $(".treeContent").mCustomScrollbar({
            scrollInertia: 250,
            axis:"xy",
            theme: 'minimal-dark'
        });
        this.setState({minHeight: document.body.offsetHeight - 148})
    }

    //树刷新
    getInitTree(permissName) {
        this.props.actions.getPermissTreeList({"param": {}}, (treeList) => {
            if(treeList[0].menuBeans){
                let getTreeList  = this.getData(treeList[0].menuBeans, treeList[0].id)
                $.fn.zTree.init($("#tree"), this.state.setting, getTreeList);
                //系统权限英文名---下拉框
                let sysOptResult = this.getSystemEnglish(treeList[0].menuBeans)
                let treeObj = $.fn.zTree.getZTreeObj("tree");
                if (permissName) {
                    //编辑，新增的刷新，选中树节点
                    let nodes = treeObj.getNodesByParam("permission", permissName, null);
                    treeObj.selectNode(nodes[0]);
                    this.setState({treeInfo: nodes[0],sysOption: sysOptResult})
                }else{
                    let nodes = treeObj.getNodesByParam("permission", getTreeList[0].permission, null);
                    treeObj.selectNode(nodes[0]);
                    this.setState({treeInfo: getTreeList[0],rightTitle: getTreeList[0].menuName,sysOption: sysOptResult,btnState: 2, type: '1', formBtnState: 1})
                    this.props.actions.getPermissAuthFormList(getTreeList[0])//初始化表格的值
                }
            }else{//没有系统时
                let sysEnglish = this.getSystemEnglish([])
                this.setState({treeInfo: treeList[0],rightTitle:"新增系统",btnState: 1, type: '1', formBtnState: 0,sysOption:sysEnglish})
            }
        })
    }

    //操作权限的下拉框
    onSelectChange(value) {
        if (value === '2') {//新增菜单
            this.setState({type: '2', rightTitle: '新增菜单', btnState: 1, formBtnState: 3, menuId: '',selectOpen:false})
        } else {//系增页面
            this.setState({type: '3', rightTitle: '新增页面', btnState: 1, formBtnState: 3, menuId: '',selectOpen:false})
            this.props.actions.getPermissOperationTableList([])//权限权限table列表为空
            this.props.actions.getPermissOperationListSet({type: 'OPERATION'});//操作权限的下拉框列表
            this.props.actions.getPermissDataAuthList([])//数据权限列表
        }
        this.props.actions.getPermissAuthFormList({'permission': this.state.treeInfo.permission})
    }

    //添加系统
    onAddForm(value) {
        let treeObj = $.fn.zTree.getZTreeObj("tree");
        if (value === '1') {//权限树的点击事件
            this.setState({type: value, btnState: 1, formBtnState: 0, rightTitle: '新增系统'})
            this.props.actions.getPermissAuthFormList({})
            treeObj.cancelSelectedNode();
        } else {//取消
            if (this.state.type === '1') {//新增系统的取消
                let treeFirItem = this.props.permiss.treeList.data[0].menuBeans
                if(treeFirItem){//有系统时，默认展示第一个系统
                    let treeObj = $.fn.zTree.getZTreeObj("tree");
                    let nodes = treeObj.getNodesByParam("permission", treeFirItem[0].permission, null);
                    treeObj.selectNode(nodes[0]);
                    this.setState({treeInfo: treeFirItem[0],rightTitle: treeFirItem[0].menuName,btnState: 2, type: '1', formBtnState: 1})
                    this.props.actions.getPermissAuthFormList(treeFirItem[0])//初始化表格的值
                }else{
                    this.props.actions.getPermissAuthFormList({})
                    this.setState({btnState: 1, formBtnState: 0})
                }
            } else {
                let nodes = treeObj.getSelectedNodes();//被选中的节点
                this.onTreeClick(null, 'tree', nodes[0])
            }
        }
    }

    //编辑
    onTreeClick(event, treeId, treeNode, clickFlag) {
        that.setState({
            formBtnState: 1,
            type: treeNode.menuType,
            rightTitle: treeNode.name,
            btnState: 2,
            menuId: treeNode.id,
            treeInfo: treeNode,
            authFormErrMsg: ''
        })
        if (treeNode.menuType === '3') {//编辑的操作权限列表
            that.props.actions.getPermissOperationTableSetParams({menuId: treeNode.id});//权限的列表
            that.props.actions.getPermissOperationListSet({type: 'OPERATION'});//操作权限的下拉框列表
        }
        // that.refs.authForm.reset()
        that.props.actions.getPermissAuthFormList(treeNode)
    }

    //表格信息编辑
    onEditFormInfo(value) {
        let englishNameOpt = ''
        if (value === 1) {//取消
            this.props.actions.getPermissAuthFormList(this.state.treeInfo)
            this.refs.authForm.reset()
            englishNameOpt = this.getSystemEnglish(this.props.permiss.treeList.data[0].menuBeans)
        }else{//编辑
            if(this.state.type === '1'){
                englishNameOpt =  this.getSystemEnglish(this.props.permiss.treeList.data[0].menuBeans,this.state.treeInfo.englishName)
            }
        }
        this.setState({formBtnState: value, authFormErrMsg: '',sysOption:englishNameOpt})
    }

    //保存表格
    onFormSubmit(value) {
        let params = {
            menuName: value.menuName,
            englishName: value.englishName,
            permission: value.permission,
            menuType: this.state.type
        }
        if (this.state.type === '1') {//系统
            Object.assign(params, {
                backstageInterface: value.backstageInterface,
                webInterface: value.webInterface
            })
        }
        let paramsPost = {};
        let msg = '新增成功';
        if (this.state.btnState === 1) {//新增
            if (this.state.formBtnState === 0) {//新增数据
                paramsPost = {parentId: this.props.permiss.treeList.data[0].id, ...params}
            } else {
                paramsPost = {parentId: this.state.treeInfo.id, ...params}
            }
        } else {//编辑
            paramsPost = {parentId: this.state.treeInfo.parentId, id: this.state.treeInfo.id, ...params}
            msg = "编辑成功"
        }
        this.props.actions.getPermissAddOrEdit(paramsPost, (result) => {
            if (result.httpCode === 200) {
                this.getInitTree(value.permission);
                this.props.actions.getPermissAuthFormList(params)//初始化表格的值
                this.setState({btnState: '2', formBtnState: 1, rightTitle: value.menuName, menuId: result.data.id})
                Message.success(msg)
            } else {
                this.setState({authFormErrMsg: result.data})
            }
        })
    }

    //权限英文名
    onInputChange(e) {
        let formValue = this.refs.authForm.values
        let params = {
            'englishName': e.target.value,
            'menuName': formValue.menuName
        }
        if (this.state.type === '1') {//系统
            this.props.actions.getPermissAuthFormList(
                Object.assign(params, {
                    'permission': e.target.value,
                    'backstageInterface': formValue.backstageInterface,
                    'webInterface': formValue.webInterface,
                }))
        } else {
            let permissionValue = this.state.treeInfo.permission
            let value = ''
            if (this.state.btnState !== 1) {//新增
                value = permissionValue.split('_')[0] + '_' + e.target.value
            } else {
                value = permissionValue + '_' + e.target.value
            }
            this.props.actions.getPermissAuthFormList(Object.assign(params, {
                'permission': value,
            }))
        }
        this.setState({authFormErrMsg: ""})
    }

    //删除（页面，系统,菜单）
    onModalSave() {
        this.props.actions.getPermissDelete({'id': this.state.menuId}, () => {
            this.setState({
                delVisible: false,
            })
            this.props.actions.getPermissAuthFormList({})
            this.getInitTree();
            Message.success("删除成功")
        })
    }
    onAddPageOrMenu(){
        let optOpen = !(this.state.selectOpen)
        this.setState({selectOpen:optOpen})
    }
    render() {
        const {classes} = this.props
        const {formBtnState, type, rightTitle, btnState, authFormErrMsg,selectOpen} = this.state
        //系统
        let col1 = [{
            name: inpName[type][0],
            label: inpLabel[type][0],
            type: 'text',
            readOnly: formBtnState === 1 ? true : false,
            val: formBtnState === 1 ? this.props.permiss.authForm : null,
            required: true,
            validate: maxLength
        }, {
            name: inpName[type][1],
            label: inpLabel[type][1],
            type: 'select',
            readOnly: formBtnState === 1 ? true : false,
            val: formBtnState === 1 ? this.props.permiss.authForm : null,
            required: true,
            options: this.state.sysOption,
            validate: englishLength1,
            onChange: (e) => {
                formBtnState !== 1 ? this.onInputChange(e) : ''
            }
        }, {
            name: inpName[type][2],
            label: inpLabel[type][2],
            type: 'text',
            readOnly: formBtnState === 1 ? true : false,
            val: formBtnState === 1 ? this.props.permiss.authForm : null,
            required: true,
            validate: ipValidate
        }, {
            name: inpName[type][3],
            label: inpLabel[type][3],
            type: 'text',
            readOnly: formBtnState === 1 ? true : false,
            val: formBtnState === 1 ? this.props.permiss.authForm : null,
            required: true,
            validate: ipValidate
        }, {
            name: inpName[type][4],
            label: inpLabel[type][4],
            type: 'text',
            disabled: formBtnState === 1 ? false : true,
            val: formBtnState === 1 ? this.props.permiss.authForm : null,
            readOnly: formBtnState === 1 ? true : false,
            required: true,
        }]
        //菜单，页面
        let col2 = [{
            name: inpName[type][0],
            label: inpLabel[type][0],
            type: 'text',
            readOnly: formBtnState === 1 ? true : false,
            val: formBtnState === 1 ? this.props.permiss.authForm : null,
            required: true,
            validate: maxLength
        }, {
            name: inpName[type][1],
            label: inpLabel[type][1],
            type: 'text',
            readOnly: formBtnState === 1 ? true : false,
            val: formBtnState === 1 ? this.props.permiss.authForm : null,
            required: true,
            validate: englishLength,
            onChange: (e) => {
                formBtnState !== 1 ? this.onInputChange(e) : ''
            }
        }, {
            name: inpName[type][2],
            label: inpLabel[type][2],
            type: 'text',
            disabled: formBtnState === 1 ? false : true,
            readOnly: formBtnState === 1 ? true : false,
            val: formBtnState === 1 ? this.props.permiss.authForm : null,
            required: true
        }]
        return (
            <div id="permiss">
                <Spin loading={this.props.permiss.treeLoad} wrapperStyle={true}>
                    <div className="leftContent">
                        <div className="addSystem">
                            <span>权限树</span>
                        </div>
                        <div className="treeContent" style={{position:'relative',height:this.state.minHeight}}>
                            <div id="tree" className="ztree"></div></div>
                        {AuthorityComponent.default(() => {
                            return (
                                <Button className="addSystemBtn" onClick={() => this.onAddForm('1')}>
                                    <i className="addSystem_i">+</i>
                                    新增系统
                                </Button>
                            )
                        }, 'authority_permiss_addSystem')}
                    </div>
                    <div className="rightContent">
                        <div className="title">
                            <h4>{rightTitle}</h4>
                            {btnState === 1 ?
                                <div><Button className={classes.primary}
                                             onClick={() => this.refs.authForm.submit()}>保存</Button>
                                    <Button className="cancelBtn" onClick={() => this.onAddForm()}>取消</Button></div> :
                                <div>
                                    {AuthorityComponent.default(() => {
                                        return (
                                            <Button className="cancelBtn" style={{right: '20px'}} onClick={() => {
                                                this.setState({delVisible: true})
                                            }}>删除</Button>
                                        )
                                    }, 'authority_permiss_delete')}

                                    <Button style={{right:'100px',width:'80px'}} className={classes.primary}
                                        onClick={()=>this.onAddPageOrMenu()}>
                                        新增
                                       <i className="fa fa-angle-down arrowDown"></i>
                                    </Button>
                                    {selectOpen?<ul className="selectMenu">
                                        {AuthorityComponent.default(() => {
                                            return (
                                                <li onClick={(e) => this.onSelectChange('2')}>新增菜单</li>
                                            )
                                        }, 'authority_permiss_addMenu')}
                                            {AuthorityComponent.default(() => {
                                                return (
                                                    <li onClick={(e) => this.onSelectChange('3')}>新增页面</li>
                                                )
                                        }, 'authority_permiss_addPage')}
                                    </ul>:null}
                                </div>
                            }
                        </div>
                        <div className="addContent">
                            <div className="contentTitle">
                                {type === '1' ? '系统信息' : type === '2' ? '菜单信息' : '页面信息'}
                                {formBtnState === 1 ?//编辑状态的不可编辑状态
                                    AuthorityComponent.default(() => {
                                        return (
                                            <span className="sysInfoAction" style={{right: '30px'}}
                                                  onClick={() => this.onEditFormInfo(2)}>编辑</span>
                                        )
                                    }, 'authority_permiss_edit')
                                    :
                                    formBtnState === 2 ?//编辑状态的可编辑状态
                                        <span>
                                            <span className="sysInfoAction" style={{right: '30px'}}
                                                  onClick={() => this.refs.authForm.submit()}>确定</span>
                                            <span className="sysInfoAction" style={{right: '70px'}}
                                                  onClick={() => this.onEditFormInfo(1)}>取消</span>
                                        </span> : ''
                                }
                            </div>
                            <div className="authForm">
                                <Form layout={formBtnState === 1 ? "grid" : "inline"} form="authForm" ref="authForm"
                                      Submit={(values) => this.onFormSubmit(values)}
                                      initialValues={this.props.permiss.authForm}
                                      labelCol="113px" wrapperCol={formBtnState === 1 ? null : "120px"}
                                      fields={type === '1' ? col1 : col2}
                                >
                                </Form>
                                {authFormErrMsg ? <div className="formErrMsg">{authFormErrMsg}</div> : null}
                            </div>
                            {this.state.type === '3' ?
                                <OperaPermissTable menuId={this.state.menuId}
                                                   data={this.props.permiss} actions={this.props.actions}/> :
                                ''}
                            {this.state.type === '3' ?
                                <DataPermiss btnState={this.state.btnState} treeInfo={this.state.treeInfo}
                                             menuId={this.state.menuId}
                                             data={this.props.permiss} actions={this.props.actions}/>
                                : ''}
                        </div>
                    </div>
                    <Modal open={this.state.delVisible} onClose={() => this.setState({delVisible: false})}>
                        <div id="myModal">
                            <Spin loading={this.props.permiss.treeLoad} wrapperStyle={true}>
                                <div className="modalHeader">提示
                                    <i className="close fa fa-close" onClick={() => {this.setState({delVisible: false})}}></i>
                                </div>
                                <div className="modalContent">
                                    <div className="modalContentMsg">
                                        {this.state.type === '1' ? '确认要删除该系统(包括页面，菜单)吗？' :
                                            this.state.type === '2' ? '确认要删除该菜单(包括页面)吗？' : '确认要删除该页面(包括操作权限，数据权限)吗？'}
                                    </div>
                                    <div className="modalContentWarn">删除后不可恢复</div>
                                </div>
                                <div className="modalFooter">
                                    <Button className={classes.modalCancel} onClick={() => {
                                        this.setState({delVisible: false})
                                    }}>取消</Button>
                                    <Button className={classes.primary} onClick={() => this.onModalSave()}>确定</Button>
                                </div>
                            </Spin>
                        </div>
                    </Modal>
                </Spin>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        permiss: state.permiss,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
