import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// import classnames from 'classnames'
import Tag from './index'

const styles = theme => {
    return {

    }
};

@withStyles(styles, {name: 'MuiCheckableTag-ant'})
export default class app extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const {checked} = this.props
        return (
            <Tag checked={checked} onChange={this.props.onChange}>{this.props.children}</Tag>
        )
    }
}

app.propTypes = {
    checked: PropTypes.bool,//是否选中
    onChange: PropTypes.func,//操作选中状态
};
