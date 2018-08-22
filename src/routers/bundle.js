import {Component} from 'react'
import PropTypes from 'prop-types';
import {injectReducer} from '../store/reducers'
import {injectAsyncSagas} from '../store/sagas'

class Bundle extends Component {
    constructor() {
        super()
        this.state = {
            mod: null
        }
    }

    static contextTypes = {
        store: PropTypes.object
    }



    async componentDidMount() {
        const modules = await this.props.load()
        const {reducers, sagas, view} = modules.default
        injectReducer(this.context.store, reducers)
        injectAsyncSagas(this.context.store, sagas)
        this.setState({
            mod: view
        })
    }

    render() {
        return (
            this.state.mod ? this.props.children(this.state.mod) : null
        )
    }
}

export default Bundle