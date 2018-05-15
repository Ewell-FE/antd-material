import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CircularProgress} from 'material-ui/Progress';
import Button from 'material-ui/Button';
import classnames from 'classnames'
import ButtonGroup from './button-group'
import omit from 'omit.js';

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
            textTransform: 'capitalize',
            "& .Progress": {
                color: "rgba(0,0,0,.65)",
                position: 'absolute',
                top: '50%',
                left: 10,
                marginTop: -9
            },
            "&.active":{

            }
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
            },
            "& .Progress": {
                color: "#FFFFFF",
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
        },
        wrapper: {
            position: 'relative',
            display: 'inline-block',
            background: 'rgba(255,255,255,0.35)',
            "& .mask": {
                display: 'block',
                position: 'absolute',
                top: '-1px',
                left: '-1px',
                bottom: '-1px',
                right: '-1px',
                background: 'rgba(255,255,255,0.35)',
                content: '""',
                borderRadius: 'inherit',
                zIndex: '1',
                transition: 'opacity .2s'
            }
        },
        loading: {
            "paddingLeft": '36px'
        }
    }
};

@withStyles(styles, {name: 'MuiButtonAnt'})
export default class app extends Component {
    static defaultProps = {
        type: 'Default',
        size: 'default'
    }

    render() {
        const props = this.props
        const {classes} = this.props
        if (props.loading) {
            return (
                <div className={classnames(classes.wrapper,[props.type])}>
                    <div className="mask"></div>
                    <BaseButton {...props}/>
                </div>
            )
        }
        return <BaseButton {...props}/>
    }
}
export class BaseButton extends Component{

    componentDidMount() {
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.button))
    }

    render() {
        const props = this.props
        const {classes} = this.props
        let otherProps = omit(props, ['size', 'type', 'group', 'withRef', 'children', 'classes', 'activeValue', 'loading'])
        return (
            <Button
                ref={ref=>this.button =ref}
                className={classnames(classes.root,classes[props.size],classes[props.type],
                {'active1':(props.group && props.activeValue===props.value),[classes.loading]:props.loading})}
                {...otherProps}
            >
                {props.loading && <CircularProgress size={18} className="Progress"/>}
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
    activeValue: PropTypes.string,
};
app.Group = ButtonGroup