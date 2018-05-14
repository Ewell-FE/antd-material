import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import RcSlider from 'rc-slider/lib/Slider';
import RcRange from 'rc-slider/lib/Range';
import RcHandle from 'rc-slider/lib/Handle';
import Tooltip from '@/components/Tooltip';

export let SliderValue = 0
const styles = theme => {
    return {
        root: {
            position: 'relative',
            margin: '10px 6px',
            padding: '4px 0',
            height: '12px',
            cursor: 'pointer',

            '& .yhSlider-rail': {
                position: 'absolute',
                width: '100%',
                height: '4px',
                borderRadius: '2px',
                backgroundColor: '#e9e9e9',
                transition: 'background-color 0.3s ease'
            },
            '& .yhSlider-mark': {
                position: 'absolute',
                top: '14px',
                left: '0',
                width: '100%',
                fontSize: '12px',

                '& .yhSlider-mark-text': {
                    position: 'absolute',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: 'rgba(0, 0, 0, 0.43)',

                    '&.yhSlider-mark-text-active': {
                        color: 'rgba(0, 0, 0, 0.65)'
                    }
                }
            },
            '& .yhSlider-track': {
                position: 'absolute',
                height: '4px',
                borderRadius: '4px',
                backgroundColor: '#9fd2f6',
                transition: 'background-color 0.3s ease'
            },
            '& .yhSlider-step': {
                position: 'absolute',
                width: '100%',
                height: '4px',
                background: 'transparent'
            },
            '&.yhSlider-disabled': {
                cursor: 'not-allowed',
                '& .yhSlider-handle,& .yhSlider-dot ': {
                    borderColor: 'rgba(0, 0, 0, 0.25) !important',
                    backgroundColor: '#fff',
                    cursor: 'not-allowed',
                    boxShadow: 'none'
                },
                '& .yhSlider-mark-text,& .yhSlider-dot ': {
                    cursor: 'not-allowed !important'
                },
                '& .yhSlider-track': {
                    backgroundColor: 'rgba(0, 0, 0, 0.25) !important'
                }

            },
            '&.yhSlider-vertical': {
                width: '12px',
                height: '100%',
                margin: '6px 10px',
                padding: '0 4px',

                '& .yhSlider-rail': {
                    height: '100%',
                    width: '4px'
                },
                '& .yhSlider-track': {
                    width: '4px'
                },
                '& .yhSlider-handle': {
                    marginLeft: '-5px',
                    marginBottom: '-7px'
                },
                '& .yhSlider-mark': {
                    top: '0',
                    left: '12px',
                    width: '18px',
                    height: '100%'
                },
                '& .yhSlider-mark-text': {
                    left: '4px',
                    whiteSpace: 'nowrap'
                },
                '& .yhSlider-step': {
                    width: '4px',
                    height: '100%'
                },
                '& .yhSlider-dot': {
                    top: 'auto',
                    left: '2px',
                    marginBottom: '-4px'
                },

            },
            '&.yhSlider-with-marks': {
                marginBottom: '28px'
            },
            '& .yhSlider-dot': {
                position: 'absolute',
                top: '-2px',
                marginLeft: '-4px',
                width: '8px',
                height: '8px',
                border: '2px solid #e9e9e9',
                backgroundColor: '#fff',
                cursor: 'pointer',
                borderRadius: '50%',
                verticalAlign: 'middle',

                '&:first-child': {
                    marginLeft: '-4px'
                },
                '&:last-child': {
                    marginLeft: '-4px'
                },
                '& yhSlider-dot-active': {
                    borderColor: '#9fd2f6'
                }
            },
            '& .yhSlider-handle': {
                position: 'absolute',
                marginLeft: '-7px',
                marginTop: '-5px',
                width: '14px',
                height: '14px',
                cursor: 'pointer',
                borderRadius: '50%',
                border: '2px solid #9fd2f6',
                backgroundColor: '#fff',
                transition: 'border-color 0.3s ease, transform .3s cubic-bezier(0.18, 0.89, 0.32, 1.28)',

                '&:hover': {
                    borderColor: '#108ee9',
                    transform: 'scale(1.2)',
                    transformRrigin: 'center center'
                },
                '&:active': {
                    boxShadow: '0 0 0 2px fadeout(@primary-color, 80%)'
                }
            },


            //鼠标滑过
            '&:hover': {
                '& .yhSlider-rail': {
                    backgroundColor: '#e1e1e1'
                },
                '& .yhSlider-track': {
                    backgroundColor: '#108ee9'
                },
                '& .yhSlider-handle': {
                    backgroundColor: '#fff',
                    borderColor: '#108ee9'
                }
            }

        },

    }
};

@withStyles(styles, {name: 'yhSlider'})
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibles: {},
        };
    }

    static defaultProps = {
        prefixCls: 'yhSlider',
        tooltipPrefixCls: 'ant-tooltip',
        tipFormatter(value) {
            return value.toString();
        },
    }


    componentDidMount() {

    }

    toggleTooltipVisible = (index, visible) => {
        this.setState(({visibles}) => ({
            visibles: {
                ...visibles,
                [index]: visible,
            },
        }));
    }
    handleWithTooltip = ({value, dragging, index, ...restProps}) => {
        const {tooltipPrefixCls, tipFormatter} = this.props;
        const {visibles} = this.state;
        return (
            <Tooltip
                prefixCls={tooltipPrefixCls}
                title={tipFormatter ? tipFormatter(value) : ''}
                visible={tipFormatter && (visibles[index] || dragging)}
                placement="top"
                transitionName="zoom-down"
                key={index}
            >
                <RcHandle
                    {...restProps}
                    value={value}
                    onMouseEnter={() => this.toggleTooltipVisible(index, true)}
                    onMouseLeave={() => this.toggleTooltipVisible(index, false)}
                />
            </Tooltip>
        );
    }
    render() {
        const {className, classes, range, ...restProps} = this.props;
        const sliderClass = classnames(
            classes.root,
            className);
        if (range) {
            return <RcRange {...restProps} handle={this.handleWithTooltip} className={sliderClass}/>;
        }
        return <RcSlider {...restProps} handle={this.handleWithTooltip} className={sliderClass}/>;

    }
}

Slider.propTypes = {
    prefixCls: PropTypes.string,
    tooltipPrefixCls: PropTypes.string,
    range: PropTypes.bool,//双滑块模式
    dots: PropTypes.bool,//是否只能拖拽到刻度上
    min: PropTypes.number,//最小值
    max: PropTypes.number,//最大值
    step: PropTypes.number || null,//步长
    // value: SliderValue,
    // defaultValue: SliderValue,
    included: PropTypes.bool,//marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列
    disabled: PropTypes.bool,//滑块是否为禁止状态
    vertical: PropTypes.bool,//slider垂直方向
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    tipFormatter: PropTypes.func,
    className: PropTypes.string,
    id: PropTypes.string
};
