import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {
    Route
} from 'react-router-dom';
import {CssBaseline} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles';
import theme from './theme'
import HOME from './routers/authority'
import login from './routers/login'
import pageError from './routers/PageError'
var cookieStore = require('store')

const checkLogin = (PageComp)=>{
    var isLogin = false
    if(cookieStore.get('userInfo')){
        isLogin = true
    }
    return(
        isLogin ? (
            <PageComp />
        ) : (
            <Redirect to="/authority/login"/>
        )
    )
}
class App extends Component {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Switch>
                        <Route exact path="/material/login" component={login}/>
                        <Route exact path="/material/pageError" component={pageError}/>
                        <Route  path="/material/docs" render={()=>checkLogin(HOME)}/>
                        <Route exact path="/material" component={()=><Redirect to="/material/docs"/>}/>
                        <Route exact path="/" component={()=><Redirect to="/material"/>}/>
                    </Switch>
                </MuiThemeProvider>
            </ConnectedRouter>
        );
    }
}
function mapStateToProps(state) {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps)(App);
