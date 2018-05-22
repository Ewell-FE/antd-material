import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import omit from 'omit.js';
import Input from './index'
import Button from '../Button'
import Icon from '../Icon'

const styles = theme => {
    return {
        root: {
            position: 'relative',
            display: 'inline-block',
            "& >button": {
                position: 'absolute',
                right: 0,
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                minWidth: 'initial',
                margin: 0
            }
        }
    }
};
@withStyles(styles, {name: 'MuiSearchAnt'})
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
        let otherProps = omit(props, ['onSearch', 'enterButton', 'style'])
        otherProps = Object.assign({}, {
            onPressEnter: ()=> {
                this.search()
            },
            suffix: <Icon onClick={()=>{this.search()}} type="search"/>,
            withRef: ref=> {
                this.inputref = ref
            }
        }, otherProps)
        let style = props.style || {}
        if (props.enterButton) {
            delete otherProps.suffix
            let otherStyle = omit(props.style, ['width', 'height'])
            return (
                <span className={classes.root} style={{width:style.width,height:style.height}}>
                    <Input {...otherProps} style={otherStyle}/>
                    <Button onClick={()=>{this.search()}} size={props.size} type="Primary">
                        {typeof props.enterButton === 'string' ? props.enterButton : <Icon type="search"/>}
                    </Button>
                </span>
            )
        }
        return (
            <Input {...otherProps} style={style}/>
        )
    }
}
Search.propTypes = {
    size: PropTypes.string
};