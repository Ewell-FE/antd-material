import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Icon from '@/components/Icon'
import _rcProgress from 'rc-progress'
import ClassNames from 'classnames'
import './style.less'

const statusColorMap = {
    normal: '#108ee9',
    exception: '#ff5500',
    success: '#87d068'
}
const Circle = _rcProgress.Circle

export default class App extends Component {
    static defaultProps = {
        size: 'default',
        percent: 0,
        showInfo: true,
        trailColor: '#f3f3f3',
        type: 'line',
        prefixCls: 'material-progress',
        //  prefixCls: 'yhProgress',
    }

    /*
     遇到符号"-"首字母大写转驼峰
     */
    transformStr = (str)=>{
        var re=/-(\w)/g;
        return str.replace(re,function ($0,$1){
            return $1.toUpperCase();
        });
    }
    render(){
        const {prefixCls,percent,status,format,trailColor,size,successPercent,type,strokeWidth,width,showInfo,gapDegree,gapPosition} =this.props
        var progressStatus = parseInt(successPercent ? successPercent.toString() : percent.toString(), 10) >= 100 && !('status' in this.props) ? 'success' : status || 'normal';
        var progressInfo =  void 0;
        var progress =  void 0;
        var textFormatter = format || function (percentNumber) {
            return percentNumber + '%';
        }
        if (showInfo) {
            var text = void 0;
            var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';
            if(progressStatus === 'exception'){
                //异常
                text =   format ? textFormatter(percent) : <Icon type={'close'+ iconType}/>
            }else if (progressStatus === 'success') {
                //成功
                text =   format ? textFormatter(percent) : <Icon type={'check'+ iconType}/>
            }else {
                text = textFormatter(percent)
            }
            progressInfo = <span className={prefixCls+'-text'}>{text}</span>
        }
        if (type === 'line') {
            var percentStyle = {
                width: percent + '%',
                height: strokeWidth || (size === 'small' ? 6 : 8)
            };
            var successPercentStyle = {
                width: successPercent + '%',
                height: strokeWidth || (size === 'small' ? 6 : 8)
            };
            var successSegment = successPercent !== undefined ? (
                    <div className={prefixCls+'-success-bg'} style = {successPercentStyle}/>
                ) : null;
            progress =(
               <div>
                   <div className={prefixCls+'-outer'}>
                       <div className={prefixCls+'-inner'}>
                           <div className={prefixCls+'-bg'} style = {percentStyle}></div>
                           {successSegment}
                       </div>
                   </div>
                   {progressInfo}
               </div>
            )
        }else if(type === 'circle' || type === 'dashboard'){
            var circleSize = width || 120;
            var circleStyle = {
                width: circleSize,
                height: circleSize,
                fontSize: circleSize * 0.15 + 6
            }
            var circleWidth = strokeWidth || 6;
            var gapPos = gapPosition || (type === 'dashboard' && 'bottom') || 'top';
            var gapDeg = gapDegree || ((type === 'dashboard') && 75);
            progress =(
                   <div  className={prefixCls+'-inner'} style = {circleStyle}>
                       <Circle percent={percent} strokeWidth={circleWidth}
                               trailWidth = {circleWidth} strokeColor = {statusColorMap[progressStatus]}
                               trailColor={trailColor} gapDegree = {gapDeg} gapPosition ={gapPos}>
                       </Circle>
                       {progressInfo}
                   </div>
            )
        }
        return (
            <div className ={ClassNames(
                prefixCls + '-' + ((type === 'dashboard' && 'circle') || type),
                prefixCls + '-status-' + progressStatus,
                showInfo ? prefixCls + '-show-info': '',
                prefixCls + '-' + size
                // classes[this.transformStr(prefixCls + '-' + (type === 'dashboard' && 'circle' || type))],
                // classes[this.transformStr(prefixCls + '-status-' + progressStatus)],
                // showInfo ? classes[this.transformStr(prefixCls + '-show-info')] :'',
                // classes[this.transformStr( prefixCls + '-' + size)]
            )}>
                {progress}
            </div>
        )

    }
}
App.propTypes = {
    status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    size:PropTypes.oneOf(['default', 'small']),
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
    showInfo: PropTypes.bool,
    percent: PropTypes.number,
    width: PropTypes.number,
    strokeWidth:PropTypes.number,
    trailColor: PropTypes.string,
    format: PropTypes.func,
    gapDegree: PropTypes.number,
};