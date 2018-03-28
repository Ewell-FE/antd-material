import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
const styles = theme => {
    return {}
};


@withStyles(styles, {name: 'MuiIcon-ant'})
export default class app extends Component {
    render() {
        const {type} = this.props
        return (
            <i className={`fa fa-${type}`} aria-hidden="true"></i>
        )
    }
}
app.propTypes = {
    type: PropTypes.string
};