import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import classnames from 'classnames'
import omit from 'omit.js'
const styles = theme => ({
    root: {
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: "4",
        background: "#fff",
        opacity: "0.7",
        transition: "transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)"
    },
    buttonProgress: {
        color: theme.colors.primary,
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 10000
    },
    tip: {
        color: theme.colors.primary,
        position: 'absolute',
        top: '50%',
        left: 0,
        textAlign: 'center',
        width: '100%',
        marginTop: 15,
        zIndex: 10000
    },
});
@withStyles(styles, {name: 'MuiSpinAnt'})
export default class Spin extends Component {

    static defaultProps = {
        size: 24
    }

    render() {
        const props = this.props
        const otherProps = omit(props, ['classes', 'style', 'loading', 'tip'])
        let stylus = Object.assign({}, props.style, {
            marginTop: -props.size / 2,
            marginLeft: -props.size / 2
        })

        return (
            <div style={{ position: this.props.wrapperStyle?'static':'relative'}}>
                {props.loading &&
                <div className={props.classes.root} style={props.style}>
                    <CircularProgress
                        className={classnames(props.classes.buttonProgress,props.className)}
                        style={stylus}
                        {...otherProps}
                    />
                    {props.tip && <span className={props.classes.tip}>{props.tip}</span>}
                </div>}
                {props.children}
            </div>
        )
    }
}

Spin.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    loading: PropTypes.bool
};