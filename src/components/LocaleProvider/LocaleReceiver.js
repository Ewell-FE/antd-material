import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LocaleDefault from '../LocaleProvider/default'

export default class LocaleReceiver extends Component {
    static contextTypes = {
        antLocale: PropTypes.object
    }

    getLocale = () => {
        const { componentName, defaultLocale } = this.props
        const { antLocale } = this.context
        const localeFromContext = antLocale && antLocale[componentName]
        return {
            ...(typeof defaultLocale === 'undefined' ? LocaleDefault[componentName] : defaultLocale ),
            ...(localeFromContext || {})
        }
    }

    getLocaleCode = () => {
        const { antLocale } = this.context
        const localeCode = antLocale && antLocale.locale
        if (antLocale && antLocale.exist && !localeCode) {
            return 'zh-cn'
        }
        return localeCode
    }

    render() {
        return this.props.children(this.getLocale(), this.getLocaleCode())
    }
}