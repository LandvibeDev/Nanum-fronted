/**
 * Created by jgb on 2016-07-26.
 */
import React from 'react';
import { connect } from 'react-redux';
import {Link, browserHistory} from 'react-router'
import { loginRequest } from '../actions/Login';
import LoginCreator from '../components/Main/LoginCreator'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw) {
        return this.props.loginRequests(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    // create session data
                    let loginData = {
                        isLoggedIn: true,
                        username: id
                    };

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));

                    Materialize.toast('Welcome, ' + id + '!', 2000);
                    browserHistory.push('/');
                    return true;
                } else {
                    let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
                    Materialize.toast($toastContent, 2000);
                    return false;
                }
            }
        );
    }

    render() {
        return (
            <div>
                <LoginCreator onLogin={this.handleLogin}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.Login.toJS().login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequests: (id, pw) => {
            return dispatch(loginRequest(id,pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
