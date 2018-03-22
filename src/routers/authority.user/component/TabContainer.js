/**
 * Created by sasha on 2018/1/30.
 */
import React, {Component} from 'react'
import Typography from 'material-ui/Typography';
export default class TabContainer extends Component{
    componentDidMount() {
        //树节点的字体颜色
        function getFont(treeId, node) {
            return node.font ? node.font : {};
        }
        const setting = {
            check: {
                enable: true,
                chkDisabledInherit: true
            },
            data: {
                simpleData: {
                    enable: true
                }
            },
            view:{
                showTitle:false,
                fontCss: getFont,
            }
        };
        $.fn.zTree.init($("#"+this.props.id), setting, this.props.zNodes);
    }
    render(){

        return(
            <Typography className="tree" component="div" style={{ paddingTop:'20px' }}>
                <ul className="ztree" id={this.props.id}></ul>
            </Typography>
        )
    }

}
