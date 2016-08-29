/**
 * Created by jgb on 2016-07-27.
 */
import React from 'react';
import SignUpCreator from './SignUpCreator'
import { connect } from 'react-redux';
import {Link, browserHistory} from 'react-router'
import {signUpRequest} from '../../actions/Login'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp(id, pw,fn,ln,em,bd) {
        return this.props.signUpRequest(id, pw,fn,ln,em,bd).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    Materialize.toast('Success! Please log in.', 2000);
                    browserHistory.push('/');
                    return true;
                } else {
                    /*
                     ERROR CODES:
                     1: BAD USERNAME
                     2: BAD PASSWORD
                     3: USERNAME EXISTS
                     */
                    let errorMessage = [
                        'Invalid Username',
                        'Password is too short',
                        'Username already exists'
                    ];

                    let $toastContent = $('<span style="color: #FFB4BA">' + '</span>');
                    Materialize.toast($toastContent, 2000);
                    return false;
                }
            }
        );
    }

    render() {
        return (
            <div>
                <SignUpCreator onSignUp={this.handleSignUp}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        status: state.Login.toJS().signUp.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUpRequest:()=>{
            return dispatch(signUpRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);