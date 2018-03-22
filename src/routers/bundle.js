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

    checkAuth(href){
        var menuArr = window.USERAUTH
        for (var i = 0; i < menuArr.length; i++) {
            let path ="/"+ menuArr[i].permission.replace("authority","authority_home").replace(/_/g,"/");
            if (path.indexOf(href) === 0 && path.indexOf(':id') === -1) {//不带id
                return true
            } else {
                var reg = new RegExp(path.replace(":id", "(.+)?"))
                if (path !== '' && path.indexOf(':id') !== -1) {//地址不为空且带Id
                    if (reg.test(href)) {
                        return true
                    }
                }
            }
        }
    }

    async componentDidMount() {
        //登录成功后 判断权限才有意义
        if (window.USERAUTH) {
            var router = this.context.store.getState().router
            if(!this.checkAuth(router.location.pathname)){
                //
            }
        }
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