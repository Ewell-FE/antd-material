import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Menu, {SubMenu, Item as MenuItem, ItemGroup as MenuItemGroup, Divider} from 'rc-menu';
import {withStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import omit from 'omit.js'
import animate from 'css-animation'
import classnames from 'classnames'
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
        this.state = {
            inlineCollapsed: props.inlineCollapsed,
            openKeys: props.defaultOpenKeys
        }
    }

    static defaultProps = {
        theme: 'light',
        prefixCls: 'yh-menu',
        mode: "vertical"
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                inlineCollapsed: nextProps.inlineCollapsed,
                openKeys: []
            })
        }
    }

    onOpenChange = (openKeys) => {
        this.setState({
            openKeys
        });
    };

    render() {
        const props = this.props
        const ohterProps = omit(props, ['openAnimation', 'classes', 'mode'])
        let mode = this.state.inlineCollapsed ? 'vertical' : props.mode
        let openAnimation = props.openAnimation || {
                'horizontal': 'slide-up',
                'vertical': 'zoom',
                'inline': animation,
            }[mode]
        return (
            <Menu openAnimation={openAnimation}
                  onOpenChange={this.onOpenChange}
                  openKeys={this.state.openKeys}
                  mode={mode}
                  className={classnames(`${props.prefixCls}-${props.theme}`,{[`${props.prefixCls}-${props.mode}-collapsed`]:props.inlineCollapsed})}
                {...ohterProps}
            >
                {React.Children.map(this.props.children, (child, i)=> {
                    return React.cloneElement(child, {
                        popupClassName: `${props.prefixCls}-${props.theme}`
                    })
                })}
            </Menu>
        )
    }
}

MenuComponent.propTypes = {
    mode: PropTypes.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
    activeKey: PropTypes.object, //当前选中的menu的key
    defaultActiveFirst: PropTypes.bool, //默认选中第一个
    multiple: PropTypes.bool, //是否允许多选 默认 false
    selectable: PropTypes.bool, //允许选择menu item项 默认 true
    selectedKeys: PropTypes.array, //selected keys of items
    defaultSelectedKeys: PropTypes.array, //initial selected keys of items
    openKeys: PropTypes.array, //open keys of SubMenuItem
    defaultOpenKeys: PropTypes.array, //initial open keys of SubMenuItem
    onSelect: PropTypes.func, //called when select a menu item
    onClick: PropTypes.func, //called when click a menu item
    onOpenChange: PropTypes.func, //called when open/close sub menu
    onDeselect: PropTypes.func, //called when deselect a menu item. only called when allow multiple
    triggerSubMenuAction: PropTypes.oneOf(['hover', 'click']),//which action can trigger submenu open/close
    openAnimation: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]) // animate when sub menu open or close. see rc-animate for object type.
}

MenuComponent.SubMenu = SubMenu
MenuComponent.Item = MenuItem
MenuComponent.Divider = Divider
MenuComponent.MenuItemGroup = MenuItemGroup

export default MenuComponent