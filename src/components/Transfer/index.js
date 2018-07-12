import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames'
import TransferList from './TransferList'
import Button from '../Button'
import LocaleReceiver from '../LocaleProvider/LocaleReceiver'

const styles = theme => {
    return {
        root: {
            backgroundColor: '#fff',        //将来要删掉
            paddingTop: '10px',
            paddingLeft: 5,
            textAlign: 'left',
            '& .material-transfer-operation': {
                display: 'inline-block',
                overflow: 'hidden',
                margin: '0 8px',
                verticalAlign: 'middle',
                '& > button': {
                    display: 'block',
                    '&:first-child': {
                        marginBottom: '4px'
                    }
                }
            }

        },

    }
};

@withStyles(styles, { name: 'MuiTransferAnt' })
export default class app extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: props.dataSource || [],
            selectedKeys: props.selectedKeys ? Object.assign([], props.selectedKeys) : [],
            targetKeys: props.targetKeys ? Object.assign(props.targetKeys) : [],
            sourceSelectedKeys: [],    //左侧选中项
            targetSelectedKeys: [],    //右侧选中项
        }
    }

    componentDidMount() {

        var props = this.props
        var selectedKeys = props.selectedKeys ? Object.assign([], props.selectedKeys) : [],
            targetKeys = props.targetKeys ? [].concat(props.targetKeys) : [],
            sourceSelectedKeys = [],
            targetSelectedKeys = []

        //根据selectedKeys和targetKeys分出 sourceSelectedKeys 和 targetSelectedKeys
        var result = this.getSelfSelectKeys(selectedKeys, targetKeys)
        sourceSelectedKeys = result.sourceSelectedKeys
        targetSelectedKeys = result.targetSelectedKeys
        this.setState({ sourceSelectedKeys: sourceSelectedKeys, targetSelectedKeys: targetSelectedKeys, })
    }

    componentWillReceiveProps(nextProps) {
        //只有通过外面改变值时,用这种方式
        if (nextProps.targetKeys !== this.props.targetKeys) {
            this.setState({ targetKeys: nextProps.targetKeys ? [].concat(nextProps.targetKeys) : [] })
        }
        if (nextProps.dataSource !== this.props.dataSource) {
            this.setState({ dataSource: nextProps.dataSource })
        }
        //当内部和外部都能控制,并且以外部为准时,用这种方式
        if ('selectedKeys' in nextProps) {
            var selectedKeys = Object.assign([], nextProps.selectedKeys),
                targetKeys = this.state.targetKeys,
                result = this.getSelfSelectKeys(selectedKeys, targetKeys),
                sourceSelectedKeys = result.sourceSelectedKeys,
                targetSelectedKeys = result.targetSelectedKeys
            this.setState({ selectedKeys: selectedKeys, sourceSelectedKeys: sourceSelectedKeys, targetSelectedKeys: targetSelectedKeys })
        }
    }


    //左右移动,type:1-向左 2-向右
    changeOperation = (type) => {
        //给出 targetKey,direction,moveKey
        var selectedKeys = this.state.selectedKeys,
            targetKeys = this.state.targetKeys,
            sourceSelectedKeys = this.state.sourceSelectedKeys,
            targetSelectedKeys = this.state.targetSelectedKeys


        var moveKey = [],
            nextTargetKey = []
        targetKeys.forEach((item) => {
            nextTargetKey.push(item)
        })
        if (type === 1) {
            targetSelectedKeys.forEach((item, i) => {
                //更改selectkey,
                const index = selectedKeys.indexOf(item)
                if (index > -1) { selectedKeys.splice(index, 1) }
                //更改targetkey
                const index2 = nextTargetKey.indexOf(item)
                if (index2 > -1) { nextTargetKey.splice(index2, 1) }
                //移动的key
                moveKey.push(item)
            })
            //置空
            targetSelectedKeys = []
        } else {
            sourceSelectedKeys.forEach((item, i) => {
                //更改selectkey,
                const index = selectedKeys.indexOf(item)
                if (index > -1) { selectedKeys.splice(index, 1) }
                //更改targetkey
                nextTargetKey.push(item)
                //移动的key
                moveKey.push(item)
            })
            sourceSelectedKeys = []
        }


        this.setState({ selectedKeys: selectedKeys, targetSelectedKeys: targetSelectedKeys, sourceSelectedKeys: sourceSelectedKeys }, () => {
            this.props.onChange && this.props.onChange(nextTargetKey, type === 1 ? 'left' : 'right', moveKey)
        })

    }

    //选择 part:1-左侧,2-右侧 type:1-全选,2-普通 e:当前项 ,data:选中项的数据,如果是全选/全不选,则给出全部数据,如果是下面选择项,则给出此项数据
    changeSelect = (part, type, e, data) => {


        var props = this.props,
            keys = props.rowKey ? typeof (props.rowKey) === 'function' ? props.rowKey : (item) => item[props.rowKey] : (item) => item.key



        //更改  selectedKeys  ,sourceSelectedKeys,targetSelectedKeys
        var selectedKeys = this.state.selectedKeys,
            targetKeys = this.state.targetKeys,
            sourceSelectedKeys = [],
            targetSelectedKeys = []
        //全选/全不选
        if (type === 1) {
            //全选或全不选只针对未禁用的数据,因此先将传进来的所有数据过滤一遍
            var selectableData = data.filter((item) => item.disabled !== true)
            //获得操作过后的所有的selectedKeys
            if (e.target.checked) {
                selectableData.forEach((item) => {
                    const index = selectedKeys.indexOf(keys(item))
                    if (index === -1) { selectedKeys.push(keys(item)) }
                })
            } else {
                selectableData.forEach((item) => {
                    const index = selectedKeys.indexOf(keys(item))
                    if (index > -1) { selectedKeys.splice(index, 1) }
                })
            }

        } else {  //单项选择
            if (e.target.checked) {
                selectedKeys.push(keys(data))
            } else {
                const index = selectedKeys.indexOf(keys(data))
                if (index > -1) { selectedKeys.splice(index, 1) }
            }
        }


        //根据selectedKeys和targetKeys分出 sourceSelectedKeys 和 targetSelectedKeys
        var result = this.getSelfSelectKeys(selectedKeys, targetKeys)
        sourceSelectedKeys = result.sourceSelectedKeys
        targetSelectedKeys = result.targetSelectedKeys


        this.setState({ selectedKeys: selectedKeys, sourceSelectedKeys: sourceSelectedKeys, targetSelectedKeys: targetSelectedKeys }, () => {
            this.props.onSelectChange && this.props.onSelectChange(type, part, e, data, sourceSelectedKeys, targetSelectedKeys)
        })

    }
    //  根据selectedKeys和targetKeys分出 sourceSelectedKeys 和 targetSelectedKeys
    //selectedKeys: 所有选中的keys  targetKeys:右侧的keys
    //return targetSelectedKeys:右侧选中的keys  sourceSelectedKeys:左侧选中的keys
    getSelfSelectKeys = (selectedKeys, targetKeys) => {
        var arr1 = [], arr2 = []
        selectedKeys.forEach((item, i) => {
            if (targetKeys.indexOf(item) > -1) {
                arr1.push(item)   //新的targetSelectedKeys
            } else {
                arr2.push(item)  //新的sourceSelectedKeys
            }
        })
        return {
            targetSelectedKeys: arr1,
            sourceSelectedKeys: arr2
        }
    }

    renderTransfer = (locale) => {
        const props = this.props
        const { classes } = this.props
        var prefixCls = 'material-transfer'
        var className = props.className,
            keys = props.rowKey ? typeof (props.rowKey) === 'function' ? props.rowKey : (item) => item[props.rowKey] : (item) => item.key,
            filterOption = props.filterOption,
            footer = props.footer,
            listStyle = props.listStyle,
            notFoundContent = props.notFoundContent || locale.notFoundContent,
            render = props.render,
            operations = props.operations,
            hiddenArrow = props.hiddenArrow,
            lazy = props.lazy,
            searchPlaceholder = props.searchPlaceholder || locale.searchPlaceholder,
            onScroll = props.onScroll,
            onSearchChange = props.onSearchChange,
            onSelectChange = props.onSelectChange,
            showSearch = props.showSearch,
            titles = props.titles,
            dataSource = this.state.dataSource,
            targetKeys = this.state.targetKeys,
            leftFooter = footer ? React.createElement(
                'div',
                { className: classnames(prefixCls + '-footer') },
                footer[0]
            ) : null,
            rightFooter = footer ? React.createElement(
                'div',
                { className: classnames(prefixCls + '-footer') },
                footer.length > 1 ? footer[1] : footer[0]
            ) : null



        var leftData = dataSource.filter((item) => targetKeys.indexOf(keys && keys(item)) === -1),
            rightData = dataSource.filter((item) => targetKeys.indexOf(keys && keys(item)) !== -1),
            leftList = <TransferList data={leftData}
                keys={keys}
                filterOption={filterOption}
                selectedKeys={this.state.sourceSelectedKeys}
                changeSelect={this.changeSelect}
                onSearchChange={onSearchChange}
                onSelectChange={onSelectChange}
                render={render}
                lazy={lazy}
                onScroll={onScroll}
                showSearch={showSearch}
                searchPlaceholder={searchPlaceholder[0]}
                notFoundContent={notFoundContent[0]}
                listStyle={listStyle}
                footer={leftFooter}
                title={titles[0]}
                type={1} />,
            rightList = <TransferList data={rightData}
                keys={keys}
                filterOption={filterOption}
                selectedKeys={this.state.targetSelectedKeys}
                changeSelect={this.changeSelect}
                onSearchChange={onSearchChange}
                onSelectChange={onSelectChange}
                render={render}
                lazy={lazy}
                onScroll={onScroll}
                showSearch={showSearch}
                searchPlaceholder={searchPlaceholder.length && searchPlaceholder.length > 1 ? searchPlaceholder[1] : searchPlaceholder[0]}
                notFoundContent={notFoundContent.length && notFoundContent.length > 1 ? notFoundContent[1] : notFoundContent[0]}
                listStyle={listStyle}
                footer={rightFooter}
                title={titles.length <= 1 ? '' : titles[1]}
                type={2} />,
            transferOption = React.createElement(
                'div',

                { className: classnames(prefixCls + '-operation') },
                <Button disabled={this.state.targetSelectedKeys.length <= 0} className={classnames(prefixCls + '-operation-button')} onClick={() => this.changeOperation(1)}>
                    <i style={{ display: hiddenArrow ? 'none' : '' }} className="fa fa-angle-left" aria-hidden="true" />
                    {operations ? operations[1] : null}
                </Button>,
                <Button disabled={this.state.sourceSelectedKeys.length <= 0} className={classnames(prefixCls + '-operation-button')} onClick={() => this.changeOperation(2)}>
                    {operations ? operations[0] : null}
                    <i style={{ marginLeft: '4px', display: hiddenArrow ? 'none' : '' }} className="fa fa-angle-right"
                        aria-hidden="true" />
                </Button>
            )
        return React.createElement(
            'div',
            { className: classnames(classes.root, className) },
            leftList,
            transferOption,
            rightList,
        )
    }

    render(){
        return (
            <LocaleReceiver componentName="Transfer">
                {this.renderTransfer}
            </LocaleReceiver>
        )
    }
}

app.defaultProps = {
    // notFoundContent: ['列表为空'],
    showSearch: false,
    hiddenArrow: false,
    titles: ['', ''],
    // searchPlaceholder: ['请输入搜索内容'],
    lazy: { height: 35, offset: 35 },
    render: () => void 0
}
app.propTypes = {
    className: PropTypes.string,     //类名
    dataSource: PropTypes.array,     //全部的数据
    filterOption: PropTypes.func,     //根据此函数进行过滤,如果没有此属性,则根据render函数过滤
    footer: PropTypes.arrayOf(PropTypes.node),     //footer,可分别定义,可以是node,string,bool,number,如果数组长度为1,则渲染第一个,不写则认为没有footer
    lazy: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
    ]),                                  //
    listStyle: PropTypes.object,   //ok             需要进行细致修改,可能不是css对象
    notFoundContent: PropTypes.arrayOf(PropTypes.node),        //ok  有改动,可以分别对两个进行分别设置,可以是node,string,bool,number,,如果数组长度为1,则渲染第一个,不写则显示默认
    operations: PropTypes.arrayOf(PropTypes.node),      //ok   填写数组,不写默认只有两个箭头,取index=0,1,
    render: PropTypes.func,     // ok
    searchPlaceholder: PropTypes.arrayOf(PropTypes.string),    //可分别设置,如果数组长度为1,则渲染第一个,不写则显示默认
    selectedKeys: PropTypes.array,    //ok
    showSearch: PropTypes.bool,       //ok
    targetKeys: PropTypes.array,      //ok
    titles: PropTypes.array,          //ok
    onChange: PropTypes.func,
    onScroll: PropTypes.func,            //ok
    onSearchChange: PropTypes.func,   //ok   补充说明,此函数不能阻止默认的筛选(蚂蚁也不行),可以作为监听使用,
    onSelectChange: PropTypes.func,    //ok
    rowKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),                                //选择时,根据数据的此属性进行匹配,如果不选,默认为数据的'key'属性,
    hiddenArrow: PropTypes.bool       //操作按钮默认有 > < 符号,而且无法去掉,如果不需要,则设置此属性为 true


};
