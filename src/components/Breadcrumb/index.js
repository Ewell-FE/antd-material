import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import {cloneElement} from 'react';
import classnames from 'classnames'
import BreadcrumbItem from './BreadcrumbItem';
// import warning from './warning';


const styles = theme => {
    return {
        yhBreadcrumb: {
            color: 'rgba(0, 0, 0, 0.65)',
            fontSize: 12,

            '& a': {
                color: 'rgba(0, 0, 0, 0.65)',
                transition: 'color .3s',
                '&:hover': {
                    color: 'blue'
                }
            },
            '& > span:last-child': {
                fontWeight: 600,
                color: 'rgba(0, 0, 0, 0.65)',

                '& .yhBreadcrumb-separator': {
                    display: 'none'
                }
            },

            '& .yhBreadcrumb-separator': {
                margin: '0 8px',
                color: 'rgba(0, 0, 0, 0.3)'
            },
            '& .yhBreadcrumb-link': {
                '& > .fa + span': {
                    marginLeft: '4px'
                }
            }
        }
    }

};
@withStyles(styles, {name: 'YhuiBreadcrumbAnt'})
export default class Breadcrumb extends Component {
    static defaultProps = {
        separator: '/',
        prefixCls: 'yhBreadcrumb'
    }

    componentDidMount() {

    }

    itemRender = (route, params, routes, paths) => {
        const isLastItem = routes.indexOf(route) === routes.length - 1;
        const name = getBreadcrumbName(route, params);
        return isLastItem
            ? <span>{name}</span>
            : <a href={`#/${paths.join('/')}`}>{name}</a>;
    }

    render() {
        let crumbs;
        const {
            separator, prefixCls, className, routes, classes, params = {},
            children
        } = this.props;
        console.log(className)
        if (routes && routes.length > 0) {

            // const paths = [];
            // crumbs = routes.map((route) => {
            //     route.path = route.path || '';
            //     let path = route.path.replace(/^\//, '');
            //     Object.keys(params).forEach(key => {
            //         path = path.replace(`:${key}`, params[key]);
            //     });
            //     if (path) {
            //         paths.push(path);
            //     }
            //     return (
            //         <div>
            //             111
            //         </div>
            //     );
            // });
        } else if (children) {
            crumbs = React.Children.map(children, (element, index) => {
                console.log(element)
                if (!element) {
                    return element;
                }
                // warning(
                //     element.type && element.type.__ANT_BREADCRUMB_ITEM,
                //     'Breadcrumb only accepts Breadcrumb.Item as it\'s children',
                // );
                return cloneElement(element, {
                    separator,
                    key: index,
                });
            });
        }
        return (
            <div className={classnames(className, prefixCls, classes.yhBreadcrumb)}>
                {crumbs}
            </div>
        );
    }

}

Breadcrumb.propTypes = {
    prefixCls: PropTypes.string,
    routes: PropTypes.array,
    params: PropTypes.object,
    separator: PropTypes.node,
    className: PropTypes.string,

    // size: PropTypes.oneOf(['small', 'default', 'large']),//大小
    // step: PropTypes.number || PropTypes.string,//步长
    // value: PropTypes.string,//当前值
    // disabled: PropTypes.bool,//是否禁止点击
    // min: PropTypes.number,//最小值
    // max: PropTypes.number,//最大值
    // defaultValue: PropTypes.number,//默认值
    // formatter: PropTypes.func,//控制输入框格式
    // parser: PropTypes.func,//控制输入框格式
    // onChange: PropTypes.func,//控制输入框格式
};
Breadcrumb.BreadcrumbItem = BreadcrumbItem
