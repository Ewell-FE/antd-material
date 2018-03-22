import React, {Component} from 'react'
import 'formbase/dist/formbase.min.css'
import 'react-select/dist/react-select.css'
import "../view/style.less"
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Modal from 'material-ui/Modal'

import Button from 'material-ui/Button';
import TabContainer from './TabContainer'
import classzz from '@/classes'
import {Form} from '@/components'
import Spin from '@/components/spin'
const styles = theme => ({
    tabs:{
        background:'#FFF',
    },
    buttonSave: classzz.Button.primary,
    buttonCancel: classzz.Button.modalCancel,
});
function getLength(str) {
    var realLength = 0, len = str.length, charCode = -1;
    for ( var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128)
            realLength += 1;
        else
            realLength += 2;
    }
    return realLength;
}
let scrollbar = function () {
    $(".treebox").mCustomScrollbar({
        scrollInertia: 250,
        theme: 'minimal-dark'
    });
}
const roleLength=value => (getLength(value)<3 ? '角色名过短' : getLength(value)>30?'用色名过长':undefined);
const remarkLength=value => (getLength(value)>250 ? '内容过长':undefined);
@withStyles(styles)
class AddRole extends Component {
    constructor(props) {
        super(props)
        this.state={
            value: 0,
            tree:[],
        }
        this.Submit=this.Submit.bind(this);
    }

    Submit(values) {
        this.setState({tree:this.filterCheckNodes()})
        let formP={...values, "enable": 1}
        let trees=[...this.filterCheckNodes()];
        trees.push([this.props.trees.rootNode]);
        this.props.action({form:formP,trees:trees},
            ()=>{this.props.handleClose();this.setState({ value:0 });},
            (message)=>{this.props.message(message);});
    }
    filterCheckNodes=()=>{
        const id='Role'+this.state.value;
        const inx=this.state.value;
        const tree=this.props.trees.tree;
        var treeObj = $.fn.zTree.getZTreeObj(id);
        var nodes = treeObj.getCheckedNodes(true);
        if(tree){
            var arr=[...tree]
            var select=[];
            nodes.forEach((item)=>{
                select.push(item.id)
            })
            arr[inx].forEach((item,index)=>{
                if(select.indexOf(item['id'])!==-1) {
                    arr[inx][index]['checked'] = true
                }else{
                    arr[inx][index]['checked'] = false
                }
            })
            return arr;
        }else{
            return [];
        }
    }
    handleChange = (event, value) => {
        this.setState({tree:this.filterCheckNodes()})
        this.setState({ value },scrollbar);
    };
    render(){
        const {classes,handleClose,trees,fetching } = this.props
        const {value}=this.state
        const initialValues={roleName:'',remark:''}
        return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.open}
            onClose={this.handleClose}
        >
            <div id="AddRole">
                <Spin loading={fetching} wrapperStyle={true}>
                    <div className="modalHeader">角色/权限
                        <i className="close fa fa-close" onClick={()=>{handleClose();this.setState({ value:0 });}}></i>
                    </div>
                    <div className="modalBody" style={{paddingTop:'10px'}}>
                        <div className="left">
                            <div className="title">角色信息</div>
                            <div className="detail">
                                <Form form='roleForm' initialValues={initialValues}
                                      Submit={(values)=>this.Submit(values)} ref="roleForm"
                                      fields={[{
                                          name:"roleName",
                                          label:"角色名",
                                          required:true,
                                          validate:roleLength
                                      },{
                                          name:"remark",
                                          label:"角色描述",
                                          type:'textarea',
                                          rows:'5',
                                          validate:remarkLength
                                      }]}>
                                </Form>
                            </div>
                        </div>
                        <div className="content">
                            <div className="title">权限</div>
                            <div className="detail">
                                <Tabs
                                    value={value}
                                    onChange={this.handleChange}
                                    indicatorColor="#319FCE"
                                    textColor="primary"
                                    scrollable={true}
                                    className={classes.tabs}
                                >
                                    {
                                        trees.tree?
                                            trees.tree.map((item,i)=>{
                                                return(
                                                    <Tab key={i} label={item[0].name} />
                                                )
                                            })
                                            :''
                                    }
                                </Tabs>
                                {
                                    trees.tree?
                                        trees.tree.map((item,i)=>{
                                            return (
                                                <div key={i}>
                                                    {(value===i) && <div className="treebox"  style={{height:'420px',overflow:'auto'}}>
                                                        <TabContainer id={'Role'+i} zNodes={item}></TabContainer>
                                                        </div>}
                                                </div>
                                            )

                                        })
                                        :''
                                }
                            </div>
                        </div>
                        <div className="footer">
                            <Button style={{marginRight:'20px'}}
                                className={classes.buttonCancel}
                                onClick={()=>{handleClose();this.setState({ value:0 });}}
                            >
                                取消
                            </Button>
                            <Button
                                className={classes.buttonSave}
                                onClick={
                                    () => this.refs.roleForm.submit()
                                }
                            >
                                确定
                            </Button>
                        </div>
                    </div>
                </Spin>
            </div>
        </Modal>
        )
    }
}
export default AddRole

