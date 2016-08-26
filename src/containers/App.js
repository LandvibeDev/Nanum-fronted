import React from 'react';
import { connect } from 'react-redux';
import {Link, browserHistory} from 'react-router'
import {Header, Side, } from '../components';
import { logoutRequest,getStatusRequest } from '../actions/Login'
import Login2 from './Login2'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        // get cookie by name
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        // get loginData from cookie
        let loginData = getCookie('key');


        // if loginData is undefined, do nothing
        if (typeof loginData === "undefined") return;

        // decode base64 & parse json
        loginData = JSON.parse(atob(loginData));
        console.log(loginData);

        // if not logged in, do nothing
        if (!loginData.isLoggedIn) return;

        this.props.getStatusRequest(loginData.token,loginData.username);
    }

    handleLogout(){

        // EMPTIES THE SESSION
        let loginData = {
            isLoggedIn:false,
            username: '',
            token:''
        };

        document.cookie = 'key=' + btoa(JSON.stringify(loginData));
        this.props.logoutRequest();
        window.location.reload();
    }




    render() {

        const loggedin=(
            <div className="based">
                <Header onLogout={this.handleLogout}/>
                <Side/>
                {this.props.children}
            </div>
        );

        return (
            <div>
                {this.props.isLoggedIn ? loggedin  : <Login2/>}

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        isLoggedIn:state.Login.toJS().status.isLoggedIn
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => {
            return dispatch(logoutRequest());
        },
        getStatusRequest:(token,username)=>{
            return dispatch(getStatusRequest(token,username));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
