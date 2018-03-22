/**
 * Created by sasha on 2018/1/29.
 */
import React, {Component} from 'react'
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal'
import Spin from '@/components/spin'
export default class RoleModal extends Component {
    render() {
        const { handleClose,roles,fetching } = this.props
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open}
                onClose={this.handleClose}>

                <div id="roleMoadl" style={{width:"800px"}}>
                    <Spin loading={fetching}>
                        <div className="modalHeader">角色/权限
                            <i className="close fa fa-close" onClick={()=>handleClose()}></i>
                        </div>
                        <div className="modalBody" style={{paddingTop:'10px'}}>
                            <div className="left">
                                <div className="title">角色（{roles.data?roles.data.length:0}个）</div>
                                <div className="detail">
                                    {
                                        roles.data?roles.data.map((item,i)=>{
                                            return(
                                                <div key={i} className="item">{item.roleName}</div>
                                            )
                                        }):
                                            <p className='no-data'>暂无角色!</p>
                                    }
                                </div>
                            </div>
                            <div className="content">
                                <div className="title">权限</div>
                                <div className="detail" style={{overflow:'auto'}}>
                                    <Typography className="roletree" component="div" style={{ paddingTop:'15px' }}>
                                        <ul className="ztree" ref="ztree">
                                            {
                                                !this.props.data.length ?
                                                    <p className='no-data'>暂无权限!</p>
                                                    : null

                                            }
                                        </ul>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Spin>
                </div>

            </Modal>

        );
    }
}
