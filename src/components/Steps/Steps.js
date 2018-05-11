import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Stepper from 'material-ui/Stepper';
import StepConnector from 'material-ui/Stepper/StepConnector';


const styles = theme => ({
    root:{
        background:'transparent'
    },
    line:{
        borderColor: theme.palette.type === 'light' ? '#1890ff' :'#1890ff'
    }
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
            }
        }
    }
    static childContextTypes = {
        step: PropTypes.object,
    };

    render() {
        const { classes,children,current=0,direction='horizontal'} = this.props;

        return (
            <Stepper activeStep={current} orientation={direction} classes={{root:classes.root}} connector={<StepConnector classes={{line:classes.line}}/>}>
                {children}
            </Stepper>
        );
    }
}


