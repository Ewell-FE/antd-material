import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Manager, Target, Popper} from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import {MenuItem, MenuList} from 'material-ui/Menu';
import {withStyles} from 'material-ui/styles';

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
        this.state = {
            open: false
        }
    }

    static defaultProps = {
        placement: 'bottom-start'
    }

    handleToggle = () => {
        this.setState({open: !this.state.open});
    }

    handleClose = event => {
        if (this.target1.contains(event.target)) {
            return;
        }

        this.setState({open: false});
    }

    render() {
        const props = this.props;
        const {classes} = props
        const {open} = this.state;
        return (
            <Manager style={{display:'inline-block'}}>
                <Target>
                    <div
                        ref={node => {
                        this.target1 = node;
                      }}
                    >
                        {React.Children.map(props.children, (child, i)=> {
                            return React.cloneElement(child, {
                                style: {margin: 0},
                                "aria-owns": open ? 'menu-list-grow' : null,
                                "aria-haspopup": "true",
                                onClick: this.handleToggle
                            })
                        })}
                    </div>
                            </Target>
                            <Popper
                            placement={props.placement}
                            eventsEnabled={open}
                            className={classNames({[classes.popperClose]: !open})}
                            >
                            <ClickAwayListener onClickAway={this.handleClose}>
                            <Grow in={open} id="menu-list-grow" style={{transformOrigin: '0 0 0'}}>
                            <Paper>
                                <MenuList role="menu">
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                </MenuList>
                            </Paper>
                            </Grow>
                            </ClickAwayListener>
                            </Popper>
                            </Manager>
                            )
                        }
                        }
                        app.propTypes = {

                    };