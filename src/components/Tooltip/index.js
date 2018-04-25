import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Tooltip from 'material-ui/Tooltip';
import {withStyles} from 'material-ui/styles';
import _ from 'lodash'

const styles = theme => {
    let bgc = theme.tooltip.background
    return {
        tooltip: {
            backgroundColor: bgc,
            borderRadius: '4px',
            minHeight: 32,
            padding: '6px 8px',
            position:'relative',
            color:theme.tooltip.color,
            fontSize:theme.tooltip.fontSize,
            "&:after": {
                content: '""',
                width: 0,
                height: 0,
                position: 'absolute',
                borderColor: 'transparent',
                borderStyle: 'solid',
                opacity:0.9
            }
        },
        tooltipPlacementLeft:{
            "&:after": {
                top: '50%',
                marginTop: '-3px',
                right: -6,
                borderWidth: '6px 0 6px 6px',
                borderLeftColor:bgc,
            }
        },
        tooltipPlacementLeftEnd:{
            "&:after": {
                bottom:'25%',
                right: -6,
                borderWidth: '6px 0 6px 6px',
                borderLeftColor:bgc,
            }
        },
        tooltipPlacementLeftStart:{
            "&:after": {
                top: '25%',
                right: -6,
                borderWidth: '6px 0 6px 6px',
                borderLeftColor:bgc,
            }
        },
        tooltipPlacementRightStart: {
            "&:after": {
                top: '25%',
                left: -5,
                borderWidth: '6px 6px 6px 0',
                borderRightColor:bgc,
            }
        },
        tooltipPlacementRight: {
            "&:after": {
                top: '50%',
                marginTop: '-3px',
                left: -5,
                borderWidth: '6px 6px 6px 0',
                borderRightColor:bgc,
            }
        },
        tooltipPlacementRightEnd: {
            "&:after": {
                bottom: '25%',
                left: -5,
                borderWidth: '6px 6px 6px 0',
                borderRightColor:bgc,
            }
        },
        tooltipPlacementTopStart: {
            "&:after": {
                bottom:-5,
                left:'25%',
                borderTopColor:bgc,
                borderWidth: '6px 6px 0 6px',
            }
        },
        tooltipPlacementTop: {
            '&:after': {
                bottom: -5,
                marginLeft: '-3px',
                left: '50%',
                borderTopColor: bgc,
                borderWidth: '6px 6px 0 6px',
            }
        },
        tooltipPlacementTopEnd: {
            "&:after": {
                bottom:-5,
                right:'25%',
                borderTopColor:bgc,
                borderWidth: '6px 6px 0 6px',
            }
        },
        tooltipPlacementBottomStart: {
            "&:after": {
                top: -5,
                left:'25%',
                borderWidth: '0 6px 6px',
                borderBottomColor: bgc,
            }
        },
        tooltipPlacementBottom: {
            "&:after": {
                top: -5,
                marginLeft: '-3px',
                left: '50%',
                borderWidth: '0 6px 6px',
                borderBottomColor: bgc,
            }
        },
        tooltipPlacementBottomEnd: {
            "&:after": {
                top: -5,
                right:'25%',
                borderWidth: '0 6px 6px',
                borderBottomColor:bgc,
            }
        }
    }
};

@withStyles(styles, {name: 'MuiTooltipAnt'})
export default class app extends Component {
    static defaultProps = {
        placement: 'bottom'
    }

    render() {
        const props = this.props
        const {classes, placement} = props
        let tootipClass = 'tooltipPlacement' + _.startCase(placement.split('-')[0])
        let tootipPlace = 'tooltipPlacement' + _.join(_.startCase(placement).split(' '),'')
        return (
            <Tooltip {...props}
                     classes={{tooltip: classes.tooltip, [`${tootipClass}`]: classes[`${tootipPlace}`]}}>
            </Tooltip>
        )
    }
}
app.propTypes = {
    title: PropTypes.node.isRequired,
};