import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as loginAction from '../../login/actions'
import "./style.less"
import {withStyles} from 'material-ui/styles';
import {Modal,Button} from 'material-ui'
import classzz from '@/classes'
import {Form} from '@/components'
import Spin from '@/components/spin'
import Message from '@/components/Message'
var cookieStore = require('store')
const systemNameArr = ["masterData","bigData","monitor","authority","access","service"]

const styles = theme => {
    return {
        primary: classzz.Button.primary,
        modalCancel:classzz.Button.modalCancel
    }
};
let regLength = /^[a-zA-Z||0-9]{4,15}$/;
const pwValid = value => (!(regLength.test(value)) ? '英文、数字(4-15个字符)':undefined);
@withStyles(styles)
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open:false,
            errMsg:'',//当前密码错误
            errMsg1:''
        }
    }
    componentDidMount() {
        document.title = '信息平台管理系统';
        if(window.location.search){//带参数进来，需要请求登录接口，不带参数进来不需要请求登录接口
            var params = window.location.search.split('&password=')
            this.props.actions.getSystemRepresentList({
                "loginParams":{userName: params[0].split('=')[1], userPwd: params[1]}
            })
        }else{
            this.props.actions.getSystemRepresentList({})
        }
    }

    onLookSystemAuthor(e,SystemPath,data){
        if ( e && e.preventDefault ){
            e.preventDefault();
        }else{
            window.event.returnValue = false;
        }
        //判断后台给的地址是否带参数
        if(SystemPath.indexOf("?") > -1){
            SystemPath = SystemPath + "&"
        }else{
            SystemPath = SystemPath + "?"
        }

        var token = cookieStore.get('userInfo').TOKEN
        if(data.permission === 'authority'){
            window.location.href = data.webInterface;
        }else{
            window.location.href = SystemPath + "token=" + token;
        }
    }
    //注销登录
    logOut(){
        this.props.actions.systemListLogOutSuccess()
    }
    //修改密码
    systemListUpdatePassword(){
        this.setState({open:true,errMsg:'',errMsg1:''})
    }
    onModalClose(){
        this.setState({open:false,})
    }
    Submit(values){
        if(!this.state.errMsg && !this.state.errMsg1){
            let params = {
                id:cookieStore.get('userInfo').id,
                account:cookieStore.get('userInfo').account,
                oldPassword:values.oldPassword,
                password:values.password
            }
            this.props.actions.systemListUpdatePassword(params,(result)=>{
                if(result.httpCode === 200){
                    this.setState({open:false})
                    Message.success("密码修改成功")
                }else if(result.httpCode===400){
                    this.setState({open:true,errMsg:result.data})
                }else{
                    Message.error("密码修改失败")
                }
            })
        }
    }
    //新旧密码是否一致判断
    onChangePassword(e){
        if(e.target.value && regLength.test(e.target.value) && e.target.value !== this.props.editPwForm.values.password ){
            this.setState({errMsg1:"两次输入密码不一样!"})
        }else{
            this.setState({errMsg1:""})
        }
    }
    onChangeOldPassword(e){
        this.setState({errMsg:""})
    }

    render() {
        const {systemList,load} = this.props.systemList
        const { classes } = this.props
        return (
            <div id="systemList">
                <Spin loading={load} wrapperStyle={true}>
                    <div className="header">
                        <span className="logo"></span>
                        <div className="user clearfix">
                            <div className="name">您好，{cookieStore.get('userInfo')?cookieStore.get('userInfo').account:""}</div>
                            <div className="line"></div>
                            <div className='editPw' onClick={()=>this.systemListUpdatePassword()} title="修改密码"></div>
                            <div className='exit' onClick={()=>this.logOut()} title="退出"></div>
                        </div>
                    </div>
                    <div className='bg'></div>
                    <div className="content">
                        <div className="entry">
                            {
                                systemNameArr.map((item,i) =>{
                                    var exit = false
                                    var data = {}
                                    for(var j = 0 ; j < systemList.length; j++){
                                        if(systemList[j].permission === systemNameArr[i]){
                                            exit = true;
                                            data = systemList[j]
                                        }
                                    }
                                    if(exit){
                                        return(
                                            <span key={i} className={data.permission} onClick={(e)=>this.onLookSystemAuthor(e,data.webInterface,data)}/>
                                        )
                                    }else{
                                        return(
                                            <span key={i} className={systemNameArr[i]+'_no'} />
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </Spin>
                <Modal open={this.state.open} onClose={()=>this.onModalClose()}>
                    <div id="myModal" style={{width:'464px'}}>
                        <div className="modalHeader">修改密码<span className="close" onClick={()=>this.onModalClose()}>×</span></div>
                        <div className="modalContent" style={{padding:'20px 20px 10px'}}>
                            <Form layout="horizontal" labelCol="25%" wrapperCol="60%"
                                  Submit={(values)=>this.Submit(values)}
                                  ref="editPwForm" form="editPwForm"
                                  fields={[{
                                      name:"oldPassword",
                                      label:"当前密码",
                                      type:'password',
                                      required:true,
                                      validate:pwValid,
                                      onChange:(e)=>this.onChangeOldPassword(e)
                                  },{
                                      name:"password",
                                      label:"新密码",
                                      type:'password',
                                      required:true,
                                      validate:pwValid
                                  },{
                                      name:"passwordSecond",
                                      label:"确认密码",
                                      type:'password',
                                      required:true,
                                      validate:pwValid,
                                      onChange:(e)=>this.onChangePassword(e)
                                  }
                                  ]}></Form>

                        </div>
                        {this.state.errMsg?<div className="errMsg">{this.state.errMsg}</div>:null}
                        {this.state.errMsg1?<div className="errMsg1">{this.state.errMsg1}</div>:null}
                        <div className="modalFooter">
                            <Button className={classes.modalCancel} style={{marginRight:'20px'}} onClick={()=>this.onModalClose()}>取消</Button>
                            <Button className={classes.primary} onClick={()=>this.refs.editPwForm.submit()}>保存</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        systemList: state.systemList,
        editPwForm:state.form.editPwForm
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        loginAction:bindActionCreators(loginAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
