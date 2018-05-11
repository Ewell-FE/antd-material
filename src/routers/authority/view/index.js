import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Layout from '../component/layout'
import "./style.less"
import 'nprogress/nprogress.css'
import NProgress from 'nprogress/nprogress.js'
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
        const {components, fetching} = this.props.home
        if(!fetching){
            NProgress.done();
        }else{
            NProgress.set(0.4);
        }
        if (!fetching) {
            return (
                <div id="home">
                    <Layout changeTheme={this.context.changeTheme} components={components}></Layout>
                </div>
            )
        }
        return (
            <div id="home" style={{background:"#EAEBED"}}>
                <div className="wrapp">
                    <div className="k-line k-line11-1"></div>
                    <div className="k-line k-line11-2"></div>
                    <div className="k-line k-line11-3"></div>
                    <div className="k-line k-line11-4"></div>
                    <div className="k-line k-line11-5"></div>
                </div>
                <div className="homeLoad">正在启动</div>
            </div>
        );
    }
}
App.contextTypes = {
    changeTheme: PropTypes.func
};
function mapStateToProps(state) {
    return {
        router: state.router,
        home: state.home
    }
}

export default connect(mapStateToProps)(App)
