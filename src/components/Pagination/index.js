import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import LocaleReceiver from '../LocaleProvider/LocaleReceiver'
import Pagination from 'rc-pagination'
import classNames from 'classnames';
import './index.css';
import omit from 'omit.js';

let styles = (theme) => {
    return {
        root: {
            '& .yh-pagination-item:focus,& .yh-pagination-item:hover,& .yh-pagination-item-active': {
                borderColor: theme.colors.primary
            },
            '& .yh-pagination-item:focus a,& .yh-pagination-item:hover a,& .yh-pagination-item-active a': {
                color: theme.colors.primary
            },
            '& .yh-pagination-item-active:focus,& .yh-pagination-item-active:hover,& .yh-pagination-item-active:focus a,& .yh-pagination-item-active:hover a': {
                borderColor: theme.primary[400]
            },
            '.yh-pagination-jump-prev,.yh-pagination-jump-next,': {
                '&:hover:after,&:focus:after': {
                    color: theme.colors.primary
                }
            },
            '& .yh-pagination-prev:hover a,& .yh-pagination-next:hover a': {
                borderColor: theme.primary[400]
            },
            '& .yh-pagination-prev,& .yh-pagination-next': {
                '&:focus .yh-pagination-item-link,&:hover .yh-pagination-item-link': {
                    borderColor: theme.colors.primary,
                    color: theme.colors.primary
                }
            },
            '& .yh-pagination-options-quick-jumper input': {
                '&:hover,&:focus': {
                    borderColor: theme.primary[400]
                },
                '&:focus': {
                    boxShadow: '0 0 0 2px ' + theme.primary[200]
                }
            },
            '& .yh-pagination-simple .yh-pagination-simple-pager input:hover': {
                borderColor: theme.colors.primary,
            }
        }
    }
};


class App extends Component {

    static defaultProps = {
        prefixCls: 'yh-pagination'
    }

    renderPagination = (contextLocale) => {
        const props = this.props
        const {classes} = this.props
        let otherProps = omit(props, ['locale', 'className'])
        return (
            <Pagination className={classNames(classes.root, props.className)} {...otherProps} locale={contextLocale}/>
        )
    }

    render() {
        return (
            <LocaleReceiver
                componentName="Pagination">
                {this.renderPagination}
            </LocaleReceiver>
        )
    }
}

App.propTypes = {}

export default withStyles(styles, {name: 'MuiPaginationAnt'})(App);


