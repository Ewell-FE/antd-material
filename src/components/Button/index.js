import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import classnames from 'classnames'
import './style.less'
const styles = theme => ({
    root: {
        borderRadius: 3,
        background: '#FFFFFF',
        border: '1px solid #d9d9d9',
        color: 'rgba(0, 0, 0, 0.65)',
        minWidth: '44px',
        minHeight: '30px',
        padding: '0 15px',
        transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
        textTransform: 'capitalize'
    },
    Default: {
        '&:hover': {
            background: '#FFFFFF',
            color: '#40a9ff',
            borderColor: '#40a9ff'
        },
    },
    Primary: {
        color: '#FFFFFF',
        background: '#1890ff',
        border: '0',
        '&:hover': {
            background: '#40a9ff'
        },
    },
    Dashed: {
        borderStyle: 'dashed',
        '&:hover': {
            color: '#40a9ff',
            borderColor: '#40a9ff',
            background: '#FFFFFF'
        },
    },
    Danger: {
        background: '#f5f5f5',
        borderColor: '#d9d9d9',
        color: '#f5222d',
        '&:hover': {
            color: '#FFFFFF',
            borderColor: '#ff4d4f',
            background: '#ff4d4f'
        }
    }
});


@withStyles(styles,{ name: 'MuiButton-yh' })
export default class app extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const {classes} = this.props
        return (
            <Button
                style={this.props.style}
                color={this.props.color}
                className={classnames(classes.root,classes[this.props.type || 'Default'])}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </Button>
        )
    }
}

app.propTypes = {
    type: PropTypes.oneOf(['Default', 'Primary', 'Dashed', 'Danger']),
    onClick: PropTypes.func
};
