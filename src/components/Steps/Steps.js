import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import StepConnector from '@material-ui/core/StepConnector';
import classnames from 'classnames'


const styles = theme => ({
    root:{
        background:'transparent'
    },
    lineDot:{
        marginLeft:'4px'
    },
    lineSmall:{
        marginLeft:'11px'
    },
    lineLarge:{
        marginLeft:'15px'
    },
});
@withStyles(styles, {name: 'MuiStepsAnt'})
export default class Steps extends React.Component {
    static propTypes = {
        classes: PropTypes.object,
    };

    state = {
        activeStep: 0,
        skipped: new Set(),
    };

    getChildContext(){
        return {
            step:{
                progressDot:this.props.progressDot||null,
                size:this.props.size||'large',
                current:this.props.current,
                status:this.props.status,
                direction:this.props.direction||'horizontal'
            }
        }
    }
    static childContextTypes = {
        step: PropTypes.object,
    };

    render() {
        const { classes,children,current=0,direction='horizontal',size='large'} = this.props;
        let progressDot;
        if(this.props.progressDot&&direction==='horizontal'){
            progressDot=true;
        }else{
            progressDot=false;
        }
        const root=classnames({
            [classes['lineDot']]:this.props.progressDot,
            [classes['lineLarge']]:size==='large'&&!this.props.progressDot,
            [classes['lineSmall']]:size==='small'&&!this.props.progressDot,

        });
        return (
            <Stepper activeStep={current}
                     orientation={direction}
                     classes={{root:classes.root}}
                     alternativeLabel={progressDot}
                     connector={<StepConnector classes={{root}}/>}>
                {children}
            </Stepper>
        );
    }
}
Steps.propTypes = {
    current:PropTypes.number,//指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态
    direction:PropTypes.oneOf(['horizontal', 'vertical']),//标题
    progressDot:PropTypes.any,//点状步骤条，可以设置为一个 function
    size:PropTypes.string,//指定大小，目前支持普通（default）和迷你（small）
    status:PropTypes.oneOf(['wait', 'process','finish','error']),//指定当前步骤的状态，可选 wait process finish error
}
