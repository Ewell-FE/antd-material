import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import Icon from '@/components/Icon'
import _rcProgress from 'rc-progress'
import ClassNames from 'classnames'
import './style.less'
// const styles = theme => {
//     return {
//         yhProgressLine:{
//             width: '100%',
//             fontSize:'14px',
//             position: 'relative',
//         },
//         yhProgressSmallLine:{
//              fontSize: '12px'
//          },
//         yhProgressSmallLineText:{
//             '$.anticon':{
//                fontSize: '12px'
//             }
//         },
//         yhProgressOuter:{
//          display: 'inline-block',
//          width: '100%',
//          marginRight: 0,
//          paddingRight: 0,
//         },
//         yhProgressShowInfo:{
//             "&.yhProgressOuter":{
//                 paddingRight: "calc(2em + 8px)",
//                 marginRight: "calc(-2em - 8px)"
//             }
//         },
//         yhProgressInner:{
//              display: 'inline-block',
//              width: '100%',
//              backgroundColor: '#f5f5f5',
//              borderRadius: '100px',
//              verticalAlign: 'middle',
//              position: 'relative'
//          },
//         yhProgressCircleTrail:{
//             stroke:'#f5f5f5'
//          },
//         yhProgressCirclePath:{
//             stroke: '#1890ff',
//             animation: 'yhProgressAppear 0.3s'
//          },
//         yhProgressBg:{
//              borderRadius: '100px',
//              backgroundColor:  '#1890ff',
//              transition: 'all .4s cubic-bezier(0.08, 0.82, 0.17, 1)  0s',
//              position: 'relative'
//          },
//         yhProgressSuccessBg:{
//             borderRadius: '100px',
//             transition: 'all .4s cubic-bezier(0.08, 0.82, 0.17, 1)  0s',
//             backgroundColor:'#52c41a',
//             position: 'absolute',
//             top: 0,
//             left: 0
//          },
//         yhProgressText:{
//             wordBreak: 'normal',
//             width: '2em',
//             textAlign: 'left',
//             fontSize: '1em',
//             marginLeft: '8px',
//             verticalAlign: 'middle',
//             display: 'inline-block',
//             color: 'rgba(0, 0, 0, 0.45)',
//             lineHeight: '1',
//             '$.anticon':{
//                 fontSize: '14px'
//             }
//         },
//         yhProgressStatusActive:{
//          "&.yhProgressBg:before":{
//                  content: "",
//                  opacity: 0,
//                  position: 'absolute',
//                  top: 0,
//                  left: 0,
//                  right: 0,
//                  bottom: 0,
//                  background: '#fff',
//                  borderRadius: '10px',
//                  animation: 'yhProgressActive 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite'
//              }
//         },
//         yhProgressStatusException:{
//              "&.yhProgressBg":{
//                  backgroundColor: '#f5222d'
//              },
//              "&.yhProgressText":{
//                  color: '#f5222d'
//              },
//              "&.yhProgressCirclePath":{
//                  stroke: '#f5222d'
//              }
//          },
//         yhProgressStatusSuccess:{
//              "&.yhProgressBg":{
//                  backgroundColor:'#52c41a'
//              },
//              "&.yhProgressBgText":{
//                  color: '#52c41a'
//              },
//              "&.yhProgressBgCirclePath":{
//                  stroke: '#52c41a'
//               }
//          },
//         yhProgressCircleInner:{
//              position: 'relative',
//              lineHeight: 1,
//              backgroundColor: 'transparent'
//          },
//         yhProgressCircleText:{
//              display: 'block',
//              position: 'absolute',
//              width: '100%',
//              textAlign: 'center',
//              lineHeight: '1',
//              top: '50%',
//              transform: 'translateY(-50%)',
//              left: 0,
//              margin: 0,
//              color: 'rgba(0, 0, 0, 0.65)',
//              '&.anticon':{
//                 fontSize: '14 / 12em'
//              }
//          },
//         yhProgressCircleStatusException:{
//              "&.yhProgressText": {
//                color: '#f5222d'
//              }
//          },
//         yhProgressCircleStatusSuccess:{
//              "&.yhProgressText": {
//                  color: '#52c41a'
//              }
//          },
//         "@keyframes yhProgressActive":{
//              "0%":{
//                  opacity: 0.1,
//                  width: 0,
//              },
//              "20%": {
//                  opacity: 0.5,
//                  width: 0,
//              },
//              "100%":{
//                  opacity: 0,
//                  width: '100%',
//              }
//         }
//     }
// }
const statusColorMap = {
    normal: '#108ee9',
    exception: '#ff5500',
    success: '#87d068'
}
const Circle = _rcProgress.Circle
// @withStyles(styles,{name:'MuiProgressAnt'})
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
        const {prefixCls,classes,percent,status,format,trailColor,size,successPercent,type,strokeWidth,width,showInfo,gapDegree,gapPosition} =this.props
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
            var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
            var gapDeg = gapDegree || type === 'dashboard' && 75;
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
                prefixCls + '-' + (type === 'dashboard' && 'circle' || type),
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