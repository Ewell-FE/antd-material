import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import {CircularProgress} from 'material-ui/Progress';
import {blue} from 'material-ui/colors';
import './style.less'
const styles = theme => ({
    buttonProgress: {
        color: blue[300],
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: -12,
        zIndex: 10000
    },
    tip: {
        color: blue[400],
        position: 'absolute',
        top: '50%',
        textAlign: 'center',
        width: '100%',
        marginTop: 5,
        zIndex: 10000
    }
});
@withStyles(styles)
export default class Spin extends Component {
    render() {
        return (
            <div style={{ position: this.props.wrapperStyle?'static':'relative'}}>
                {this.props.loading &&
                <div className="yh-spin" style={this.props.style}>
                    <CircularProgress size={24} className={this.props.classes.buttonProgress}/>
                    {this.props.tip && <span className={this.props.classes.tip}>{this.props.tip}</span>}
                </div>}
                {this.props.children}
            </div>
        )
    }
}
