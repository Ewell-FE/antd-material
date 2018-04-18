import React, {Component} from 'react'
import _ from 'lodash'
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import Icon from '../Icon'
import classnames from 'classnames'
let styles = (theme) => {
    let activeColor = theme.rate.activeColor,
        disabledColor = theme.palette.grey[200],
        fontSize = theme.rate.fontSize
    return {
        root: {
            boxSizing: 'border-box',
            lineHeight: 'unset',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            fontSize: fontSize,
            display: 'inline-block',
            color: activeColor,
            outline: 'none',
        },
        rateStar: {
            margin: 0,
            padding: 0,
            display: 'inline-block',
            marginRight: 8,
            position: 'relative',
            transition: 'all .3s',
            color: 'inherit',
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.1)'
            }
        },
        rateDisabled: {
            cursor: 'default'
        },
        firstRate: {
            position: 'absolute',
            left: '0',
            top: '0',
            width: '50%',
            height: '100%',
            overflow: 'hidden',
            opacity: 0
        },
        secondRate: {
            transition: 'all .3s',
            color: disabledColor
        },
        rateHalf: {
            '&>$firstRate': {
                opacity: 1,
                color: 'inherit'
            },
            '&>$secondRate': {
                opacity: 1
            }
        },
        rateFull: {
            '&>$secondRate': {
                opacity: 1,
                color: 'inherit'
            }
        }
    }
};

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stars: 0,
            factStar: 0 //控制悬浮样式
        }

    }

    static defaultProps = {}

    //是否允许再次点击后清除
    allowClear(num, value) {
        let stars = num
        if (this.props.allowClear) {
            if (num === value) {
                return 0
            } else {
                return stars
            }
        } else if (this.props.allowClear === undefined) {
            if (num === value) {
                return 0
            } else {
                return stars
            }
        } else {
            return stars
        }
    }

    //点击选中
    handleClick(index, num) {
        let stars = index + 1
        //判断是否可以半选
        if (this.props.allowHalf) {
            stars = index + num
        }
        if (this.props.onChange) {
            this.props.onChange(this.allowClear(stars, this.props.value))
        } else {
            this.setState({
                stars: this.allowClear(stars, this.state.stars)
            })
        }
        this.setState({
            factStar: 0
        })
    }

    //鼠标悬浮移入
    onHoverMouse(index, num) {
        let stars = index + 1
        if (this.props.allowHalf) {
            stars = index + num
        }
        this.setState({
            factStar: stars
        })
    }

    //鼠标移出
    onOutMouse() {
        this.setState({
            factStar: 0
        })
    }

    componentDidMount() {
        if (this.props.defaultValue) {
            this.setState({stars: this.props.defaultValue})
        }
    }

    render() {
        const {classes,value,count,style,className,disabled,character} = this.props
        const {stars, factStar} = this.state
        let arr = _.fill(new Array(count || 5), 0);
        let starsNum = value || stars
        if (factStar > 0) {
            starsNum = factStar
        }
        arr.forEach((item, i) => {
            if (i <= starsNum - 1) {
                arr[i] = 1
            } else if (starsNum - i > 0 && starsNum - i < 1) {
                arr[i] = 0.5
            } else {
                arr[i] = 0
            }
        })
        return (
                <ul className={classnames(classes.root,className)} style={style}>
                    {
                        arr.map((item, i) => {
                            let yhStars = classes.rateStar
                            if (item === 0.5) {
                                yhStars = classnames(yhStars,classes.rateHalf)
                            } else if (item === 1) {
                                yhStars = classnames(yhStars,classes.rateFull)
                            }
                            if (disabled) {
                                return (
                                    <li className={classnames(yhStars,classes.rateDisabled)} key={i}>
                                        <div className={classes.firstRate}>{character ||
                                        <Icon type="star" />}</div>
                                        <div className={classes.secondRate}>{character ||
                                        <Icon type="star" />}</div>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className={yhStars} key={i}>
                                        <div className={classes.firstRate}
                                             onMouseOver={() => this.onHoverMouse(i, 0.5)}
                                             onMouseOut={() => this.onOutMouse()}
                                             onClick={() => this.handleClick(i, 0.5)}>{character ||
                                        <Icon type="star" />}</div>
                                        <div className={classes.secondRate}
                                             onMouseOver={() => this.onHoverMouse(i, 1)}
                                             onMouseOut={() => this.onOutMouse()}
                                             onClick={() => this.handleClick(i, 1)}>{character ||
                                        <Icon type="star" />}</div>
                                    </li>
                                )
                            }

                        })
                    }
                </ul>
        )
    }
}

App.propTypes = {
    allowHalf: PropTypes.bool, //是否支持半星
    count: PropTypes.number, //星的总数
    value: PropTypes.number, //选中的value值
    onChange: PropTypes.func, //选择时的回调函数，参数为选择的星数值
    disabled: PropTypes.bool, //是否只读
    allowClear: PropTypes.bool, //是否允许再次点击后清除 默认为true
    character: PropTypes.any, //自定义字符
    style: PropTypes.object, //自定义样式
    className: PropTypes.string //自定义类名
}
export default withStyles(styles, {name: 'MuiRateAnt'})(App);
