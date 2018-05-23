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
        color:theme.colors.primary,
        '& $dot':{
            background:theme.colors.primary,
        },
        '&$iconContainer':{
            '& svg':{
                color:theme.colors.primary,
            }
        }

    },
    process:{
        color:theme.colors.primary,
        '& $dot':{
            background:theme.colors.primary,
        },
        '&$iconContainer':{
            '& svg':{
                color:theme.colors.primary,
            }
        }
    },
    wait:{
        color:theme.colors.normal,
        '& $dot':{
            background:theme.colors.normal,
        },
        '&$iconContainer': {
            '& svg': {
                color: theme.colors.normal,
            }
        }
    },
    error:{
        color:theme.colors.error,
        '& $dot':{
            background:theme.colors.error,
        },
        '&$iconContainer': {
            '& svg': {
                color: theme.colors.error,
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

step.propTypes = {
    title:PropTypes.string,//标题
    description:PropTypes.any,//步骤的详情描述，可选
    icon:PropTypes.any,//步骤图标的类型，可选
    status:PropTypes.oneOf(['wait', 'process','finish','error']),//指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error
}
