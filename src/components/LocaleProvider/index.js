import React,{Component} from 'react'
import PropTypes from 'prop-types';
import * as moment from 'moment';

function setMomentLocale(locale){
    if (locale && locale.locale) {
        (moment.default || moment).locale(locale.locale);
    } else {
        (moment.default || moment).locale('zh-cn');
    }
}

export default class LocaleProvider extends Component{
    constructor(props){
        super(props)
        setMomentLocale(props.locale)
    }

    static defaultProps={
        locale: {}
    };

    static childContextTypes = {
        antLocale: PropTypes.object,
    };

    static propTypes = {
        locale: PropTypes.object,
    };

    componentWillReceiveProps(nextProps){
        const { locale } = this.props;
        const nextLocale = nextProps.locale;
        if (locale !== nextLocale) {
          setMomentLocale(nextProps.locale);
        }
    }

    getChildContext(){
        return {
            antLocale: {
                ...this.props.locale,
                exist: true,
            },
        };
    }

    render() {
        return React.Children.only(this.props.children);
    }
}