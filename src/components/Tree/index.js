/**
 * Created by sasha on 2018/1/30.
 */
import React, {Component} from 'react'
import 'ztree/css/zTreeStyle/zTreeStyle.css'
import './style.less'
import 'ztree/js/jquery.ztree.core'
import 'ztree/js/jquery.ztree.excheck'
//树节点的字体颜色
function getFont(treeId, node) {
    return node.font ? node.font : {};
}

let setting = {
    check: {
        enable: true,
        chkDisabledInherit: true
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    view: {
        showIcon: false,
        showTitle:false,
        fontCss: getFont,
    }
};
export default class TabContainer extends Component {
    componentDidMount() {
        var config = Object.assign({}, setting, this.props.setting || {})
        $.fn.zTree.init($("#" + this.props.id), config, this.props.zNodes);
    }

    componentWillReceiveProps(nextProps) {
        var config = Object.assign({}, setting, nextProps.setting || {})
        $.fn.zTree.init($("#" + this.props.id), config, nextProps.zNodes);
    }

    render() {
        return (
            <div className="tree">
                <ul className="ztree" id={this.props.id}></ul>
            </div>
        )
    }

}