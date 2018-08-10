/**
 * Created by sasha on 2018/8/5.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../Button';

export default class ActionButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }
    componentDidMount() {
        if (this.props.autoFocus) {
            const $this = ReactDOM.findDOMNode(this);
            this.timeoutId = setTimeout(() => $this.focus());
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }
    onClick = () => {
        const { actionFn, closeModal } = this.props;
        if (actionFn) {
            let ret;
            if (actionFn.length) {
                ret = actionFn(closeModal);
            } else {
                ret = actionFn();
                if (!ret) {
                    closeModal();
                }
            }
            if (ret && ret.then) {
                this.setState({ loading: true });
                ret.then((...args) => {
                    // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
                    // this.setState({ loading: false });
                    closeModal(...args);
                }, () => {
                    // See: https://github.com/ant-design/ant-design/issues/6183
                    this.setState({ loading: false });
                });
            }
        } else {
            closeModal();
        }
    }

    render() {
        const { type, children,style={} } = this.props;
        const loading = this.state.loading;
        return (
            <Button type={type} style={{...style}} onClick={this.onClick} loading={loading}>
                {children}
            </Button>
        );
    }
}
