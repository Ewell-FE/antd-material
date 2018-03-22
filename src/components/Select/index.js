import React, {Component} from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './style.less'
import classnames from 'classnames'
export default class Select extends Component {

    static defaultProps = {

    }

    render() {
        const props = this.props
        return <input type="text" {...props} className={className}/>
    }
}
