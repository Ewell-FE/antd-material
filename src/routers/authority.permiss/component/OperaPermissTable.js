/**
 * Created by czh on 2016/11/16.
 */
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import {Table,Modal,Button} from 'material-ui'
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import 'react-select/dist/react-select.css'
import 'formbase/dist/formbase.min.css'
import classzz from '@/classes'
import {Form} from '@/components'
import Spin from '@/components/spin'
import Message from '@/components/Message'
const styles = theme => {
    return {
        primary: classzz.Button.primary,
        modalCancel:classzz.Button.modalCancel
    }
};
let regLength = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{1,30}$/;
let regLength1 = /^[a-zA-Z]{1,50}$/;
const maxLength = value => (!(regLength.test(value)) ? '只能包含汉字,数字,英文且30个字节':undefined);
const englishLength = value => (!(regLength1.test(value)) ? '只能包含英文50个字节':undefined);
@withStyles(styles)
class OperaPermissTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteVisible:false,
            addVisible:false,
            optionArr:[],
            delRow:[],
            postErrMsg:''
        }
        this.Submit = this.Submit.bind(this)
    }

    //增加操作权限
    Submit(values) {
        this.props.actions.getPermissOperationAdd({'type':'OPERATION',...values},(msg)=>{
            if(msg.httpCode === 200){
                this.onModalClose()
                Message.success("新增成功")
                this.props.actions.getPermissOperationListSet({type: 'OPERATION'});//操作权限的下拉框列表
            }else{
                this.setState({postErrMsg:msg.data})
            }
        })
    }

    //删除
    onDelete(row){
        this.setState({deleteVisible:true,delRow:row})
    }

    //下拉框onChange事件
    onSelectChange(e){
        var result = e.target.value
        if(result === '+'){//新增
            this.setState({addVisible:true})
        }else{
            if(this.props.menuId){
                this.props.actions.getPermissOperationAddTable({
                    'list':[{'operationId':result.split(',')[0],operationCode:result.split(',')[1],'menuId':this.props.menuId}]
                },()=>{
                    this.props.actions.getPermissOperationTableSetParams({'menuId':this.props.menuId})
                })
            }else{
                Message.info("页面没有保存")
            }
        }
    }

    //删除---保存
    onModalSave(){
        if(this.props.menuId){
            this.props.actions.getPermissOperationDel({
                'list':[{'id':this.state.delRow.id, 'menuId':this.props.menuId, 'operationCode':this.state.delRow.operationCode}]
            },()=>{
                Message.success("删除成功")
                this.props.actions.getPermissOperationTableSetParams({'menuId':this.props.menuId})
            })
        }else{
            Message.info("新增成功")
        }
        this.setState({deleteVisible:false})
    }

    //关闭Mofal
    onModalClose(){
        this.setState({deleteVisible:false,addVisible:false,postErrMsg:''})
    }

    onChangeInp(e){
        this.setState({postErrMsg:''})
    }
    render() {
        const { classes} = this.props;
        const { operatTableList,operatAuthList,operationLoad } = this.props.data
        return (
            <div className="actionAuth">
                <Spin loading={operationLoad}>
                    <div className="contentTitle">
                        <h4>操作权限</h4>
                        {AuthorityComponent.default(() => {
                            return (
                        <select className="addOpreationAuth"  value="0" onChange={(e) => this.onSelectChange(e)}>
                            <option value={"0"}>选择操作权限</option>
                            {operatAuthList?operatAuthList.map((item,i)=> {
                                let flag = false;
                                for (var j = 0; j < operatTableList.length; j++) {
                                    if (item.code === operatTableList[j].operationCode) {
                                        flag = true;
                                    }
                                }
                                if(!flag){
                                    return (
                                        <option value={item.id+','+item.code} key={i}>{item.codeText}</option>
                                    )
                                }
                                return null
                            }):''}
                            <option value="+">+</option>
                        </select>
                        )
                       }, 'authority_permiss_addOperation')}
                    </div>
                    <Table className="opreationAuthTable">
                        <TableHead>
                            <TableRow>
                                <TableCell>操作权限名</TableCell>
                                <TableCell>权限码</TableCell>
                                <TableCell>操作</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {operatTableList.length > 0?
                                operatTableList.map((row,i)=> {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.operationCodeText}</TableCell>
                                            <TableCell>{row.operationCode}</TableCell>
                                            {AuthorityComponent.default(() => {
                                                return (
                                                <TableCell className='action' onClick={()=>this.onDelete(row)}>删除</TableCell>
                                                )
                                            }, 'authority_permiss_deleteOperation')}
                                        </TableRow>
                                    )
                                }): <TableRow><TableCell colSpan="4" style={{textAlign:"center",fontSize:'12px'}}>暂无数据</TableCell></TableRow>}
                        </TableBody>
                    </Table>
                    <Modal open={this.state.deleteVisible} onClose={()=>this.onModalClose()}>
                        <div id="myModal">
                            <Spin loading={operationLoad} wrapperStyle={true}>
                                <div className="modalHeader">提示
                                    <i className="close fa fa-close" onClick={()=>this.onModalClose()}></i>
                                </div>
                                <div className="modalContent">
                                    <div className="modalContentMsg">确认要删除该权限吗？</div>
                                    <div className="modalContentWarn">删除后不可恢复</div>
                                </div>
                                <div className="modalFooter">
                                    <Button className={classes.modalCancel} onClick={()=>this.onModalClose()}>取消</Button>
                                    <Button className={classes.primary} onClick={()=>this.onModalSave()}>确定</Button>
                                </div>
                            </Spin>
                        </div>
                    </Modal>
                    <Modal open={this.state.addVisible} onClose={()=>this.onModalClose()}>
                        <div id="myModal" style={{width:'464px',height:'295px'}}>
                            <Spin loading={operationLoad} wrapperStyle={true}>
                                <div className="modalHeader">提示
                                    <i className="close fa fa-close" onClick={()=>this.onModalClose()}></i>
                                </div>
                                <div className="modalContent" style={{padding:'20px'}}>
                                    <Form layout="horizontal" labelCol="25%" wrapperCol="60%"
                                          Submit={(values)=>this.Submit(values)}
                                          ref="form1" form="form1" initialValues={{'type':"OPERATION"}}
                                          fields={[{
                                              name:"codeText",
                                              label:"操作权限名",
                                              type:'text',
                                              required:true,
                                              validate:maxLength,
                                              onChange:(e)=>this.onChangeInp(e)
                                          },{
                                              name:"code",
                                              label:"权限码",
                                              type:'text',
                                              required:true,
                                              validate:englishLength,
                                              onChange:(e)=>this.onChangeInp(e)
                                          },{
                                              name:"type",
                                              label:"类型",
                                              type:'text',
                                              disabled:true,
                                              required:false
                                          }]}></Form>
                                </div>
                                {this.state.postErrMsg?<div className="errorMsg">{this.state.postErrMsg}</div>:null}
                                <div className="modalFooter">
                                    <Button className={classes.modalCancel} style={{marginRight:'20px'}} onClick={()=>this.onModalClose()}>取消</Button>
                                    <Button className={classes.primary} onClick={()=>this.refs.form1.submit()}>保存</Button>
                                </div>
                            </Spin>
                        </div>
                    </Modal>
                </Spin>
            </div>
        )
    }
}

export default OperaPermissTable


