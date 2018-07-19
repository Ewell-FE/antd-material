import React, {Component} from 'react'
import PropTypes from 'prop-types';
import omit from 'omit.js';
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles';
const styles = theme => {
    return {}
};


@withStyles(styles, {name: 'MuiIconAnt'})
export default class app extends Component {
    render() {
        const props = {...this.props}
        const {type} = this.props
        let otherProps = omit(props, ['type','className'])
        return (
            <i className={classnames(`fa fa-${type}`,props.className)} {...otherProps} aria-hidden="true"></i>
        )
    }
}
app.propTypes = {
    type: PropTypes.string
};