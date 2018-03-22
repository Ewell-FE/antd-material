import React, {Component} from 'react';
import {connect} from 'react-redux'
import Layout from '../component/layout'
import "./style.less"
var cookieStore = require('store')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: false,
        }
    }

    componentWillMount() {
        this.props.dispatch({
            type: 'HOME_FETCH_COMPONENTS_START'
        })
    }

    render() {
        const {components,fetching} = this.props.home
        if (!fetching) {
            return (
                <div id="home">
                    <Layout components={components}></Layout>
                </div>
            )
        }
        return (
            <div id="home" style={{background:"#1B1A34"}}>
                <div className="sk-cube-grid">
                    <div className="sk-cube sk-cube1"></div>
                    <div className="sk-cube sk-cube2"></div>
                    <div className="sk-cube sk-cube3"></div>
                    <div className="sk-cube sk-cube4"></div>
                    <div className="sk-cube sk-cube5"></div>
                    <div className="sk-cube sk-cube6"></div>
                    <div className="sk-cube sk-cube7"></div>
                    <div className="sk-cube sk-cube8"></div>
                    <div className="sk-cube sk-cube9"></div>
                </div>
                <div className="homeLoad">正在启动</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        router: state.router,
        home: state.home
    }
}

export default connect(mapStateToProps)(App)
