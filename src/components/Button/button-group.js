import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

function nearButton(target) {
    if (target.nodeName.toUpperCase() === 'BUTTON') {
        return target
    }
    return nearButton(target.parentNode)
}
const styles = theme => {
    return {
        root: {
            "& > button:first-child:not(:last-child)": {
                "borderBottomRightRadius": 0,
                "borderTopRightRadius": 0
            },
            "& > button:last-child:not(:first-child)": {
                "borderBottomLeftRadius": 0,
                "borderTopLeftRadius": 0
            },
            "& > button:not(:last-child):not(:first-child)": {
                "borderRadius": 0
            },
            "& > button:not(:first-child)": {
                "marginLeft": -1
            },
            "& > button:hover,& > button:active,& > button.active": {
                "zIndex": 2
            }
        }
    }
};
@withStyles(styles, {name: 'MuiButtonGroup-ant'})
export default class app extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        let val = nearButton(e.target).getAttribute('value')
        if (val !== this.state.value) {
            this.props.onChange(val)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                {React.Children.map(this.props.children, (child, i)=> {
                    return React.cloneElement(child, {
                        group: true,
                        size: this.props.size,
                        activeValue: this.state.value,
                        onClick: (e)=> {
                            this.onChange(e)
                        }
                    })
                })}
            </div>
        )
    }
}
app.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
};