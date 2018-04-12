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
        disabled: {
            color: "rgba(0,0,0,.25)",
            backgroundColor: "#f5f5f5",
            borderColor: "#d9d9d9",
            cursor: "not-allowed",
            "&:hover": {
                backgroundColor: '#f5f5f5'
            }
        },
        Default: {
            '&:hover,&.active': {
                background: '#FFFFFF',
                color: theme.button.hover,
                borderColor: theme.button.hover
            },
            "&:disabled": {
                color: "rgba(0,0,0,.25)",
                backgroundColor: "#f5f5f5",
                borderColor: "#d9d9d9",
                cursor: "not-allowed"
            }
        },
        Primary: {
            color: '#FFFFFF',
            background: theme.colors.primary,
            border: '0',
            '&:hover,&.active': {
                background: theme.button.hover
            },
            "&:disabled": {
                color: "rgba(0,0,0,.25)",
                backgroundColor: "#f5f5f5",
                borderColor: "#d9d9d9",
                cursor: "not-allowed"
            }
        },
        Dashed: {
            borderStyle: 'dashed',
            '&:hover,&.active': {
                color: theme.button.hover,
                borderColor: theme.button.hover,
                background: '#FFFFFF'
            },
            "&:disabled": {
                color: "rgba(0,0,0,.25)",
                backgroundColor: "#f5f5f5",
                borderColor: "#d9d9d9",
                cursor: "not-allowed"
            }
        },
        Danger: {
            background: '#f5f5f5',
            borderColor: '#d9d9d9',
            color: '#f5222d',
            '&:hover,&.active': {
                color: '#FFFFFF',
                borderColor: '#ff4d4f',
                background: '#ff4d4f'
            },
            "&:disabled": {
                color: "rgba(0,0,0,.25)",
                backgroundColor: "#f5f5f5",
                borderColor: "#d9d9d9",
                cursor: "not-allowed"
            }
        },
        small: {
            minHeight: theme.size.small
        },
        default: {
            minHeight: theme.size.default
        },
        large: {
            minHeight: theme.size.large
        }
    }
};

@withStyles(styles, {name: 'MuiButton-ant'})
export default class app extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        type: 'Default',
        size: 'default'
    }

    render() {
        const props = this.props
        const {classes} = this.props
        return (
            <Button
                style={this.props.style}
                className={classnames(classes.root,classes[props.size],classes[props.type],{'active':(props.group && props.activeValue===props.value)})}
                onClick={this.props.onClick}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                disabled={this.props.disabled}
                value={this.props.value}
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
    size: PropTypes.oneOf(['small', 'default', 'large']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    activeValue: PropTypes.string,
};
app.Group = ButtonGroup