import React, {Component} from 'react'
import {connect} from 'react-redux'

import "./style.less"

class App extends Component {

    render() {
        return (
            <div>
                <h1>
                    <font>Material Design of React</font>
                    <a href="https://github.com/Ewell-FE/material-design"
                       target="_blank" rel="nofollow me noopener noreferrer">github</a>
                </h1>
                <p><font>这里是Material Design 的React 实现，开发和服务于企业级后台产品。</font></p>
                <div className="pic-plus">
                    <img alt="material" width="550" style={{position: "relative",left: -200}}
                         src={require('@/assets/material-ui-logo.svg')}/>
                    <img alt="react" width="150" style={{position: "relative",left: -300}}
                         src={require('@/assets/react.svg')}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        role: state.role
    };
}
export default connect(mapStateToProps)(App)
