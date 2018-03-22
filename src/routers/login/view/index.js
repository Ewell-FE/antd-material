import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as loginAction from '../actions';
import Login from '../component/Login'
import "./style.less"
class App extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount() {
        document.title = '信息平台管理系统'
    }

    render() {
        return (
            <div id="login">
                <div className='header'>
                    <div className='logo'></div>
                </div>
                <div className='login-bg'></div>
                <div className='content'>
                    <div className='login-form'>
                        <h3>信息平台管理系统</h3>
                        <Login  loginAction = {this.props.loginAction}
                                loginState = {this.props.login}>
                        </Login>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        login:state.login
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
