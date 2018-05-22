import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {withStyles} from '@material-ui/core/styles';
import debounce from 'lodash/debounce';
import classnames from 'classnames'
import _ from 'lodash'
const styles = theme => {
    return {
        root: {
            '& .slick-track .slick-slide': {
                border: 'none'
            },
            '& .slick-dots': {
                bottom: '2px',
                '& li button:before': {
                    color: '#fff'
                },
                '& li.slick-active button:before': {
                    opacity: 1,
                    color: '#fff'
                }
            },
            '& .slick-vertical .slick-dots': {
                bottom: 'auto',
                width:'30px',
                right: 12,
                top: '50%',
                webkitTransform: 'translateY(-50%)',
                msTransform: 'translateY(-50%)',
                transform: 'translateY(-50%)',
                height: 'auto',
            }
        }
    }
};


@withStyles(styles, {name: 'MuiCarouselAnt'})
export default class App extends Component {
    constructor(props) {
        super(props);
        this.onWindowResized = debounce(this.onWindowResized, 500, {
            leading: false,
        });
    }

    static defaultProps = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prefixCls: 'MuiCarouselAnt',
        arrows:false
    }

    componentDidMount() {
        const {autoplay} = this.props;
        if (autoplay) {
            window.addEventListener('resize', this.onWindowResized);
        }
        this.innerSlider = this.slick && this.slick.innerSlider;
    }

    componentWillUnmount() {
        const {autoplay} = this.props;
        if (autoplay) {
            window.removeEventListener('resize', this.onWindowResized);
            this.onWindowResized.cancel();
        }
    }

    onWindowResized = () => {
        const {autoplay} = this.props;
        if (autoplay && this.slick && this.slick.innerSlider && this.slick.innerSlider.autoPlay) {
            this.slick.innerSlider.autoPlay();
        }
    }

    saveSlick = (node) => {
        this.slick = node;
    }

    next() {
        this.slick.slickNext();
    }

    prev() {
        this.slick.slickPrev();
    }

    goTo(slide) {
        this.slick.slickGoTo(slide);
    }

    render() {
        let props = {
            ...this.props,
        };

        if (props.effect === 'fade') {
            props.fade = true;
        }

        let className = props.prefixCls;
        if (props.vertical) {
            className = `${className} ${className}-vertical`;
        }
        let otherProps = _.omit(props,['classes','style'])
        return (
            <div className={classnames(props.classes.root, className)} style={props.style}>
                <Slider ref={this.saveSlick} {...otherProps}/>
            </div>
        );
    }
}
App.propTypes = {
    style:PropTypes.object, //行内样式
    dots: PropTypes.bool, //是否显示面板指示点
    autoplay: PropTypes.bool, //是否自动切换
    afterChange: PropTypes.func, //切换面板的回调
    beforeChange: PropTypes.func, //切换面板的回调
    slidesToShow: PropTypes.number, //每一次展示多少个
    slidesToScroll: PropTypes.number, //每一次滚动多少个
    speed: PropTypes.number, //滚动的速度 ms
    effect: PropTypes.oneOf(['scrollx', 'fade']), //动画效果函数
    easing: PropTypes.string, //动画效果
    arrows:PropTypes.bool, //是否显示上一张下一张的按钮
};