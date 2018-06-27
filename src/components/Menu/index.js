import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Menu, {SubMenu, Item as MenuItem, ItemGroup as MenuItemGroup, Divider} from 'rc-menu';
import {withStyles} from '@material-ui/core/styles';
import omit from 'omit.js'
import animate from 'css-animation'
import './style.css';

const styles = theme=> {
    return {
        root: {}
    }
}

const animation = {
    enter(node, done) {
        let height;
        return animate(node, 'yh-menu-collapse', {
            start() {
                height = node.offsetHeight;
                node.style.height = 0;
            },
            active() {
                node.style.height = `${height}px`;
            },
            end() {
                node.style.height = '';
                done();
            },
        });
    },

    appear() {
        return this.enter.apply(this, arguments);
    },

    leave(node, done) {
        return animate(node, 'yh-menu-collapse', {
            start() {
                node.style.height = `${node.offsetHeight}px`;
            },
            active() {
                node.style.height = 0;
            },
            end() {
                node.style.height = '';
                done();
            },
        });
    },
};

@withStyles(styles, {name: 'MuiMenu-ant'})
class MenuComponent extends Component {
    constructor(props) {
        super(props);

    }

    static defaultProps = {
        prefixCls: 'yh-menu',
        mode: "vertical"
    }

    render() {
        const props = this.props
        const ohterProps = omit(props, ['openAnimation'])
        let openAnimation = props.openAnimation || {
                'horizontal': 'slide-up',
                'vertical': 'zoom',
                'inline': animation,
            }[props.mode]
        console.log(openAnimation)
        return (
            <Menu openAnimation={openAnimation} {...ohterProps}>
                {this.props.children}
            </Menu>
        )
    }
}

Menu.propTypes = {}

MenuComponent.SubMenu = SubMenu
MenuComponent.Item = MenuItem
MenuComponent.Divider = Divider
MenuComponent.MenuItemGroup = MenuItemGroup

export default MenuComponent