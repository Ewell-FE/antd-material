import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Redirect, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {
    Route
} from 'react-router-dom';
import {CssBaseline} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles';
import style from '@/components/Style'
import Mytheme from './theme'
import HOME from './routers/authority'
import main from './routers/main'
import pageError from './routers/PageError'
import './style.less'

class App extends Component {
    constructor(props) {
        super(props);
        this.changeTheme = this.changeTheme.bind(this)
        this.state = {
            theme: style.use('theme', Mytheme)
        }
    }

    changeTheme(theme) {
        this.setState({theme: theme})
    }

    getChildContext() {
        return {changeTheme: this.changeTheme};
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <MuiThemeProvider theme={this.state.theme}>
                    <CssBaseline />
                    <Switch>
                        <Route exact path="/material/main" component={main}/>
                        <Route exact path="/material/pageError" component={pageError}/>
                        <Route path="/material/docs" component={HOME}/>
                        <Route exact path="/material" component={()=><Redirect to="/material/main"/>}/>
                        <Route exact path="/" component={()=><Redirect to="/material"/>}/>
                    </Switch>
                </MuiThemeProvider>
            </ConnectedRouter>
        );
    }
}

App.childContextTypes = {
    changeTheme: PropTypes.func
};

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps)(App);
