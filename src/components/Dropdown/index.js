import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Manager, Target, Popper} from 'react-popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
    popperClose: {
        pointerEvents: 'none',
    },
});

@withStyles(styles, {name: 'MuiDropdownAnt'})
export default class app extends Component {

    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this)
        this.state = {
            open: false
        }
    }

    static defaultProps = {
        placement: 'bottom-start',
        trigger: 'click'
    }

    componentDidMount() {
        this.props.withRef && this.props.withRef(this)
    }

    handleToggle = () => {
        this.setState({open: !this.state.open});
    }

    handleClose = event => {
        if (event && this.target1.contains(event.target)) {
            return;
        }
        this.setState({open: false});
    }

    onMouseEnter = event => {
        clearTimeout(this.timeout)
        this.setState({open: true});
    }

    clearTimeout = () => {
        clearTimeout(this.timeout)
    }

    onMouseLeave = event => {
        if (this.props.trigger === 'hover') {
            this.timeout = setTimeout(()=> {
                this.setState({open: false});
            }, 250)
        }
    }

    render() {
        const props = this.props;
        const {classes} = props
        const {open} = this.state;
        const eventType = {'click': 'onClick', 'hover': 'onMouseEnter'}
        const eventFunc = {'click': this.handleToggle, 'hover': this.onMouseEnter}
        return (
            <Manager style={{display:'inline-block'}}>
                <Target>
                    <div ref={node =>{this.target1 = node}}>
                        {React.Children.map(props.children, (child, i)=> {
                            return React.cloneElement(child, {
                                "style": {margin: 0},
                                "aria-owns": open ? 'menu-list-grow' : null,
                                "aria-haspopup": "true",
                                [eventType[props.trigger]]: eventFunc[props.trigger],
                                "onMouseLeave": this.onMouseLeave
                            })
                        })}
                    </div>
                </Target>
                <Popper
                    placement={props.placement}
                    eventsEnabled={open}
                    className={classNames({[classes.popperClose]: !open})}
                >
                    <div onMouseEnter={this.clearTimeout}
                         onMouseLeave={this.onMouseLeave}>
                        <ClickAwayListener onClickAway={this.handleClose}>
                            <Grow in={open} style={{transformOrigin: '0 0 0'}}>
                                <Paper>
                                    {props.overlay}
                                </Paper>
                            </Grow>
                        </ClickAwayListener>
                    </div>
                </Popper>
            </Manager>
        )
    }
}
app.propTypes = {
    overlay: PropTypes.any,
    trigger: PropTypes.oneOf(['click', 'hover'])
};