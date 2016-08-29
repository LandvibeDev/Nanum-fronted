/**
 * Created by jgb on 2016-07-26.
 */
import React from 'react';
import { connect } from 'react-redux';
import {Link, browserHistory} from 'react-router'
import { loginRequest,userInfo,signUpClicked } from '../../actions/Login';
import LoginCreator from './LoginCreator'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw) {
        return this.props.loginRequests(id, pw).then(
            () => {
                console.log(this.props.status);
                if(this.props.status === "SUCCESS") {
                    // create session data
                    let loginData = {
                        isLoggedIn: true,
                        username: id,
                        token:this.props.token
                    };

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                    this.props.loginInfo(this.props.token).then(()=>{
                        //Materialize.toast('Welcome, ' + this.props.currentUser + '!', 2000);
                    });

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
                <LoginCreator onLogin={this.handleLogin} signUpClick={this.props.signUpClicked}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        status: state.Login.toJS().login.status,
        token:state.Login.toJS().status.token,
        currentUser:state.Login.toJS().status.currentUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequests: (id, pw) => {
            return dispatch(loginRequest(id,pw));
        },
        loginInfo:(token) =>{
            return dispatch(userInfo(token));
        },
        signUpClicked:()=>{
            return dispatch(signUpClicked());
    }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
