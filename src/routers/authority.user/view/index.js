import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'
import 'formbase/dist/formbase.min.css'
import 'react-select/dist/react-select.css'
import "./style.less"
import ContentTable from '../component/ContentTable'
import User from '../component/UserComponent'

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>xxxxx</li>
                        <li>xxxxx</li>
                        <li>xxxxx</li>
                        <li>xxxxx</li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(App)
