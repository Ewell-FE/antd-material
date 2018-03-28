import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import classnames from 'classnames'
import ButtonGroup from './button-group'
const styles = theme => {
    return {
        spacingr: {marginRight: `${theme.spacing.unit / 2}px`},
        spacingl: {marginLeft: `${theme.spacing.unit / 2}px`},
        root: {
            borderRadius: 3,
            background: '#FFFFFF',
            border: '1px solid #d9d9d9',
            color: 'rgba(0, 0, 0, 0.65)',
            padding: '0 15px',
            transition: `all 0.3s ${theme.transitions.easing.easeInOut}`,
            textTransform: 'capitalize'
        },
        Default: {
            '&:hover': {
                background: '#FFFFFF',
                color: theme.button.hover,
                borderColor: theme.button.hover
            },
        },
        Primary: {
            color: '#FFFFFF',
            background: theme.colors.primary,
            border: '0',
            '&:hover': {
                background: theme.button.hover
            },
        },
        Dashed: {
            borderStyle: 'dashed',
            '&:hover': {
                color: theme.button.hover,
                borderColor: theme.button.hover,
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
    }
};


@withStyles(styles, {name: 'MuiButton-ant'})
export default class app extends Component {
    static defaultProps = {
        type: 'Default'
    }

    render() {
        const {classes} = this.props
        return (
            <Button
                style={this.props.style}
                size={this.props.size}
                className={classnames(classes.root,classes[this.props.type])}
                onClick={this.props.onClick}
            >
                {[].concat(this.props.children).map((item, i)=> {
                    if (typeof item === 'object') {
                        return (
                            <span
                                className={classnames({[classes.spacingr]:typeof this.props.children[i+1]==='string'},
                                {[classes.spacingl]:typeof this.props.children[i-1]==='string'})}
                                key={i}>{item}</span>
                        )
                    }
                    return item
                })}
            </Button>
        )
    }
}

app.propTypes = {
    type: PropTypes.oneOf(['Default', 'Primary', 'Dashed', 'Danger']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func
};
app.Group = ButtonGroup