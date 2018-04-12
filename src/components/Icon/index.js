import React, {Component} from 'react'
import PropTypes from 'prop-types';
import omit from 'omit.js';
import {withStyles} from 'material-ui/styles';
const styles = theme => {
    return {}
};


@withStyles(styles, {name: 'MuiIcon-ant'})
export default class app extends Component {
    render() {
        const props = {...this.props}
        const {type} = this.props
        let otherProps = omit(props, ['type'])
        return (
            <i className={`fa fa-${type}`} {...otherProps} aria-hidden="true"></i>
        )
    }
}
app.propTypes = {
    type: PropTypes.string
};