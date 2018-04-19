import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames'
const styles = theme => ({
    yhAnchorLink:{
        padding: '8px 8px 8px 16px',
        lineHeight: '1',
        textAlign: 'left'
    },
    yhAnchorLinkTitle:{
        display: 'block',
        position: 'relative',
        transition: 'all .3s',
        color: 'rgba(0,0,0,.65)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: '8px',
        textDecoration: 'none',
    },
    yhAnchorLinkActive:{
        color:'#1890ff'
    }
});

@withStyles(styles, {name: 'MuiLinkAnt'})
export default class Link extends Component {
    static contextTypes = {
        anchor: PropTypes.object,
    };
    componentDidMount() {
        this.context.anchor.registerLink(this.props.href);
    }

    componentWillUnmount() {
        this.context.anchor.unregisterLink(this.props.href);
    }

    handleClick = () => {
        this.context.anchor.scrollTo(this.props.href);
    }
    render(){
        const {classes,href,title} = this.props;
        const children=Array.isArray(this.props.children)?this.props.children:[]
        const active = this.context.anchor.activeLink === href;
        const wrapperClassName = classNames(classes['yhAnchorLink'], {
            [classes['yhAnchorLinkActive']]: active,
        });
        const titleClassName = classNames(classes['yhAnchorLinkTitle'], {
            [classes['yhAnchorLinkTitleActive']]: active,
        }, {
            [classes['yhAnchorLinkActive']]: active,
        });
        return(
            <div className={wrapperClassName}>
                <a className={titleClassName} href={href} title={title} onClick={this.handleClick}>{title}</a>
                {
                    children.map(function (child) {
                        return child
                    })
                }
            </div>
        )
    }
}
Link.propTypes = {
    href:PropTypes.string,//锚点链接
    title:PropTypes.any,//文字内容
}



