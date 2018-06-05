import * as React from 'react';
import Upload from './Upload';


export default class Dragger extends React.Component {
    render() {
        const { props } = this;
        return <Upload {...props} type="drag" style={{ ...props.style, height: props.height }}/>;
    }
}
