import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
// import Tabs from 'material-ui/Tabs';
import Tab from './Tab';
import Tabs from './Tabs';

import Typography from 'material-ui/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
const styles = theme => {
    return {
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }
};

@withStyles(styles, {name: 'MuiTabsAnt'})
export default class MyTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            selectNum: 0
        };
    }

    static defaultProps = {}

    componentDidMount() {
        // this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.button))
    }

    handleChange = (event, value) => {
        this.setState({value, selectNum: value});
        this.props.onChange()
    };


    render() {
        const {classes, theme} = this.props;
        const {value} = this.state;
        return (
            <div className={classes.root}>
                <Tabs value={value} onChange={this.handleChange} selectNum={this.state.selectNum}>
                    <Tab label="Item One">
                        <div>
                            <h2>111</h2>
                        </div>
                    </Tab>
                    <Tab label="Item Two">
                        <div>
                            <h2>222</h2>
                        </div>
                    </Tab>
                    <Tab label="Item Three">
                        <div>
                            <h2>333</h2>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

MyTabs.propTypes = {
    onChange: PropTypes.func,//点击切换事件
};
// app.Group = ButtonGroup