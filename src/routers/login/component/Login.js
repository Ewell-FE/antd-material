/**
 * Created by czh on 2016/11/16.
 */
import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import {blue} from 'material-ui/colors';
import {CircularProgress} from 'material-ui/Progress';
import classzz from '@/classes'
import {Input} from '@/components'

import 'react-select/dist/react-select.css'
import 'formbase/dist/formbase.min.css'

const styles = theme => {
    return {
        button: classzz.Button.primary,
        row: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
        },
        buttonProgress: {
            color: blue[200],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -55,
            zIndex: 10000
        }
    }
};
const required = value => (value ? undefined : '必填项')
const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <div><Input {...input} placeholder={label} type={type}/></div>
        <div className="errorRequired">{touched &&
        ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}</div>
    </div>
)
@withStyles(styles)
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMsg: 0,
            Msg: '',
        }
        this.Submit = this.Submit.bind(this)
    }

//提交登录信息
    Submit(values) {
        this.props.loginAction.LoginSubmit({parms: values}, (user)=> {
            if (user.httpCode !== 200) {
                this.setState({Msg: user.msg, showMsg: 1})
            }
        })
    }

    componentDidMount() {
        // on TextField
    }

    render() {
        const {classes} = this.props;
        const {fetching} = this.props.loginState

        return (
            <form onSubmit={this.props.handleSubmit(this.Submit)}>
                <Field className="input" name="userName" label="账户名" type="text" component={renderField}
                       placeholder="用户名" validate={[required]}/>
                <Field className="input" name="userPwd" type="password" label="密码" component={renderField}
                       placeholder="密码" validate={[required]}/>
                <div style={{ position: 'relative'}}>
                    <Button
                        type="submit"
                        disabled={fetching}
                        classes={{root: classes.button}}
                    >
                        {fetching ? '登录中...' : '登录'}
                    </Button>
                    {fetching && <CircularProgress size={24} className={classes.buttonProgress}/>}
                </div>
                <div className="errorMsg">
                    <span className="Msg" style={{display: this.state.showMsg === 1 ? 'block' : 'none'}}>{this.state.Msg}</span>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'loginForm',
    // validate
})(Form)


