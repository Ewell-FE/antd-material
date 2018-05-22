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
    line:{
        borderColor: '#1890ff'
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


