/*
 Created by xphlenx on 2018/4/13 16:42
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames'


const styles = theme => {
    return {
        root: {
            position: 'relative',
            paddingBottom: '20px',
            border: '1px solid transparent',
            marginTop: '-1px',
            //最后一个(不包含幽灵节点)
            '&.lastItem': {
                //线的样式
                '& .TimelineItemLine': {
                    borderLeft: '2px dotted #e8e8e8',
                    display: 'none',
                },
                //内容样式
                '& .TimelineItemContent': {
                    minHeight: '48px'
                },
                //根据是否有幽灵节点,判断最后一条线是否显示
                '&.lastItemWithPending .TimelineItemLine': {
                    display: 'block',
                }
            },
            /************** 普通样式************************/
            '& .dotPoint': {
                borderColor:theme.colors.primary,
                '&.dotPoint-normal': {
                    width: 10,
                    height: 10,
                    backgroundColor: '#fff',
                    borderRadius: 100,
                    border:`2px solid ${theme.colors.primary}`,
                    margin: "0 auto",
                    marginTop:'6px'
                },
            },
            '& .TimelineItemContent': {
                padding: '0 0 0 20px',
                position: 'relative',
                top: 0,
            },
            '& .TimelineItemLine': {
                position: 'absolute',
                left: 9,
                top: 7,
                height: '100%',
                borderLeft: '2px solid #e8e8e8',
            },
            '& .dot': {
                position: 'absolute',
                left: 0,
                top: 0,
                width: '20px',
                height: '20px',
                textAlign: 'center'
            }
            /************** 普通样式************************/

        },
    }
};
@withStyles(styles, {name: 'MuiTimelineItemAnt'})
export default class app extends Component {
    render() {
        const {classes} = this.props
        var prop = this.props

        var dot = this.props.dot || <div/>
        var normal = !this.props.dot
        var dotClass = dot.props.className || ''
        var dotStyle = dot.props.style || {}
        return (
            <div className={classnames(classes.root, classes[prop.type],prop.className,
                //对普通节点设置类
                //此处将幽灵节点除外,计算是否是最后一个节点,
                prop.last ?  prop.pending ? 'lastItemWithPending lastItem' : 'lastItem' :'',
                //对幽灵节点设置类
                prop.pendingNode ? 'lastItem' : ''
                )} type={prop.type}
                 style={{...this.props.style,}}>
                <div className="TimelineItemLine"/>
                <div className={'dot'}>
                    {
                        React.cloneElement(
                            dot,
                            {
                                className: classnames('dotPoint', normal ? 'dotPoint-normal' : '', dotClass),
                                style: normal ? {borderColor: prop.color, ...dotStyle} : {
                                    width: '18px',
                                    height: '18px', ...dotStyle
                                }
                            },
                        )
                    }
                </div>

                <div className={classnames('TimelineItemContent')}>{this.props.children}</div>

            </div>
        )
    }
}

app.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    dot: PropTypes.object,
    last: PropTypes.bool,
    pending: PropTypes.bool,
    pendingNode: PropTypes.bool,

};