import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import style from '@/components/Style'
import Icon from '@/components/Icon'
import Dropdown from '@/components/Dropdown'
import Avatar from '@/components/Avatar'
import myTheme from '@/theme'
import * as colors from '@material-ui/core/colors';
import _ from 'lodash'
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Tooltip from '@material-ui/core/Tooltip';


import {
    Route,
    Redirect,
    NavLink
} from 'react-router-dom';
import  * as demo from '../examples'
const drawerWidth = 240;

const styles = theme => ({
    '@global body': {
        fontFamily: 'Monospaced Number,Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif'
    },
    root: {
        flexGrow: 1
    },
    appFrame: {
        minHeight: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        "&::-webkit-scrollbar": {
            width: '4px',
            height: '4px',
            background: 'rgba(0, 0, 0, 0.26)'
        },
        "&::-webkit-scrollbar-thumb": {
            background: theme.primary[200]
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px 0 20px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        position: 'relative',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
    'github': {
        fontSize: '26px',
        color: '#FFFFFF',
        margin: '0 20px'
    },
    'eyedropper': {
        fontSize: '22px',
        cursor: 'pointer'
    },
    'selectColors': {
        width: '240px',
        display: 'flex',
        flexWrap: 'wrap',
        "& > div": {
            width: '60px',
        }
    }
});

class PersistentDrawer extends React.Component {
    state = {
        open: true,
        anchor: 'left',
        primary: style.theme.colors.primary
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    changeTheme(color) {
        this.setState({
            primary: colors[color][600]
        })
        this.props.changeTheme(style.use('theme', _.merge(myTheme, {
            overrides: {MuiAppBar: {colorPrimary: {backgroundColor: colors[color][600]}}}
        }), {primaryColor: colors[color]}))
        this.colorsBox.handleClose()
    }

    render() {
        const {classes, theme, components} = this.props;
        const {anchor, open} = this.state;
        const menu = (
            <div className={classes.selectColors}>
                {Object.keys(colors).map((item, i)=> {
                    return (
                        <span key={i} style={{cursor:'pointer'}} onClick={()=>{this.changeTheme(item)}}>
                            <Avatar style={{ backgroundColor: colors[item][500] }} size="large"></Avatar>
                        </span>
                    )
                })}
            </div>
        );
        const drawer = (
            <Drawer
                variant="persistent"
                anchor={anchor}
                open={open}
                classes={{
          paper: classes.drawerPaper,
        }}
            >
                <div className={classes.drawerHeader}>
                    <p style={{width:165}}>antd-Material<br/>v0.1.0</p>
                    <IconButton onClick={this.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <div>
                    <Divider />
                    <List style={{paddingLeft:'20px'}}>
                        <li><NavLink
                            to="/material/docs/start.html"
                            style={{color:'#314659'}}
                            activeStyle={{
                                color: this.state.primary
                            }}
                        >Ant Design of Material</NavLink></li>
                    </List>
                </div>
                {Object.keys(components).map((title, i)=> {
                    return (
                        <div key={i}>
                            <Divider />
                            <List style={{paddingLeft:'20px',color:' rgba(0, 0, 0, 0.45)'}}>
                                <li key={i}>{title}</li>
                            </List>
                            {components[title].map((item, j)=> {
                                return (
                                    <div key={j}>
                                        <Divider />
                                        <List style={{paddingLeft:'40px'}}>
                                            <li><NavLink
                                                to={"/material/docs/"+item.name+".html"}
                                                style={{color:'#314659'}}
                                                activeStyle={{
                                                            color: this.state.primary
                                                        }}
                                            >{item.name + "  " + item.desc}</NavLink></li>
                                        </List>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}

            </Drawer>
        );

        let before = null;
        let after = null;

        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
                    >
                        <Toolbar disableGutters={!open}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                Ant Design of Material
                            </Typography>
                            <span style={{ flex:1,textAlign:'right'}}>
                                <Dropdown overlay={menu} withRef={(colorsBox)=>{this.colorsBox = colorsBox}}>
                                    <span>
                                      <Tooltip id="tooltip-icon" title="Select theme">
                                        <Icon className={classes.eyedropper}
                                              type="paint-brush"/>
                                      </Tooltip>
                                    </span>
                                </Dropdown>
                                <a href="https://github.com/Ewell-FE/antd-material" className={classes.github}>
                                    <Tooltip id="tooltip-icon" title="Github repository">
                                        <Icon type="github"/>
                                    </Tooltip>
                                </a>
                            </span>
                        </Toolbar>
                    </AppBar>
                    {before}
                    <main id="main"
                          className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
                    >
                        <div className={classes.drawerHeader}/>
                        <Route exact path="/material/docs"
                               component={() => <Redirect to="/material/docs/start.html"/>}/>
                        <Route exact path={"/material/docs/start.html"} component={demo['start']}/>
                        {Object.values(components).map(function (arr) {
                            return (
                                arr.map((item, i)=> {
                                    return (
                                        <Route key={i} exact path={"/material/docs/"+item.name+'.html'}
                                               component={demo[item.name]}/>
                                    )
                                })
                            )
                        })}
                    </main>
                    {after}
                </div>
            </div>
        );
    }
}

PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true, name: 'MuimenuAnt'})(PersistentDrawer);