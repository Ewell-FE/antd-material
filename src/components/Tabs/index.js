import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import classNames from 'classnames';
import EventListener from 'react-event-listener';
import debounce from 'lodash/debounce';
import ScrollbarSize from 'react-scrollbar-size';
import {getNormalizedScrollLeft, detectScrollType} from 'normalize-scroll-left';
import scroll from 'scroll';
import {withStyles} from 'material-ui/styles';
import TabIndicator from 'material-ui/Tabs/TabIndicator';
import TabScrollButton from 'material-ui/Tabs/TabScrollButton';
import SwipeableViews from 'react-swipeable-views';
// import Button from '@/components/Button'
import Tab from './Tab'

export const styles = theme => {
    return (
        {
            root: {
                overflow: 'hidden',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            flexHead: {
                display: 'flex',
                // minHeight: 50,
                // borderBottom: '1px solid #ebedf0'
            },
            flexBorder: {
                display: 'flex',
                borderBottom: '1px solid #ebedf0',
                position: 'relative'
            },
            flexContainer: {
                padding: '20px',
                textAlign: 'left'
            },

            scroller: {
                position: 'relative',
                display: 'inline-block',
                flex: '1 1 auto',
                whiteSpace: 'nowrap',
                borderTop: 'none',
            },
            fixed: {
                overflowX: 'hidden',
                width: '100%',
            },
            scrollable: {
                overflowX: 'scroll',
            },
            centered: {
                justifyContent: 'center',
            },
            scrollButtons: {},
            scrollButtonsAuto: {
                [theme.breakpoints.down('xs')]: {
                    display: 'none',
                },
            },
            indicator: {
                background: theme.colors.primary,
            },
            indicatorStyle: {},
            extra: {
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)'
            }
        }
    )
};

class Tabs extends React.Component {
    state = {
        indicatorStyle: {},
        scrollerStyle: {
            marginBottom: 0,
        },
        showLeftScroll: false,
        showRightScroll: false,
        mounted: false,
    };

    componentDidMount() {
        this.setState({mounted: true});
        this.updateIndicatorState(this.props);
        this.updateScrollButtonState();

        if (this.props.action) {
            this.props.action({
                updateIndicator: this.handleResize,
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        this.updateScrollButtonState();
        this.updateIndicatorState(this.props);

        if (this.state.indicatorStyle !== prevState.indicatorStyle) {
            this.scrollSelectedIntoView();
        }
    }

    componentWillUnmount() {
        this.handleResize.cancel();
        this.handleTabsScroll.cancel();
    }

    getConditionalElements = () => {
        const {
            classes,
            scrollable,
            scrollButtons,
            TabScrollButton: TabScrollButtonProp,
            theme,
        } = this.props;
        const conditionalElements = {};
        conditionalElements.scrollbarSizeListener = scrollable ? (
            <ScrollbarSize
                onLoad={this.handleScrollbarSizeChange}
                onChange={this.handleScrollbarSizeChange}
            />
        ) : null;

        const showScrollButtons = scrollable && (scrollButtons === 'auto' || scrollButtons === 'on');

        conditionalElements.scrollButtonLeft = showScrollButtons ? (
            <TabScrollButtonProp
                direction={theme && theme.direction === 'rtl' ? 'right' : 'left'}
                onClick={this.handleLeftScrollClick}
                visible={this.state.showLeftScroll}
                className={classNames(classes.scrollButtons, {
                    [classes.scrollButtonsAuto]: scrollButtons === 'auto',
                })}
            />
        ) : null;

        conditionalElements.scrollButtonRight = showScrollButtons ? (
            <TabScrollButtonProp
                direction={theme && theme.direction === 'rtl' ? 'left' : 'right'}
                onClick={this.handleRightScrollClick}
                visible={this.state.showRightScroll}
                className={classNames(classes.scrollButtons, {
                    [classes.scrollButtonsAuto]: scrollButtons === 'auto',
                })}
            />
        ) : null;

        return conditionalElements;
    };

    getTabsMeta = (value, direction) => {
        let tabsMeta;
        if (this.tabs) {
            const rect = this.tabs.getBoundingClientRect();
            // create a new object with ClientRect class props + scrollLeft
            tabsMeta = {
                clientWidth: this.tabs ? this.tabs.clientWidth : 0,
                scrollLeft: this.tabs ? this.tabs.scrollLeft : 0,
                scrollLeftNormalized: this.tabs ? getNormalizedScrollLeft(this.tabs, direction) : 0,
                scrollWidth: this.tabs ? this.tabs.scrollWidth : 0,
                left: rect.left,
                right: rect.right,
            };
        }

        let tabMeta;
        if (this.tabs && value !== false) {
            const children = this.tabs.children[0].children;

            if (children.length > 0) {
                const tab = children[this.valueToIndex[value]];
                warning(tab, `Material-UI: the value provided \`${value}\` is invalid`);
                tabMeta = tab ? tab.getBoundingClientRect() : null;
            }
        }
        return {tabsMeta, tabMeta};
    };

    tabs = undefined;
    // valueToIndex: { [key: any]: any } = {};

    handleResize = debounce(() => {
        this.updateIndicatorState(this.props);
        this.updateScrollButtonState();
    }, 166); // Corresponds to 10 frames at 60 Hz.

    handleLeftScrollClick = () => {
        if (this.tabs) {
            this.moveTabsScroll(-this.tabs.clientWidth);
        }
    };

    handleRightScrollClick = () => {
        if (this.tabs) {
            this.moveTabsScroll(this.tabs.clientWidth);
        }
    };

    handleScrollbarSizeChange = ({scrollbarHeight}) => {
        this.setState({
            scrollerStyle: {
                marginBottom: -scrollbarHeight,
            },
        });
    };

    handleTabsScroll = debounce(() => {
        this.updateScrollButtonState();
    }, 166); // Corresponds to 10 frames at 60 Hz.

    moveTabsScroll = delta => {
        const {theme} = this.props;

        if (this.tabs) {
            const multiplier = theme.direction === 'rtl' ? -1 : 1;
            const nextScrollLeft = this.tabs.scrollLeft + delta * multiplier;
            // Fix for Edge
            const invert = theme.direction === 'rtl' && detectScrollType() === 'reverse' ? -1 : 1;
            scroll.left(this.tabs, invert * nextScrollLeft);
        }
    };

    updateIndicatorState(props) {
        const {theme, value} = props;

        const {tabsMeta, tabMeta} = this.getTabsMeta(value, theme.direction);
        let left = 0;

        if (tabMeta && tabsMeta) {
            const correction =
                theme.direction === 'rtl'
                    ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth
                    : tabsMeta.scrollLeft;
            left = tabMeta.left - tabsMeta.left + correction;
        }

        const indicatorStyle = {
            left,
            // May be wrong until the font is loaded.
            width: tabMeta ? tabMeta.width : 0,
        };

        if (
            (indicatorStyle.left !== this.state.indicatorStyle.left ||
                indicatorStyle.width !== this.state.indicatorStyle.width) &&
            !Number.isNaN(indicatorStyle.left) &&
            !Number.isNaN(indicatorStyle.width)
        ) {
            this.setState({indicatorStyle});
        }
    }

    scrollSelectedIntoView = () => {
        const {theme, value} = this.props;
        const {tabsMeta, tabMeta} = this.getTabsMeta(value, theme.direction);

        if (!tabMeta || !tabsMeta) {
            return;
        }

        if (tabMeta.left < tabsMeta.left) {
            // left side of button is out of view
            const nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
            scroll.left(this.tabs, nextScrollLeft);
        } else if (tabMeta.right > tabsMeta.right) {
            // right side of button is out of view
            const nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
            scroll.left(this.tabs, nextScrollLeft);
        }
    };

    updateScrollButtonState = () => {
        const {scrollable, scrollButtons, theme} = this.props;

        if (this.tabs && scrollable && scrollButtons !== 'off') {
            const {scrollWidth, clientWidth} = this.tabs;
            const scrollLeft = getNormalizedScrollLeft(this.tabs, theme.direction);

            const showLeftScroll =
                theme.direction === 'rtl' ? scrollWidth > clientWidth + scrollLeft : scrollLeft > 0;

            const showRightScroll =
                theme.direction === 'rtl' ? scrollLeft > 0 : scrollWidth > clientWidth + scrollLeft;

            if (
                showLeftScroll !== this.state.showLeftScroll ||
                showRightScroll !== this.state.showRightScroll
            ) {
                this.setState({showLeftScroll, showRightScroll});
            }
        }
    };

    handleChangeIndex = () => {

    }

    render() {
        const {
            action, size,centered, children: childrenProp, classes, className: classNameProp, fullWidth, indicatorColor, onChange,
            scrollable, scrollButtons, TabScrollButton: TabScrollButtonProp, textColor, theme, value, tabBarExtraContent: tabBarExtraContentProp, ...other
        } = this.props;
        warning(
            !centered || !scrollable,
            'Material-UI: you can not use the `centered={true}` and `scrollable={true}` properties ' +
            'at the same time on a `Tabs` component.',
        );

        const className = classNames(classes.root, classNameProp);
        const scrollerClassName = classNames(classes.scroller, {
            [classes.fixed]: !scrollable,
            [classes.scrollable]: scrollable,
        });
        const flexHeadClassName = classNames(classes.flexHead, {
            [classes.centered]: centered && !scrollable,
        });
        const flexContainerClassName = classNames(classes.flexContainer);

        const indicator = (
            <TabIndicator
                style={this.state.indicatorStyle}
                className={classes.indicator}
                color={indicatorColor}
            />
        );

        this.valueToIndex = {};
        let childIndex = 0;
        const children = React.Children.map(childrenProp, child => {
            if (!React.isValidElement(child)) {
                return null;
            }

            const childValue = child.props.value || childIndex;
            this.valueToIndex[childValue] = childIndex;
            const selected = childValue === value;
            childIndex += 1;
            return React.cloneElement(child, {
                fullWidth,
                indicator: selected && !this.state.mounted && indicator,
                selected,
                onChange,
                textColor,
                value: childValue,
                size
            });
        });

        const extra = React.Children.map(tabBarExtraContentProp, child => {
            console.log(child)
            if (!React.isValidElement(child)) {
                return null;
            }
            const childValue = child.props.childred;
            return React.cloneElement(child, {
                // fullWidth,
                // indicator: selected && !this.state.mounted && indicator,
                // selected,
                // onChange,
                // textColor,
                value: childValue,
            });
        });
        const conditionalElements = this.getConditionalElements();
        return (
            <div className={className} {...other}>
                <EventListener target="window" onResize={this.handleResize}/>
                {conditionalElements.scrollbarSizeListener}
                <div className={classes.flexBorder}>
                    {conditionalElements.scrollButtonLeft}
                    <div
                        className={scrollerClassName}
                        style={this.state.scrollerStyle}
                        ref={node => {
                            this.tabs = node;
                        }}
                        role="tablist"
                        onScroll={this.handleTabsScroll}
                    >
                        <div className={flexHeadClassName}>{children}</div>
                        {this.state.mounted && indicator}
                    </div>
                    {conditionalElements.scrollButtonRight}
                    {/*附加内容按钮*/}
                    <div className={classes.extra}>
                        {extra}
                    </div>
                </div>
                <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={this.props.selectnum}
                                onChangeIndex={this.props.handleChange}>
                    {
                        children.map((item, i) => {
                            return (
                                <div dir={theme.direction} key={i}
                                     className={flexContainerClassName}>{item.props.children}</div>
                            )
                        })
                    }

                </SwipeableViews>
                {/*<div className={flexContainerClassName}>{children[this.props.selectnum].props.children}</div>*/}
            </div>
        );
    }
}

Tabs.propTypes = {
    action: PropTypes.func,
    centered: PropTypes.bool,
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    indicatorColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf(['secondary', 'primary']),
    ]),
    onChange: PropTypes.func,
    scrollable: PropTypes.bool,
    scrollButtons: PropTypes.oneOf(['auto', 'on', 'off']),
    TabScrollButton: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
    theme: PropTypes.object.isRequired,
    value: PropTypes.any,
    selectNum: PropTypes.number,
    dir: PropTypes.string,
    tabBarExtraContent: PropTypes.node,//是否有附加内容
};

Tabs.defaultProps = {
    centered: false,
    fullWidth: false,
    indicatorColor: 'secondary',
    scrollable: false,
    scrollButtons: 'auto',
    TabScrollButton,
    textColor: 'inherit',
};
Tabs.Tab = Tab

export default withStyles(styles, {name: 'yHTabs', withTheme: true})(Tabs);
