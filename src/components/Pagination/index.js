import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import LocaleReceiver from '../LocaleProvider/LocaleReceiver'

let styles = (theme) => {
    let activeColor = theme.colors.primary,
        disabledColor = theme.palette.grey[200],
        fontColor = theme.palette.text.primary;
    return {
        pageBox: {
            padding: 0
        },
        pageItem: {
            display: 'inline-block',
            minWidth: '32px',
            height: '32px',
            lineHeight: '32px',
            borderRadius: '4px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#d9d9d9',
            textAlign: 'center',
            cursor: 'pointer',
            margin: '0 4px',
            transition: 'all .1s linear',
            fontFamily: 'Arial',
            fontSize: '14px',
            background: '#fff',
            '&:hover': {
                borderColor: activeColor
            },
            '&:focus': {
                borderColor: activeColor
            }
        },
        simpleItem: {
            borderWidth: '0',
            background: 'transparent',
        },
        simpleCur: {
            background: 'transparent',
            color: activeColor
        },
        pageLink: {
            color: fontColor,
            textDecoration: 'none',
            display: 'block',
            padding: '0 3px',
            '&:hover': {
                color: activeColor
            }
        },
        curItem: {
            borderColor: activeColor
        },
        curLink: {
            color: activeColor
        },
        angleSize: {
            fontSize: '16px'
        },
        moreItem: {
            display: 'inline-block',
            minWidth: '32px',
            height: '32px',
            lineHeight: '32px',
            textAlign: 'center',
            cursor: 'pointer'
        },
        moreLink: {
            color: theme.palette.grey[600],
            textDecoration: 'none',
            display: 'block',
            fontSize: '10px',
            transition: 'all .1s linear',
            '&:hover': {
                color: fontColor
            }
        },
        disabledBtn: {
            cursor: 'not-allowed',
            borderColor: disabledColor,
            '&:hover': {
                borderColor: disabledColor
            }
        },
        disabledLink: {
            color: disabledColor,
            '&:hover': {
                color: disabledColor
            }
        },
        quickJumper: {
            display: 'inline-block',
            color: '#333',
            marginLeft: '20px',
            fontSize: '14px'
        },
        quickInput: {
            borderRadius: '4px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#d9d9d9',
            textAlign: 'center',
            height: '30px',
            lineHeight: '30px',
            width: '50px',
            padding: '0 5px',
            margin: '0 10px',
            background: '#fff',
            '&:focus': {
                borderColor: activeColor
            }
        },
        totalShow: {
            display: 'inline-block',
            marginRight: '10px',
            fontSize: '14px'
        },
        selectOption: {
            display: 'inline-block',
            fontSize: '14px',
            marginLeft: '10px',
            cursor: 'default'
        },
        selectBox: {
            position: 'relative'
        },
        selectTextBox: {
            position: 'relative',
            padding: '0 11px',
            zIndex: 10
        },
        selectOptions: {
            position: 'absolute',
            top: '33px',
            left: 0,
            width: '100%',
            padding: 0,
            background: '#fff',
            textAlign: 'left',
            boxShadow: theme.shadows[3],
            zIndex: 11
        },
        selectIcon: {
            marginLeft: '10px'
        },
        ul: {
            padding: 0
        },
        divMask: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            background: 'rgba(0,0,0,0)',
            zIndex: 8
        },
        optionLi: {
            paddingLeft: '11px',
            '&:hover': {
                background: theme.colors.light
            }
        },
        curOption: {
            color: theme.colors.primary,
            background: theme.colors.light
        }
    }
};

class Select extends Component {
    constructor(props) {
        super(props);
        this.toggleShow = this.toggleShow.bind(this);
        this.selectSure = this.selectSure.bind(this);
        this.state = {
            isShow: false,
            curPage: 10
        }
    }

    toggleShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    selectSure(page) {
        this.props.pageChange(page);
        this.setState({
            curPage: page,
            isShow: !this.state.isShow
        })
    }

    render() {
        const { classes, contextLocale } = this.props,
            selectBox = classes.selectBox,
            selectOptions = classes.selectOptions,
            selectTextBox = classes.selectTextBox,
            selectIcon = classes.selectIcon,
            optionLi = classes.optionLi,
            curOption = classes.curOption;
        const { pageUnit } = contextLocale
        return (
            <div>
                {this.state.isShow && <div className={classes.divMask} onClick={this.toggleShow}></div>}
                <div className={selectBox}>
                    <div className={selectTextBox} onClick={this.toggleShow}>
                        <span>{this.state.curPage} / {pageUnit}</span>
                        <i className={classNames("fa", "fa-angle-down", selectIcon)} aria-hidden="true"></i>
                    </div>
                    <Fade in={this.state.isShow} className={selectOptions}>
                        <ul className={classes.ul}>
                            <li onClick={this.selectSure.bind(this, 10)} className={this.state.curPage === 10 ? classNames(optionLi, curOption) : optionLi}>10 / {pageUnit}</li>
                            <li onClick={this.selectSure.bind(this, 20)} className={this.state.curPage === 20 ? classNames(optionLi, curOption) : optionLi}>20 / {pageUnit}</li>
                            <li onClick={this.selectSure.bind(this, 30)} className={this.state.curPage === 30 ? classNames(optionLi, curOption) : optionLi}>30 / {pageUnit}</li>
                            <li onClick={this.selectSure.bind(this, 40)} className={this.state.curPage === 40 ? classNames(optionLi, curOption) : optionLi}>40 / {pageUnit}</li>
                        </ul>
                    </Fade>
                </div>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.changeCurrent = this.changeCurrent.bind(this);
        this.quickJumperFun = this.quickJumperFun.bind(this);
        this.pageChangeFun = this.pageChangeFun.bind(this);
        this.state = {
            current: this.props.defaultCurrent,
            pageSize: this.props.pageSize || this.props.defaultPageSize
        }
    }

    static defaultProps = {
        defaultCurrent: 1,//首次当前页
        simple: false, //简单分页
        defaultPageSize: 10,//每页显示条数
        hideOnSinglePage: false,//只有一页时分页是否隐藏
        showQuickJumper: false,//是否显示快速跳转文本框
        showLastAndFirstJumper: true,//默认显示第一页和最后一页的跳转
        showSizeChanger: false//是否显示改变每页展示数量的下拉框
    }

    changeCurrent(current) {
        this.setState({
            current: current
        })
        this.props.onChange && this.props.onChange(current, this.state.pageCount);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.current !== this.props.current) {
            this.setState({
                current: nextProps.current
            })
        }
    }

    quickJumperFun(e) {
        let inputVal = e.target.value;
        if (e.keyCode === 13) {
            if (inputVal.length === 0 || !/\d+/.test(inputVal) || +inputVal < 1) {
                e.target.value = '';
                return false;
            }
            this.changeCurrent(+inputVal);
            e.target.value = '';
        }
    }

    pageChangeFun(pageSize) {
        this.setState({
            pageSize: pageSize
        })
        let pageCount = Math.ceil(this.props.total / pageSize),
            current = this.state.current > pageCount ? pageCount : this.state.current;
        this.props.onShowSizeChange && this.props.onShowSizeChange(current, pageSize);
    }

    renderPagination = (contextLocale) => {
        const { total, classes, showQuickJumper, showTotal, showSizeChanger, hideOnSinglePage, showLastAndFirstJumper, simple } = this.props;
        const { pageUnit, jumpText } = contextLocale
        let pageSize = this.state.pageSize,
            pageCount = Math.ceil(total / pageSize),
            pageArr = [],
            current = this.state.current,
            pageItem = classes.pageItem,
            pageLink = classes.pageLink,
            angleSize = classes.angleSize,
            moreItem = classes.moreItem,
            moreLink = classes.moreLink,
            curItem = classes.curItem,
            curLink = classes.curLink,
            disabledBtn = classes.disabledBtn,
            disabledLink = classes.disabledLink,
            quickJumper = classes.quickJumper,
            quickInput = classes.quickInput,
            totalShow = classes.totalShow,
            selectOption = classes.selectOption;
        const setPageArr = (start, end) => {
            for (let i = start; i <= end; i++) {
                pageArr.push(i);
            }
        }
        if (pageCount <= 9) {
            setPageArr(1, pageCount);
        } else {
            if (current <= 3) {
                setPageArr(1, 5);
            } else if (current === 4) {
                setPageArr(1, 6);
            } else if (current > 4 && current >= (pageCount - 3)) {
                setPageArr((pageCount - 4), pageCount);
            } else if (current > 4 || current < (pageCount - 3)) {
                setPageArr((current - 2), (current + 2));
            }
        }
        current = current > pageCount ? pageCount : current;
        return (
            <div>
                {!hideOnSinglePage &&
                    <ul className={classes.pageBox}>
                        {showTotal &&
                            <li className={totalShow}>
                                {showTotal(total, [(current - 1) * pageSize + 1, current * pageSize > total ? total : current * pageSize])}
                            </li>
                        }
                        {!simple && showLastAndFirstJumper && <li className={current === 1 ? classNames(pageItem, disabledBtn) : pageItem} onClick={current !== 1 ? this.changeCurrent.bind(this, 1) : () => (false)}>
                            <a className={current === 1 ? classNames(pageLink, disabledLink) : pageLink}>
                                <i className={classNames('fa', 'fa-angle-double-left', angleSize)} aria-hidden="true"></i>
                            </a>
                        </li>}
                        <li className={classNames(current === 1 ? classNames(pageItem, disabledBtn) : pageItem, simple && classes.simpleItem)} onClick={current !== 1 ? this.changeCurrent.bind(this, current - 1) : () => (false)}>
                            <a className={current === 1 ? classNames(pageLink, disabledLink) : pageLink}>
                                <i className={classNames('fa', 'fa-angle-left', angleSize)} aria-hidden="true"></i>
                            </a>
                        </li>
                        {pageArr[0] !== 1 &&
                            <li className={classNames(pageItem, simple && classes.simpleItem)} onClick={this.changeCurrent.bind(this, 1)}>
                                <a className={pageLink}>1</a>
                            </li>
                        }
                        {pageArr[0] !== 1 &&
                            <li className={classNames(moreItem, simple && classes.simpleItem)} onClick={this.changeCurrent.bind(this, current - 5)}>
                                <a className={moreLink}>
                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </a>
                            </li>
                        }
                        {
                            pageArr.map((item, index) => {
                                return <li key={"page" + item}
                                    className={classNames(item === current ? classNames(pageItem, curItem) : pageItem, simple && classes.simpleItem)}
                                    onClick={this.changeCurrent.bind(this, item)}>
                                    <a className={classNames(item === current ? classNames(pageLink, curLink, simple && classes.simpleCur) : pageLink)}>{item}</a>
                                </li>
                            })
                        }
                        {pageArr[pageArr.length - 1] !== pageCount &&
                            <li className={classNames(moreItem, simple && classes.simpleItem)} onClick={this.changeCurrent.bind(this, current + 5)}>
                                <a className={moreLink}>
                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </a>
                            </li>
                        }
                        {pageArr[pageArr.length - 1] !== pageCount &&
                            <li className={classNames(pageItem, simple && classes.simpleItem)} onClick={this.changeCurrent.bind(this, pageCount)}>
                                <a className={pageLink}>{pageCount}</a>
                            </li>
                        }
                        <li className={classNames(current === pageCount ? classNames(pageItem, disabledBtn) : pageItem, simple && classes.simpleItem)} onClick={current !== pageCount ? this.changeCurrent.bind(this, current + 1) : () => (false)}>
                            <a className={current === pageCount ? classNames(pageLink, disabledLink) : pageLink}>
                                <i className={classNames('fa', 'fa-angle-right', angleSize)} aria-hidden="true"></i>
                            </a>
                        </li>
                        {!simple && showLastAndFirstJumper && <li className={current === pageCount ? classNames(pageItem, disabledBtn) : pageItem} onClick={current !== pageCount ? this.changeCurrent.bind(this, pageCount) : () => (false)}>
                            <a className={current === pageCount ? classNames(pageLink, disabledLink) : pageLink}>
                                <i className={classNames('fa', 'fa-angle-double-right', angleSize)} aria-hidden="true"></i>
                            </a>
                        </li>}
                        {/*pageSize下拉框*/}
                        {showSizeChanger &&
                            <li className={classNames(pageItem, selectOption)}>
                                <Select {...this.props} contextLocale={contextLocale} pageChange={this.pageChangeFun} />
                            </li>
                        }
                        {/*快速跳转*/}
                        {showQuickJumper &&
                            <li className={quickJumper}>
                                <span>{jumpText}</span><input className={quickInput} type="text" onKeyUp={this.quickJumperFun} /><span>{pageUnit}</span>
                            </li>
                        }
                    </ul>
                }
            </div>
        )
    }

    render() {
        return (
            <LocaleReceiver
                componentName="Pagination">
                {this.renderPagination}
            </LocaleReceiver>
        )
    }
}

App.propTypes = {
    current: PropTypes.number,//当前页
    simple: PropTypes.bool,//简单分页
    defaultCurrent: PropTypes.number,//默认当前页
    defaultPageSize: PropTypes.number,//默认每页显示数量
    pageSize: PropTypes.number,//每页显示数量
    showQuickJumper: PropTypes.bool,//是否显示快速跳转
    showTotal: PropTypes.func,//显示总数
    total: PropTypes.number,//数据总数
    showLastAndFirstJumper: PropTypes.bool, //是否显示第一页和最后一页的跳转
    onChange: PropTypes.func,//页码改变时的回调，参数是改变后的页码以及每页条数
    showSizeChanger: PropTypes.bool,//是否可以改变每页条数
    onShowSizeChange: PropTypes.func,//每页条数改变的回调，参数是当前页以及每页条数
    hideOnSinglePage: PropTypes.bool//只有一页时是否隐藏分页
}

export default withStyles(styles, { name: 'MuiPaginationAnt' })(App);


