import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import classnames from 'classnames'

const styles = theme => {
    return {
        root: {
            "& > button:first-child:not(:last-child)": {
                "borderBottomRightRadius": 0,
                "borderTopRightRadius": 0
            },
            "& > button:last-child:not(:first-child)": {
                "borderBottomLeftRadius": 0,
                "borderTopLeftRadius": 0
            },
            "& > button:not(:last-child):not(:first-child)": {
                "borderRadius": 0
            },
            "& > button:not(:first-child)": {
                "marginLeft": -1
            },
            "& > button:hover,& > button:active": {
                "zIndex": 2
            }
        }
    }
};
@withStyles(styles, {name: 'MuiButtonGroup-ant'})
export default class app extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                {this.props.children}
            </div>
        )
    }
}