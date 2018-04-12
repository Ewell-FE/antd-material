import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import omit from 'omit.js';
import './style.less'
import Input from './index'
import Button from '../Button'
import Icon from '../Icon'
import classnames from 'classnames'

const styles = theme => {
    return {
        root: {
            position: 'relative',
            "& >button": {
                position: 'absolute',
                right: 0,
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0
            }
        }
    }
};
@withStyles(styles, {name: 'MuiSearch-ant'})
export default class Search extends Component {
    static defaultProps = {
        size: 'default'
    }

    search() {
        this.props.onSearch && this.props.onSearch(this.inputref.value)
    }

    render() {
        let props = {...this.props}
        let {classes} = props
        let otherProps = omit(props, ['onSearch', 'enterButton'])
        otherProps = Object.assign({}, {
            onPressEnter: ()=> {
                this.search()
            },
            suffix: <Icon onClick={()=>{this.search()}} type="search"/>,
            withRef: ref=> {
                this.inputref = ref
            }
        }, otherProps)
        if (props.enterButton) {
            delete otherProps.suffix
            return (
                <span className={classes.root}>
                    <Input {...otherProps}/>
                    <Button onClick={this.search()} size={props.size} type="Primary"><Icon type="search"/></Button>
                </span>
            )
        }
        return (
            <Input {...otherProps}/>
        )
    }
}
Search.propTypes = {
    size: PropTypes.string,
    enterButton: PropTypes.bool
};