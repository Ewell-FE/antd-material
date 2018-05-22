import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames'
import Checkbox from '../Checkbox'
import Input from '../Input'
var _reactLazyLoad = require('react-lazy-load');



const styles = theme => {
    return {
        root: {
            border: '1px solid #d9d9d9',
            display: 'inline-block',
            borderRadius: '4px',
            verticalAlign: 'middle',
            position: 'relative',
            width: '180px',
            height: '200px',
            paddingTop: '34px',
            '&.material-transfer-list-with-footer': {
                paddingBottom: '34px',
            },
            '& .material-transfer-list-header': {
                padding: '6px 12px',
                zIndex:1,
                borderRadius: '4px 4px 0 0',
                background: '#fff',
                color: 'rgba(0,0,0,.65)',
                borderBottom: '1px solid #e8e8e8',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                '& .material-transfer-list-header-title':{
                    position:'absolute',
                    top:6,
                    right:12,
                }
            },
            '& .material-transfer-list-body':{
                fontSize: '14px',
                position: 'relative',
                height: '100%',
                //有搜索框时的样式
                '&.material-transfer-list-body-with-search':{
                    paddingTop:'40px',
                    //搜索框样式
                    '& .material-transfer-list-body-search-wrapper':{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        padding: '4px',
                        width: '100%',
                    }
                },
                //没有数据时  '无数据'   的样式
                '&.material-transfer-list-body-no-data .material-transfer-list-body-not-found':{
                     display:'block'
                },
                // 有数据时, '无数据' 的样式
                '& .material-transfer-list-body-not-found':{
                    paddingTop: 0,
                    color: 'rgba(0,0,0,.25)',
                    textAlign: 'center',
                    display: 'none',
                    position: 'absolute',
                    top: '50%',
                    width: '100%',
                    marginTop: '-10px',
                },


                '& .material-transfer-list-body-content':{
                    height: '100%',
                    overflow: 'auto',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    '& .material-transfer-list-body-content-item':{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        padding: '6px 12px',
                        minHeight: '32px',
                        '-webkit-transition': 'all .3s',
                        transition: 'all .3s',
                        '&:hover':{
                            cursor: 'pointer',
                            backgroundColor: '#e6f7ff',

                        }
                    },
                    '& > .LazyLoad':{
                        // height:35,
                    '-webkit-animation': 'transferHighlightIn 1s',
                    animation: 'transferHighlightIn 1s',
                    },
                }
            },
            '& .material-transfer-list-footer': {
                borderTop: '1px solid #e8e8e8',
                borderRadius: '0 0 4px 4px',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
            },



        },
        '@keyframes transferHighlightIn': {
            '0%': {
                background: '#bae7ff',
            },
            '100%': {
                background: 'transparent'
            },
        },





    }
};

@withStyles(styles, {name: 'MuiTransferListAnt'})
export default class app extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue:''
        }
    }


    componentDidMount() {


    }

    changeSearch = (e)=>{
        this.setState({searchValue:e.target.value},()=>{
            this.props.onSearchChange && this.props.onSearchChange(this.props.type === 1 ? 'left' : 'right',e)
        })
    }

    scroll = (type,e)=>{
        this.props.onScroll && this.props.onScroll(type === 1 ? 'left' : 'right',e)
    }

    //render函数处理,   render函数,可能返回普通字符串,也可能返回规定类型的对象,因此需要提前处理
    transferRender = (item)=>{
        var render  = this.props.render
        function isRenderResultPlainObject(result) {
            return result && !React.isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
        }
        var renderResult = render(item),
            checkResult = isRenderResultPlainObject(renderResult)
        return {
            renderLabel:checkResult ? renderResult.label : renderResult,
            renderFilter:checkResult ? renderResult.value : renderResult
        }

    }    

    

    render() {
        const props = this.props
        const {classes} = this.props
        var prefixCls = 'material-transfer-list',
            data = props.data,
            title = props.title,
            listStyle = props.listStyle,
            filterOption = props.filterOption,
            footer = props.footer,
            lazy = props.lazy,
            notFoundContent = props.notFoundContent,
            searchPlaceholder = props.searchPlaceholder,
            type = props.type,
            showSearch = props.showSearch,
            changeSelect =props.changeSelect,
            keys = props.keys,
            selectedKeys = props.selectedKeys
        

        //因为组件可以搜索,所以先对数据进行过滤,过滤的时候,根据用户写的  filterOption  函数来判断,如果没有写,则根据 render函数来判断
        //在全选/全不选的时候
        var reg = /^\s+$/
        var searchValue = this.state.searchValue
        if( searchValue && !reg.test(searchValue)){
            if(filterOption){
                data = data.filter((option)=>filterOption(searchValue,option))
            }else{
                data = data.filter((option)=>{
                    var renderFilter = this.transferRender(option).renderFilter
                    return renderFilter.indexOf(searchValue) > -1})
            }
        }

        //数据中可能存在禁用,因此要先获得非禁用的数据,然后判断非禁用的数据是否全选/全不选,
        //因为 即使有禁用的被选中(一开始默认被选中),如果可选的都没有选中,那么头部的全选也是空的

        //获得非禁用的数据
        var selectableData = data.filter((item,i)=> item.disabled !== true  )
        //获得非禁用的数据的key的数组集
        var selectableKeys = []
        selectableData.forEach((item,i)=>{
            selectableKeys.push(keys(item))
        })
        //判断可选的是否已全部选中,要判断是否可选的key是否全在已选的key里面,不能单纯只比两个数组的长度
        //判断是否有选中项
        var allSelected = 0       //大于0说明不是全选
        var hasSelectedKeys = 0   //大于0说明有选择项
        selectableKeys.forEach((item,i)=>{
            if(selectedKeys.indexOf(item) === -1){
                allSelected +=1
            }else{
                hasSelectedKeys +=1
            }
        })



        return React.createElement(
            'div',
            {
                className: classnames(classes.root, prefixCls, footer ? prefixCls + '-with-footer' : '',type === 1 ? prefixCls + '-left' : prefixCls + '-right'),
                style: listStyle
            },
            <div className={classnames(prefixCls + '-header')}>
                <div className={classnames(prefixCls + '-header-count')}>
                    <Checkbox checked={selectableData.length > 0 && allSelected === 0} indeterminate={hasSelectedKeys > 0 && allSelected > 0} onChange={(e)=>changeSelect(type,1,e,data)} >
                        {selectedKeys.length + '/' + data.length}
                        </Checkbox>
                </div>
                {
                    title ? <div className={classnames(prefixCls + '-header-title')}>{title}</div> : null
                }
            </div>,
            <div className={classnames(prefixCls + '-body',showSearch ? prefixCls + '-body-with-search' : '',data.length && data.length > 0 ? '' : prefixCls+ '-body-no-data')}>
                {
                    showSearch?
                        <div className={classnames(prefixCls+'-body-search-wrapper')}>
                            <Input placeholder={searchPlaceholder} onChange={(e)=>this.changeSearch(e)}/>
                        </div>:null
                }
                <ul className={prefixCls+'-body-content'} onScroll={(e)=>this.scroll(type,e)}>
                    {
                        data.map((item,i)=>{
                            var renderLabel = this.transferRender(item).renderLabel
                            var renderFilter = this.transferRender(item).renderFilter
                            var children = null
                            var listItem =  (
                                <li className={prefixCls+'-body-content-item'} key={keys(item)}>
                                    <Checkbox disabled={item.disabled}
                                              title={renderFilter}
                                              checked={selectedKeys.indexOf(keys(item)) > -1}
                                              onChange={(e)=>changeSelect(type,2,e,item)}>
                                        {renderLabel}
                                        </Checkbox>
                                </li>
                            )
                            if(lazy){
                                children = React.createElement(
                                    _reactLazyLoad['default'],
                                    {key:keys(item),...lazy},
                                    listItem
                                )
                            }else{
                                children = listItem
                            }
                            return children
                        })
                    }
                </ul>
                <div className={classnames(prefixCls + '-body-not-found',)}>
                    {notFoundContent}
                </div>

            </div>,
            footer ? <div className={classnames(prefixCls + '-footer')}>{footer}</div> : null,
        )
    }
}


    app.propTypes = {};
