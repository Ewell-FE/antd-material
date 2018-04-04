import React, {Component} from 'react'
import _ from 'lodash'
import {withStyles} from 'material-ui/styles';

let styles = (theme) => {
    let activeColor = theme.colors.warning,
        disabledColor = theme.palette.grey[200]
    return {
        yhRate: {
            boxSizing: 'border-box',
            lineHeight: 'unset',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            fontSize: 24,
            display: 'inline-block',
            color: activeColor,
            outline: 'none',
        },
        yhRateStar: {
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
        yhRateDisabled:{
            cursor: 'default'
        },
        yhFirstRate: {
            position: 'absolute',
            left: '0',
            top: '0',
            width: '50%',
            height: '100%',
            overflow: 'hidden',
            opacity: 0
        },
        yhSecondRate: {
            transition: 'all .3s',
            color: disabledColor
        },
        yhRateHalf: {
            '&>$yhFirstRate': {
                opacity: 1,
                color: 'inherit'
            },
            '&>$yhSecondRate': {
                opacity: 1
            }
        },
        yhRateFull: {
            '&>$yhSecondRate': {
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
            factStar:0 //控制悬浮样式
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
            factStar:0
        })
    }

    //鼠标悬浮移入
    onHoverMouse(index, num) {
        let stars = index + 1
        if (this.props.allowHalf) {
            stars = index + num
        }
        this.setState({
            factStar:stars
        })
    }

    //鼠标移出
    onOutMouse() {
        this.setState({
            factStar:0
        })
    }

    componentDidMount() {
        if (this.props.defaultValue) {
            this.setState({stars: this.props.defaultValue})
        }
    }

    render() {
        const props = this.props
        const {stars,factStar} = this.state
        let arr = _.fill(new Array(props.count || 5), 0);
        let starsNum = props.value || stars
        if(factStar > 0){
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
        let yhRate = props.classes.yhRate,
            yhRateStar = props.classes.yhRateStar,
            yhFirstRate = props.classes.yhFirstRate,
            yhSecondRate = props.classes.yhSecondRate,
            yhRateFull = props.classes.yhRateFull,
            yhRateHalf = props.classes.yhRateHalf,
            yhRateDisabled = props.classes.yhRateDisabled
        return (
            <div className='MuiRate'>
                <ul className={yhRate + ' ' + (props.className || '')} style={props.style || {}}>
                    {
                        arr.map((item, i) => {
                            let yhStars = yhRateStar
                            if (item === 0.5) {
                                yhStars = yhStars + ' ' + yhRateHalf
                            } else if (item === 1) {
                                yhStars = yhStars + ' ' + yhRateFull
                            }
                            if (props.disabled) {
                                return (
                                    <li className={yhStars + ' ' + yhRateDisabled} key={i}>
                                        <div className={yhFirstRate}>{props.character ||
                                        <i className="fa fa-star" aria-hidden="true"></i>}</div>
                                        <div className={yhSecondRate}>{props.character ||
                                        <i className="fa fa-star" aria-hidden="true"></i>}</div>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className={yhStars} key={i}>
                                        <div className={yhFirstRate}
                                             onMouseOver={() => this.onHoverMouse(i, 0.5)}
                                             onMouseOut={() => this.onOutMouse()}
                                             onClick={() => this.handleClick(i, 0.5)}>{props.character ||
                                        <i className="fa fa-star" aria-hidden="true"></i>}</div>
                                        <div className={yhSecondRate}
                                             onMouseOver={() => this.onHoverMouse(i, 1)}
                                             onMouseOut={() => this.onOutMouse()}
                                             onClick={() => this.handleClick(i, 1)}>{props.character ||
                                        <i className="fa fa-star" aria-hidden="true"></i>}</div>
                                    </li>
                                )
                            }

                        })
                    }
                </ul>
            </div>
        )
    }
}

App.propTypes = {}
export default withStyles(styles, {name: 'MuiRate'})(App);
