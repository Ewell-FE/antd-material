/**
 * Created by sasha on 2018/5/10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Icon from '../Icon'
import Typography from '@material-ui/core/Typography';
import omit from 'omit.js';
import classnames from 'classnames'

const styles = theme => ({
    root:{
        textAlign:'left'
    },
    large:{
        fontSize:'38px',
        '&$iconContainer':{
            '& svg':{
                fontSize:'32px',
            }
        }
    },
    small:{
        fontSize:'26px',
        '&$iconContainer':{
            '& svg':{
                fontSize:'22px',
            }
        }
    },
    finish:{
        color:'#1890ff',
        '& $dot':{
            background:'#1890ff',
        },
        '&$iconContainer':{
            '& svg':{
                color:'#1890ff',
            }
        }

    },
    process:{
        color:'#1890ff',
        '& $dot':{
            background:'#1890ff',
        },
        '&$iconContainer':{
            '& svg':{
                color:'#1890ff',
            }
        }
    },
    wait:{
        color:'rgba(0,0,0,.25)',
        '& $dot':{
            background:'rgba(0,0,0,.25)',
        },
        '&$iconContainer': {
            '& svg': {
                color: 'rgba(0,0,0,.25)',
            }
        }
    },
    error:{
        color:'#f5222d',
        '& $dot':{
            background:'#f5222d',
        },
        '&$iconContainer': {
            '& svg': {
                color: '#f5222d',
            }
        }
    },
    iconContainer:{

    },
    dot:{
        float: 'left',
        width: '8px',
        height: '8px',
        borderRadius: '100px',
        position: 'relative',
        top: '8px',
        transition: 'all .3s',
    },
    dotActive:{
        width: '10px',
        height: '10px',
    },
    dotPos:{
        marginTop:'-10px'
    }

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
        const stepProps = omit(this.props, [
            'title',
            'description',
            'classes'
        ]);
        const { classes,title,description,icon=false,status,index} = this.props;
        const {size,current,status:inheritStatus,progressDot,direction}=this.context.step;
        let Status;
        if(!status){
            if(stepProps.completed===true){
                Status='finish'
            }else if(stepProps.active===true){
                Status='process'
            }else if(stepProps.disabled===true){
                Status='wait'
            }else if(stepProps.error===true){
                Status='error'
            }
        }else{
            Status=status;
        }
        if(inheritStatus){
            if(index===current){
                Status=inheritStatus;
            }
        }
        const root=classnames({
            [classes['root']]:!(progressDot&&direction==='horizontal'),
            [classes['large']]:size==='large',
            [classes['small']]:size==='small',
            [classes['finish']]:Status==='finish',
            [classes['process']]:Status==='process',
            [classes['wait']]:Status==='wait',
            [classes['error']]:Status==='error'

        });
        const labelProps = {
            classes:{root}
        };
        if(description){
            labelProps.optional = <Typography variant="caption">{description}</Typography>;
        }
        const defaultIcon={
            completed:<Icon type='check-circle-o'/>,
            error:<Icon type='times-circle-o' />,
        }
        const dotClass=classnames(classes.dot,{
            [classes['dotActive']]:Status==='process',
            [classes['dotPos']]:direction==='vertical'

        });
        const dot=<span className={dotClass}/>
        if(icon){
            labelProps.icon=icon
        }else{
            if(Status==='finish') {
                labelProps.icon = defaultIcon.completed
            }else if(Status==='error'){
                labelProps.icon = defaultIcon.error
            }
        }
        if(typeof (progressDot)==='function'){
            labelProps.icon = progressDot(dot,{Status,index})
        }else if(progressDot){
            labelProps.icon = dot
        }
        return (
            <Step key={title} {...stepProps}>
                <StepLabel {...labelProps} className={classes.iconContainer}>{title}</StepLabel>
            </Step>
        );
    }
}


