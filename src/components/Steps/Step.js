/**
 * Created by sasha on 2018/5/10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import { Step, StepLabel,StepIcon } from 'material-ui/Stepper';
import SvgIcon from 'material-ui/SvgIcon';
import Icon from '../Icon'

import Typography from 'material-ui/Typography';
import omit from 'omit.js';

const styles = theme => ({
    root:{
        textAlign:'left'
    },
    iconContainer:{
        fontSize:'26px',
        color:'#1890ff',
    },

});

@withStyles(styles, {name: 'MuiStepAnt'})
export default class step extends React.Component {
    static propTypes = {
        classes: PropTypes.object,
    };
    static contextTypes = {
        step: PropTypes.object,
    };
    render() {
        const { classes,title,description,icon=false,status} = this.props;
        let defaultStatus;
        const stepProps = omit(this.props, [
            'title',
            'description'
        ]);
        console.log(stepProps)
        if(stepProps.completed===true){
            defaultStatus='finish'
        }else if(stepProps.active===true){
            defaultStatus='process'
        }else if(stepProps.disabled===true){
            defaultStatus='wait'
        }
        const props = {};
        const labelProps = {
            classes:{
                root:classes.root,
                iconContainer:classes.iconContainer
            }
        };
        if(description){
            labelProps.optional = <Typography variant="caption">{description}</Typography>;
        }
        const defaultIcon={
            completed:<Icon type='check-circle'/>,
            error:<Icon type='arrow-up' />,
        }
        if(icon){
            labelProps.icon=icon
        }else{
            if(stepProps.completed===true) {
                labelProps.icon = defaultIcon.completed
            }
        }

        return (
            <Step key={title} {...props} {...stepProps}>
                <StepLabel {...labelProps}>{title}</StepLabel>
            </Step>
        );
    }
}


