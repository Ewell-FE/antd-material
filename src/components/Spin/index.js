import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import {CircularProgress} from 'material-ui/Progress';
import {blue} from 'material-ui/colors';
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
        transform: 'translate(-50%, -50%)',
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
    render() {
        let ProgressProps = {
            size: 24,
            className: this.props.classes.buttonProgress
        }
        Object.assign(ProgressProps, this.props.CircularProgress)
        return (
            <div style={{ position: this.props.wrapperStyle?'static':'relative'}}>
                {this.props.loading &&
                <div className={this.props.classes.root} style={this.props.style}>
                    <CircularProgress {...ProgressProps}/>
                    {this.props.tip && <span className={this.props.classes.tip}>{this.props.tip}</span>}
                </div>}
                {this.props.children}
            </div>
        )
    }
}
