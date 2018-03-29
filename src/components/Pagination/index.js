import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';

let styles=(theme)=>{
    console.log(theme);
    let activeColor=theme.palette.primary.main,
        disabledColor=theme.palette.grey[200],
        fontColor=theme.palette.text.primary;
    return {
        pageBox:{
            padding:0
        },
        pageItem:{
            display:'inline-block',
            minWidth:'32px',
            height:'32px',
            lineHeight:'32px',
            borderRadius:'4px',
            borderWidth:'1px',
            borderStyle:'solid',
            borderColor:'#d9d9d9',
            textAlign:'center',
            cursor:'pointer',
            margin:'0 4px',
            transition:'all .1s linear',
            fontFamily:'Arial',
            fontSize:'14px',
            background:'#fff',
            '&:hover':{
                borderColor:activeColor
            }
        },
        pageLink:{
            color:fontColor,
            textDecoration:'none',
            display:'block',
            padding:'0 3px',
            '&:hover':{
                color:activeColor
            }
        },
        curItem:{
            borderColor:activeColor
        },
        curLink:{
            color:activeColor
        },
        angleSize:{
            fontSize:'16px'
        },
        moreItem:{
            display:'inline-block',
            minWidth:'32px',
            height:'32px',
            lineHeight:'32px',
            textAlign:'center',
            cursor:'pointer'
        },
        moreLink:{
            color:theme.palette.grey[600],
            textDecoration:'none',
            display:'block',
            fontSize:'10px',
            transition:'all .1s linear',
            '&:hover':{
                color:fontColor
            }
        },
        disabledBtn:{
            cursor:'not-allowed',
            borderColor:disabledColor,
            '&:hover':{
                borderColor:disabledColor
            }
        },
        disabledLink:{
            color:disabledColor,
            '&:hover':{
                color:disabledColor
            }
        },
        quickJumper:{
            display:'inline-block',
            color:'#333',
            marginLeft:'20px',
            fontSize:'14px'
        },
        quickInput:{
            borderRadius:'4px',
            borderWidth:'1px',
            borderStyle:'solid',
            borderColor:'#d9d9d9',
            textAlign:'center',
            height:'30px',
            lineHeight:'30px',
            width:'50px',
            padding:'0 5px',
            margin:'0 10px',
            background:'#fff',
            '&:focus':{
                borderColor:activeColor
            }
        },
        totalShow:{
            display:'inline-block',
            marginRight:'10px',
            fontSize:'14px'
        }
    }
};

class App extends Component{
    constructor(props){
        super(props);
        this.changeCurrent=this.changeCurrent.bind(this);
        this.quickJumperFun=this.quickJumperFun.bind(this);
        this.state={
            current:this.props.defaultCurrent,
            pageSize:this.props.pageSize || this.props.defaultPageSize
        }
    }

    static defaultProps={
        defaultCurrent:1,//首次当前页
        defaultPageSize:10,//每页显示条数
        hideOnSinglePage:false,//只有一页时分页是否隐藏
        showQuickJumper:false,//是否显示快速跳转文本框
        showSizeChanger:false//是否显示改变每页展示数量的下拉框
    }

    changeCurrent(current){
        this.setState({
            current:current
        })
        this.props.onChange && this.props.onChange(current,this.state.pageCount);
    }

    quickJumperFun(e){
        let inputVal=e.target.value;
        if(e.keyCode==13){
            if(inputVal.length===0 || !/\d+/.test(inputVal) || +inputVal>this.state.current*this.state.pageSize){
                e.target.value='';
                return false;
            }
            this.setState({
                current:+inputVal
            })
            e.target.value='';
        }
    }

    render(){
        const {total,classes,showQuickJumper,showTotal}=this.props;
        let pageSize=this.state.pageSize,
            pageCount=Math.ceil(total/pageSize),
            pageArr=[],
            current=this.state.current,
            pageItem=classes.pageItem,
            pageLink=classes.pageLink,
            angleSize=classes.angleSize,
            moreItem=classes.moreItem,
            moreLink=classes.moreLink,
            curItem=classes.curItem,
            curLink=classes.curLink,
            disabledBtn=classes.disabledBtn,
            disabledLink=classes.disabledLink,
            quickJumper=classes.quickJumper,
            quickInput=classes.quickInput,
            totalShow=classes.totalShow;
        const setPageArr=(start,end)=>{
            for(let i=start;i<=end;i++){
                pageArr.push(i);
            }
        }
        if(pageCount<=9){
            setPageArr(1,pageCount);
        }else{
            if(current<=3){
                setPageArr(1,5);
            }else if(current===4){
                setPageArr(1,6);
            }else if(current>4 && current>=(pageCount-3)){
                setPageArr((pageCount-4),pageCount);
            }else if(current>4 || current<(pageCount-3)){
                setPageArr((current-2),(current+2));
            }
        }
        return (
            <ul className={classes.pageBox}>
                {   showTotal &&
                    <li className={totalShow}>
                        {showTotal(total,[(current-1)*pageSize+1,current*pageSize])}
                    </li>
                }
                <li className={current===1?classNames(pageItem,disabledBtn):pageItem} onClick={current!==1?this.changeCurrent.bind(this,current-1):()=>(false)}>
                    <a className={current===1?classNames(pageLink,disabledLink):pageLink}>
                        <i className={classNames('fa','fa-angle-left',angleSize)} aria-hidden="true"></i>
                    </a>
                </li>
                {   pageArr[0]!==1 &&
                    <li className={pageItem} onClick={this.changeCurrent.bind(this,1)}>
                        <a className={pageLink}>1</a>
                    </li>
                }
                {   pageArr[0]!==1 &&
                    <li className={moreItem} onClick={this.changeCurrent.bind(this,current-5)}>
                        <a className={moreLink}>
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </a>
                    </li>
                }
                {
                    pageArr.map((item,index)=>{
                        return <li key={"page"+item}
                                   className={item===current?classNames(pageItem,curItem):pageItem}
                                   onClick={this.changeCurrent.bind(this,item)}>
                                    <a className={item===current?classNames(pageLink,curLink):pageLink}>{item}</a>
                                </li>
                    })
                }
                {   pageArr[pageArr.length-1]!==pageCount &&
                    <li className={moreItem}  onClick={this.changeCurrent.bind(this,current+5)}>
                        <a className={moreLink}>
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </a>
                    </li>
                }
                {   pageArr[pageArr.length-1]!==pageCount &&
                    <li className={pageItem} onClick={this.changeCurrent.bind(this,pageCount)}>
                        <a className={pageLink}>{pageCount}</a>
                    </li>
                }
                <li className={current===pageCount?classNames(pageItem,disabledBtn):pageItem} onClick={current!==pageCount?this.changeCurrent.bind(this,current+1):()=>(false)}>
                    <a className={current===pageCount?classNames(pageLink,disabledLink):pageLink}>
                        <i className={classNames('fa','fa-angle-right',angleSize)} aria-hidden="true"></i>
                    </a>
                </li>
                {/*快速跳转*/}
                {   showQuickJumper &&
                    <li className={quickJumper}>
                        <span>跳至</span><input className={quickInput} type="text" onKeyUp={this.quickJumperFun}/><span>页</span>
                    </li>
                }
            </ul>
        )
    }
}

App.propTypes={
    current:PropTypes.number,//当前页
    defaultCurrent:PropTypes.number,//默认当前页
    defaultPageSize:PropTypes.number,//默认每页显示数量
    pageSize:PropTypes.number,//每页显示数量
    showQuickJumper:PropTypes.bool,//是否显示快速跳转
    showTotal:PropTypes.func,//显示总数
    total:PropTypes.number,//数据总数
    onChange:PropTypes.func//页码改变时的回调，参数是改变后的页码以及每页条数
}

export default withStyles(styles,{name:'MuiPagination-ant'})(App);


